import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  title: "Education & Quantitative Foundation",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Institution / University",
      type: "string",
      description: "e.g., Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock · Université Hassan II",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Degree / Program",
      type: "string",
      description: "e.g., Licence in Business Administration",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Academic Period",
      type: "string",
      description: "e.g., 2026 to present or Class of 2026",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status Badge",
      type: "string",
      description: "e.g., Current Enrollment · First-Year or Completed",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Ascending order (e.g. 1, 2, 3)",
      initialValue: 1,
    }),
    defineField({
      name: "stack",
      title: "Key Coursework & Pillars",
      type: "array",
      of: [{ type: "string" }],
      description: "Pillars such as General Accounting, Microeconomics, Statistics, etc.",
    }),
    defineField({
      name: "description",
      title: "Narrative Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "company",
    },
  },
});
