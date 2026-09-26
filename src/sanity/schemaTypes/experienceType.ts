import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experience & Community Service",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Organization / Company",
      type: "string",
      description: "e.g., EL25 Studio or Ministry of Youth, Culture and Communication",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Position",
      type: "string",
      description: "e.g., Production Trainee or Volunteer, Motatawi3 Program",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Dates / Period",
      type: "string",
      description: "e.g., Jul — Sep 2023",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g., Casablanca, Morocco",
    }),
    defineField({
      name: "status",
      title: "Status Badge",
      type: "string",
      description: "e.g., Civic Outreach, Traineeship",
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
      title: "Execution Competencies & Tools",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Commercial Ad Production, On-set Filming, Video Editing, Client Collaboration",
    }),
    defineField({
      name: "description",
      title: "Narrative Summary",
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
