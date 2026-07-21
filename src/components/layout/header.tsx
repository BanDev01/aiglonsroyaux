"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md shadow-royal-950/5 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span
            className={cn(
              "hidden font-heading text-sm font-bold leading-tight sm:block transition-colors",
              scrolled ? "text-royal-900" : "text-white"
            )}
          >
            {siteConfig.shortName}
            <span
              className={cn(
                "block text-[11px] font-medium tracking-wide",
                scrolled ? "text-gold-600" : "text-gold-300"
              )}
            >
              {siteConfig.motto}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? scrolled
                      ? "bg-royal-50 text-royal-800"
                      : "bg-white/15 text-white"
                    : scrolled
                      ? "text-royal-950/80 hover:bg-royal-50 hover:text-royal-800"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.enrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-royal-950 shadow-md shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400 sm:inline-flex"
          >
            S&apos;inscrire
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Ouvrir le menu"
                  className={cn(
                    "xl:hidden",
                    scrolled ? "text-royal-900" : "text-white hover:bg-white/10 hover:text-white"
                  )}
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white sm:w-[360px]">
              <SheetHeader>
                <SheetTitle className="font-heading text-royal-900">
                  {siteConfig.shortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                          pathname === link.href
                            ? "bg-royal-50 text-royal-800"
                            : "text-royal-950/80 hover:bg-royal-50"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <a
                  href={siteConfig.enrollmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-royal-950 shadow-md"
                >
                  S&apos;inscrire
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
