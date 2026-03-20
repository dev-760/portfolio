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

  const linkedInLink = profile.links.find(
    (link) => link.label.toLowerCase() === "linkedin",
  );

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
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you'd send this to an API endpoint
      const mailtoLink = `mailto:${profile.contact.email}?subject=From ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;

      showToast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showToast("Failed to send message", "error");
    } finally {
      setSubmitting(false);
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg text-white/80">
            {profile.sections.contactMessage}
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="group">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Email
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-lg font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80 transition-colors"
                >
                  {profile.contact.email}
                </a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10"
                  title="Copy email"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </motion.button>
              </div>
            </li>
            <li>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">
                Phone
              </div>
              <a
                href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80 transition-colors"
              >
                {profile.contact.phone}
              </a>
            </li>
            {linkedInLink && (
              <li>
                <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">
                  LinkedIn
                </div>
                <a
                  href={linkedInLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80 transition-colors"
                >
                  View Profile
                </a>
              </li>
            )}
          </ul>
          <p className="pt-4 text-xs uppercase tracking-[0.5em] text-white/40">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 text-sm backdrop-blur transition-all hover:border-white/20"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/50 font-medium">
            Send a Message
          </p>
          <div className="space-y-4">
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-white placeholder:text-white/30 transition-all hover:border-white/20 focus:border-white/40 focus:outline-none"
              />
            </motion.label>
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
                Email
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-white placeholder:text-white/30 transition-all hover:border-white/20 focus:border-white/40 focus:outline-none"
              />
            </motion.label>
            <motion.label
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
                Message
              </span>
              <textarea
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-white placeholder:text-white/30 transition-all hover:border-white/20 focus:border-white/40 focus:outline-none resize-none"
              />
            </motion.label>
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.02 }}
              whileTap={{ scale: submitting ? 1 : 0.98 }}
              className="w-full rounded-full bg-gradient-to-r from-[#7b5dff] to-[#af8cff] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-all hover:shadow-[0_0_20px_rgba(123,93,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </Section >
  );
};

export default Contact;