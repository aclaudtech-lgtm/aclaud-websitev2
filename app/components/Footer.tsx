import Link from "next/link";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Mark />
          <p>Aclaud Technologies LLC</p>
          <span>From promising software to dependable operations.</span>
        </div>
        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href="mailto:admin@aclaud.com">admin@aclaud.com</a>
          <a href="tel:+15717211791">571-721-1791</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Company</p>
          <span>Small Business</span>
          <span>Primary NAICS <code>541512</code></span>
          <span>UEID <code>XUG8KR7ADNL3</code></span>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/engineering">Engineering</Link>
          <Link href="/contracting">Contracting</Link>
          <a href="/aclaud-capabilities-statement.pdf">View capabilities</a>
        </div>
      </div>
      <div className="shell footer-legal">
        <p>© 2026 Aclaud Technologies LLC</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/accessibility">Accessibility</Link></div>
      </div>
    </footer>
  );
}
