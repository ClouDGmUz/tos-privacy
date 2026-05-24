"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { LegalSection } from "@/data/tos";
import { apps, getApp } from "@/data/apps";

function Sidebar({
  sections,
  activeSection,
  title,
  lastUpdated,
  currentApp,
  type,
}: {
  sections: LegalSection[];
  activeSection: string;
  title: string;
  lastUpdated: string;
  currentApp: string;
  type: "tos" | "privacy";
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-[240px] shrink-0 hidden lg:block sticky top-0 h-screen">
      <div className="flex flex-col h-full py-16 px-8 border-r border-border">
        {/* Branding */}
        <div className="mb-6">
          <Link
            href="/"
            className="block font-serif text-lg font-semibold text-foreground no-underline hover:text-foreground tracking-tight"
          >
            AbdulazizWB
          </Link>
          <span className="block mt-1 text-xs font-medium tracking-[0.2em] uppercase text-muted">
            {title}
          </span>
        </div>

        {/* App selector */}
        <div className="mb-6">
          <span className="block mb-2 text-[10px] font-medium tracking-[0.2em] uppercase text-muted/60">
            Apps
          </span>
          <ul className="space-y-0">
            {apps.map((app) => {
              const isActive = app.slug === currentApp;
              const targetPath =
                type === "tos" ? `/?app=${app.slug}` : `/privacy?app=${app.slug}`;
              return (
                <li key={app.slug}>
                  <button
                    onClick={() => {
                      router.push(targetPath);
                    }}
                    className={`
                      w-full text-left py-1.5 pl-4 pr-2 text-sm leading-relaxed
                      transition-all duration-200 ease-out relative
                      ${
                        isActive
                          ? "text-accent font-medium"
                          : "text-muted/80 hover:text-foreground"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2
                        text-[8px] transition-all duration-200
                        ${isActive ? "text-accent opacity-100" : "opacity-0"}
                      `}
                    >
                      &#8226;
                    </span>
                    {app.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Thin divider */}
        <hr className="mb-6 border-border" />

        {/* Section navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-0.5">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`
                      group relative block py-1.5 pl-4 pr-3 text-sm leading-relaxed
                      transition-all duration-200 ease-out
                      ${
                        isActive
                          ? "text-accent font-medium"
                          : "text-muted hover:text-foreground"
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span
                      className={`
                        absolute left-0 top-1/2 -translate-y-1/2
                        w-[4px] h-[4px] rounded-full
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-accent scale-100"
                            : "bg-transparent scale-0 group-hover:bg-muted group-hover:scale-100"
                        }
                      `}
                    />
                    {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[11px] leading-relaxed text-muted/70">
            Last updated
            <br />
            <time dateTime={lastUpdated} className="text-muted">
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>
      </div>
    </aside>
  );
}

function LegalLayoutInner({ type }: { type: "tos" | "privacy" }) {
  const searchParams = useSearchParams();
  const appSlug = searchParams.get("app");
  const app = getApp(appSlug);

  const sections = type === "tos" ? app.tos : app.privacy;
  const lastUpdated =
    type === "tos" ? app.tosLastUpdated : app.privacyLastUpdated;
  const title = type === "tos" ? "Terms of Service" : "Privacy Policy";

  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const sectionRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    setActiveSection(sections[0]?.id ?? "");
  }, [app.slug, type]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRefs.current.set(entry.target.id, entry);
        });

        let bestId = "";
        let bestRatio = -1;
        sectionRefs.current.forEach((entry, id) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  const contactInfo = app.slug === "blinkerp"
    ? {
        email: "info@abdulazizwb.uz",
        address: "Tashkent, Uzbekistan",
      }
    : {
        email: "info@abdulazizwb.uz",
        address: "Tashkent, Uzbekistan",
      };

  return (
    <div className="flex min-h-screen max-w-[1200px] mx-auto">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        title={title}
        lastUpdated={lastUpdated}
        currentApp={app.slug}
        type={type}
      />

      {/* Mobile app switcher */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted/60 shrink-0 mr-1">
            App:
          </span>
          {apps.map((app) => {
            const isActive = app.slug === appSlug;
            const targetPath =
              type === "tos"
                ? `/?app=${app.slug}`
                : `/privacy?app=${app.slug}`;
            return (
              <button
                key={app.slug}
                onClick={() => {
                  window.location.href = targetPath;
                }}
                className={`
                  text-xs whitespace-nowrap px-3 py-1.5 rounded-full border transition-all
                  ${
                    isActive
                      ? "border-accent/40 text-accent bg-accent/10"
                      : "border-border text-muted hover:text-foreground hover:border-muted/40"
                  }
                `}
              >
                {app.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 pt-24 pb-32 lg:pt-20 lg:px-16">
        <div className="max-w-[680px] mx-auto animate-fade-up">
          {/* Page heading */}
          <header className="mb-8 lg:mb-16">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-3">
              {app.name}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              Effective as of{" "}
              <time dateTime={lastUpdated}>
                {new Date(lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          </header>

          <hr className="mb-16 border-border" />

          <div className="space-y-20">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="section-reveal"
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-muted shrink-0 mt-[3px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-[1.75rem] font-medium leading-[1.3] tracking-[-0.01em] text-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-[0.95rem] leading-[1.75] text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {sections[sections.length - 1]?.id === "contact" && (
            <div className="mt-6 space-y-1">
              <p className="text-[0.95rem] leading-[1.75] text-foreground/85">
                <strong className="font-medium text-foreground">Email: </strong>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-accent hover:text-accent-hover transition-colors no-underline"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="text-[0.95rem] leading-[1.75] text-foreground/85">
                <strong className="font-medium text-foreground">
                  Address:{" "}
                </strong>
                {contactInfo.address}
              </p>
            </div>
          )}

          <hr className="mt-24 mb-8 border-border" />
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} {app.name}. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function LegalLayout({ type }: { type: "tos" | "privacy" }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-muted text-sm">Loading...</div>
        </div>
      }
    >
      <LegalLayoutInner type={type} />
    </Suspense>
  );
}
