import { createFileRoute } from "@tanstack/react-router";
import { AILabPage } from "@/components/AILabPage";

export const Route = createFileRoute("/ai-lab/")({
  head: () => ({
    meta: [
      { title: "AI PM Lab — Senthilkumar Karuppiah" },
      {
        name: "description",
        content:
          "Evidence-based AI PM case studies applying practical intelligence and automation to enterprise delivery.",
      },
      { property: "og:title", content: "AI PM Lab — Senthilkumar Karuppiah" },
      {
        property: "og:description",
        content:
          "Evidence-based AI PM case studies applying practical intelligence and automation to enterprise delivery.",
      },
      { property: "og:url", content: "/ai-lab" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-lab" }],
  }),
  component: AILabPage,
});
