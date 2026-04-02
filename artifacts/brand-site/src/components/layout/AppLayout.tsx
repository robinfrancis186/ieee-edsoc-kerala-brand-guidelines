import { Link, useLocation } from "wouter";
import React from "react";

const BRAND = {
  colors: {
    navy: "#1B3A6B",
    navyDark: "#0F2347",
    orange: "#F47A20",
    midGray: "#9EAFC2",
  },
};

const NAV_ITEMS = [
  { href: "/", label: "Brand Guidelines" },
  { href: "/poster-patterns", label: "Poster Patterns" },
  { href: "/brand-assets", label: "Brand Assets" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex bg-background font-sans">
      <aside
        className="w-64 shrink-0 sticky top-0 h-screen overflow-y-auto flex flex-col"
        style={{ background: BRAND.colors.navyDark }}
      >
        <div className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <img
            src="/ieee-logo-white.png"
            alt="IEEE Education Society Kerala Chapter"
            className="w-full"
            style={{ maxWidth: 180 }}
          />
        </div>
        <nav className="p-4 flex-1">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 px-3" style={{ color: BRAND.colors.midGray }}>
            Brand System
          </p>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="block w-full text-left mb-1 outline-none">
              <div
                className="px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: location === item.href ? BRAND.colors.orange : "transparent",
                  color: location === item.href ? "#fff" : BRAND.colors.midGray,
                }}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: BRAND.colors.midGray }}>
            © 2026 IEEE Education Society<br />Kerala Chapter
          </p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
