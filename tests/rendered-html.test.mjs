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
  assert.match(html, /Vinculación societaria/);
  assert.match(html, /Cinteca.*marca tecnológica.*AD Caldas Innotec, S\.A\./s);
  assert.match(html, /NIF A66316399/);
});

test("presents direct and adjacent know-how across the full capability map", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Know-how completo/);
  assert.match(
    html,
    /13(?:<!-- -->)? dominios · (?:<!-- -->)?195(?:<!-- -->)? capacidades/,
  );
  assert.match(html, /Procesamiento digital de señales desde 2003/);
  assert.match(html, /AWS, Microsoft Azure y Google Cloud/);
  assert.match(html, /Automatización residencial e industrial/);
  assert.match(html, /SEO técnico y editorial/);
  assert.match(html, /Conocimiento directo/);
  assert.match(html, /Dirección e integración/);
});

test("includes legal, privacy and machine-readable company information", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Aviso legal/);
  assert.match(html, /Política de privacidad/);
  assert.match(html, /no utiliza formularios, cuentas de usuario, cookies ni/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"legalName":"AD Caldas Innotec, S.A."/);
  assert.match(html, /"alternateName":"Cinteca"/);
  assert.match(html, /"taxID":"A66316399"/);
  assert.match(html, /"knowsAbout":\[/);
  assert.match(html, /rel="canonical" href="https:\/\/cinteca\.es"/i);
  assert.doesNotMatch(html, /<form|google-analytics|googletagmanager|cookie banner/i);
});
