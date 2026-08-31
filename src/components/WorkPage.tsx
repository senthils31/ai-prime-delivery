import { DeliveryIntelligenceEngine } from "@/components/DeliveryIntelligenceEngine";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`overline ${light ? "text-dark-muted" : "text-primary"}`}>{children}</p>;
}

function WorkPage() {
  return (
    <main>
      <section className="section-pad border-b border-border bg-pure-white">
        <div className="page-shell">
          <Label>Work</Label>
          <h1 className="section-title mt-5 max-w-[14ch]">Enterprise delivery, with intent.</h1>
          <p className="body-copy mt-6 max-w-2xl">
            A focused view of project leadership, release management and transformation experience —
            built around the Delivery Intelligence Loop that turns project signals into better decisions.
          </p>
        </div>
      </section>

      <section className="dark-band section-pad overflow-hidden" id="delivery-loop">
        <div className="page-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Label light>The Delivery Intelligence Loop</Label>
              <h2 className="section-title mt-5 max-w-[11ch]">Every project generates signals.</h2>
              <p className="body-copy mt-7 max-w-md">The opportunity is turning those signals into better decisions.</p>
              <div className="mt-9 grid gap-4 text-sm text-dark-muted">
                <span><strong className="mr-3 text-primary">01—05</strong>Signal to decision</span>
                <span><strong className="mr-3 text-primary">AI</strong>Interpretation layer</span>
                <span><strong className="mr-3 text-primary">↺</strong>Continuous improvement</span>
              </div>
            </div>
            <div>
              <DeliveryIntelligenceEngine large />
            </div>
          </div>
          <div className="mt-10 grid gap-4 border-t border-dark-line pt-8 md:grid-cols-5">
            {['PLAN', 'EXECUTE', 'OBSERVE', 'INTELLIGENCE', 'OPTIMIZE'].map((stage, index) => (
              <div key={stage}>
                <span className="text-xs font-bold text-primary">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold">{stage}</p>
                <p className="mt-2 text-xs leading-5 text-dark-muted">
                  {['AI-assisted planning', 'Structured delivery', 'Capture project signals', 'AI interprets the signals', 'Improve delivery'][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export { WorkPage };
