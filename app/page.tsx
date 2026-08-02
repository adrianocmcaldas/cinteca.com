"use client";

import { useEffect, useMemo, useState } from "react";
import {
  localeOptions,
  resolveLocale,
  translations,
  type Locale,
} from "./i18n";

const email = "adriano@cinteca.es";
const telephoneDisplay = "+34 665 478 150";
const telephoneLink = "+34665478150";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = translations[locale];

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
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.metadata.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", copy.metadata.description);
  }, [copy]);

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
          email,
          telephone: telephoneLink,
          inLanguage: copy.htmlLang,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Blanco, 10, Torrecera",
            postalCode: "11595",
            addressLocality: "Jerez de la Frontera",
            addressRegion: "Cádiz",
            addressCountry: "ES",
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

        <details className="mobile-nav">
          <summary aria-label={copy.menuLabel}>{copy.menuLabel}</summary>
          <nav aria-label={copy.navigationLabel}>
            <a href="#empresa">{copy.nav.company}</a>
            <a href="#capacidades">{copy.nav.capabilities}</a>
            <a href="#productos">{copy.nav.products}</a>
            <a href="#contacto">{copy.nav.contact}</a>
            <a href="#aviso-legal">{copy.nav.legal}</a>
            <a href="#privacidad">{copy.nav.privacy}</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">{copy.hero.title}</h1>
          <p className="hero-intro">{copy.hero.intro}</p>
        </div>

        <aside className="identity-card" aria-label={copy.hero.entity}>
          <div className="identity-heading">
            <p>{copy.hero.entity}</p>
            <span>ES</span>
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
              <dt>{copy.hero.contact}</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          </dl>
          <a className="identity-link" href="#aviso-legal">
            {copy.hero.completeIdentity} <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <div className="status-strip" aria-label={copy.company.activitiesLabel}>
        {copy.status.map((status, index) => (
          <p key={status}>
            {index === 0 && <span aria-hidden="true" />} {status}
          </p>
        ))}
      </div>

      <section className="section company" id="empresa">
        <div className="section-label">
          <p>{copy.company.label}</p>
          <span>01</span>
        </div>
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

          <div className="activity-grid" aria-label={copy.company.activitiesLabel}>
            {copy.company.activities.map((activity) => (
              <article key={activity.code}>
                <span>{activity.code}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities" id="capacidades">
        <div className="section-label">
          <p>{copy.capabilities.label}</p>
          <span>02</span>
        </div>
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
                  </span>
                  <span className="capability-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="capability-detail">
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
              </details>
            ))}
          </div>

          <p className="capability-note">{copy.capabilities.note}</p>
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="section-label">
          <p>{copy.products.label}</p>
          <span>03</span>
        </div>
        <div className="products-content">
          <div className="section-heading">
            <h2>{copy.products.title}</h2>
            <p>{copy.products.intro}</p>
          </div>

          <div className="product-list">
            {copy.products.items.map((product, index) => (
              <a
                className="product-row"
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
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
                <span className="product-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contacto">
        <div className="section-label light-label">
          <p>{copy.contact.label}</p>
          <span>04</span>
        </div>
        <div className="contact-content">
          <div>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.intro}</p>
          </div>
          <address>
            <a href={`mailto:${email}`}>
              <span>{copy.contact.email}</span>
              <strong>{email}</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href={`tel:${telephoneLink}`}>
              <span>{copy.contact.phone}</span>
              <strong>{telephoneDisplay}</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <div>
              <span>{copy.contact.address}</span>
              <strong>
                Calle Blanco, 10 · Torrecera<br />
                11595 Jerez de la Frontera · Cádiz · España
              </strong>
            </div>
          </address>
        </div>
      </section>

      <section className="section legal" id="aviso-legal">
        <div className="section-label">
          <p>{copy.legal.label}</p>
          <span>05</span>
        </div>
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
            <div>
              <dt>{copy.legal.email}</dt>
              <dd><a href={`mailto:${email}`}>{email}</a></dd>
            </div>
            <div>
              <dt>{copy.legal.phone}</dt>
              <dd><a href={`tel:${telephoneLink}`}>{telephoneDisplay}</a></dd>
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
        </div>
      </section>

      <section className="section privacy" id="privacidad">
        <div className="section-label">
          <p>{copy.privacy.label}</p>
          <span>06</span>
        </div>
        <div className="privacy-content">
          <div className="legal-intro">
            <h2>{copy.privacy.title}</h2>
            <p>{copy.privacy.intro}</p>
          </div>

          <div className="privacy-grid">
            {copy.privacy.items.map((item, index) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {index === copy.privacy.items.length - 1 && (
                  <p className="privacy-actions">
                    <a href={`mailto:${email}`}>{email}</a>
                    <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
                      AEPD ↗
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label="Cinteca — home">
            <BrandMark />
            <span>cinteca</span>
          </a>
          <p>{copy.footer.brandRelation}</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AD Caldas Innotec, S.A.</p>
          <p>{copy.footer.noTracking}</p>
          <div>
            <a href="#aviso-legal">{copy.footer.legal}</a>
            <a href="#privacidad">{copy.footer.privacy}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
