"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { enUS } from "./en-US";
import { ptBR } from "./pt-BR";
import type { Dictionary, Locale } from "./types";

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "pt-BR";

const DICTIONARIES: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
  "en-US": enUS,
};

type Listener = () => void;

const listeners = new Set<Listener>();
let currentLocale: Locale = DEFAULT_LOCALE;
let hydratedFromStorage = false;

function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en-US";
}

function writeLocale(next: Locale): void {
  currentLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Locale {
  if (!hydratedFromStorage) {
    hydratedFromStorage = true;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) currentLocale = stored;
    } catch {}
  }
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const toggleLocale = useCallback(() => {
    writeLocale(currentLocale === "pt-BR" ? "en-US" : "pt-BR");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: DICTIONARIES[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
