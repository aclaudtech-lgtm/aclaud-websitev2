import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a software, data, cloud, or AI production-engineering program with aclaud.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-layout">
        <div>
          <p className="eyebrow">Discuss a program</p>
          <h1>Start with the operating problem.</h1>
          <p className="lede">Tell us what you are trying to move forward, what makes it difficult, and what a useful first engagement could clarify.</p>
        </div>
        <div className="contact-card">
          <p className="section-index">DIRECT CONTACT</p>
          <a className="contact-email" href="mailto:admin@aclaud.com">admin@aclaud.com</a>
          <a className="contact-phone" href="tel:+15717211791">571-721-1791</a>
          <div className="contact-note">
            <strong>Useful context to include</strong>
            <ul>
              <li>The outcome or capability you are pursuing</li>
              <li>The current technical or operating bottleneck</li>
              <li>Where aclaud could fit within the wider team</li>
              <li>Any timing, security, or procurement constraints</li>
            </ul>
          </div>
          <a className="button button-brass" href="mailto:admin@aclaud.com?subject=Program%20discussion%20with%20aclaud">Email aclaud</a>
        </div>
      </div>
    </section>
  );
}
