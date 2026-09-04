import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlaceholderPage({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <main className="placeholder-page">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="overline text-primary">{eyebrow}</p>
          <h1 className="section-title mt-5 max-w-[10ch]">{title}</h1>
          <p className="body-copy mt-7 max-w-lg">{copy}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/">
                Back to headquarters <ArrowLeft aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/about">
                Let&apos;s talk <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
