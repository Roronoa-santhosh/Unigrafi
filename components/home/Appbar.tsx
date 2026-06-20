"use client";

import {
  MagnifyingGlassIcon,
  HomeIcon,
  Squares2X2Icon,
  UserIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const desktopNavLinks = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    description: "Your feed and home page",
  },
  {
    name: "Explore",
    href: "/explore",
    icon: MagnifyingGlassIcon,
    description: "Browse categories and discover",
  },
  {
    name: "My wall",
    href: "/wall",
    icon: Squares2X2Icon,
    description: "Your saved and created posts",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
    description: "Your account settings",
  },
];

const mobileNavLinks = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    description: "Your feed and home page",
  },
  {
    name: "Explore",
    href: "/explore",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Create",
    href: "/create",
    icon: SparklesIcon,
    isCenter: true,
    isAction: true,
  },
  {
    name: "My wall",
    href: "/wall",
    icon: Squares2X2Icon,
    description: "Your saved and created posts",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
    description: "Your account settings",
  },
];

function Appbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {/* 
          MOBILE BOTTOM NAVIGATION 
 */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-bg-surface border-2 border-bg-border z-40 safe-bottom">
        <ul className="flex justify-between items-center h-16 px-4">
          {mobileNavLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            // Center + Create button styling
            if (link.isCenter) {
              return (
                <li key={link.name} className="flex-1 flex justify-center">
                  <Link
                    href={link.href}
                    className="flex flex-col items-center justify-center gap-1 relative -top-3 transition-transform hover:scale-110 active:scale-95"
                  >
                    <div
                      className="w-14 h-14 rounded-[var(--radius-btn)] flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      <Icon className="w-7 h-7 te " />
                    </div>
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.name} className="flex-1">
                <Link
                  href={link.href}
                  className={`flex flex-col items-center justify-center h-16 gap-1 transition-all duration-200 ${
                    active
                      ? "text-accent"
                      : "text-ink-primary hover:text-ink-secondary"
                  }`}
                >
                  <Icon className="w-6 h-6 text-ink-primary" />
                  <span className="text-xs font-medium text-center">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP SIDEBAR NAVIGATION 
          ═══════════════════════════════════════════════════════════ */}
      <aside className="hidden sm:flex flex-col fixed left-0 top-20 h-full sm:w-24 lg:w-60 bg-bg-surface border border-bg-border p-5 lg:p-8 z-50">
        {/* Main Navigation Links */}
        <nav className="flex-1">
          <ul className="flex flex-col gap-2">
            {desktopNavLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);

              return (
                <li key={link.name} title={link.description}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-btn transition-all duration-200 ${
                      active
                        ? "font-semibold"
                        : "text-ink-secondary hover:bg-bg-hover"
                    }`}
                    style={
                      active
                        ? {
                            backgroundColor: "var(--color-accent-subtle)",
                            color: "var(--color-accent)",
                          }
                        : {}
                    }
                  >
                    <Icon
                      className={`w-6 h-6 shrink-0 ${
                        active ? "" : "text-ink-primary"
                      }`}
                      style={active ? { color: "var(--color-accent)" } : {}}
                    />
                    <span className="hidden lg:inline text-sm">
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Action - Become Designer CTA */}
        <div className="border-t border-bg-border pt-5 mb-20">
          <Link
            href="/become-designer"
            className="flex flex-col items-center justify-center lg:justify-start gap-3 px-4 py-4 rounded-btn transition-all duration-200 w-full"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
              fontWeight: "600",
            }}
          >
            <SparklesIcon className="w-6 h-6 shrink-0" />
            <span className="hidden lg:inline text-sm">Become designer</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Spacer - Prevents content from hiding under bottom nav */}
      <div className="sm:hidden h-16" />

      {/* Desktop Spacer - Adjusts main content margin */}
      <div className="hidden sm:block sm:w-24 lg:w-62" />
    </>
  );
}

export default Appbar;
