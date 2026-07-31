import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contracting Information",
  description: "Aclaud Technologies LLC contracting identifiers, NAICS codes, engagement models, and capabilities statement.",
  alternates: { canonical: "/contracting" },
};

export default function ContractingPage() {
  return (
    <>
      <section className="page-hero shell compact-hero">
        <p className="eyebrow">Contracting information</p>
        <h1>A focused engineering partner for difficult technical work.</h1>
        <p className="lede">aclaud supports prime contractors, agency teams, and commercial organizations through clearly defined engineering engagements.</p>
      </section>
      <section className="shell contracting-grid">
        <article className="contract-facts">
          <p className="section-index">COMPANY PROFILE</p>
          <dl>
            <div><dt>Legal name</dt><dd>Aclaud Technologies LLC</dd></div>
            <div><dt>Business type</dt><dd>Small Business</dd></div>
            <div><dt>UEID</dt><dd><code>XUG8KR7ADNL3</code></dd></div>
            <div><dt>Primary NAICS</dt><dd><code>541512</code> — Computer Systems Design Services</dd></div>
            <div><dt>Additional NAICS</dt><dd><code>541511</code> · <code>541519</code> · <code>541690</code></dd></div>
            <div><dt>Email</dt><dd><a href="mailto:admin@aclaud.com">admin@aclaud.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+15717211791">571-721-1791</a></dd></div>
          </dl>
          <a className="button button-dark" href="/aclaud-capabilities-statement.pdf">View capabilities statement</a>
        </article>
        <article className="engagement-models">
          <p className="section-index">ENGAGEMENT MODELS</p>
          <h2>Start with a bounded problem.</h2>
          <p>Each engagement should have a clear technical objective, visible constraints, and a practical path to value.</p>
          <ol>
            <li><span>01</span><div><strong>Specialized subcontract work package</strong><p>A focused engineering contribution integrated with a larger federal program.</p></div></li>
            <li><span>02</span><div><strong>Capture &amp; solution support</strong><p>Technical architecture and engineering input during solution development.</p></div></li>
            <li><span>03</span><div><strong>Prototype or pilot</strong><p>A small, evidence-driven effort to test value, integration, and production constraints.</p></div></li>
            <li><span>04</span><div><strong>Focused architecture assessment</strong><p>A practical review of production readiness, risks, and next actions.</p></div></li>
            <li><span>05</span><div><strong>Commercial engineering engagement</strong><p>Software, data, cloud, or AI engineering tied to a defined operating outcome.</p></div></li>
            <li><span>06</span><div><strong>Future direct-prime opportunities</strong><p>Direct support where the requirement, scope, and delivery model are a strong fit.</p></div></li>
          </ol>
        </article>
      </section>
      <section className="final-cta">
        <div className="shell">
          <p className="eyebrow">Program conversations</p>
          <h2>Bring us the technical bottleneck.</h2>
          <p>We’ll help identify a focused contribution that complements the program and produces useful evidence quickly.</p>
          <Link className="button button-brass" href="/contact">Discuss a program</Link>
        </div>
      </section>
    </>
  );
}
