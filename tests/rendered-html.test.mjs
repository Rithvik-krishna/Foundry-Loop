import assert from "node:assert/strict";
import test from "node:test";

let workerPromise;
const workerContext = { waitUntil() {}, passThroughOnException() {} };
const assetBinding = { ASSETS: { fetch: async () => new Response("asset", { headers: { "content-type": "image/jpeg" } }) } };

async function getWorker() {
  workerPromise ??= (async () => {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
    const { default: worker } = await import(workerUrl.href);
    return worker;
  })();
  return workerPromise;
}

async function render(path = "/", init = {}) {
  const worker = await getWorker();
  return worker.fetch(new Request(`http://localhost${path}`, {
    ...init,
    headers: { accept: "text/html", ...init.headers },
  }), assetBinding, workerContext);
}

test("server-renders the Foundry & Loop home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Foundry &amp; Loop|Foundry & Loop/i);
  assert.match(html, /Building software/i);
  assert.match(html, /Chameleon/i);
  assert.match(html, /src="\/images\/foundry-loop-hero\.jpg"/);
  assert.match(html, /object-fit:contain/);
  assert.doesNotMatch(html, /_vinext\/image/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("server-renders the primary content pages", async () => {
  for (const [path, title] of [["/about", "Technology with a point of view"], ["/how-we-build", "A considered way of making things"], ["/products", "Useful by design"], ["/news", "Notes from Foundry & Loop"], ["/contact", "Let’s make something useful"]]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const titlePattern = title.split("&").map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("(?:&|&amp;)");
    assert.match(await response.text(), new RegExp(titlePattern, "i"));
  }
});

test("serves stable sitemap and robots metadata", async () => {
  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  for (const path of ["/", "/about", "/how-we-build", "/products", "/news", "/careers", "/contact", "/privacy", "/terms"]) {
    assert.match(sitemapXml, new RegExp(`https://foundryandloop\\.com${path === "/" ? "/" : path}`));
  }
  assert.match(sitemapXml, /2026-08-06T00:00:00\.000Z/);

  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/foundryandloop\.com\/sitemap\.xml/);
});

test("validates and accepts contact enquiries", async () => {
  const malformed = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "not-json",
  });
  assert.equal(malformed.status, 400);

  const invalid = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "A", email: "not-an-email", subject: "Hi", message: "short" }),
  });
  assert.equal(invalid.status, 422);
  const invalidBody = await invalid.json();
  assert.equal(invalidBody.success, false);
  assert.ok(invalidBody.errors.email);

  const valid = await render("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: "Ada Lovelace", email: "ada@example.com", company: "Analytical Engines", subject: "A thoughtful enquiry", message: "I would like to learn more about your products and team." }),
  });
  assert.equal(valid.status, 200);
  assert.deepEqual(await valid.json(), { success: true, message: "Thanks - your message is on its way." });
});

test("renders the accessible 404 page", async () => {
  const response = await render("/does-not-exist");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /404\s*\/\s*Not found/i);
  assert.match(html, /Back to\s*(?:<!--.*?-->)?\s*Foundry &amp; Loop/i);
});

test("falls back safely when the image transformation binding is unavailable", async () => {
  const worker = await getWorker();
  const response = await worker.fetch(
    new Request("http://localhost/_vinext/image?url=%2Fimages%2Fchameleon-art.jpg&w=750&q=85"),
    assetBinding,
    workerContext,
  );
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/jpeg");

  const missingAssets = await worker.fetch(
    new Request("http://localhost/_vinext/image?url=%2Fimages%2Fchameleon-art.jpg&w=750&q=85"),
    {},
    workerContext,
  );
  assert.equal(missingAssets.status, 503);
});
