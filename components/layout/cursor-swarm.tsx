"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore, type ReactNode } from "react";

import SwarmCursor from "@/components/SwarmCursor";

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function CursorSwarm(): ReactNode {
  const mounted = useIsMounted();
  const { resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";
  const color = isDark ? "#ffffff" : "#0a0a0a";

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    >
      <SwarmCursor
        color={color}
        accentColor={color}
        count={8}
        size={5}
        speed={2.5}
        spread={100}
        wander={0.25}
        trail={0.75}
        opacity={0.45}
        scatterOnClick
      />
    </div>
  );
}
