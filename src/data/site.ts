export type LoopStage = {
  key: "plan" | "execute" | "observe" | "intelligence" | "optimize";
  number: string;
  title: string;
  summary: string;
  details: string;
};

export const loopStages: LoopStage[] = [
  { key: "plan", number: "01", title: "PLAN", summary: "AI-assisted planning", details: "WBS · Resources · Dependencies" },
  { key: "execute", number: "02", title: "EXECUTE", summary: "Structured delivery", details: "Agile · Teams · Jira · Governance" },
  { key: "observe", number: "03", title: "OBSERVE", summary: "Capture project signals", details: "Status · Milestones · Blockers · Risks" },
  { key: "intelligence", number: "04", title: "INTELLIGENCE", summary: "AI interprets the signals", details: "Insights · Patterns · Recommendations" },
  { key: "optimize", number: "05", title: "OPTIMIZE", summary: "Improve delivery", details: "Decisions · Actions · Continuous Improvement" },
];

export const capabilities = [
  { number: "01", title: "AI-First Delivery", copy: "Embedding AI into planning, execution, reporting and decision-making." },
  { number: "02", title: "Intelligent Automation", copy: "Turning repetitive project operations into scalable automated workflows." },
  { number: "03", title: "Enterprise Transformation", copy: "Connecting technology initiatives to measurable business outcomes." },
  { number: "04", title: "Lean-Agile Leadership", copy: "Creating adaptive, transparent and outcome-focused delivery environments." },
];

export const liveSolutions = [
  { title: "UAT Buddy", copy: "AI-powered UAT knowledge assistant helping business users get faster answers and reducing dependency on project teams.", lines: ["30+ users", "~10 queries/day", "1–2 hrs/week effort reduced"], featured: true },
  { title: "Project Status Analyst", copy: "AI-powered project intelligence that helps delivery and technology leadership understand project status, risks and key signals.", lines: ["Directors", "Senior Directors", "Technology Leadership"], featured: false },
  { title: "Weekly Status Automation", copy: "Automated executive project reporting using AI and workflow automation across project information sources.", lines: ["Power Automate", "SharePoint", "Excel", "PowerPoint"], featured: false },
];

export const futureSolutions = [
  { title: "AI Agile Board", copy: "AI-assisted Kanban and sprint intelligence." },
  { title: "PM Copilot", copy: "An AI companion for project planning, execution and decision support." },
  { title: "Project Intelligence", copy: "Turn project signals into actionable delivery insights." },
];

export const career = [
  { company: "PATNI", copy: "Enterprise technology support and maintenance. GE Aviation WMS. Lean Six Sigma improvement work." },
  { company: "DELL / UBS", copy: "Investment banking technology support." },
  { company: "COGNIZANT / UBS", copy: "Investment banking data management and enterprise technology." },
  { company: "JP MORGAN CHASE", copy: "Service delivery, change management, incident management, release management and project leadership." },
  { company: "IQVIA", copy: "Release Management: 200+ enterprise releases. Project Management: 50+ Connected Devices enterprise projects. Global stakeholder and matrix leadership." },
  { company: "AI-FIRST DELIVERY", copy: "Building smarter ways of planning, executing and governing technology initiatives." },
];