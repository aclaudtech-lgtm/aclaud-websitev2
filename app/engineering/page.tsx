import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Perspective",
  description: "How aclaud approaches access, behavior, operations, and economics when moving software and AI systems into dependable production.",
  alternates: { canonical: "/engineering" },
};

const readiness = [
  {
    title: "Access",
    question: "What data, tools, and systems can the workload use?",
    items: ["Identity", "Delegated authority", "Least privilege", "Task-scoped access", "Approval boundaries"],
  },
  {
    title: "Behavior",
    question: "How do teams know the system is behaving as intended?",
    items: ["Evaluation", "Testing", "Policy enforcement", "Output validation", "Human review"],
  },
  {
    title: "Operations",
    question: "How is the system monitored, controlled, and recovered?",
    items: ["Observability", "Rollback", "Rate limits", "Failure isolation", "Incident response"],
  },
  {
    title: "Economics",
    question: "How does the system remain cost-effective as usage changes?",
    items: ["Resource policies", "Workload placement", "Cost visibility", "Performance tradeoffs", "Capacity planning"],
  },
];

const patterns = [
  {
    name: "Read-only assistant",
    use: "Searching or synthesizing approved information without changing external systems.",
    risk: "Over-broad access, unsupported answers, and sensitive data exposure.",
    controls: "Scoped retrieval, source citations, data classification, and output evaluation.",
    model: "Observe continuously; keep actions outside the system boundary.",
  },
  {
    name: "Human-approved workflow",
    use: "Preparing a consequential action for explicit review before execution.",
    risk: "Approval fatigue, ambiguous context, and unauthorized changes.",
    controls: "Clear action previews, named approvers, expiring authority, and immutable audit records.",
    model: "Separate preparation from execution and make the approval boundary visible.",
  },
  {
    name: "Bounded transactional workflow",
    use: "Performing a narrow set of predefined actions within strict authorization limits.",
    risk: "Scope drift, repeated actions, and downstream partial failure.",
    controls: "Task-scoped permissions, idempotency, rate limits, validation, and rollback paths.",
    model: "Automate only the bounded path; escalate exceptions to an operator.",
  },
  {
    name: "Coordinated multi-agent workflow",
    use: "Dividing complex work across specialized agents while maintaining central control.",
    risk: "Compounded errors, unclear delegation, hidden cost, and incomplete traceability.",
    controls: "A tool registry, policy checks, shared telemetry, budget controls, and revocation.",
    model: "Centralize policy and evidence even when work is distributed.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow">Engineering perspective</p>
        <h1>Moving software from possibility to dependable operation.</h1>
        <p className="lede">
          New software and AI capabilities create value only when they can operate securely, predictably, and economically inside real enterprise environments.
        </p>
        <p>This page explains the engineering concerns aclaud considers when helping teams move from prototype to production.</p>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="shell">
          <div className="section-heading architecture-heading">
            <p className="eyebrow">Reference architecture</p>
            <h2>Trust is built across the whole operating system.</h2>
            <p>Applications, controls, data, infrastructure, and operations have to work as one system. Production readiness is an architectural property, not a final checklist.</p>
          </div>
          <ReferenceArchitecture />
        </div>
      </section>

      <section className="shell section-pad" id="production-model">
        <div className="section-heading">
          <p className="eyebrow">Production-readiness model</p>
          <h2>Four concerns. One operating reality.</h2>
          <p>A production system is only as dependable as the connections between access, behavior, operations, and economics.</p>
        </div>
        <div className="readiness-model">
          <div className="readiness-core">DEPENDABLE<br />OPERATIONS</div>
          {readiness.map((item, index) => (
            <article className={`readiness-item readiness-${index + 1}`} key={item.title}>
              <div><span>0{index + 1}</span><h3>{item.title}</h3></div>
              <p>{item.question}</p>
              <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section" id="agentic-systems">
        <div className="shell agent-layout">
          <div>
            <p className="section-index">TOOL-USING SYSTEMS</p>
            <h2>When software can act, authorization becomes part of the design.</h2>
            <p className="large-copy">
              A system that uses tools or changes external state creates concerns beyond a conversational assistant.
            </p>
          </div>
          <div>
            <p>
              Teams need to know which identity is acting, what authority has been delegated, which tools are available, and when a human must approve a consequential action. That authority should be narrow, time-bound, observable, and revocable.
            </p>
            <p>
              Traceability must cover the request, relevant context, policy decisions, tool calls, outputs, and resulting changes. Replay and forensic review should be possible without giving the system uncontrolled memory or access to unrelated data.
            </p>
            <div className="control-terms" aria-label="Agentic system control considerations">
              {["Agent identity", "Delegated authorization", "Tool registry", "Approval gates", "Traceability", "Revocation", "Data boundaries", "Failure containment", "Cost controls"].map((term) => <span key={term}>{term}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <div className="platform-layout">
          <div>
            <p className="eyebrow">Deployment &amp; platform engineering</p>
            <h2>The environment is part of the application.</h2>
          </div>
          <div className="platform-copy">
            <p>
              aclaud evaluates the application and its operating environment together: architecture, isolation, infrastructure automation, cloud-service selection, availability requirements, recovery objectives, secrets, network boundaries, deployment strategy, and operational response.
            </p>
            <p>
              The right design depends on the workload. A strong platform is not the one with the most services. It is the one that makes the program’s security, reliability, and cost decisions explicit—and makes routine operation easier to understand.
            </p>
          </div>
        </div>
        <div className="tradeoff-line" aria-label="Engineering tradeoffs">
          <span>Availability</span><i aria-hidden="true" /><span>Security</span><i aria-hidden="true" /><span>Operability</span><i aria-hidden="true" /><span>Cost</span>
        </div>
      </section>

      <section className="patterns-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Integration patterns</p>
            <h2>Match autonomy to the operating boundary.</h2>
            <p>Use the least complex pattern that can achieve the outcome safely. Greater autonomy requires stronger controls and clearer evidence.</p>
          </div>
          <div className="pattern-table" role="table" aria-label="AI workflow integration patterns">
            <div className="pattern-header" role="row">
              <span role="columnheader">Pattern</span><span role="columnheader">Appropriate use</span><span role="columnheader">Primary risks</span><span role="columnheader">Controls &amp; operating model</span>
            </div>
            {patterns.map((pattern, index) => (
              <article className="pattern-row" role="row" key={pattern.name}>
                <div role="cell"><span>0{index + 1}</span><h3>{pattern.name}</h3></div>
                <p role="cell">{pattern.use}</p>
                <p role="cell">{pattern.risk}</p>
                <p role="cell"><strong>{pattern.controls}</strong> {pattern.model}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell technical-capabilities">
        <div>
          <p className="eyebrow">Technical capabilities</p>
          <h2>Depth connected to outcomes.</h2>
          <p>aclaud applies these disciplines to make systems easier to change, safer to operate, and clearer to govern.</p>
        </div>
        <div className="capability-lines">
          {[
            ["Enterprise application engineering", "Evolvable applications and interfaces"],
            ["Distributed systems", "Predictable behavior across service boundaries"],
            ["Data-platform engineering", "Usable data with traceable access"],
            ["Cloud & platform engineering", "Repeatable, resilient operating environments"],
            ["Agent workflow engineering", "Bounded actions with visible controls"],
            ["Identity & authorization", "Clear authority at every boundary"],
            ["Evaluation & observability", "Evidence of system behavior"],
            ["Reliability engineering", "Recovery designed before failure"],
            ["Cost-aware architecture", "Performance aligned with economics"],
            ["DevSecOps & delivery automation", "Safer, repeatable change"],
          ].map(([capability, outcome]) => <div key={capability}><strong>{capability}</strong><span>{outcome}</span></div>)}
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <p className="eyebrow">A useful first step</p>
          <h2>Make the operating constraints visible.</h2>
          <p>We can help assess the architecture, define a focused workstream, or move a promising prototype closer to dependable production.</p>
          <div className="actions">
            <Link className="button button-brass" href="/contact">Discuss a program</Link>
            <a className="text-link text-link-light" href="/aclaud-capabilities-statement.pdf">View capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

function ReferenceArchitecture() {
  const rows = [
    ["Experience & workflow", ["Users", "Operators", "Human approvals", "Existing applications"]],
    ["Application & agent", ["Application services", "AI workflows", "Orchestration", "Tool use"]],
    ["Control", ["Identity", "Authorization", "Policy checks", "Approval gates", "Budget & rate controls", "Audit records"]],
    ["Data & integration", ["Enterprise APIs", "Operational databases", "Search & retrieval", "Event streams", "Knowledge structures"]],
    ["Platform", ["Cloud services", "Containers / serverless", "Networking", "Secrets", "Infrastructure configuration"]],
    ["Operations", ["Metrics", "Logs", "Traces", "Security events", "Cost visibility", "Reliability objectives", "Incident response"]],
  ];
  return (
    <figure className="reference-architecture">
      <figcaption>
        <span>Intent flows down</span><span>Evidence flows up</span>
      </figcaption>
      <div className="architecture-flow" aria-hidden="true"><span>OUTCOMES &amp; INTENT ↓</span><span>↑ TELEMETRY &amp; EVIDENCE</span></div>
      {rows.map(([name, items], index) => (
        <div className={`architecture-row architecture-row-${index + 1}`} key={name as string}>
          <div className="architecture-label"><span>0{index + 1}</span><strong>{name as string}</strong></div>
          <div className="architecture-items">{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      ))}
    </figure>
  );
}
