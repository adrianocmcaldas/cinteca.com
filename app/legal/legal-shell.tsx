"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { localeOptions, resolveLocale, type Locale } from "../i18n";
import {
  legalDocKeys,
  legalTranslations,
  type LegalCopy,
  type LegalDocKey,
  type LegalSection,
} from "../legal-i18n";

const legalContactEmail = process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL ?? "";

type LegalLocaleValue = {
  locale: Locale;
  changeLocale: (nextLocale: Locale) => void;
};

const LegalLocaleContext = createContext<LegalLocaleValue>({
  locale: "en",
  changeLocale: () => {},
});

function useLegalCopy(): { locale: Locale; copy: LegalCopy } {
  const { locale } = useContext(LegalLocaleContext);
  return { locale, copy: legalTranslations[locale] };
}

function withLang(path: string, locale: Locale) {
  return `${path}?lang=${locale}`;
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

/* Shared «Registo» skin for every /legal route: forest cloth, simple
   header with the wordmark pointing back to the main site, the same
   client-side ?lang locale handling as the home page, and a minimal
   registry footer. */
export function LegalShell({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = legalTranslations[locale];

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get(
      "lang",
    );
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
  }, [copy]);

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLocale);
    window.history.replaceState(
      {},
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }

  return (
    <LegalLocaleContext.Provider value={{ locale, changeLocale }}>
      <div className="legal-shell">
        <header className="legal-header">
          <a
            className="brand"
            href="https://cinteca.es"
            aria-label="Cinteca — home"
          >
            <BrandMark />
            <span>cinteca</span>
          </a>

          <p className="header-entity">AD Caldas Innotec, S.A.</p>

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
        </header>

        <main className="legal-main">{children}</main>

        <footer className="legal-footer">
          <p>
            © {new Date().getFullYear()} AD Caldas Innotec, S.A.
            <span className="footer-registry">
              NIF A66316399 · RM Cádiz · Hoja CA-56553
            </span>
          </p>
          <a href="https://cinteca.es">cinteca.es</a>
        </footer>
      </div>
    </LegalLocaleContext.Provider>
  );
}

function ContactBlock({ copy }: { copy: LegalCopy }) {
  return (
    <div className="legal-contact">
      <span>{copy.contactLabel}</span>
      <p>
        <a href="https://cinteca.es/#contacto">cinteca.es/#contacto</a>
        {legalContactEmail ? (
          <>
            {" · "}
            <a href={`mailto:${legalContactEmail}`}>{legalContactEmail}</a>
          </>
        ) : null}
      </p>
    </div>
  );
}

function SectionBlock({ section }: { section: LegalSection }) {
  return (
    <section>
      <h2>{section.title}</h2>
      {section.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.table ? (
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">{section.table.headers[0]}</th>
                <th scope="col">{section.table.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map(([purpose, basis]) => (
                <tr key={purpose}>
                  <td>{purpose}</td>
                  <td>{basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {section.list ? (
        section.list.style === "roman" ? (
          <ol className="legal-list legal-list-roman">
            {section.list.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="legal-list">
            {section.list.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      ) : null}
      {section.after?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

export function LegalHub() {
  const { locale, copy } = useLegalCopy();

  useEffect(() => {
    document.title = `${copy.hub.title} · Cinteca`;
  }, [copy]);

  return (
    <article className="sheet legal-sheet legal-hub">
      <p className="sheet-kicker">
        {copy.registryLabel} — {copy.hub.label}
      </p>
      <h1>{copy.hub.title}</h1>
      <p className="legal-doc-meta">{copy.versionLine}</p>

      {copy.hub.intro.map((paragraph) => (
        <p className="legal-lead" key={paragraph}>
          {paragraph}
        </p>
      ))}

      <div className="legal-scope">
        <span>{copy.hub.scopeLabel}</span>
        <ul>
          {copy.hub.scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{copy.hub.excludedNote}</p>
      </div>

      <div className="legal-cards">
        {legalDocKeys.map((key, index) => {
          const doc = copy.documents[key];
          return (
            <a
              className="legal-card"
              href={withLang(`/legal/${key}/`, locale)}
              key={key}
            >
              <span className="legal-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{doc.title}</h2>
              <p>{doc.summary}</p>
              <span className="legal-card-arrow" aria-hidden="true">
                →
              </span>
            </a>
          );
        })}
      </div>

      <p className="legal-prevalence">{copy.prevalenceNote}</p>

      <ContactBlock copy={copy} />

      <nav className="legal-doc-nav" aria-label="Cinteca">
        <a className="legal-back" href="https://cinteca.es">
          ← cinteca.es
        </a>
      </nav>
    </article>
  );
}

export function LegalDocumentPage({ doc: docKey }: { doc: LegalDocKey }) {
  const { locale, copy } = useLegalCopy();
  const doc = copy.documents[docKey];

  useEffect(() => {
    document.title = `${doc.title} · Cinteca`;
  }, [doc]);

  return (
    <article className="sheet legal-sheet legal-doc">
      <p className="sheet-kicker">
        {copy.registryLabel} — {doc.docLabel}
      </p>
      <h1>{doc.title}</h1>
      <p className="legal-doc-meta">{copy.versionLine}</p>
      <p className="legal-prevalence">{copy.prevalenceNote}</p>

      <div className="legal-sections">
        {doc.sections.map((section) => (
          <SectionBlock section={section} key={section.title} />
        ))}
      </div>

      <ContactBlock copy={copy} />

      <nav className="legal-doc-nav" aria-label={copy.otherDocuments}>
        <a className="legal-back" href={withLang("/legal/", locale)}>
          ← cinteca.es/legal
        </a>
        <div className="legal-doc-links">
          {legalDocKeys
            .filter((key) => key !== docKey)
            .map((key) => (
              <a href={withLang(`/legal/${key}/`, locale)} key={key}>
                {copy.documents[key].docLabel}
              </a>
            ))}
        </div>
      </nav>
    </article>
  );
}
