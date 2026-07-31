import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: "Aclaud website privacy policy.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <article className="legal-page shell">
      <p className="eyebrow">Privacy</p>
      <h1>Privacy policy</h1>
      <p className="legal-date">Effective July 30, 2026</p>
      <h2>Information you provide</h2>
      <p>If you contact aclaud by email or phone, we receive the information you choose to share, such as your name, contact details, organization, and the content of your message.</p>
      <h2>How information is used</h2>
      <p>We use information you provide to respond to inquiries, evaluate potential engagements, maintain business records, and protect the security and integrity of our communications.</p>
      <h2>Website data</h2>
      <p>This website does not use advertising cookies or sell personal information. Hosting providers may process limited technical information, such as IP addresses and request logs, to deliver and secure the site.</p>
      <h2>Sharing and retention</h2>
      <p>We do not sell personal information. We may share information with service providers that support our operations, when required by law, or when necessary to protect our rights. We retain information only as long as reasonably needed for these purposes.</p>
      <h2>Your choices</h2>
      <p>You may ask about personal information you have provided or request its correction or deletion, subject to legal and operational requirements.</p>
      <h2>Contact</h2>
      <p>Questions may be sent to <a href="mailto:admin@aclaud.com">admin@aclaud.com</a>.</p>
    </article>
  );
}
