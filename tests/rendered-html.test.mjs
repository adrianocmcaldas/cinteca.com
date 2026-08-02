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
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Cinteca · AD Caldas Innotec, S\.A\.<\/title>/i);
  assert.match(html, /A66316399/);
  assert.match(html, /CA-56553/);
  assert.match(html, /LegalNeuron/);
  assert.match(html, /NordixBIOS/);
  assert.match(html, /NCS Engine/);
  assert.doesNotMatch(html, /adriano@cinteca\.es/);
  assert.doesNotMatch(html, /\+34 665 478 150/);
  assert.doesNotMatch(html, /href="(?:mailto|tel):/i);
  assert.match(html, /Corporate relationship/);
  assert.match(html, /Cinteca.*technology brand.*AD Caldas Innotec, S\.A\./s);
  assert.match(html, /Tax ID A66316399/);
  assert.match(html, /Global scope/);
  assert.match(html, /progressive global expansion/);
  assert.match(html, /PT(?:<!-- -->)? · (?:<!-- -->)?Português/);
  assert.match(html, /NO(?:<!-- -->)? · (?:<!-- -->)?Norsk bokmål/);
});

test("presents direct and adjacent know-how across the full capability map", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Complete know-how/);
  assert.match(
    html,
    /13(?:<!-- -->|\s)*domains(?:<!-- -->|\s)*·(?:<!-- -->|\s)*195(?:<!-- -->|\s)*capabilities/,
  );
  assert.match(html, /Digital signal processing since 2003/);
  assert.match(html, /AWS, Microsoft Azure and Google Cloud/);
  assert.match(html, /Residential and industrial automation/);
  assert.match(html, /Technical and editorial SEO/);
  assert.match(html, /Direct knowledge/);
  assert.match(html, /Leadership and integration/);
});

test("includes legal, privacy and machine-readable company information", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Legal notice/);
  assert.match(html, /Privacy policy/);
  assert.match(html, /uses AWS infrastructure, SMTP delivery and Cloudflare Turnstile/i);
  assert.match(html, /<form/i);
  assert.match(html, /name="message"/i);
  assert.match(html, /Protected contact form available on this website/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"legalName":"AD Caldas Innotec, S.A."/);
  assert.match(html, /"alternateName":"Cinteca"/);
  assert.match(html, /"taxID":"A66316399"/);
  assert.match(html, /"areaServed":"Worldwide"/);
  assert.match(html, /"knowsAbout":\[/);
  assert.match(html, /rel="canonical" href="https:\/\/cinteca\.es"/i);
  assert.doesNotMatch(html, /"telephone"|google-analytics|googletagmanager|cookie banner/i);
});
