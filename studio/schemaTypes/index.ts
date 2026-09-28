import { type SchemaTypeDefinition } from "sanity";
import { educationType } from "./educationType";
import { experienceType } from "./experienceType";
import { monographType } from "./monographType";
import { projectType } from "./projectType";

export const schemaTypes: SchemaTypeDefinition[] = [
  monographType,
  experienceType,
  educationType,
  projectType,
];
