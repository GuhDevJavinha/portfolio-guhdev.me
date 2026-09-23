export type CertificateEntry = {
  name: string;
  institution: string;
  iconUrl?: string;
};

const AWS_ICON_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";

export const CERTIFICATE_ENTRIES: CertificateEntry[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    institution: "AWS",
    iconUrl: AWS_ICON_URL,
  },
  {
    name: "AWS re/Start",
    institution: "AWS",
    iconUrl: AWS_ICON_URL,
  },
  {
    name: "AWS Agentic AI Demonstrated",
    institution: "AWS",
    iconUrl: AWS_ICON_URL,
  },
  {
    name: "Google Cloud Computing Foundations Certificate",
    institution: "Google",
    iconUrl: "https://cdn.simpleicons.org/google",
  },
];
