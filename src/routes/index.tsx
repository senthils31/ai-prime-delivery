import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senthilkumar Karuppiah | AI-First Project & Transformation Leader" },
      { name: "description", content: "AI-First Project & Transformation Leader with 19+ years of enterprise IT experience across project management, release management, service delivery, digital transformation, AI and automation." },
      { property: "og:title", content: "Senthilkumar Karuppiah | AI-First Project & Transformation Leader" },
      { property: "og:description", content: "AI-First Project & Transformation Leader with 19+ years of enterprise IT experience across project management, release management, service delivery, digital transformation, AI and automation." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});