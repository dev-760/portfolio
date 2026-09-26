import { defineField, defineType } from "sanity";

export const monographType = defineType({
  name: "monograph",
  title: "Ideas & Observations (Monographs)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g., Understanding Systems Before Improving Them",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Monograph",
      type: "boolean",
      description: "Check if this is the highlighted flagship essay",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category Domain",
      type: "string",
      options: {
        list: [
          { title: "Operations", value: "operations" },
          { title: "Management", value: "management" },
          { title: "Finance", value: "finance" },
          { title: "Academics", value: "academics" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categoryLabel",
      title: "Category Display Label",
      type: "string",
      description: "e.g., OPERATIONS & SYSTEMS, MANAGEMENT, FINANCE",
    }),
    defineField({
      name: "date",
      title: "Publication Date",
      type: "string",
      description: "e.g., SEP 2026 or SEP 24, 2026",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      description: "e.g., 6 MIN READ",
      initialValue: "5 MIN READ",
    }),
    defineField({
      name: "description",
      title: "Abstract / Overview",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thesis",
      title: "Core Thesis Statement",
      type: "text",
      rows: 3,
      description: "The central argument or proposition of the monograph",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags & Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways / Principles",
      type: "array",
      of: [{ type: "string" }],
      description: "List of actionable insights",
    }),
    defineField({
      name: "academicContext",
      title: "Academic Citation & Context",
      type: "string",
      description:
        "e.g., Monograph drafted in connection with coursework in Principles of Management...",
    }),
    defineField({
      name: "sections",
      title: "Article Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            defineField({
              name: "heading",
              title: "Section Heading",
              type: "string",
            }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "text", rows: 3 }],
            }),
          ],
        },
      ],
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
      subtitle: "categoryLabel",
    },
  },
});
