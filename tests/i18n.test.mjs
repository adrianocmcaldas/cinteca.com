import assert from "node:assert/strict";
import test from "node:test";

import { resolveLocale, translations } from "../app/i18n.ts";

test("matches the four supported browser language families", () => {
  assert.equal(resolveLocale(["pt-BR"]), "pt");
  assert.equal(resolveLocale(["en-US"]), "en");
  assert.equal(resolveLocale(["es-ES"]), "es");
  assert.equal(resolveLocale(["nb-NO"]), "nb");
  assert.equal(resolveLocale(["no-NO"]), "nb");
});

test("uses the first supported browser language and falls back to English", () => {
  assert.equal(resolveLocale(["fr-FR", "es-MX", "en"]), "es");
  assert.equal(resolveLocale(["de-DE", "fr-FR"]), "en");
  assert.equal(resolveLocale(["nn-NO"]), "en");
  assert.equal(resolveLocale([]), "en");
});

test("every locale contains the complete capability inventory", () => {
  for (const locale of ["pt", "en", "es", "nb"]) {
    const items = translations[locale].capabilities.items;
    const topicCount = items.reduce(
      (total, item) => total + item.direct.length + item.adjacent.length,
      0,
    );

    assert.equal(items.length, 13, `${locale} domain count`);
    assert.equal(topicCount, 195, `${locale} capability count`);
  }
});
