import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";
export const Route = createFileRoute("/ai-lab/agile-board")({ component: () => <PlaceholderPage eyebrow="AI PM Lab · Coming soon" title="AI Agile Board" copy="This product view is part of the future AI PM ecosystem." /> });