import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { caseStudies } from "@/data/site";

export function CaseStudyLink({
  slug,
  children,
}: {
  slug: "uat-buddy" | "project-status-analyst" | "weekly-status-automation";
  children: React.ReactNode;
}) {
  if (slug === "uat-buddy") return <Link to="/ai-lab/uat-buddy">{children}</Link>;
  if (slug === "project-status-analyst")
    return <Link to="/ai-lab/project-status-analyst">{children}</Link>;
  return <Link to="/ai-lab/weekly-status-automation">{children}</Link>;
}

export function AILabPage() {
  return (
    <main>
      <section className="section-pad border-b border-border bg-pure-white">
        <div className="page-shell">
          <p className="overline text-primary">AI PM Lab</p>
          <h1 className="section-title mt-5 max-w-[12ch]">Evidence from the delivery floor.</h1>
          <p className="body-copy mt-6 max-w-2xl">
            Practical experiments and working solutions that apply AI and automation to real
            project-delivery friction.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="overline text-primary">Live case studies</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                Project → solution → impact
              </h2>
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-slate md:block">
              01 / 03
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className={`solution-card case-study-card ${index === 0 ? "is-featured" : ""}`}
              >
                <span className="status-pill">{study.status}</span>
                <p className="case-study-index mt-7">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{study.name}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">
                  {study.positioning}
                </p>
                <div className="case-study-card-details mt-7 border-y border-border py-5">
                  <div>
                    <span>Business problem</span>
                    <p>{study.businessProblem}</p>
                  </div>
                  <div>
                    <span>AI / automation capability</span>
                    <p>{study.capability}</p>
                  </div>
                  <div>
                    <span>Measured / observed impact</span>
                    <p>{study.impact.map((item) => `${item.value} — ${item.label}`).join(" · ")}</p>
                  </div>
                </div>
                <CaseStudyLink slug={study.slug}>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    Explore case study <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </CaseStudyLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
