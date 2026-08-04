"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  localeOptions,
  resolveLocale,
  translations,
  type Locale,
} from "./i18n";

const contactEndpoint =
  "https://u33x6xbn7dq2l5jn66hvv7ovc40bgiye.lambda-url.eu-central-1.on.aws/";
const configuredTurnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const legalContactEmail = process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL ?? "";
const localTurnstileSiteKey = "1x00000000000000000000AA";

type ContactStatus = "idle" | "sending" | "success" | "error" | "turnstile";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "light" | "dark";
      size: "flexible";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Seal({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "seal seal-small" : "seal"} aria-hidden="true">
      SA
    </span>
  );
}

function TurnstileWidget({
  siteKey,
  label,
  resetSignal,
  onToken,
  onError,
}: {
  siteKey: string;
  label: string;
  resetSignal: number;
  onToken: (token: string) => void;
  onError: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey) return;

    let active = true;
    const renderWidget = () => {
      if (
        !active ||
        !containerRef.current ||
        !window.turnstile ||
        widgetIdRef.current
      ) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action: "contact",
        theme: "light",
        size: "flexible",
        callback: onToken,
        "expired-callback": () => onToken(""),
        "error-callback": () => {
          onToken("");
          onError();
        },
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-cinteca-turnstile]",
    );

    if (window.turnstile) {
      renderWidget();
    } else if (existingScript) {
      existingScript.addEventListener("load", renderWidget, { once: true });
    } else {
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.cintecaTurnstile = "true";
      script.addEventListener("load", renderWidget, { once: true });
      script.addEventListener("error", onError, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      active = false;
      existingScript?.removeEventListener("load", renderWidget);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onError, onToken, siteKey]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  return (
    <div className="turnstile-field">
      <span>{label}</span>
      <div ref={containerRef} />
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [turnstileSiteKey, setTurnstileSiteKey] = useState(
    configuredTurnstileSiteKey,
  );
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");
  const [messageLength, setMessageLength] = useState(0);
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const copy = translations[locale];

  const closeMobileNav = useCallback(() => {
    mobileNavRef.current?.removeAttribute("open");
  }, []);

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get("lang");
    const browserLanguages =
      navigator.languages.length > 0 ? navigator.languages : [navigator.language];
    const detectedLocale = requestedLocale
      ? resolveLocale([requestedLocale])
      : resolveLocale(browserLanguages);

    const updateFrame = window.requestAnimationFrame(() => {
      setLocale(detectedLocale);
    });

    return () => window.cancelAnimationFrame(updateFrame);
  }, []);

  useEffect(() => {
    if (configuredTurnstileSiteKey || turnstileSiteKey) return;
    if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
      return;
    }

    const updateFrame = window.requestAnimationFrame(() => {
      setTurnstileSiteKey(localTurnstileSiteKey);
    });
    return () => window.cancelAnimationFrame(updateFrame);
  }, [turnstileSiteKey]);

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.metadata.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", copy.metadata.description);
  }, [copy]);

  // Scroll reveal — progressive enhancement only. Content is fully visible
  // without JS; only content below the first viewport is ever hidden, and a
  // rAF-throttled sweep on scroll/resize/hashchange reveals everything whose
  // top edge has crossed the viewport bottom, so instant anchor jumps can
  // never strand content invisible in any scroll direction.
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".company-copy > h2",
          ".section-heading",
          ".legal-intro",
          ".activity-grid article",
          ".capability-card",
          ".product-row",
          ".privacy-grid article",
        ].join(", "),
      ),
    );
    if (targets.length === 0) return;

    const delays = new Map<HTMLElement, number>();
    const groupSizes = new Map<HTMLElement | null, number>();
    const hidden = new Set<HTMLElement>();
    const timers: number[] = [];
    const revealLimit = () => window.innerHeight - 32;

    for (const target of targets) {
      const groupIndex = groupSizes.get(target.parentElement) ?? 0;
      groupSizes.set(target.parentElement, groupIndex + 1);

      if (target.getBoundingClientRect().top > revealLimit()) {
        const delay = groupIndex * 40;
        delays.set(target, delay);
        target.style.transitionDelay = `${delay}ms`;
        target.classList.add("reveal");
        hidden.add(target);
      }
    }

    const restore = (target: HTMLElement) => {
      target.classList.remove("reveal", "revealed");
      target.style.removeProperty("transition-delay");
    };

    let sweepFrame = 0;
    const sweep = () => {
      sweepFrame = 0;
      const limit = revealLimit();
      for (const target of Array.from(hidden)) {
        if (target.getBoundingClientRect().top > limit) continue;
        hidden.delete(target);
        target.classList.add("revealed");
        timers.push(
          window.setTimeout(
            () => restore(target),
            560 + (delays.get(target) ?? 0),
          ),
        );
      }
      if (hidden.size === 0) detach();
    };
    const requestSweep = () => {
      if (sweepFrame === 0) sweepFrame = window.requestAnimationFrame(sweep);
    };
    const detach = () => {
      window.removeEventListener("scroll", requestSweep);
      window.removeEventListener("resize", requestSweep);
      window.removeEventListener("hashchange", requestSweep);
    };

    window.addEventListener("scroll", requestSweep, { passive: true });
    window.addEventListener("resize", requestSweep, { passive: true });
    window.addEventListener("hashchange", requestSweep);
    requestSweep();

    return () => {
      detach();
      window.cancelAnimationFrame(sweepFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
      targets.forEach(restore);
    };
  }, []);

  // Legend totals count up from 0 on first reveal. The real numbers are in the
  // DOM from first render; this mutates only the number text nodes while the
  // animation runs and restores the exact original values at the end.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    const totalsLine = document.querySelector<HTMLElement>(
      ".capability-legend p:last-child",
    );
    if (!totalsLine) return;

    const counters = Array.from(totalsLine.childNodes)
      .filter(
        (node): node is Text =>
          node.nodeType === Node.TEXT_NODE &&
          /^\d+$/.test(node.nodeValue?.trim() ?? ""),
      )
      .map((node) => ({ node, final: Number(node.nodeValue) }));
    if (counters.length === 0) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const started = performance.now();
        const duration = 900;

        const tick = (now: number) => {
          const progress = Math.min((now - started) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          for (const counter of counters) {
            counter.node.nodeValue = String(Math.round(counter.final * eased));
          }
          if (progress < 1) frame = window.requestAnimationFrame(tick);
        };

        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(totalsLine);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      for (const counter of counters) {
        counter.node.nodeValue = String(counter.final);
      }
    };
  }, []);

  const capabilityCount = useMemo(
    () =>
      copy.capabilities.items.reduce(
        (total, capability) =>
          total + capability.direct.length + capability.adjacent.length,
        0,
      ),
    [copy.capabilities.items],
  );

  const companyJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://cinteca.es/#organization",
          name: "AD Caldas Innotec, S.A.",
          alternateName: "Cinteca",
          legalName: "AD Caldas Innotec, S.A.",
          url: "https://cinteca.es",
          taxID: "A66316399",
          foundingDate: "2014-06-06",
          areaServed: "Worldwide",
          ...(legalContactEmail ? { email: legalContactEmail } : {}),
          inLanguage: copy.htmlLang,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Blanco, 10, Torrecera",
            postalCode: "11595",
            addressLocality: "Jerez de la Frontera",
            addressRegion: "Cádiz",
            addressCountry: "ES",
          },
          founder: {
            "@type": "Person",
            "@id": "https://adrianocaldas.com/#person",
            name: "Adriano César Moreno Caldas",
            url: "https://adrianocaldas.com",
          },
          brand: { "@id": "https://cinteca.es/#brand" },
          sameAs: copy.products.items.map((product) => product.url),
          knowsAbout: copy.capabilities.items.flatMap((capability) => [
            capability.title,
            ...capability.direct,
            ...capability.adjacent,
          ]),
          description: copy.metadata.description,
        },
        {
          "@type": "Brand",
          "@id": "https://cinteca.es/#brand",
          name: "Cinteca",
          url: "https://cinteca.es",
        },
        {
          "@type": "WebSite",
          "@id": "https://cinteca.es/#website",
          name: "Cinteca",
          url: "https://cinteca.es",
          inLanguage: ["pt", "en", "es", "nb"],
          publisher: { "@id": "https://cinteca.es/#organization" },
        },
      ],
    }),
    [copy],
  );

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
    if (token) setContactStatus("idle");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setContactStatus("turnstile");
  }, []);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!turnstileSiteKey || !turnstileToken) {
      setContactStatus("turnstile");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setContactStatus("sending");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
          privacyAccepted: formData.get("privacy") === "on",
          turnstileToken,
          language: locale,
          site: "cinteca",
        }),
      });

      if (!response.ok) throw new Error("contact-delivery-failed");

      form.reset();
      setMessageLength(0);
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    } finally {
      setTurnstileToken("");
      setTurnstileReset((current) => current + 1);
    }
  }

  return (
    <main id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cinteca — home">
          <BrandMark />
          <span>cinteca</span>
        </a>

        <p className="header-entity">AD Caldas Innotec, S.A.</p>

        <nav className="desktop-nav" aria-label={copy.navigationLabel}>
          <a href="#empresa">{copy.nav.company}</a>
          <a href="#capacidades">{copy.nav.capabilities}</a>
          <a href="#productos">{copy.nav.products}</a>
          <a href="#contacto">{copy.nav.contact}</a>
          <a href="#aviso-legal">{copy.nav.legal}</a>
        </nav>

        <label className="language-picker">
          <span>{copy.languageLabel}</span>
          <select
            value={locale}
            onChange={(event) => changeLocale(event.target.value as Locale)}
            aria-label={copy.languageLabel}
          >
            {localeOptions.map((option) => (
              <option key={option.code} value={option.code} lang={option.lang}>
                {option.short} · {option.label}
              </option>
            ))}
          </select>
        </label>

        <details className="mobile-nav" ref={mobileNavRef}>
          <summary aria-label={copy.menuLabel}>{copy.menuLabel}</summary>
          <nav aria-label={copy.navigationLabel}>
            <a href="#empresa" onClick={closeMobileNav}>{copy.nav.company}</a>
            <a href="#capacidades" onClick={closeMobileNav}>{copy.nav.capabilities}</a>
            <a href="#productos" onClick={closeMobileNav}>{copy.nav.products}</a>
            <a href="#contacto" onClick={closeMobileNav}>{copy.nav.contact}</a>
            <a href="#aviso-legal" onClick={closeMobileNav}>{copy.nav.legal}</a>
            <a href="#privacidad" onClick={closeMobileNav}>{copy.nav.privacy}</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">
            {copy.hero.titlePre}{" "}
            <em className="hero-accent">{copy.hero.titleAccent}</em>
          </h1>
          <p className="hero-intro">{copy.hero.intro}</p>
          <div className="hero-cta">
            <a className="cta-primary" href="#productos">
              {copy.hero.ctaProducts} <span aria-hidden="true">↓</span>
            </a>
            <a className="cta-ghost" href="#contacto">
              {copy.hero.ctaContact} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="identity-card" aria-label={copy.hero.entity}>
          <div className="identity-body">
            <div className="identity-heading">
              <p>{copy.hero.entity}</p>
              <Seal />
            </div>
            <dl>
              <div>
                <dt>{copy.hero.companyName}</dt>
                <dd>AD Caldas Innotec, S.A.</dd>
              </div>
              <div>
                <dt>{copy.hero.taxId}</dt>
                <dd>A66316399</dd>
              </div>
              <div>
                <dt>{copy.hero.registry}</dt>
                <dd>RM Cádiz · Hoja CA-56553</dd>
              </div>
              <div>
                <dt>{copy.hero.founder}</dt>
                <dd>
                  <a href="https://adrianocaldas.com" target="_blank" rel="noreferrer">
                    Adriano Caldas
                  </a>
                </dd>
              </div>
              <div>
                <dt>{copy.hero.contact}</dt>
                <dd><a href="#contacto">{copy.hero.contactValue}</a></dd>
              </div>
            </dl>
          </div>
          <a className="identity-link" href="#aviso-legal">
            {copy.hero.completeIdentity} <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <div className="status-strip" role="group" aria-label={copy.statusLabel}>
        {copy.status.map((status, index) => (
          <p key={status}>
            {index === 0 && <span aria-hidden="true" />} {status}
          </p>
        ))}
      </div>

      <section className="section company" id="empresa">
        <div className="sheet">
          <p className="sheet-kicker">
            {copy.registryLabel} 01 — {copy.company.label}
          </p>
          <div className="company-copy">
          <h2>{copy.company.title}</h2>
          <div className="company-paragraphs">
            {copy.company.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="corporate-link">
            <div>
              <span>{copy.company.linkLabel}</span>
              <strong>{copy.company.linkTitle}</strong>
            </div>
            <p>{copy.company.linkBody}</p>
          </div>

          <div
            className="activity-grid"
            role="group"
            aria-label={copy.company.activitiesLabel}
          >
            {copy.company.activities.map((activity, index) => (
              <article key={index}>
                <span>{activity.code}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="section capabilities" id="capacidades">
        <div className="sheet">
          <p className="sheet-kicker">
            {copy.registryLabel} 02 — {copy.capabilities.label}
          </p>
          <div className="capabilities-content">
          <div className="section-heading capabilities-heading">
            <h2>{copy.capabilities.title}</h2>
            <p>{copy.capabilities.intro}</p>
          </div>

          <div className="capability-legend" aria-label={copy.capabilities.label}>
            <p>
              <span className="legend-direct" aria-hidden="true" />
              {copy.capabilities.direct}
            </p>
            <p>
              <span className="legend-adjacent" aria-hidden="true" />
              {copy.capabilities.adjacent}
            </p>
            <p>
              {copy.capabilities.items.length} {copy.capabilities.domains} ·{" "}
              {capabilityCount} {copy.capabilities.topics}
            </p>
          </div>

          <div className="capability-list">
            {copy.capabilities.items.map((capability) => (
              <details className="capability-card" key={capability.code}>
                <summary>
                  <span className="capability-code">{capability.code}</span>
                  <span className="capability-title">{capability.title}</span>
                  <span className="capability-count">
                    {capability.direct.length + capability.adjacent.length}{" "}
                    {copy.capabilities.topicCount}
                    <span className="capability-bar" aria-hidden="true">
                      <i style={{ flexGrow: capability.direct.length }} />
                      <i style={{ flexGrow: capability.adjacent.length }} />
                    </span>
                  </span>
                  <span className="capability-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="capability-detail">
                  <div className="capability-detail-inner">
                    <div>
                      <h3>
                        <span className="legend-direct" aria-hidden="true" />
                        {copy.capabilities.direct}
                      </h3>
                      <ul>
                        {capability.direct.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>
                        <span className="legend-adjacent" aria-hidden="true" />
                        {copy.capabilities.adjacent}
                      </h3>
                      <ul>
                        {capability.adjacent.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="capability-note">{copy.capabilities.note}</p>
          </div>
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="products-content">
          <p className="sheet-kicker kicker-on-green">
            {copy.registryLabel} 03 — {copy.products.label}
          </p>
          <div className="section-heading">
            <h2>{copy.products.title}</h2>
            <p>{copy.products.intro}</p>
          </div>

          <div className="product-list">
            {copy.products.items.map((product, index) => (
              <a
                className="product-row sheet sheet-compact"
                href={product.url}
                target="_blank"
                rel="noreferrer"
                key={product.name}
              >
                <span className="product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="product-name">
                  <span>{product.code}</span>
                  <h3>
                    {product.name}
                    {product.tag ? (
                      <em className="product-tag">{product.tag}</em>
                    ) : null}
                  </h3>
                  <span className="product-domain">
                    {new URL(product.url).hostname}
                  </span>
                </div>
                <p>{product.description}</p>
                <span className="product-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contacto">
        <div className="contact-content">
          <div className="contact-copy">
            <p className="sheet-kicker kicker-on-green">
              {copy.registryLabel} 04 — {copy.contact.label}
            </p>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.intro}</p>
            <p className="contact-protection">
              <span aria-hidden="true" /> {copy.contact.protectedLabel}
            </p>
          </div>
          <form
            className="contact-form sheet"
            onSubmit={submitContact}
          >
            <p className="sheet-kicker form-kicker">{copy.contact.formLabel}</p>
            <div className="contact-form-grid">
              <label>
                <span>{copy.contact.name}</span>
                <input
                  name="name"
                  type="text"
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                <span>{copy.contact.email}</span>
                <input
                  name="email"
                  type="email"
                  maxLength={254}
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                <span>
                  {copy.contact.company} <small>{copy.contact.optional}</small>
                </span>
                <input
                  name="company"
                  type="text"
                  maxLength={120}
                  autoComplete="organization"
                />
              </label>
              <label>
                <span>{copy.contact.subject}</span>
                <input name="subject" type="text" minLength={3} maxLength={160} required />
              </label>
              <label className="contact-message">
                <span>{copy.contact.message}</span>
                <textarea
                  name="message"
                  minLength={20}
                  maxLength={5000}
                  rows={7}
                  required
                  onChange={(event) =>
                    setMessageLength(event.currentTarget.value.length)
                  }
                />
                <span className="message-counter" aria-hidden="true">
                  {messageLength} / 5000
                </span>
              </label>
            </div>

            <label className="contact-honeypot" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>

            <label className="privacy-check">
              <input name="privacy" type="checkbox" required />
              <span>
                {copy.contact.privacyAcknowledgement}{" "}
                <a href="#privacidad">{copy.contact.privacyLink}</a>
              </span>
            </label>

            {turnstileSiteKey ? (
              <TurnstileWidget
                siteKey={turnstileSiteKey}
                label={copy.contact.verification}
                resetSignal={turnstileReset}
                onToken={handleTurnstileToken}
                onError={handleTurnstileError}
              />
            ) : (
              <p className="contact-feedback error" role="alert">
                {copy.contact.configurationError}
              </p>
            )}

            <div className="contact-submit">
              <button
                type="submit"
                disabled={
                  contactStatus === "sending" ||
                  !turnstileSiteKey ||
                  !turnstileToken
                }
              >
                {contactStatus === "sending" ? copy.contact.sending : copy.contact.send}
                <span aria-hidden="true">↗</span>
              </button>
              <p className="contact-feedback success" role="status">
                {contactStatus === "success" ? copy.contact.success : ""}
              </p>
              <p className="contact-feedback error" role="alert">
                {contactStatus === "turnstile"
                  ? copy.contact.turnstileError
                  : contactStatus === "error"
                    ? copy.contact.error
                    : ""}
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="section legal appendix" id="aviso-legal">
        <div className="sheet sheet-appendix">
          <p className="sheet-kicker">
            {copy.registryLabel} 05 — {copy.legal.label}
          </p>
          <div className="legal-content">
          <div className="legal-intro">
            <h2>{copy.legal.title}</h2>
            <p>{copy.legal.intro}</p>
          </div>

          <dl className="legal-facts">
            {copy.legal.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            {legalContactEmail && (
              <div>
                <dt>{copy.legal.email}</dt>
                <dd><a href={`mailto:${legalContactEmail}`}>{legalContactEmail}</a></dd>
              </div>
            )}
            <div>
              <dt>{copy.legal.contactChannel}</dt>
              <dd><a href="#contacto">{copy.legal.contactChannelValue}</a></dd>
            </div>
            <div>
              <dt>{copy.legal.website}</dt>
              <dd>https://cinteca.es</dd>
            </div>
          </dl>

          <div className="legal-text">
            {copy.legal.articles.map((article) => (
              <article key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
              </article>
            ))}
          </div>

          <p className="full-docs">
            {copy.legal.fullDocuments}{" "}
            <a href={`/legal/?lang=${locale}`}>cinteca.es/legal</a>
          </p>
          </div>
        </div>
      </section>

      <section className="section privacy appendix" id="privacidad">
        <div className="sheet sheet-appendix">
          <p className="sheet-kicker">
            {copy.registryLabel} 06 — {copy.privacy.label}
          </p>
          <div className="privacy-content">
          <div className="legal-intro">
            <h2>{copy.privacy.title}</h2>
            <p>{copy.privacy.intro}</p>
          </div>

          <div className="privacy-grid">
            {copy.privacy.items.map((item, index) => (
              <article key={index}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {index === copy.privacy.items.length - 1 && (
                  <p className="privacy-actions">
                    <a href="#contacto">{copy.footer.contact}</a>
                    <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
                      AEPD ↗
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="full-docs">
            {copy.privacy.fullDocuments}{" "}
            <a href={`/legal/?lang=${locale}`}>cinteca.es/legal</a>
          </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label="Cinteca — home">
            <BrandMark />
            <span>cinteca</span>
          </a>
          <Seal small />
          <p>{copy.footer.brandRelation}</p>
          <a href="#contacto">{copy.footer.contact}</a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AD Caldas Innotec, S.A.
            <span className="footer-registry">
              NIF A66316399 · RM Cádiz · Hoja CA-56553 ·{" "}
              <a href="https://adrianocaldas.com" target="_blank" rel="noreferrer">
                {copy.hero.founder}: Adriano Caldas
              </a>
            </span>
          </p>
          <p>{copy.footer.noTracking}</p>
          <div>
            <a href="#aviso-legal">{copy.footer.legal}</a>
            <a href="#privacidad">{copy.footer.privacy}</a>
            <a href={`/legal/?lang=${locale}`}>{copy.footer.legalCenter}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
