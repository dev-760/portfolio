"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { showToast } from "@/components/Toast";
import profile from "@/data/profile";

const Contact = () => {
  const year = new Date().getUTCFullYear();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      showToast("Email copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
      showToast("Failed to copy email", "error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mailtoLink = `mailto:${profile.contact.email}?subject=From ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;

      showToast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showToast("Failed to send message", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Left — Info & Links */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 leading-relaxed"
          >
            {profile.sections.contactMessage}
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/35 font-medium">
              Email
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                {profile.contact.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors duration-200 px-2 py-1 rounded border border-white/[0.06] hover:border-white/[0.12]"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/35 font-medium">
              Elsewhere
            </p>
            <div className="flex flex-col gap-2.5">
              {profile.links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.06 }}
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <span className="h-px w-3 bg-white/15 group-hover:w-5 group-hover:bg-white/40 transition-all duration-300" />
                  <span className="text-sm font-medium">{link.label}</span>
                  <span className="text-[10px] text-white/25 group-hover:text-white/40 transition-colors duration-200 ml-auto">
                    {link.href
                      .replace("https://", "")
                      .replace("http://", "")
                      .replace("www.", "")}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-2 text-[10px] uppercase tracking-[0.4em] text-white/25"
          >
            © {year} {profile.name}
          </motion.p>
        </div>

        {/* Right — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:border-white/[0.1]"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-white/35 font-medium">
            Send a message
          </p>
          <div className="space-y-4">
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/35 font-medium">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-all hover:border-white/[0.1] focus:border-white/[0.2] focus:bg-white/[0.04] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/35 font-medium">
                Email
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-all hover:border-white/[0.1] focus:border-white/[0.2] focus:bg-white/[0.04] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/35 font-medium">
                Message
              </span>
              <textarea
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-all hover:border-white/[0.1] focus:border-white/[0.2] focus:bg-white/[0.04] focus:outline-none resize-none"
              />
            </label>
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.01 }}
              whileTap={{ scale: submitting ? 1 : 0.99 }}
              className="w-full rounded-lg bg-white/[0.08] border border-white/[0.08] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/80 transition-all duration-200 hover:bg-white/[0.12] hover:text-white hover:border-white/[0.12] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;