import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "hassan_portfolio",
  title: "Hassan Karasu — Editorial Portfolio Studio",
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
