import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "placeholder";
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "hassan_portfolio_studio",
  title: "Hassan Karasu — Editorial Portfolio Studio",

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: "2026-09-26",
      defaultDataset: "production",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
