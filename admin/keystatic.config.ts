import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "cloud",
    pathPrefix: "site",
  },
  cloud: {
    project: "lena/lena",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      columns: ["title", "date"],
      path: "src/content/projects/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        priority: fields.number({
          label: "Priorité",
          validation: { isRequired: true },
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/projects",
              publicPath: "src/assets/images/projects/",
            },
          },
        }),
      },
    }),
    instants: collection({
      label: "Instants",
      slugField: "title",
      columns: ["title", "date"],
      path: "src/content/instants/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        priority: fields.number({
          label: "Priorité",
          validation: { isRequired: true },
          defaultValue: 0,
        }),
        content: fields.mdx({
          label: "Content",
          extension: "md",
          options: {
            table: false,
            code: false,
            codeBlock: false,
            image: {
              directory: "src/assets/images/instants",
              publicPath: "src/assets/images/instants/",
            },
          },
        }),
      },
    }),
  },
});
