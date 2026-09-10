import { Metadata } from "next";
import Contact from "@/components/Contact";
import profile from "@/data/profile";

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: "Get in touch to discuss software building, AI integrations, or workflow automation.",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
