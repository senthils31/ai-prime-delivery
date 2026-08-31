import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loopStages, type LoopStage } from "@/data/site";

type Props = { large?: boolean };

export function DeliveryIntelligenceEngine({ large = false }: Props) {
  const [activeKey, setActiveKey] = useState<LoopStage["key"]>("intelligence");
  const active: LoopStage = loopStages.find((stage) => stage.key === activeKey) ?? {
    key: "intelligence",
    number: "04",
    title: "INTELLIGENCE",
    summary: "AI interprets the signals",
    details: "Insights · Patterns · Recommendations",
  };

  return (
    <div className="engine-block">
    <div className={`engine-shell ${large ? "large" : ""}`} aria-label="Delivery Intelligence Loop interactive diagram">
      <div className="engine-grid" aria-hidden="true" />
      <div className="engine-orbit" aria-hidden="true" />
      <svg className="engine-svg" viewBox="0 0 500 450" role="img" aria-label="Plan, execute, observe, intelligence and optimize connected in a continuous loop">
        <path className="engine-path" d="M135 65 C245 15 390 78 420 180 C450 290 350 400 245 405 C130 410 62 330 74 220 C80 140 95 90 135 65" />
        <path className="engine-path engine-path-violet" d="M135 65 C210 100 260 130 300 225 C340 320 370 350 420 360" />
        <path className="engine-path" d="M420 180 C350 150 270 128 200 190 C125 255 94 310 74 360" />
      </svg>
      {loopStages.map((stage) => <Button key={stage.key} variant="loop" className={`loop-node node-${stage.key} ${stage.key === "intelligence" ? "is-ai" : ""} ${activeKey === stage.key ? "is-active" : ""}`} aria-pressed={activeKey === stage.key} onClick={() => setActiveKey(stage.key)} onMouseEnter={() => setActiveKey(stage.key)}>
        <small>{stage.number}</small><strong>{stage.title}</strong>
      </Button>)}
      <div className="engine-center" aria-hidden="true"><div><span>✦</span><strong>DELIVERY<br />INTELLIGENCE</strong></div></div>
    </div>
      <div className="loop-insight" aria-live="polite"><strong>{active.title}</strong><p>{active.summary}<br />{active.details}</p></div>
    </div>
  );
}