import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/WorkPage";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Senthilkumar Karuppiah" },
      { name: "description", content: "Enterprise project delivery, release management and transformation work by Senthilkumar Karuppiah." },
      { property: "og:title", content: "Work — Senthilkumar Karuppiah" },
      { property: "og:description", content: "Enterprise project delivery, release management and transformation work by Senthilkumar Karuppiah." },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});
