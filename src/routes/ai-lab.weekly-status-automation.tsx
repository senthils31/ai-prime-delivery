import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/ai-lab/weekly-status-automation")({
  head: () => ({
    meta: [
      { title: "Weekly Status Automation | Case Study" },
      {
        name: "description",
        content:
          "An evidence-based case study for Weekly Status Automation, an executive project reporting workflow.",
      },
      { property: "og:title", content: "Weekly Status Automation | Case Study" },
      {
        property: "og:description",
        content:
          "An evidence-based case study for Weekly Status Automation, an executive project reporting workflow.",
      },
      { property: "og:url", content: "/ai-lab/weekly-status-automation" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-lab/weekly-status-automation" }],
  }),
  component: () => <CaseStudyPage study={caseStudies[2]} />,
});
