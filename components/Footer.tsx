import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F7F3EC] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size={90} textSize="text-base" dark />
            <p className="mt-4 text-xs leading-relaxed text-white/50 max-w-[200px]">
              Building a global pathway to bring every dog forever home.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Resources", "/resources"],
                ["Directory", "/directory"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">
              More
            </p>
            <ul className="space-y-2.5">
              {[
                ["Adopt", "/adopt"],
                ["Get Involved", "/get-involved"],
                ["Shop", "/shop"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-4">
              Connect
            </p>
            <a
              href="mailto:woof@klyshi.org"
              className="text-xs text-white/60 hover:text-white transition-colors block mb-4"
            >
              woof@klyshi.org
            </a>
            <div className="flex gap-4 mt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/30 tracking-wide">
            © {new Date().getFullYear()} Klyshi. Prishtina, Kosovo. All rights reserved.
          </p>
          <p className="text-[10px] text-white/20 tracking-wide">
            Made with love for dogs everywhere 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}
