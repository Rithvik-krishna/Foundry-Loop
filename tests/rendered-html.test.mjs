import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Foundry & Loop home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Foundry &amp; Loop|Foundry & Loop/i);
  assert.match(html, /Building software/i);
  assert.match(html, /Chameleon/i);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("server-renders the primary content pages", async () => {
  for (const [path, title] of [["/about", "Technology with a point of view"], ["/products", "Useful by design"], ["/contact", "Let’s make something useful"]]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});
