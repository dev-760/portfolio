import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Featured Projects & Engagements",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      description: "e.g., Commercial Video Campaign (EL25 Studio)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Project Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Project / External Link",
      type: "url",
    }),
    defineField({
      name: "technologies",
      title: "Tools & Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Video Editing, Project Management, Client Review",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
