import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseStudy } from "@/data/site";

export const Route = createFileRoute("/ai-pm-lab/project-status-analyst")({
  head: () => ({
    meta: [
      { title: "Project Status Analyst | AI PM Case Study" },
      { name: "description", content: "Evidence-based case study for Project Status Analyst, an AI-assisted project intelligence solution." },
      { property: "og:title", content: "Project Status Analyst | AI PM Case Study" },
      { property: "og:description", content: "Evidence-based case study for Project Status Analyst, an AI-assisted project intelligence solution." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-pm-lab/project-status-analyst" }],
  }),
  component: () => <CaseStudyPage study={getCaseStudy("project-status-analyst")} />,
});