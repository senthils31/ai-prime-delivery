import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/ai-pm-lab/uat-buddy")({
  head: () => ({
    meta: [
      { title: "UAT Buddy | AI PM Case Study" },
      { name: "description", content: "Evidence-based case study for UAT Buddy, a self-service assistant for UAT knowledge and support." },
      { property: "og:title", content: "UAT Buddy | AI PM Case Study" },
      { property: "og:description", content: "Evidence-based case study for UAT Buddy, a self-service assistant for UAT knowledge and support." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-pm-lab/uat-buddy" }],
  }),
  component: () => <CaseStudyPage study={caseStudies[0]} />,
});