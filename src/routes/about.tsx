import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Senthilkumar Karuppiah" },
      {
        name: "description",
        content:
          "AI-First Project & Transformation Leader with 19+ years of enterprise IT experience across delivery, release management and digital transformation.",
      },
      { property: "og:title", content: "About — Senthilkumar Karuppiah" },
      {
        property: "og:description",
        content:
          "AI-First Project & Transformation Leader with 19+ years of enterprise IT experience across delivery, release management and digital transformation.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
