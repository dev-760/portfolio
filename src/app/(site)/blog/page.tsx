import Image from "next/image";
import { ArrowLeft, ArrowRight, CalendarDays, Mails, User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Blog & Field Notes",
  "Thoughtful stories and field dispatches exploring culture, travel, science, and everyday life.",
  "/blog"
);

const blogPosts = [
  {
    title: "A quiet weekend spent on the northern coast",
    link: "#",
    publishedDate: "2026-09-12",
    author: "Jon Bell",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
    tags: ["Travel", "Weekend guide", "Coast"],
  },
  {
    title: "Why small seaside towns are opening new public spaces",
    link: "#",
    publishedDate: "2026-09-10",
    author: "Maya Chen",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
    tags: ["Culture", "Urban planning", "Community"],
  },
  {
    title: "What marine researchers are learning from warmer oceans",
    link: "#",
    publishedDate: "2026-09-08",
    author: "Daniel Ortiz",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
    tags: ["Science", "Climate", "Oceans"],
  },
  {
    title: "Seven small daily habits that make mornings less rushed",
    link: "#",
    publishedDate: "2026-09-05",
    author: "Noah Williams",
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
    tags: ["Wellness", "Morning routine"],
  },
  {
    title: "How to grow a thriving balcony garden that lasts all summer",
    link: "#",
    publishedDate: "2026-09-03",
    author: "Sophie Martin",
    image:
      "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg",
    tags: ["Home", "Gardening", "Small spaces"],
  },
  {
    title: "The remote mountain villages bringing old trails back to life",
    link: "#",
    publishedDate: "2026-09-01",
    author: "Jon Bell",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
    tags: ["Travel", "Hiking", "Conservation"],
  },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function Blog() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 space-y-10">
      {/* Top Back Navigation Link */}
      <div>
        <Link
          href="/#writing"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Portfolio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 border border-border text-[11px] font-mono text-muted-foreground w-fit">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dispatches &amp; Field Notes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-tight text-foreground leading-[1.1]">
            Welcome to our blog
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            Thoughtful stories and field notes about travel, culture, science, and everyday life.
          </p>
        </div>

        <Button
          className="w-fit inline-flex items-center gap-2 rounded-md px-5 py-2.5 bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          size="default"
          variant="default"
        >
          <Mails className="size-4" />
          <span className="hidden lg:inline">Subscribe to newsletter</span>
          <span className="inline lg:hidden">Subscribe</span>
        </Button>
      </div>

      <Separator className="bg-border" />

      {/* Full-Width Articles List */}
      <div className="flex flex-col gap-6 w-full">
        {blogPosts.map((post, index) => (
          <Link
            href={post.link}
            key={`${post.link}-${index}`}
            className="group w-full flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 rounded-md border border-border bg-card p-5 sm:p-7 hover:border-foreground/30 transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[14/9] w-full md:w-80 lg:w-96 shrink-0 overflow-hidden rounded bg-muted border border-border/60">
              <Image
                src={post.image}
                alt={post.title}
                width={640}
                height={400}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content Body */}
            <div className="flex-1 flex flex-col justify-between self-stretch space-y-4">
              <div className="space-y-3">
                {/* Tags and Author Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-muted/70 text-foreground border-border/80 font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <User className="size-3.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-normal text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">
                  {post.title}
                </h2>
              </div>

              {/* Date and CTA Row */}
              <div className="pt-4 border-t border-border/70 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground font-mono">
                  <CalendarDays className="size-3.5" />
                  <span>{formatDate(post.publishedDate)}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                  <span>Read article</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Load More Action */}
      <div className="pt-6 flex justify-center">
        <Button
          className="px-6 py-2.5 rounded-md border border-border bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          size="default"
          variant="outline"
        >
          Load more articles
        </Button>
      </div>
    </section>
  );
}
