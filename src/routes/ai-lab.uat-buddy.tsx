import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";
export const Route = createFileRoute("/ai-lab/uat-buddy")({ component: () => <PlaceholderPage eyebrow="AI PM Lab · Live" title="UAT Buddy" copy="This product view is part of the next AI PM Lab release." /> });