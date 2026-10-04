'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flower2, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Beginner Yoga', href: '/programs/beginner-yoga' },
      { label: 'Stress Relief', href: '/programs/stress-relief' },
      { label: 'Weight Management', href: '/programs/weight-management' },
      { label: "Women's Yoga", href: '/programs/womens-yoga' },
      { label: 'Online Yoga Classes', href: '/programs/online-yoga' },
      { label: 'Corporate Yoga', href: '/programs/corporate-yoga' },
    ],
  },
  { label: 'Classes', href: '/schedule' },
  { label: 'Journal', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isLinkActive = (href: string, children?: { label: string; href: string }[]) => {
    if (href === '/') return pathname === '/';
    if (children) return children.some((c) => pathname.startsWith(c.href)) || pathname.startsWith(href);
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7f5ed]/95 backdrop-blur-md border-b border-[#586249]/15 shadow-sm shadow-[#364132]/5 py-3'
          : isHome
          ? 'bg-transparent py-4 text-[#fbf8ef]'
          : 'bg-[#f7f5ed]/90 backdrop-blur-md border-b border-[#dedbd2] py-4'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="brand-lockup group"
          aria-label="SattvaYoga home"
        >
          <span
            className={`brand-mark ${
              !isScrolled && isHome
                ? '!border-[#edf0e4]/60 !text-[#edf0e4] group-hover:!border-[#edf0e4]'
                : '!border-[#b9bea9] !text-[#566748] group-hover:!border-[#566748]'
            }`}
          >
            <Flower2 size={20} strokeWidth={1.5} />
          </span>
          <span className="flex flex-col">
            <strong
              className={`font-serif tracking-tight text-[19px] leading-tight ${
                !isScrolled && isHome ? '!text-[#fbf8ef]' : '!text-[#364132]'
              }`}
            >
              SattvaYoga
            </strong>
            <small
              className={`text-[8.5px] uppercase tracking-[0.16em] font-medium ${
                !isScrolled && isHome ? '!text-[#faf8ef]/80' : '!text-[#77796f]'
              }`}
            >
              Mind · Body · Balance
            </small>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item.href, item.children);
            const hasChildren = !!item.children?.length;
            const isDropOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                {hasChildren ? (
                  <button
                    onClick={() => setOpenDropdown(isDropOpen ? null : item.label)}
                    className={`text-[12.5px] font-medium tracking-wide flex items-center gap-1 transition-colors duration-200 py-1 ${
                      !isScrolled && isHome
                        ? active
                          ? 'text-[#cdd8be] font-semibold'
                          : 'text-[#fbf8ef]/90 hover:text-white'
                        : active
                        ? 'text-[#566748] font-semibold'
                        : 'text-[#5d6257] hover:text-[#364132]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        isDropOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-[12.5px] font-medium tracking-wide transition-colors duration-200 py-1 ${
                      !isScrolled && isHome
                        ? active
                          ? 'text-[#cdd8be] font-semibold'
                          : 'text-[#fbf8ef]/90 hover:text-white'
                        : active
                        ? 'text-[#566748] font-semibold'
                        : 'text-[#5d6257] hover:text-[#364132]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasChildren && isDropOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-[#fbfaf5] border border-[#dedbd2] rounded-md shadow-xl py-2 min-w-[210px] overflow-hidden">
                      {item.children!.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-[12px] text-[#49483f] hover:text-[#566748] hover:bg-[#e9ece2]/60 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/free-trial"
            className={`hidden sm:inline-flex items-center gap-2 rounded px-4 py-2.5 text-[11.5px] font-semibold tracking-wider transition-all duration-200 ${
              !isScrolled && isHome
                ? 'bg-[#e4e8db] text-[#364132] hover:bg-[#f1f2e9] shadow-sm'
                : 'bg-[#566748] text-[#fbf8ef] hover:bg-[#435439] shadow-sm'
            }`}
          >
            <span>Book a free trial</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded focus:outline-none ${
              !isScrolled && isHome ? 'text-[#fbf8ef]' : 'text-[#364132]'
            }`}
            aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-[#f7f5ed] border-b border-[#dedbd2] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="border-b border-[#dedbd2]/60 pb-3">
                <Link
                  href={item.href}
                  className="block text-[14px] font-medium text-[#364132] hover:text-[#566748]"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pt-2 flex flex-col gap-2">
                    {item.children.slice(1).map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="text-[12px] text-[#77796f] hover:text-[#566748]"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <Link
                href="/free-trial"
                className="btn-primary w-full justify-between"
                onClick={() => setIsMobileOpen(false)}
              >
                <span>Book a free trial</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20SattvaYoga!%20I'd%20like%20to%20know%20more%20about%20your%20yoga%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
