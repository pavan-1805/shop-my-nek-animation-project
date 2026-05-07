import { useState } from "react";
import logo from "@/assets/navBar-Images/logo.png";

const navLinks = [
  { label: "ABOUT US", href: "#about", dropdown: false },
  { label: "PRODUCTS", href: "#shop", dropdown: true },
  { label: "FAQs", href: "#faqs", dropdown: false },
  { label: "CONTACT US", href: "#contact", dropdown: false },
];

export function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink border-b border-bone/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center gap-0.5 shrink-0">
          <img src={logo} alt="MYNEK" className="h-12 w-auto object-contain" />
          <span className="h-1 w-1 rounded-full bg-blood pulse-blood" />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href, dropdown }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.2em] text-bone/80 transition-colors hover:text-bone"
              >
                {label}
                {dropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-3 w-3 mt-px"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <button
          aria-label="Cart"
          className="relative flex items-center justify-center text-bone/80 transition-colors hover:text-bone"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blood text-[9px] font-bold text-bone">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
