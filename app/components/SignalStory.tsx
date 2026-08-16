"use client";

import { useState, type CSSProperties } from "react";

const stages = [
  {
    label: "Observe",
    title: "Start with the source.",
    copy: "Record the sample, method, unit, and result before you compare values.",
    stats: ["12 samples", "4 methods", "2 missing units"],
    values: [38, 54, 44, 72, 62, 48, 84, 58, 68, 46, 76, 64],
  },
  {
    label: "Structure",
    title: "Make the data dependable.",
    copy: "Use typed fields. Mark missing values. Keep each source beside its value.",
    stats: ["10 clean rows", "2 review flags", "12 source links"],
    values: [38, 54, 44, 72, 62, 48, 84, 58, 68, 46, 76, 64],
  },
  {
    label: "Decide",
    title: "State the decision and its limits.",
    copy: "Compare groups, show uncertainty, and name the next action.",
    stats: ["1 clear trend", "2 limits", "1 next test"],
    values: [32, 42, 46, 52, 56, 61, 65, 69, 73, 77, 81, 86],
  },
];

export function SignalStory() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className="signal-section" aria-labelledby="signal-title">
      <div className="signal-copy">
        <p className="eyebrow light">A small data story · Illustrative data</p>
        <h2 id="signal-title">Good analysis starts with a traceable question.</h2>
        <div className="signal-tabs" role="group" aria-label="Data story stages">
          {stages.map((item, index) => (
            <button
              type="button"
              key={item.label}
              className={index === active ? "active" : ""}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <span>0{index + 1}</span> {item.label}
            </button>
          ))}
        </div>
        <div className="signal-explanation" aria-live="polite">
          <h3>{stage.title}</h3>
          <p>{stage.copy}</p>
        </div>
      </div>

      <div className="signal-visual">
        <div className="chart-header">
          <span>Sample signal</span>
          <span>n = 12</span>
        </div>
        <div className={`bar-chart stage-${active + 1}`} aria-hidden="true">
          {stage.values.map((value, index) => (
            <span
              key={`${active}-${index}`}
              className={active === 1 && (index === 5 || index === 9) ? "flag" : ""}
              style={{ "--bar-value": `${value}%` } as CSSProperties}
            />
          ))}
        </div>
        <div className="chart-stats">
          {stage.stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
        <p className="chart-note">
          These sample values explain a method. They do not show a research
          result.
        </p>
      </div>
    </section>
  );
}
