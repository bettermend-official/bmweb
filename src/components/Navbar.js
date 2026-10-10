"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Search,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Compass,
  CornerDownLeft,
} from "lucide-react";

const searchableItems = [
  // Core Services
  {
    id: "transportation",
    title: "Transportation & Mobility",
    category: "Services",
    description: "Daily auto & bike rides, self-drive rentals, and premium intercity cab fleets.",
    href: "/services/transportation",
    badge: "Mobility",
    keywords: ["taxi", "cab", "ride", "auto", "car", "travel", "transport", "rental", "airport", "mobility", "driver"],
  },
  {
    id: "delivery",
    title: "Hyperlocal Delivery",
    category: "Services",
    description: "15-30 min delivery from local neighborhood shops, grocery, food, and essentials.",
    href: "/services/delivery",
    badge: "Logistics",
    keywords: ["delivery", "grocery", "food", "shops", "stores", "kirana", "supermarket", "courier", "parcel", "orders"],
  },
  {
    id: "workers",
    title: "Skilled Workers & Home Services",
    category: "Services",
    description: "Plumbers, electricians, carpenters, appliance technicians at standardized rates.",
    href: "/services/workers",
    badge: "Services",
    keywords: ["worker", "plumber", "electrician", "carpenter", "technician", "mechanic", "repair", "handyman", "services", "home repair"],
  },
  {
    id: "e-services",
    title: "E-Services & Digital Utilities",
    category: "Services",
    description: "Civic utilities, digital documentation, bill payments, and smart municipal services.",
    href: "/services/e-services",
    badge: "Civic Tech",
    keywords: ["eservices", "e-services", "digital", "utilities", "bills", "government", "civic", "documentation", "online services"],
  },
  {
    id: "all-services",
    title: "All Rurban Services",
    category: "Services",
    description: "Browse the complete catalog of integrated civic and commercial services.",
    href: "/services",
    badge: "Overview",
    keywords: ["services", "all services", "offerings", "catalog", "solutions"],
  },

  // Ecosystem & Apps
  {
    id: "ecosystem-user",
    title: "User Super App",
    category: "Ecosystem",
    description: "Unified customer super app for shopping, rides, food delivery, and local bookings.",
    href: "/ecosystem",
    badge: "App",
    keywords: ["user app", "customer app", "shopping app", "super app", "mobile app", "download", "iphone", "android"],
  },
  {
    id: "ecosystem-vendor",
    title: "Vendor Merchant App",
    category: "Ecosystem",
    description: "Platform for neighborhood merchants to manage digital catalogs, inventory, and orders.",
    href: "/ecosystem",
    badge: "Merchant",
    keywords: ["vendor", "merchant", "store", "shop owner", "seller", "partner", "kirana", "products"],
  },
  {
    id: "ecosystem-delivery",
    title: "Delivery Partner App",
    category: "Ecosystem",
    description: "Fair, distance-based driver earnings with multi-stop GPS routing navigation.",
    href: "/ecosystem",
    badge: "Fleet",
    keywords: ["delivery partner", "rider", "driver", "earnings", "gig", "bike delivery"],
  },
  {
    id: "ecosystem-manager",
    title: "Sector Governance",
    category: "Ecosystem",
    description: "Decentralized civic administration onboarding local shops and handling disputes.",
    href: "/ecosystem",
    badge: "Governance",
    keywords: ["sector manager", "admin", "governance", "dispute", "quality", "regional"],
  },

  // Company & Support
  {
    id: "about",
    title: "About BetterMend",
    category: "Company",
    description: "Our vision, mission, and how we are solving fragmented rurban ecosystems.",
    href: "/about",
    badge: "Company",
    keywords: ["about", "about us", "company", "vision", "mission", "purpose", "headquarters", "bettermend", "team"],
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    category: "Support",
    description: "Quick answers to common questions about services, payments, orders, and safety.",
    href: "/faq",
    badge: "Help",
    keywords: ["faq", "help", "questions", "support", "answers", "how it works", "customer support"],
  },
  {
    id: "contact",
    title: "Contact Us & Regional Desk",
    category: "Support",
    description: "Connect with our regional desk in Kottakkal, Kerala or call +91 9207050655.",
    href: "/contact",
    badge: "Desk",
    keywords: ["contact", "phone", "email", "support", "call", "office", "address", "location", "help desk"],
  },
  {
    id: "delete-account",
    title: "Data Deletion Request",
    category: "Privacy",
    description: "Request deletion of your account and personal data in accordance with policies.",
    href: "/delete-account",
    badge: "Privacy",
    keywords: ["delete account", "privacy", "remove account", "data deletion", "gdpr"],
  },
  {
    id: "terms",
    title: "Terms of Service",
    category: "Legal",
    description: "User agreement and terms governing platform usage.",
    href: "/terms",
    badge: "Legal",
    keywords: ["terms", "conditions", "policy", "agreement"],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    category: "Legal",
    description: "How BetterMend collects, uses, and protects your personal information.",
    href: "/privacy",
    badge: "Legal",
    keywords: ["privacy", "policy", "data protection", "security"],
  },
  {
    id: "refund",
    title: "Refund & Cancellation Policy",
    category: "Legal",
    description: "Our transparent refund, return, and cancellation terms.",
    href: "/refund",
    badge: "Legal",
    keywords: ["refund", "cancellation", "money back", "returns"],
  },
  {
    id: "copyright",
    title: "Copyright Notice",
    category: "Legal",
    description: "Proprietary intellectual property and copyright disclosures.",
    href: "/copyright",
    badge: "Legal",
    keywords: ["copyright", "intellectual property", "trademark"],
  },
];

const popularSearches = [
  { label: "Transportation & Cabs", query: "taxi" },
  { label: "Hyperlocal Delivery", query: "delivery" },
  { label: "Plumber & Electrician", query: "worker" },
  { label: "E-Services", query: "digital" },
  { label: "Vendor App", query: "vendor" },
  { label: "About Us", query: "about" },
  { label: "FAQ", query: "faq" },
  { label: "Contact Regional Desk", query: "contact" },
];

export default function Navbar({ activePage = "home" }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, / to open; Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "/" && !searchOpen && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "Escape" && searchOpen) {
        e.preventDefault();
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  // Focus input and lock body scroll when search opens
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return searchableItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchKey = item.keywords.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchCat || matchKey;
    });
  }, [searchQuery]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleSelectResult = (href) => {
    setSearchOpen(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
    router.push(href);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (filteredResults.length ? Math.min(prev + 1, filteredResults.length - 1) : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
        handleSelectResult(filteredResults[selectedIndex].href);
      }
    }
  };

  const navLinks = [
    { label: "HOME", href: "/", id: "home" },
    { label: "SERVICES", href: "/services", id: "services" },
    { label: "ECOSYSTEM", href: "/ecosystem", id: "ecosystem" },
    { label: "ABOUT US", href: "/about", id: "about" },
    { label: "FAQ", href: "/faq", id: "faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-4 transition-all duration-500 pointer-events-none">
        <div className="w-full max-w-[1536px] 2xl:max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8 pointer-events-auto">
          
          {/* Floating Capsule Bar: Solid Navy on top, Authentic iPhone Liquid Glass on Scroll */}
          <nav
            className={`relative w-full rounded-full transition-all duration-500 ease-out px-4 sm:px-6 flex items-center justify-between selection:bg-white selection:text-[#030C54] overflow-hidden ${
              scrolled
                ? "py-2 sm:py-2.5 ios-glass-nav"
                : "py-2.5 sm:py-3 bg-[#030C54] border border-white/10 shadow-md"
            }`}
          >
            {/* iOS Specular Top Reflection Ray */}
            <div
              className={`absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* 1. Left: BetterMend Wordmark Logo */}
            <Link href="/" className="flex items-center pl-1 sm:pl-2 group shrink-0 relative z-10">
              <div className="relative h-5 sm:h-6 w-28 sm:w-36 flex items-center">
                <Image
                  src="/bettermend wordmark.png"
                  alt="BetterMend Urban Services"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 144px"
                  className="object-contain object-left group-hover:opacity-95 transition-opacity"
                />
              </div>
            </Link>

            {/* 2. Center: Desktop Nav Links with Clean Active & Hover Underline */}
            <div className="hidden md:flex items-center gap-6 lg:gap-9 relative z-10">
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
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    
                    {/* Clean Solid White Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-white rounded-full transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* 3. Right: Search Button + Contact Pill */}
            <div className="flex items-center gap-2 sm:gap-3 pr-1 sm:pr-2 relative z-10">
              
              {/* Search Trigger Button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer active:scale-95 group"
                aria-label="Search website"
                title="Search services, apps & pages (Ctrl+K)"
              >
                <Search size={17} strokeWidth={2.2} className="group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline text-xs text-white/70 font-medium">Search...</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/15 text-white/80 border border-white/20">
                  ⌘K
                </kbd>
              </button>

              {/* White Pill Contact Button */}
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center justify-center px-5 py-1.5 sm:py-2 rounded-full font-extrabold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 ${
                  scrolled
                    ? "bg-white text-[#030C54] hover:bg-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.18)]"
                    : "bg-white text-[#030C54] hover:bg-slate-100"
                }`}
              >
                Contact
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-white/90 hover:text-white cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </nav>

          {/* Mobile Dropdown Menu (iPhone Liquid Glass Style) */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-5 rounded-3xl ios-glass-dropdown space-y-3 animate-fadeIn">
              
              {/* Mobile Search Input Trigger */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-white/70 text-xs font-medium cursor-pointer active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <Search size={16} className="text-white" />
                  <span>Search services, apps & pages...</span>
                </div>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/15 text-white font-mono">⌘K</kbd>
              </button>

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

      {/* 4. Global Spotlight Command Palette Search Modal */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Dialog"
          onClick={() => setSearchOpen(false)}
          className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-[26px] sm:rounded-[32px] shadow-2xl border border-slate-200/90 overflow-hidden text-slate-900 transition-all flex flex-col max-h-[82vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-slate-100">
              <Search size={22} className="text-[#030C54] shrink-0" strokeWidth={2.4} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search services, shops, mobility, apps, FAQ..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs px-2 py-1 rounded-md text-slate-400 hover:text-slate-700 bg-slate-100 cursor-pointer"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs transition-colors cursor-pointer shrink-0"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results / Suggestion Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              
              {/* If query has results */}
              {searchQuery.trim() && filteredResults.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2 pb-1">
                    <span className="text-[11px] font-black uppercase tracking-wider font-mono text-slate-400">
                      Results ({filteredResults.length})
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Use ↑ ↓ to navigate
                    </span>
                  </div>

                  {filteredResults.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelectResult(item.href)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`p-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-3 text-left border ${
                          isSelected
                            ? "bg-[#030C54]/5 border-[#030C54] shadow-xs"
                            : "bg-white hover:bg-slate-50 border-slate-100"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 text-[#030C54] border border-slate-200/60">
                              {item.badge || item.category}
                            </span>
                            <h4
                              className={`text-sm font-bold truncate ${
                                isSelected ? "text-[#030C54]" : "text-slate-900"
                              }`}
                            >
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-500 truncate font-sans">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isSelected && (
                            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-[#030C54] border border-[#030C54]/20 shadow-xs">
                              <span>Enter</span>
                              <CornerDownLeft size={10} />
                            </kbd>
                          )}
                          <ChevronRight
                            size={16}
                            className={`transition-transform ${
                              isSelected ? "text-[#030C54] translate-x-1" : "text-slate-300"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* If query has NO matches */}
              {searchQuery.trim() && filteredResults.length === 0 && (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Search size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800">
                      No matching results for &ldquo;{searchQuery}&rdquo;
                    </h4>
                    <p className="text-xs text-slate-500">
                      Try searching for services like &ldquo;taxi&rdquo;, &ldquo;delivery&rdquo;, &ldquo;plumber&rdquo;, or &ldquo;contact&rdquo;.
                    </p>
                  </div>
                </div>
              )}

              {/* If query is empty: Show Popular Quick Searches & Sections */}
              {!searchQuery.trim() && (
                <div className="space-y-4">
                  {/* Popular Searches */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 px-1 text-[11px] font-black uppercase tracking-wider font-mono text-slate-400">
                      <Sparkles size={12} className="text-[#030C54]" />
                      <span>Popular Searches</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setSearchQuery(item.query)}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-[#030C54] hover:text-white text-slate-700 transition-colors border border-slate-200/80 cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Jump Links */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 px-1 pb-1 text-[11px] font-black uppercase tracking-wider font-mono text-slate-400">
                      <Compass size={12} className="text-[#030C54]" />
                      <span>Quick Navigation</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {searchableItems.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleSelectResult(item.href)}
                          className="p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#030C54] transition-colors truncate">
                              {item.title}
                            </span>
                            <ArrowRight size={13} className="text-slate-400 group-hover:text-[#030C54] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                          </div>
                          <p className="text-[11px] text-slate-500 truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Keyboard Helper Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold text-slate-700 mr-1">↵</kbd> Select
                </span>
                <span className="hidden sm:inline">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold text-slate-700 mr-1">↑↓</kbd> Navigate
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>BetterMend Search</span>
                <span>&bull;</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-bold text-slate-700">ESC</kbd> Close</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

