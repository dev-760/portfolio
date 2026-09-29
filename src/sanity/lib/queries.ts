import { groq } from "next-sanity";

// Query for Education & Quantitative Foundation items
export const educationQuery = groq`
  *[_type == "education"] | order(order asc) {
    "id": _id,
    company,
    role,
    period,
    status,
    stack,
    description,
    order
  }
`;

// Query for Experience & Community Service items
export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc) {
    "id": _id,
    company,
    role,
    period,
    location,
    status,
    stack,
    description,
    order
  }
`;

// Query for Ideas & Observations (Monographs)
export const monographsQuery = groq`
  *[_type == "monograph"] | order(order asc) {
    "id": _id,
    "slug": slug.current,
    isFeatured,
    category,
    categoryLabel,
    date,
    readTime,
    title,
    description,
    thesis,
    tags,
    keyTakeaways,
    academicContext,
    intro,
    sections,
    order
  }
`;

// Query for single featured monograph
export const featuredMonographQuery = groq`
  *[_type == "monograph" && isFeatured == true][0] {
    "id": _id,
    "slug": slug.current,
    isFeatured,
    category,
    categoryLabel,
    date,
    readTime,
    title,
    description,
    thesis,
    tags,
    keyTakeaways,
    academicContext,
    intro,
    sections
  }
`;

export const skillsQuery = groq`
  *[_type == "skill"] | order(order asc) {
    "id": _id,
    group,
    name,
    description,
    icon,
    tags,
    order
  }
`;
