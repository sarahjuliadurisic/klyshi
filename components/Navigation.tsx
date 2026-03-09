"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/directory", label: "Directory" },
  { href: "/adopt", label: "Adopt" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/shop", label: "Shop" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = isHome
    ? scrolled
      ? "bg-[#F7F3EC] shadow-sm"
      : "bg-transparent"
    : "bg-[#F7F3EC] border-b border-black/8";

  const linkColor = isHome && !scrolled ? "text-[#F7F3EC]" : "text-[#0A0A0A]";
  const underlineColor = isHome && !scrolled ? "after:bg-[#F7F3EC]" : "after:bg-[#0A0A0A]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo
            size={isHome && !scrolled ? 56 : 52}
            textSize={isHome && !scrolled ? "text-base" : "text-sm"}
            dark={isHome && !scrolled}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link ${underlineColor} text-[11px] font-medium tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-70 ${linkColor} ${isActive ? "active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-1 ${linkColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-200 ${isHome && !scrolled ? "bg-[#F7F3EC]" : "bg-[#0A0A0A]"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-200 ${isHome && !scrolled ? "bg-[#F7F3EC]" : "bg-[#0A0A0A]"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-200 ${isHome && !scrolled ? "bg-[#F7F3EC]" : "bg-[#0A0A0A]"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px]" : "max-h-0"} bg-[#F7F3EC] border-t border-black/8`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs font-medium tracking-[0.12em] uppercase text-[#0A0A0A] ${isActive ? "opacity-100 font-semibold" : "opacity-60"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
