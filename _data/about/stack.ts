export type StackChip = {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

export const STACK_CHIPS: StackChip[] = [
  {
    label: "Figma",
    slug: "figma",
    bg: "#1f1f1f",
    fg: "#ffffff",
    iconUrl: "https://svgl.app/library/figma.svg",
  },
  { label: "React", slug: "react", bg: "#1FB6CB", fg: "#ffffff" },
  { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
  { label: "TypeScript", slug: "typescript", bg: "#2F74C0", fg: "#ffffff" },
  { label: "shadcn/ui", slug: "shadcnui", bg: "#5b54ff", fg: "#ffffff" },
  { label: "Cursor", slug: "cursor", bg: "#111111", fg: "#ffffff" },
  { label: "GSAP", slug: "gsap", bg: "#0AE448", fg: "#0a0a0a" },
  { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
  { label: "Vercel", slug: "vercel", bg: "#0a0a0a", fg: "#ffffff" },
  { label: "Tailwind CSS", slug: "tailwindcss", bg: "#2BBCF5", fg: "#ffffff" },
];
