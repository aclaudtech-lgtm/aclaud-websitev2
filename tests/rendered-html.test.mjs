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

test("server-renders the aclaud home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Build what comes next\. Operate it with confidence\./);
  assert.match(html, /The hard part begins after the prototype\./);
  assert.match(html, /Specialized engineering, integrated with your program\./);
  assert.match(html, /href="\/engineering"/);
  assert.match(html, /href="\/contracting"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /aclaud-capabilities-statement\.pdf/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("server-renders the engineering perspective", async () => {
  const response = await render("/engineering");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Moving software from possibility to dependable operation\./);
  assert.match(html, /Four concerns\. One operating reality\./);
  assert.match(html, /When software can act, authorization becomes part of the design\./);
  assert.match(html, /Read-only assistant/);
  assert.match(html, /Coordinated multi-agent workflow/);
});
