import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-geetanjali.png";
import { COLLEGE } from "@/lib/college";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Geethanjali logo" width={56} height={56} className="h-14 w-14 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-primary">Geethanjali</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Educational Institutions</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#courses" className="hover:text-primary">Courses</a>
          <a href="#toppers" className="hover:text-primary">Toppers</a>
          <a href="#team" className="hover:text-primary">Team</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <a
          href="#enroll"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90"
        >
          Enroll Now
        </a>
      </div>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs">
          Admissions Open 2026 · {COLLEGE.phones.join(" · ")}
        </div>
      </div>
    </header>
  );
}
