import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/ai-lab/uat-buddy")({
  head: () => ({ meta: [{ title: "UAT Buddy | Case Study" }, { name: "description", content: "An evidence-based case study for UAT Buddy, a self-service assistant for UAT knowledge and support." }, { property: "og:title", content: "UAT Buddy | Case Study" }, { property: "og:description", content: "An evidence-based case study for UAT Buddy, a self-service assistant for UAT knowledge and support." }, { property: "og:url", content: "/ai-lab/uat-buddy" }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/ai-lab/uat-buddy" }] }),
  component: () => <CaseStudyPage study={caseStudies[0]} />,
});