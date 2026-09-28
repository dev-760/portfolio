import { defineField, defineType } from "sanity";

export const skillType = defineType({
    name: "skill",
    title: "Skills & Software",
    type: "document",
    fields: [
        defineField({
            name: "group",
            title: "Section",
            type: "string",
            options: {
                list: [
                    { title: "Analytical & Problem-Solving", value: "analysis" },
                    { title: "Software & Workflows", value: "software" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "name",
            title: "Skill or Stack Name",
            type: "string",
            description: "Use the tool, method, or skill name a reviewer would recognize.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Evidence-Based Description",
            type: "text",
            rows: 3,
            description: "Write what Hassan actually studies or uses. Do not add levels, metrics, or outcomes without evidence.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "string",
            description: "Material Symbol name for analytical skills. Leave empty for software stacks.",
        }),
        defineField({
            name: "tags",
            title: "Tools or Methods",
            type: "array",
            of: [{ type: "string" }],
            description: "Short labels shown below software descriptions.",
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 1,
            validation: (Rule) => Rule.required().integer().min(1),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "group",
        },
    },
});
