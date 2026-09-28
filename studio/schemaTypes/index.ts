import { type SchemaTypeDefinition } from "sanity";
import { educationType } from "./educationType";
import { experienceType } from "./experienceType";
import { monographType } from "./monographType";
import { projectType } from "./projectType";
import { skillType } from "./skillType";

export const schemaTypes: SchemaTypeDefinition[] = [
  monographType,
  experienceType,
  educationType,
  projectType,
  skillType,
];
