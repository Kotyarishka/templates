// Generated using "yarn build-templates"

export const meta = {
  name: "Strapi",
  description:
    "Strapi enables content-rich experiences to be created, managed and exposed to any digital product, channel or device.Connect your favorite databases, frontend frameworks, or static site generators. Choose where you want to host your websites. Integrate with your favorite tools, and work with the best of each world. No vendor lock-in.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://strapi.io/" },
    {
      label: "Documentation",
      url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
    },
    { label: "Github", url: "https://github.com/strapi" },
  ],
  contributors: [
    { name: "Ponkhy", url: "https://github.com/Ponkhy" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "databaseType",
      "databaseServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "strapi",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "strapi/strapi:3.6.8-alpine",
      },
      databaseType: {
        type: "string",
        title: "Database Type",
        default: "sqlite",
        oneOf: [
          { enum: ["sqlite"], title: "SQLite" },
          { enum: ["postgres"], title: "Postgres" },
          { enum: ["mariadb"], title: "MariaDB" },
        ],
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "strapi-db",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type DatabaseType = DatabaseType1 & DatabaseType2;
export type DatabaseType1 = SQLite | Postgres | MariaDB;
export type SQLite = "sqlite";
export type Postgres = "postgres";
export type MariaDB = "mariadb";
export type DatabaseType2 = string;
export type DatabaseServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  databaseType: DatabaseType;
  databaseServiceName: DatabaseServiceName;
}
