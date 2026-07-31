import type { Metadata } from "next";
import Link from "next/link";
import { HeroSystem, ProgramFit } from "./components/Diagrams";

export const metadata: Metadata = {
  title: "aclaud | Production Engineering for Software and AI",
  description:
    "aclaud helps federal programs, prime contractors, and enterprise teams move ambitious software and AI initiatives into secure, reliable production.",
  alternates: { canonical: "/" },
};

const capabilityAreas = [
  {
    label: "01",
    title: "Stronger software foundations",
    copy: "Improve critical applications so they are easier to change, integrate, secure, and operate.",
    items: ["Application renewal", "API and integration design", "Distributed-system architecture", "Production hardening", "Delivery automation"],
  },
  {
    label: "02",
    title: "Trusted data and AI foundations",
    copy: "Make enterprise information usable for analytics, automation, and AI while preserving access boundaries, traceability, and data quality.",
    items: ["Data platforms", "Knowledge structures", "Retrieval systems", "Agent workflows", "Evaluation and observability"],
  },
  {
    label: "03",
    title: "Reliable cloud and platform operations",
    copy: "Create secure, resilient environments with clear controls for availability, performance, cost, and operational response.",
    items: ["Cloud architecture", "Platform engineering", "Identity and authorization", "Observability", "Reliability and cost controls"],
  },
];

const principles = [
  {
    title: "Production is the product",
    copy: "A system is not finished when it deploys. It must perform reliably under real operating conditions.",
  },
  {
    title: "Earn trust through evidence",
    copy: "Architecture, testing, observability, documentation, and measurable behavior are more valuable than broad claims.",
  },
  {
    title: "Build for what comes next",
    copy: "Every engagement should improve the customer’s system and create reusable patterns that strengthen future delivery.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Production engineering for software &amp; AI</p>
          <h1 id="hero-title">Build what comes next. Operate it with confidence.</h1>
          <p className="lede">
            aclaud helps federal programs and enterprise teams turn ambitious software and AI initiatives into secure, reliable production systems.
          </p>
          <p className="hero-support">
            We strengthen the applications, data, cloud foundations, and operating controls required for new capabilities to perform safely in real environments.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/contact">Discuss a program</Link>
            <Link className="text-link" href="/engineering">Explore the engineering <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <HeroSystem />
      </section>

      <section className="dark-section">
        <div className="shell editorial-split">
          <p className="section-index">THE OPERATING GAP</p>
          <div>
            <h2>The hard part begins after the prototype.</h2>
            <p className="large-copy">
              Software can now be created faster than many organizations can safely put it into production.
            </p>
            <p>
              The challenge is no longer limited to writing code. Teams must determine how new applications and AI-enabled workflows will access data, use enterprise tools, inherit permissions, recover from failure, control cost, and remain understandable once they are operating.
            </p>
            <p>
              In federal environments, these concerns are amplified by existing systems, sensitive information, security requirements, and the need to introduce change without interrupting ongoing programs.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section-pad" aria-labelledby="deliver-title">
        <div className="section-heading">
          <p className="eyebrow">What aclaud delivers</p>
          <h2 id="deliver-title">The foundations that make new capability dependable.</h2>
        </div>
        <div className="editorial-list">
          {capabilityAreas.map((area) => (
            <article className="capability-row" key={area.title}>
              <p className="row-number">{area.label}</p>
              <div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </div>
              <ul className="compact-list">
                {area.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sage-section">
        <div className="shell fit-layout">
          <div>
            <p className="eyebrow">Where we fit</p>
            <h2>Specialized engineering, integrated with your program.</h2>
            <p>
              aclaud works alongside agency teams, prime contractors, and existing delivery organizations. We can support a focused technical workstream, strengthen a broader solution, or help move a prototype toward dependable production.
            </p>
            <ul className="engagement-list">
              <li>Focused prototype or pilot</li>
              <li>Specialized subcontract work package</li>
              <li>Architecture and capture support</li>
              <li>Production-readiness assessment</li>
              <li>Commercial engineering engagement</li>
            </ul>
          </div>
          <ProgramFit />
        </div>
      </section>

      <section className="shell section-pad" aria-labelledby="work-title">
        <div className="editorial-split light">
          <p className="section-index">HOW WE WORK</p>
          <div>
            <h2 id="work-title">Engineering built around the customer’s bottleneck.</h2>
            <p className="large-copy">
              aclaud starts with the operating problem—not a preferred technology.
            </p>
            <p>
              We work backward from the outcomes, constraints, and risks that matter to the program. The goal is to leave behind a system that remains secure, understandable, and supportable after the initial work is complete.
            </p>
          </div>
        </div>
        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell technical-preview" aria-labelledby="preview-title">
        <div className="section-heading">
          <p className="eyebrow">Engineering perspective</p>
          <h2 id="preview-title">See how we approach the engineering.</h2>
        </div>
        <div className="preview-links">
          <Link href="/engineering#architecture"><span>From prototype to production</span><span aria-hidden="true">↗</span></Link>
          <Link href="/engineering#agentic-systems"><span>Authorization for tool-using AI systems</span><span aria-hidden="true">↗</span></Link>
          <Link href="/engineering#production-model"><span>Reliability, cost, and operational control</span><span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <p className="eyebrow">Start with the constraint</p>
          <h2>Working through a difficult software or AI program?</h2>
          <p>Let’s identify the technical bottleneck, the operating constraints, and the smallest useful engagement that can reduce risk.</p>
          <div className="actions">
            <Link className="button button-brass" href="/contact">Discuss a program</Link>
            <a className="text-link text-link-light" href="/aclaud-capabilities-statement.pdf">Download capabilities statement <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
