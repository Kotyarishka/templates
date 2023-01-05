// Generated using "yarn build-templates"

export const meta = {
  name: "Certificates Dumper",
  description:
    "Dumps Let's Encrypt certificates of a specified domain to .pem and .key files which Traefik stores in acme.json.",
  instructions:
    "This template will dump SSL certificates to a specified folder, so you can use",
  changeLog: [{ date: "2023-01-05", description: "first release" }],
  links: [
    {
      label: "Documentation",
      url: "https://github.com/kereis/traefik-certs-dumper#usage",
    },
    { label: "Github", url: "https://github.com/kereis/traefik-certs-dumper" },
  ],
  contributors: [
    { name: "Kotyarishka", url: "https://github.com/kotyarishka" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "certificatesLocation",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "certdumper",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "humenius/traefik-certs-dumper:1.6.1",
      },
      certificatesLocation: {
        type: "string",
        title: "Certificates location",
        default: "/etc/letsencrypt/live/",
        descritption: "Certificates will be located at <location>/<domain>/",
      },
      domainsToDump: {
        type: "string",
        title: "Domains to dump",
        description:
          "Include the domains for which you want to obtain a certificate, separated by commas. Leave the field blank if you want certificates for all domains at once.",
      },
      privateKeyFilename: {
        type: "string",
        title: "Private key file name",
        default: "privkey",
      },
      privateKeyExt: {
        type: "string",
        title: "Private key file extension",
        default: ".pem",
      },
      certificateFilename: {
        type: "string",
        title: "Certificate file name",
        default: "fullchain",
      },
      certificateExt: {
        type: "string",
        title: "Certificate file extension",
        default: ".pem",
      },
    },
  },
  logo: null,
  screenshots: [],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type CertificatesLocation = string;
/**
 * Include the domains for which you want to obtain a certificate, separated by commas. Leave the field blank if you want certificates for all domains at once.
 */
export type DomainsToDump = string;
export type PrivateKeyFileName = string;
export type PrivateKeyFileExtension = string;
export type CertificateFileName = string;
export type CertificateFileExtension = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  certificatesLocation: CertificatesLocation;
  domainsToDump?: DomainsToDump;
  privateKeyFilename?: PrivateKeyFileName;
  privateKeyExt?: PrivateKeyFileExtension;
  certificateFilename?: CertificateFileName;
  certificateExt?: CertificateFileExtension;
}