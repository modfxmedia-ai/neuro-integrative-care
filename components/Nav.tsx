"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Conditions", href: "/conditions" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Programs", href: "/programs" },
  { label: "Virtual Program", href: "/programs/virtual" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "About", href: "/about" },
  { label: "Start Here", href: "/start-here" },
] as const;

const BOOK_HREF = "/start-here";

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(11, 18, 32, 0)", "rgba(11, 18, 32, 0.96)"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 0 0 0 rgba(11, 18, 32, 0)",
      "0 10px 30px -18px rgba(11, 18, 32, 0.55)",
    ],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(217, 210, 194, 0)", "rgba(36, 50, 71, 0.6)"],
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => setMobileOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Focus trap + Escape + scroll lock + focus restoration while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const hamburger = hamburgerRef.current;
    const focusables = drawer
      ? Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const focusFrame = requestAnimationFrame(() => first?.focus());

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !drawer?.contains(active))) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && (active === last || !drawer?.contains(active))) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      const restore = hamburger ?? previousActive;
      requestAnimationFrame(() => restore?.focus());
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor, boxShadow, borderBottomColor: borderColor }}
        className="fixed inset-x-0 top-0 z-[60] border-b border-transparent text-paper backdrop-blur-[2px]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4 lg:gap-4 lg:px-8 xl:gap-6 xl:px-10">
          <Link
            href="/"
            aria-label="Neuritems-center gap-2.5 sm:gap-3"
          >
            <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-paper/25 sm:h-10 sm:w-10">
              <Image
                src="/images/logo/mark-square.png"
                alt=""
                fill
                sizes="40px"
                priority
                className="object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="whitespace-nowrap font-serif text-[12px] tracking-[0.02em] text-paper sm:text-[13px] xl:text-[15px]">
                NEUROINTEGRATIVE CARE
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-amber-b sm:text-[10px] sm:tracking-[0.32em]">
                Los Gatos
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0 xl:gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-block whitespace-nowrap px-2 py-2 text-[13px] transition-colors xl:px-3 xl:text-sm ${
                      active ? "text-paper" : "text-paper/75 hover:text-paper"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-amber-b xl:inset-x-3"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <BookButton />
            <button
              ref={hamburgerRef}
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper/10 sm:h-10 sm:w-10 lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="nav-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              key="nav-drawer"
              id="mobile-nav-drawer"
              ref={drawerRef as React.RefObject<HTMLElement>}
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%", opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.2 }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[86vw] max-w-sm flex-col bg-ink px-8 pb-10 pt-24 text-paper shadow-2xl lg:hidden"
            >
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-amber-b">
                Menu
              </p>
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.035,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={`block border-b border-rule-d py-4 font-serif text-2xl transition-colors ${
                          active
                            ? "text-amber-b"
                            : "text-paper hover:text-amber-b"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function BookButton() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      className="shrink-0"
    >
      <Link
        href={BOOK_HREF}
        className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-3.5 py-2 text-xs font-medium tracking-tight text-ink shadow-[0_6px_18px_-10px_rgba(232,160,32,0.75)] transition-shadow duration-300 hover:shadow-[0_14px_32px_-10px_rgba(232,160,32,0.9)] sm:px-4 xl:px-5 xl:py-2.5 xl:text-sm"
      >
        <span className="relative z-10">Book a Consult</span>
      </Link>
    </motion.div>
  );
}
