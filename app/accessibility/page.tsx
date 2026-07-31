import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accessibility", description: "Aclaud website accessibility statement.", alternates: { canonical: "/accessibility" } };

export default function AccessibilityPage() {
  return (
    <article className="legal-page shell">
      <p className="eyebrow">Accessibility</p>
      <h1>Accessibility statement</h1>
      <p className="legal-date">Last updated July 30, 2026</p>
      <p>aclaud is committed to providing a website that is usable by the widest possible audience, including people who use assistive technologies.</p>
      <h2>Our approach</h2>
      <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. The site is designed with semantic structure, keyboard access, visible focus states, readable contrast, responsive layouts, and reduced-motion preferences.</p>
      <h2>Ongoing work</h2>
      <p>Accessibility is an ongoing practice. We review the site as content and technology change and address issues that may create barriers.</p>
      <h2>Feedback</h2>
      <p>If you encounter an accessibility barrier, please email <a href="mailto:admin@aclaud.com?subject=Website%20accessibility">admin@aclaud.com</a> or call <a href="tel:+15717211791">571-721-1791</a>. Please describe the page, the issue, and the assistive technology or browser you were using when relevant.</p>
    </article>
  );
}
