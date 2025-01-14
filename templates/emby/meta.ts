// Generated using "yarn build-templates"

export const meta = {
  name: "Emby",
  description:
    "Emby organizes video, music, live TV, and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices.",
  instructions: null,
  changeLog: [{ date: "2022-11-21", description: "first release" }],
  links: [
    { label: "Documentation", url: "https://support.emby.media/support/home" },
    { label: "Github", url: "https://github.com/MediaBrowser/Emby" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "emby",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "lscr.io/linuxserver/emby:latest",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}
