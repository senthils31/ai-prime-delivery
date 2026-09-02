import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { caseStudies } from "@/data/site";

export function AILabPage() {
  return (
    <main>
      <section className="section-pad border-b border-border bg-pure-white">
        <div className="page-shell">
          <p className="overline text-primary">AI PM Lab</p>
          <h1 className="section-title mt-5 max-w-[12ch]">Evidence from the delivery floor.</h1>
          <p className="body-copy mt-6 max-w-2xl">
            Practical experiments and working solutions that apply AI and automation to real project-delivery friction.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="overline text-primary">Live case studies</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Project → solution → impact</h2>
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-slate md:block">01 / 03</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.slug} className={`solution-card case-study-card ${index === 0 ? "is-featured" : ""}`}>
                <span className="status-pill">LIVE CASE STUDY</span>
                <p className="case-study-index mt-7">0{index + 1}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{study.name}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">{study.positioning}</p>
                <div className="case-study-card-flow mt-7 border-y border-border py-5">
                  <span>Problem</span><span aria-hidden="true">↓</span><span>Solution</span><span aria-hidden="true">↓</span><span>Impact</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate">{study.copy}</p>
                <Link to={`/ai-lab/${study.slug}` as "/ai-lab/uat-buddy"} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  Explore case study <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}