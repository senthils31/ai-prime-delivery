import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  "Delivered 50+ connected-device enterprise projects across complex technology environments",
  "Led enterprise programs, releases, and transformation initiatives supporting critical business operations",
  "Managed cross-functional teams across technology, business, vendors, and global stakeholders",
  "Worked across healthcare/life sciences and financial services, including experience supporting UBS Investment Banking and JPMorgan Chase",
  "Driven Agile / Lean-Agile delivery, governance, risk management, stakeholder engagement, vendor management, and service excellence",
  "Partnered with senior technology and business leadership to drive execution, resolve risks, and deliver outcomes",
];

const aiExamples = [
  "UAT support",
  "Project status analysis",
  "Executive reporting",
  "Project knowledge management",
  "Documentation",
  "Workflow automation",
];

const coreAreas = [
  "Project & Program Management",
  "Enterprise Delivery",
  "Enterprise Transformation",
  "AI Transformation",
  "Digital Transformation",
  "GenAI",
  "AI Agents",
  "Intelligent Automation",
  "Service Delivery",
  "Release Management",
  "PMO",
  "Agile / Lean-Agile",
  "Global Delivery",
  "Stakeholder & Vendor Management",
];

const openTo = [
  "AI Transformation Leadership",
  "Digital Transformation",
  "Senior Project / Program Management",
  "Enterprise Delivery Leadership",
  "AI-Enabled Delivery",
  "Technology Transformation",
];

export function AboutPage() {
  return (
    <main>
      <section className="section-pad border-b border-border">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="portrait-frame">
            <div className="portrait-initials" aria-hidden="true">
              SK
            </div>
            <div className="portrait-caption">
              <span>Professional portrait</span>
              <span>01 / 01</span>
            </div>
          </div>

          <div>
            <p className="overline text-primary">About</p>
            <h1 className="section-title mt-5 max-w-[12ch] text-foreground">
              Project Manager. Transformation Leader. AI Builder.
            </h1>
            <div className="mt-8 max-w-2xl space-y-5">
              <p className="body-copy">
                I&apos;m an AI-First Project &amp; Transformation Leader with 19+ years of enterprise IT
                experience across Project &amp; Program Management, Service Delivery, Release
                Management, and Digital Transformation.
              </p>
              <p className="body-copy">
                I specialize in turning complex technology initiatives into structured, measurable
                business outcomes—bringing together people, processes, technology, governance, and AI
                to deliver transformation at scale.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                Over my career, I have
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Bengaluru · India
              </span>
              <a
                href="https://www.linkedin.com/in/senthilkumar-karuppiah/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary"
              >
                LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-pure-white">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="overline text-primary">AI + Transformation</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="section-title max-w-[16ch] text-foreground">
                Using AI to amplify experienced teams.
              </h2>
              <div className="mt-7 space-y-5">
                <p className="body-copy">
                  I&apos;m focused on the intersection of AI, enterprise delivery, and
                  transformation—using Generative AI, AI agents, and intelligent automation to make
                  project and service delivery more proactive, data-driven, and efficient.
                </p>
                <p className="body-copy">
                  I&apos;ve applied AI and automation to real-world delivery challenges, including:
                </p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aiExamples.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-cloud px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="body-copy mt-6">
                Examples include AI-enabled solutions such as UAT Buddy, Project Status Analyst,
                and automated project-status reporting, helping teams reduce repetitive effort and
                improve access to project insights.
              </p>
              <p className="body-copy mt-5">
                My approach is simple: use AI to amplify experienced teams—not replace strong
                delivery fundamentals. I&apos;m particularly interested in building and leading
                AI-enabled transformation initiatives that improve decision-making, automate
                repetitive work, accelerate delivery, strengthen governance, and create measurable
                business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-pure-white p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              Core Areas
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {coreAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-cloud px-3.5 py-1.5 text-xs font-semibold text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-pure-white p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              Open to
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {openTo.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-primary/20 bg-blue-wash px-3.5 py-1.5 text-xs font-semibold text-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-band section-pad">
        <div className="page-shell flex flex-col items-start justify-between gap-9 md:flex-row md:items-end">
          <div>
            <p className="overline text-dark-muted">Next chapter</p>
            <h2 className="section-title mt-5 max-w-[11ch]">
              Let&apos;s build the future of delivery.
            </h2>
            <p className="body-copy mt-6 max-w-md">
              Exploring opportunities where enterprise transformation, AI and project leadership
              intersect.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a
                href="https://www.linkedin.com/in/senthilkumar-karuppiah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <Linkedin className="ml-2 size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-dark-line bg-transparent text-pure-white hover:bg-dark-hover hover:text-pure-white"
            >
              <Link to="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
