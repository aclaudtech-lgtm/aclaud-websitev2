import Link from "next/link";
import { Mark } from "./Mark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/engineering", label: "Engineering" },
  { href: "/contracting", label: "Contracting" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="aclaud home">
          <Mark />
          <span>aclaud</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small button-dark header-cta" href="/contact">Discuss a program</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/contact">Discuss a program</Link>
            <a href="/aclaud-capabilities-statement.pdf">View capabilities</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
