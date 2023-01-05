import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  const env = [
    `PRIVATE_KEY_FILE_NAME=${input.privateKeyFilename}`,
    `PRIVATE_KEY_FILE_EXT=${input.privateKeyExt}`,
    `CERTIFICATE_FILE_NAME=${input.certificateFilename}`,
    `CERTIFICATE_FILE_EXT=${input.certificateExt}`,
  ];

  if (input.domainsToDump) {
    env.push(`DOMAIN=${input.domainsToDump.replace(" ", "")}`);
  }

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,

      source: {
        type: "image",
        image: input.appServiceImage,
      },

      mounts: [
        {
          type: "bind",
          hostPath: "/etc/easypanel/traefik",
          mountPath: "/traefik",
        },
        {
          type: "bind",
          hostPath: input.certificatesLocation,
          mountPath: "/output",
        },
      ],
    },
  });

  return { services };
}
