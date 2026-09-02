import { ArrowLeft, ArrowRight, Check, MoveRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/data/site";

function CaseStudySection({ eyebrow, title, children, className = "" }: { eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`case-study-section ${className}`}>
      <div className="case-study-section-label"><span className="overline text-primary">{eyebrow}</span></div>
      <div><h2 className="section-title max-w-[12ch]">{title}</h2><div className="mt-7 max-w-3xl">{children}</div></div>
    </section>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const nextStudy = study.slug === "uat-buddy" ? "project-status-analyst" : study.slug === "project-status-analyst" ? "weekly-status-automation" : "uat-buddy";
  const nextName = nextStudy === "uat-buddy" ? "UAT Buddy" : nextStudy === "project-status-analyst" ? "Project Status Analyst" : "Weekly Status Automation";

  return (
    <main className="case-study-page">
      <section className="case-study-hero section-pad border-b border-border bg-pure-white">
        <div className="page-shell">
          <Link to="/ai-lab" className="case-study-back"><ArrowLeft className="size-4" aria-hidden="true" /> Back to AI PM Lab</Link>
          <div className="mt-16 max-w-4xl">
            <p className="overline text-primary">AI PM Lab · Evidence-based case study</p>
            <h1 className="display-title mt-5 max-w-[12ch]">{study.name}</h1>
            <p className="case-study-positioning mt-7 max-w-2xl">{study.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-2">{study.tags.map((tag) => <span key={tag} className="case-study-tag">{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <CaseStudySection eyebrow="01 · The problem" title="The delivery friction.">
          <p className="body-copy">{study.problem}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="02 · The solution" title="A practical intervention.">
          <p className="body-copy">{study.solution}</p>
          <div className="case-study-flow mt-10">
            {study.workflow.map((step, index) => <div className="case-study-flow-step" key={step.label}><span className="case-study-flow-number">0{index + 1}</span><strong>{step.label}</strong><p>{step.detail}</p>{index < study.workflow.length - 1 && <MoveRight className="case-study-flow-arrow" aria-hidden="true" />}</div>)}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="03 · My role" title="Leading the change.">
          <p className="body-copy">{study.role}</p>
          <div className="case-study-role-list mt-8 grid gap-3 sm:grid-cols-2">{["Problem identification", "Use-case definition", "Solution and workflow design", "Stakeholder alignment", "Delivery and adoption", "Measurement and improvement"].map((role) => <span key={role}><Check className="size-4 text-primary" aria-hidden="true" />{role}</span>)}</div>
        </CaseStudySection>
      </div>

      <section className="dark-band section-pad case-study-impact">
        <div className="page-shell">
          <p className="overline text-dark-muted">04 · Business impact</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="section-title max-w-[10ch]">Evidence over assumptions.</h2><p className="max-w-md text-sm leading-6 text-dark-muted">Only verified information is shown here. Where a metric is not currently available, the case study says so.</p></div>
          <div className={`case-study-metrics mt-14 ${study.impact.length === 1 ? "single" : ""}`}>{study.impact.map((item) => <div key={item.label}><span>{item.value}</span><p>{item.label}</p></div>)}</div>
        </div>
      </section>

      <div className="page-shell">
        <CaseStudySection eyebrow="05 · How the work changed" title="Before → after.">
          <div className="before-after-grid"><div><p className="overline text-slate">Before</p><ul>{study.before.map((item) => <li key={item}><span>↓</span>{item}</li>)}</ul></div><div><p className="overline text-primary">After</p><ul>{study.after.map((item) => <li key={item}><span>↓</span>{item}</li>)}</ul></div></div>
        </CaseStudySection>
        <CaseStudySection eyebrow="06 · PM insight" title="What this taught me.">
          <ul className="case-study-lessons">{study.lessons.map((lesson) => <li key={lesson}><span aria-hidden="true">—</span>{lesson}</li>)}</ul>
        </CaseStudySection>
      </div>

      <section className="case-study-next border-t border-border">
        <div className="page-shell flex flex-col justify-between gap-7 md:flex-row md:items-center"><div><p className="overline text-primary">Continue exploring</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{nextName}</h2></div><Button asChild variant="outline"><Link to={`/ai-lab/${nextStudy}` as "/ai-lab/uat-buddy"}>Next case study <ArrowRight aria-hidden="true" /></Link></Button></div>
      </section>
    </main>
  );
}