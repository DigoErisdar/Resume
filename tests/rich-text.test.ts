import test from "node:test";
import assert from "node:assert/strict";
import { parseRichText } from "../src/utils/rich-text.ts";

test("Term markup separates identifier from display text and preserves spacing", () => {
  assert.deepEqual(
    parseRichText("Описывал [term=REST API]API[/term]-контракты."),
    [
      { kind: "text", text: "Описывал " },
      { kind: "term", id: "REST API", text: "API" },
      { kind: "text", text: "-контракты." },
    ],
  );
});
test("Supports terms inside links and emphasis", () => {
  const nodes = parseRichText(
    "[strong]Работал с [term=SQL]SQL[/term][/strong] [link=https://example.com]Проект[/link]",
  );
  assert.equal(nodes[0]?.kind, "strong");
  assert.equal(nodes[2]?.kind, "link");
});
test("Does not interpret HTML, unsafe links or incomplete markup", () => {
  const value =
    "<script>alert(1)</script> [link=javascript:alert(1)]click[/link] [term=SQL]unfinished";
  assert.ok(parseRichText(value).every((node) => node.kind === "text"));
  assert.equal(
    parseRichText(value)
      .map((node) => (node.kind === "text" ? node.text : ""))
      .join(""),
    value,
  );
});
