export type CertificateEntry = {
  name: string;
  institution: string;
  iconUrl?: string;
};

const AWS_ICON_URL = "/amazonwebservices-original-wordmark.svg";
const GCP_ICON_URL = "/gcp-svgrepo-com.svg";

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
    iconUrl: GCP_ICON_URL,
  },
];
