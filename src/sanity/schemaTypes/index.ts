import { type SchemaTypeDefinition } from "sanity";
import { educationType } from "./educationType";
import { experienceType } from "./experienceType";
import { monographType } from "./monographType";

export const schemaTypes: SchemaTypeDefinition[] = [
  educationType,
  experienceType,
  monographType,
];
