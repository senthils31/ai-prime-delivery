import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";
export const Route = createFileRoute("/ai-lab/project-intelligence")({ component: () => <PlaceholderPage eyebrow="AI PM Lab · Coming soon" title="Project Intelligence" copy="This product view is part of the future AI PM ecosystem." /> });