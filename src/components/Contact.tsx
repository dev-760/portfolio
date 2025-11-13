import Section from "@/components/Section";
import profile from "@/data/profile";

const Contact = () => {
  const year = new Date().getUTCFullYear();
  const linkedInLink = profile.links.find(
    (link) => link.label.toLowerCase() === "linkedin",
  );

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg text-white/80">
            {profile.sections.contactMessage}
          </p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-lg font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80"
              >
                {profile.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80"
              >
                {profile.contact.phone}
              </a>
            </li>
            {linkedInLink && (
              <li>
                <a
                  href={linkedInLink.href}
                  className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/80"
                >
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
          <p className="pt-4 text-xs uppercase tracking-[0.5em] text-white/40">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
            Quick note
          </p>
          <div className="space-y-3">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Name
              </span>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/30"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Email
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/30"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Message
              </span>
              <textarea
                rows={3}
                placeholder="Say hello..."
                className="mt-1 w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/30"
              />
            </label>
            <button
              type="button"
              className="w-full rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#120d16]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
