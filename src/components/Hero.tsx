import Link from "next/link";
import profile from "@/data/profile";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#161117]/95 p-10 text-white shadow-[0_35px_120px_rgba(5,2,8,0.65)]">
      <div className="absolute inset-0">
        <div className="absolute -left-8 top-0 h-48 w-48 rounded-full bg-[#7b5dff]/40 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#af8cff]/30 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/60" />
      </div>
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.6em] text-white/50">
          <div className="flex items-center gap-2">
            <span className="h-3 w-5 rounded-md bg-white/70" />
            <span className="h-3 w-3 rounded-full border border-white/50" />
          </div>
          <span>Portfolio</span>
        </div>
        <div className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-[0.9] tracking-[0.15em] text-white">
          {profile.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </div>
        <p className="max-w-2xl text-lg text-white/80">{profile.tagline}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.5em] text-white/60">
          <span>Robotics</span>
          <span>·</span>
          <span>Mechatronics</span>
          <span>·</span>
          <span>Community</span>
          <span>·</span>
          <span>Tech</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-[#1a0f14]"
          >
            see my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white hover:border-white"
          >
            get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
