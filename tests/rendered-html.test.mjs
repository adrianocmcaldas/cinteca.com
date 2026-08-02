import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Cinteca home page and its capability map", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt">/i);
  assert.match(html, /<title>Cinteca — Engenharia, software e sistemas conectados<\/title>/i);
  assert.match(html, /Complexidade/);
  assert.match(html, /12(?:<!-- -->)? territórios conectados/);
  assert.match(html, /IA, dados e processamento de sinais/);
  assert.match(html, /Automação industrial e residencial/);
  assert.match(html, /contacto@cinteca\.es/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("exposes structured discovery metadata", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /application\/ld\+json/);
  assert.match(html, /https:\/\/schema\.org/);
  assert.match(html, /Engenharia de software/);
  assert.match(html, /rel="canonical" href="https:\/\/cinteca\.es"/i);
});
