import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import { capabilities, career, futureSolutions, liveSolutions } from "@/data/site";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`overline ${light ? "text-dark-muted" : "text-primary"}`}>{children}</p>;
}

function HomePage() {
  return <main>
    <section className="relative overflow-hidden">
      <div className="page-shell pt-[clamp(7rem,12vw,10rem)] pb-20">
        <div className="hero-copy relative z-10 max-w-4xl">
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.14em] text-slate"><span className="size-2 animate-pulse rounded-full bg-primary" />AI-FIRST DELIVERY · ENTERPRISE TRANSFORMATION</div>
          <div className="hero-rule mb-7" />
          <h1 className="display-title max-w-[14ch] text-foreground">AI-First Project &amp; <span className="text-primary">Transformation</span> Leader.</h1>
          <p className="body-copy mt-7 max-w-[36rem]">Turning complex enterprise technology initiatives into measurable business outcomes — powered by AI, automation and Lean-Agile delivery.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg"><Link to="/work">Explore My Work <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="link" size="lg" className="px-1 text-foreground"><Link to="/resume">View Resume <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="hero-metrics">
            <div><div className="metric-number">19<span className="text-primary">+</span></div><div className="metric-label mt-2">Years Enterprise IT</div></div>
            <div><div className="metric-number">50<span className="text-primary">+</span></div><div className="metric-label mt-2">Connected Devices Projects</div></div>
            <div><div className="metric-number">200<span className="text-primary">+</span></div><div className="metric-label mt-2">Enterprise Releases</div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-pure-white" aria-label="Credibility metrics"><div className="page-shell grid grid-cols-2 gap-y-7 py-8 sm:grid-cols-5 sm:gap-6">
      {[['19+', 'Enterprise IT Experience'], ['50+', 'Connected Devices Projects'], ['200+', 'Enterprise Releases'], ['25+', 'Business Stakeholders'], ['30+', 'People / Matrix Leadership']].map(([value, label]) => <div key={label} className="flex flex-col gap-1"><span className="text-2xl font-bold tracking-[-0.05em] text-foreground">{value}</span><span className="text-[0.68rem] leading-tight text-slate">{label}</span></div>)}
    </div></section>

    <section className="section-pad" id="philosophy"><div className="page-shell"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><Label>My Delivery Philosophy</Label></div><div><h2 className="section-title max-w-[12ch] text-foreground">I don&apos;t just manage projects. <span className="text-primary">I engineer better ways to deliver them.</span></h2><p className="body-copy mt-7 max-w-2xl">Combining people, process, technology and AI to create delivery models that are more predictable, intelligent and outcome-driven.</p></div></div><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => <article key={item.number} className="capability-card"><span className="capability-index">{item.number}</span><h3 className="mt-12 text-[1.15rem] font-semibold tracking-[-0.02em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate">{item.copy}</p></article>)}</div></div></section>

    

    <section className="section-pad" id="ai-lab"><div className="page-shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Label>AI PM Lab</Label><h2 className="section-title mt-5">AI PM Lab</h2></div><p className="body-copy max-w-md">Experiments, agents and tools I&apos;m building to rethink project delivery.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{liveSolutions.map((solution) => <article key={solution.title} className={`solution-card ${solution.featured ? 'is-featured' : ''}`}><span className="status-pill">LIVE</span><h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{solution.title}</h3><p className="mt-4 text-sm leading-6 text-slate">{solution.copy}</p><div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5">{solution.lines.map((line) => <span key={line} className="text-xs font-semibold text-foreground/75">{line}</span>)}</div><Link to="/ai-lab" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">Explore <ArrowRight className="size-4" aria-hidden="true" /></Link></article>)}</div><div className="mt-20"><div className="flex items-center gap-4"><span className="overline text-slate">Coming Soon · AI PM Ecosystem</span><span className="h-px flex-1 bg-border" /></div><div className="mt-7 grid gap-4 md:grid-cols-3">{futureSolutions.map((solution) => <article key={solution.title} className="future-card"><span className="status-pill">COMING SOON</span><h3 className="mt-6 text-lg font-semibold">{solution.title}</h3><p className="mt-2 text-sm leading-6 text-slate">{solution.copy}</p></article>)}</div></div></div></section>

    <section className="section-pad border-t border-border bg-pure-white" id="career"><div className="page-shell"><Label>19+ Years of Enterprise Delivery</Label><h2 className="section-title mt-5 max-w-[12ch]">From enterprise technology to <span className="text-primary">AI-first delivery.</span></h2><div className="timeline">{career.map((item) => <article className="timeline-item" key={item.company}><span className="timeline-dot" aria-hidden="true" /><span className="timeline-year">{item.company === 'AI-FIRST DELIVERY' ? 'NOW' : item.company.split(' / ')[0]}</span><h3>{item.company}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="section-pad" id="about"><div className="page-shell grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr]"><div className="portrait-frame w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"><div className="portrait-initials" aria-hidden="true">SK</div><div className="portrait-caption"><span>Professional portrait</span><span>01 / 01</span></div></div><div><Label>About</Label><h2 className="section-title mt-5 max-w-[11ch]">Project Manager. Transformation Leader. AI Builder.</h2><div className="mt-8 max-w-2xl space-y-5"><p className="body-copy">My career has evolved from enterprise technology support and investment banking technology into release management, service delivery, project leadership and digital transformation.</p><p className="body-copy">Today, I&apos;m focused on combining that enterprise experience with AI and automation to create smarter ways of planning, executing and governing technology initiatives.</p></div><div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground"><span className="inline-flex items-center gap-2"><MapPin className="size-4 text-primary" aria-hidden="true" />Bengaluru · India</span><a href="https://www.linkedin.com/in/senthilkumar-karuppiah/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary">LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" /></a><Link to="/about" className="inline-flex items-center gap-2 text-primary">GitHub <Github className="size-4" aria-hidden="true" /></Link><Link to="/resume" className="inline-flex items-center gap-2 text-primary">Resume <ArrowUpRight className="size-4" aria-hidden="true" /></Link></div></div></div></section>

    <section className="dark-band section-pad" id="contact"><div className="page-shell flex flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div><Label light>Next chapter</Label><h2 className="section-title mt-5 max-w-[11ch]">Let&apos;s build the future of delivery.</h2><p className="body-copy mt-6 max-w-md">Exploring opportunities where enterprise transformation, AI and project leadership intersect.</p></div><div className="flex flex-wrap gap-4"><Button asChild size="lg"><a href="https://www.linkedin.com/in/senthilkumar-karuppiah/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowRight aria-hidden="true" /></a></Button><Button asChild variant="outline" size="lg" className="border-dark-line bg-transparent text-pure-white hover:bg-dark-hover hover:text-pure-white"><Link to="/resume">View Resume</Link></Button></div></div></section>

    <footer className="bg-midnight py-9 text-pure-white"><div className="page-shell flex flex-col gap-8 border-t border-white/10 pt-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="text-sm font-bold tracking-[0.13em]">SENTHILKUMAR</span><p className="mt-2 text-[0.65rem] font-semibold tracking-[0.15em] text-blue-100/55">AI-FIRST PROJECT &amp; TRANSFORMATION LEADER</p></div><nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs" aria-label="Footer navigation"><Link to="/work" className="footer-link">Work</Link><Link to="/ai-lab" className="footer-link">AI Lab</Link><Link to="/about" className="footer-link">About</Link><Link to="/resume" className="footer-link">Resume</Link><a href="https://www.linkedin.com/in/senthilkumar-karuppiah/" target="_blank" rel="noopener noreferrer" className="footer-link"><Linkedin className="inline size-3" aria-hidden="true" /> LinkedIn</a><Link to="/about" className="footer-link"><Github className="inline size-3" aria-hidden="true" /> GitHub</Link></nav></div><p className="text-xs text-blue-100/40">© 2026 Senthilkumar Karuppiah</p></div></footer>
  </main>;
}

export { HomePage };