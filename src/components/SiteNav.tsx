import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Work", to: "/work" },
  { label: "AI Lab", to: "/ai-lab" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-nav fixed inset-x-0 top-0 z-50 border-b border-transparent ${scrolled ? "is-scrolled" : ""}`}>
      <div className="page-shell flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none" aria-label="Senthilkumar Karuppiah home">
          <span className="text-[0.8rem] font-bold tracking-[0.13em] text-foreground">SENTHILKUMAR</span>
          <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.17em] text-muted-foreground">AI-FIRST DELIVERY</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.to} to={link.to} className="nav-link text-[0.72rem] font-semibold uppercase tracking-[0.12em]" activeProps={{ "data-status": "active" }}>{link.label}</Link>)}
          <Button asChild variant="link" className="h-auto p-0 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-foreground no-underline hover:no-underline">
            <Link to="/about">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="min-h-11 min-w-11 md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-8 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="page-shell flex flex-col items-start gap-4">
          {links.map((link) => <Link key={link.to} to={link.to} className="nav-link text-sm font-semibold uppercase tracking-[0.12em]">{link.label}</Link>)}
          <Link to="/about" className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">Let&apos;s talk <ArrowUpRight className="inline size-4" aria-hidden="true" /></Link>
        </div>
      </nav>}
    </header>
  );
}