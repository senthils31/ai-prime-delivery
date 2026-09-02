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
  { slug: "uat-buddy", title: "UAT Buddy", copy: "AI-powered UAT knowledge assistant helping business users get faster answers and reducing dependency on project teams.", lines: ["30+ users", "~10 queries/day", "1–2 hrs/week effort reduced"], featured: true },
  { slug: "project-status-analyst", title: "Project Status Analyst", copy: "AI-powered project intelligence that helps delivery and technology leadership understand project status, risks and key signals.", lines: ["Directors", "Senior Directors", "Technology Leadership"], featured: false },
  { slug: "weekly-status-automation", title: "Weekly Status Automation", copy: "Automated executive project reporting using AI and workflow automation across project information sources.", lines: ["Power Automate", "SharePoint", "Excel", "PowerPoint"], featured: false },
];

export type CaseStudy = {
  slug: "uat-buddy" | "project-status-analyst" | "weekly-status-automation";
  name: string;
  positioning: string;
  copy: string;
  tags: string[];
  problem: string;
  solution: string;
  role: string;
  workflow: { label: string; detail: string }[];
  impact: { value: string; label: string }[];
  before: string[];
  after: string[];
  lessons: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uat-buddy",
    name: "UAT Buddy",
    positioning: "AI-powered self-service assistant for UAT knowledge and support.",
    copy: "A practical knowledge assistant designed to help business users get faster answers during user acceptance testing, while reducing repeated dependency on project teams.",
    tags: ["AI Agent", "Project Delivery", "Knowledge Assistant", "Automation"],
    problem: "Business users needed recurring UAT guidance and project information. Repeated questions created support and training effort for project teams and slowed access to answers.",
    solution: "I shaped a self-service assistant that connects user questions with relevant UAT and project knowledge, returning guidance at the point of need. The workflow focuses on practical support rather than adding another layer of project administration.",
    role: "As an AI-First Project & Transformation Leader, I identified the delivery friction, defined the use case, shaped the solution and workflow, aligned it to business-user needs, and supported adoption and continuous improvement.",
    workflow: [
      { label: "Input", detail: "Business user asks a UAT question" },
      { label: "Intelligence", detail: "Assistant retrieves relevant project knowledge" },
      { label: "Action", detail: "User receives focused guidance" },
      { label: "Outcome", detail: "Less repetitive UAT support dependency" },
    ],
    impact: [
      { value: "30+", label: "business users" },
      { value: "~10", label: "user queries per day" },
      { value: "1–2 hrs", label: "UAT support effort reduced per week" },
    ],
    before: ["Manual support", "Repeated questions", "Project team dependency", "Time spent answering UAT queries"],
    after: ["Self-service assistant", "Access to project knowledge", "Reduced repetitive support", "More time for higher-value delivery work"],
    lessons: [
      "AI adoption depends on solving a real workflow problem.",
      "The best use cases often begin with repetitive delivery friction.",
      "Measured business value matters more than the technology itself.",
    ],
  },
  {
    slug: "project-status-analyst",
    name: "Project Status Analyst",
    positioning: "AI-assisted project intelligence for clearer delivery status, risks and signals.",
    copy: "A project intelligence concept for helping delivery and technology leadership understand project status, risks and key signals with greater clarity.",
    tags: ["Project Intelligence", "Delivery Leadership", "Risk Signals", "Decision Support"],
    problem: "Delivery and technology leaders need a clearer view of project status, risks and key signals. The current project information does not include a verified metric for the resulting time or efficiency improvement.",
    solution: "I defined an intelligence use case that brings project signals into a more decision-ready view for leadership. Detailed implementation information and measured outcomes are available on request.",
    role: "My focus is on identifying the leadership need, defining the decision-support use case, shaping the information flow, aligning stakeholders and guiding delivery toward a useful project outcome.",
    workflow: [
      { label: "Input", detail: "Project status and delivery signals" },
      { label: "Intelligence", detail: "Signals are interpreted for patterns and risks" },
      { label: "Action", detail: "Leadership gets a clearer decision view" },
      { label: "Outcome", detail: "Better-informed delivery conversations" },
    ],
    impact: [{ value: "On request", label: "implementation details and measured outcomes" }],
    before: ["Project information in multiple places", "Status interpretation takes leadership attention", "Risks can be harder to see"],
    after: ["Signals brought into one view", "Decision-ready status context", "A clearer basis for risk conversations"],
    lessons: [
      "Project intelligence is valuable when it improves a real leadership decision.",
      "Signals need context before they become useful recommendations.",
      "Measured outcomes should be established before claims are made.",
    ],
  },
  {
    slug: "weekly-status-automation",
    name: "Weekly Status Automation",
    positioning: "Automated executive project reporting across connected information sources.",
    copy: "A workflow automation initiative for turning project information into repeatable executive reporting using Power Automate, SharePoint, Excel and PowerPoint.",
    tags: ["Workflow Automation", "Executive Reporting", "Power Automate", "Governance"],
    problem: "Weekly executive project reporting draws on information from several project sources. Reassembling that information repeatedly creates avoidable delivery operations effort; verified time or efficiency metrics are not currently available.",
    solution: "I shaped an automated reporting workflow across Power Automate, SharePoint, Excel and PowerPoint to make the reporting process more repeatable. Implementation details and measured outcomes are available on request.",
    role: "I focus on the reporting problem, workflow definition, source alignment, stakeholder expectations, governance and delivery of an automation approach that supports executive decision-making.",
    workflow: [
      { label: "Input", detail: "Project information across working sources" },
      { label: "Intelligence", detail: "Relevant status information is organized" },
      { label: "Action", detail: "Reporting workflow assembles the update" },
      { label: "Outcome", detail: "A repeatable executive reporting process" },
    ],
    impact: [{ value: "On request", label: "implementation details and measured outcomes" }],
    before: ["Information across project sources", "Repeated weekly assembly", "Manual reporting coordination"],
    after: ["Connected reporting workflow", "More repeatable status assembly", "A stronger foundation for executive reporting"],
    lessons: [
      "Automation works best when the underlying workflow is understood first.",
      "Reporting improvement requires source, stakeholder and governance alignment.",
      "A useful outcome is a more dependable decision rhythm, not just fewer manual steps.",
    ],
  },
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