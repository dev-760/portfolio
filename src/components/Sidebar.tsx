"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import profile, { type NavItem } from "@/data/profile";

type SidebarProps = {
  navItems: NavItem[];
};

const Sidebar = ({ navItems }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-10 rounded-[32px] border border-white/10 bg-[#120d16]/80 p-8 text-white shadow-[0_25px_90px_rgba(0,0,0,0.35)] backdrop-blur">
      <header className="space-y-4">
        <div className="flex items-center justify-between text-white/50">
          <div className="flex items-center gap-2">
            <span className="h-4 w-6 rounded-md bg-white/80" />
            <span className="h-4 w-4 rounded-full border border-white/40" />
          </div>
          <span className="text-xs uppercase tracking-[0.5em]">HK</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">
            {profile.location}
          </p>
          <p className="text-2xl font-semibold">{profile.title}</p>
        </div>
        <p className="text-sm text-white/70">{profile.tagline}</p>
      </header>

      <nav
        aria-label="Primary"
        className="rounded-3xl border border-white/5 bg-black/20 p-4"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-white/40">
          Menu
        </p>
        <ul className="space-y-3 text-lg font-medium">
          {navItems.map((item) => {
            const isDisabled = item.enabled === false;
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-disabled={isDisabled}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 transition ${
                    isDisabled
                      ? "pointer-events-none text-white/30 line-through"
                      : isActive
                        ? "bg-white/10 text-white shadow-inner"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span
                    className={`h-4 w-4 rounded-lg border ${
                      isDisabled
                        ? "border-white/20"
                        : isActive
                          ? "border-white bg-white/80"
                          : "border-white/40 bg-white/5"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-2 text-sm text-white/70">
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">
          Contact
        </p>
        <a
          href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
          className="block font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
        >
          {profile.contact.phone}
        </a>
        <a
          href={`mailto:${profile.contact.email}`}
          className="block font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
        >
          {profile.contact.email}
        </a>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
