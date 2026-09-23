export type StackChip = {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

export const STACK_CHIPS: StackChip[] = [
  { label: "Next.js", slug: "nextdotjs", bg: "#1f1f1f", fg: "#ffffff" },
  { label: "Java", slug: "openjdk", bg: "#ED8B00", fg: "#ffffff" },
  { label: "Spring", slug: "spring", bg: "#6DB33F", fg: "#ffffff" },
  { label: "Docker", slug: "docker", bg: "#2496ED", fg: "#ffffff" },
  {
    label: "AWS",
    slug: "amazonaws",
    bg: "#232F3E",
    fg: "#FF9900",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  { label: "GCP", slug: "googlecloud", bg: "#4285F4", fg: "#ffffff" },
  { label: "Kubernetes", slug: "kubernetes", bg: "#326CE5", fg: "#ffffff" },
  { label: "GitHub", slug: "github", bg: "#181717", fg: "#ffffff" },
  { label: "Kafka", slug: "apachekafka", bg: "#231F20", fg: "#ffffff" },
  {
    label: "DynamoDB",
    slug: "amazondynamodb",
    bg: "#4053D6",
    fg: "#ffffff",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/dynamodb/dynamodb-plain.svg",
  },
  { label: "MySQL", slug: "mysql", bg: "#4479A1", fg: "#ffffff" },
  { label: "PostgreSQL", slug: "postgresql", bg: "#336791", fg: "#ffffff" },
];
