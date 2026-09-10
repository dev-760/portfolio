import { Metadata } from "next";
import About from "@/components/About";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: "Learn more about my background, skills, and interests in business, AI, and software.",
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
