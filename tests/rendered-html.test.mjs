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

test("renders the official company identity and product portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Cinteca · AD Caldas Innotec, S\.A\.<\/title>/i);
  assert.match(html, /A66316399/);
  assert.match(html, /CA-56553/);
  assert.match(html, /LegalNeuron/);
  assert.match(html, /NordixBIOS/);
  assert.match(html, /NCS Engine/);
  assert.match(html, /adriano@cinteca\.es/);
  assert.match(html, /\+34 665 478 150/);
});

test("includes legal, privacy and machine-readable company information", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Aviso legal/);
  assert.match(html, /Política de privacidad/);
  assert.match(html, /no utiliza formularios, cuentas de usuario, cookies ni/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"legalName":"AD Caldas Innotec, S.A."/);
  assert.match(html, /rel="canonical" href="https:\/\/cinteca\.es"/i);
  assert.doesNotMatch(html, /<form|google-analytics|googletagmanager|cookie banner/i);
});
