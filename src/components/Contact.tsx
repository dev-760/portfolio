"use client";

import { useState } from "react";
import SlidingCard from "@/components/SlidingCard";
import { showToast } from "@/components/Toast";
import profile from "@/data/profile";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      showToast("Email address copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Failed to copy email", "error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mailtoLink = `mailto:${profile.contact.email}?subject=Message from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
        formData.name
      )} (${encodeURIComponent(formData.email)})`;
      window.location.assign(mailtoLink);

      showToast("Email client opened!", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      showToast("Failed to open email client", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SlidingCard
      id="contact"
      eyebrow="Communication & Inquiries"
      title="Contact"
      subtitle={profile.sections.contactMessage}
    >
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#845400]">
              Direct Email
            </h3>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-sm font-semibold text-[#191c21] hover:text-[#845400] transition-colors truncate"
              >
                {profile.contact.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-[#514537] hover:text-[#191c21] border border-[#e2e4ec] transition-colors shrink-0 cursor-pointer shadow-2xs hover:border-[#845400]/40"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Location & Online Links Card */}
          <div className="rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-5 sm:p-6 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#845400]">
              Connect Online
            </h3>
            <ul className="space-y-2.5">
              {profile.links.map((link) => {
                const getSocialIcon = () => {
                  if (link.label === "GitHub") {
                    return (
                      <svg className="h-4 w-4 text-[#191c21]" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    );
                  }
                  if (link.label === "LinkedIn") {
                    return (
                      <svg className="h-4 w-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    );
                  }
                  return (
                    <svg className="h-4 w-4 text-[#e4405f]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  );
                };

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl bg-white border border-[#e2e4ec]/80 px-3.5 py-2 text-sm font-medium text-[#514537] hover:text-[#191c21] hover:border-[#845400]/40 transition-all shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        {getSocialIcon()}
                        <span>{link.label}</span>
                      </div>
                      <span className="text-[#837565] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center justify-center">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-2xl border border-[#e2e4ec] bg-[#fbfbfe] p-6 sm:p-7 shadow-2xs space-y-4"
          noValidate
        >
          <h3 className="text-lg font-bold text-[#191c21] border-b border-[#e2e4ec] pb-3">
            Send a Message
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-[#514537] mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Alex Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-[#e2e4ec] bg-white px-4 py-2.5 text-sm text-[#191c21] placeholder:text-[#837565]/60 focus:border-[#845400] focus:ring-2 focus:ring-[#845400]/15 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-[#514537] mb-1.5">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-[#e2e4ec] bg-white px-4 py-2.5 text-sm text-[#191c21] placeholder:text-[#837565]/60 focus:border-[#845400] focus:ring-2 focus:ring-[#845400]/15 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-[#514537] mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Describe your project, business problem, or automation idea..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-[#e2e4ec] bg-white px-4 py-2.5 text-sm text-[#191c21] placeholder:text-[#837565]/60 focus:border-[#845400] focus:ring-2 focus:ring-[#845400]/15 focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[#191c21] text-white py-3.5 px-6 text-sm font-semibold hover:bg-[#845400] active:scale-[0.99] transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            {submitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </SlidingCard>
  );
};

export default Contact;