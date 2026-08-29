import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";
export const Route = createFileRoute("/ai-lab/pm-copilot")({ component: () => <PlaceholderPage eyebrow="AI PM Lab · Coming soon" title="PM Copilot" copy="This product view is part of the future AI PM ecosystem." /> });