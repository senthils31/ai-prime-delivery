import { ArrowLeft, ArrowRight, Check, MoveRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/data/site";

function CaseStudySection({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`case-study-section ${className}`}>
      <div className="case-study-section-label">
        <span className="overline text-primary">{eyebrow}</span>
      </div>
      <div>
        <h2 className="section-title max-w-[12ch]">{title}</h2>
        <div className="mt-7 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const nextStudy =
    study.slug === "uat-buddy"
      ? "project-status-analyst"
      : study.slug === "project-status-analyst"
        ? "weekly-status-automation"
        : "uat-buddy";
  const nextName =
    nextStudy === "uat-buddy"
      ? "UAT Buddy"
      : nextStudy === "project-status-analyst"
        ? "Project Status Analyst"
        : "Weekly Status Automation";

  const nextLink =
    nextStudy === "uat-buddy" ? (
      <Link to="/ai-lab/uat-buddy">
        Next case study <ArrowRight aria-hidden="true" />
      </Link>
    ) : nextStudy === "project-status-analyst" ? (
      <Link to="/ai-lab/project-status-analyst">
        Next case study <ArrowRight aria-hidden="true" />
      </Link>
    ) : (
      <Link to="/ai-lab/weekly-status-automation">
        Next case study <ArrowRight aria-hidden="true" />
      </Link>
    );

  return (
    <main className="case-study-page">
      <section className="case-study-hero section-pad border-b border-border bg-pure-white">
        <div className="page-shell">
          <Link to="/ai-lab" className="case-study-back">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to AI PM Lab
          </Link>
          <div className="mt-16 max-w-4xl">
            <div className="flex flex-wrap items-center gap-4">
              <p className="overline text-primary">AI PM Lab · Evidence-based case study</p>
              <span className="status-pill">{study.status}</span>
            </div>
            <h1 className="display-title mt-5 max-w-[12ch]">{study.name}</h1>
            <p className="case-study-positioning mt-7 max-w-2xl">{study.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="case-study-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <CaseStudySection eyebrow="01 · The problem" title="The Problem">
          <p className="body-copy">{study.businessProblem}</p>
          <p className="body-copy mt-5">{study.problem}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="02 · The intervention" title="The AI Intervention">
          <p className="body-copy">{study.solution}</p>
          <p className="body-copy mt-5">The focus was a real delivery problem and a practical AI or automation-enabled way of working—not technology for its own sake.</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="03 · My role" title="My Role">
          <p className="body-copy">{study.role}</p>
          <div className="case-study-role-list mt-8 grid gap-3 sm:grid-cols-2">
            {study.roleResponsibilities.map((role) => (
              <span key={role}>
                <Check className="size-4 text-primary" aria-hidden="true" />
                {role}
              </span>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="04 · The workflow" title="How It Works">
          <div className="case-study-flow mt-10">
            {study.workflow.map((step, index) => (
              <div className="case-study-flow-step" key={step.label}>
                <span className="case-study-flow-number">0{index + 1}</span>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
                {index < study.workflow.length - 1 && (
                  <MoveRight className="case-study-flow-arrow" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </CaseStudySection>
      </div>

      <section className="dark-band section-pad case-study-impact">
        <div className="page-shell">
          <p className="overline text-dark-muted">06 · Business impact</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="section-title max-w-[10ch]">Business Impact</h2>
            <p className="max-w-md text-sm leading-6 text-dark-muted">
              Only verified information is shown here. Where a metric is not currently available,
              the case study says so.
            </p>
          </div>
          <div className={`case-study-metrics mt-14 ${study.impact.length === 1 ? "single" : ""}`}>
            {study.impact.map((item) => (
              <div key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-shell">
        <CaseStudySection eyebrow="07 · Transformation" title="Before → After">
          <div className="before-after-grid">
            <div>
              <p className="overline text-slate">Before</p>
              <ul>
                {study.before.map((item) => (
                  <li key={item}>
                    <span>↓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="overline text-primary">After</p>
              <ul>
                {study.after.map((item) => (
                  <li key={item}>
                    <span>↓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CaseStudySection>
        <CaseStudySection eyebrow="08 · PM insight" title="What This Taught Me">
          <ul className="case-study-lessons">
            {study.lessons.map((lesson) => (
              <li key={lesson}>
                <span aria-hidden="true">—</span>
                {lesson}
              </li>
            ))}
          </ul>
        </CaseStudySection>
        <CaseStudySection eyebrow="09 · Reusable framework" title="My AI-First PM Approach">
          <div className="ai-first-approach">
            {[
              ["01", "IDENTIFY", "Find repetitive or high-friction delivery problems."],
              ["02", "PRIORITIZE", "Assess business value, feasibility and adoption potential."],
              ["03", "DESIGN", "Create an AI/automation-enabled workflow."],
              ["04", "DELIVER", "Align stakeholders, implement, test and drive adoption."],
              ["05", "MEASURE", "Track usage, effort reduction, quality and business outcomes."],
            ].map(([number, title, detail]) => (
              <div key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
      </div>

      <section className="case-study-next border-t border-border">
        <div className="page-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="overline text-primary">Continue exploring</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{nextName}</h2>
          </div>
          <Button asChild variant="outline">
            {nextLink}
          </Button>
        </div>
      </section>
    </main>
  );
}
