"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ShieldAlert, ArrowRight } from "lucide-react";

export default function Navbar({ activePage = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/", id: "home" },
    { label: "SERVICES", href: "/services", id: "services" },
    { label: "ECOSYSTEM", href: "/ecosystem", id: "ecosystem" },
    { label: "ABOUT US", href: "/about", id: "about" },
    { label: "FAQ", href: "/faq", id: "faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-5 transition-all duration-300 pointer-events-none">
      <div className="w-full max-w-[1312px] mx-auto px-4 sm:px-6 pointer-events-auto">
        
        {/* Floating Capsule Bar (Screenshot Base) */}
        <nav
          className={`relative w-full rounded-full transition-all duration-300 border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#02083a]/95 backdrop-blur-md"
              : "bg-[#030C54]"
          }`}
        >
          
          {/* 1. Left: BetterMend Wordmark Logo */}
          <Link href="/" className="flex items-center pl-1 sm:pl-2 group shrink-0">
            <div className="relative h-5 sm:h-6 w-28 sm:w-36 flex items-center">
              <Image
                src="/bettermend wordmark.png"
                alt="BetterMend Urban Services"
                fill
                priority
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>

          {/* 2. Center: Desktop Nav Links with Active & Hover Underline Indicator */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9">
            {navLinks.map((link) => {
              const isActive =
                activePage === link.id ||
                (link.id === "home" && activePage === "") ||
                (link.id === "home" && activePage === "home");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs lg:text-[13px] font-bold tracking-wider transition-colors py-1 group ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  
                  {/* Animated White Underline on Hover and Active State */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2.5px] bg-white rounded-full transition-all duration-250 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* 3. Right: Search Icon + Search Button / Pill Action */}
          <div className="flex items-center gap-3 sm:gap-4 pr-1 sm:pr-2">
            
            {/* Search Trigger */}
            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 animate-fadeIn bg-white/10 rounded-full px-3 py-1 border border-white/20">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search shops, items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-white placeholder:text-white/60 focus:outline-none w-28 sm:w-36"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-white/70 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1.5 text-white/80 hover:text-white transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={2.2} />
                </button>
              )}
            </div>

            {/* White Pill Contact Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-[#030C54] hover:bg-slate-100 font-extrabold text-xs tracking-wider uppercase shadow-md hover:scale-105 transition-all"
            >
              Contact
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white/90 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </nav>

        {/* Mobile Dropdown Menu (Navy Pill Style) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-3xl bg-[#030C54]/95 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-bold tracking-wider py-1.5 transition-colors ${
                    isActive ? "text-white pl-2 border-l-2 border-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/delete-account"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-rose-400 flex items-center gap-1.5 font-semibold"
              >
                <ShieldAlert size={14} />
                Data Deletion
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-white/70 hover:text-white font-semibold"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-white text-[#030C54] font-extrabold text-xs tracking-wider uppercase shadow-md"
              >
                <span>Get the App</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
