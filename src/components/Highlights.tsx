import profile from "@/data/profile";

const Highlights = () => {
  return (
    <section className="grid gap-6 rounded-[32px] border border-white/10 bg-[#151019]/70 p-8 shadow-[0_20px_70px_rgba(4,0,10,0.5)] backdrop-blur lg:grid-cols-3">
      {profile.homeHighlights.map((highlight) => (
        <article
          key={highlight.label}
          className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-black/20 p-5 text-white"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-white/50">
            {highlight.label}
          </span>
          <span className="text-3xl font-semibold text-white">
            {highlight.value}
          </span>
          <p className="text-sm text-white/70">{highlight.description}</p>
        </article>
      ))}
    </section>
  );
};

export default Highlights;
