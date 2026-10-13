// Checks every link in data/events.json. Never fails the build: it prints a
// report (and writes it to the GitHub Actions summary). Only 404/410 and
// unreachable hosts count as broken; 401/403/429 are usually bot blocking.
import { readFileSync, appendFileSync } from "node:fs";

const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url), "utf8"));
const jobs = events.flatMap((e) => (e.links || []).map((l) => ({ id: e.id, url: l.url })));
const UA = "Mozilla/5.0 (compatible; ai-miracles-linkcheck/1.0; +https://github.com/tzhu40816-ai/ai-miriacles)";

async function check(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const r = await fetch(url, { method, redirect: "follow", headers: { "user-agent": UA }, signal: AbortSignal.timeout(20000) });
      if (r.ok) return { status: r.status, ok: true };
      if (method === "GET" || ![403, 405, 501].includes(r.status)) return { status: r.status, ok: ![404, 410].includes(r.status) };
    } catch (err) {
      if (method === "GET") return { status: "ERR " + (err.cause?.code || err.name), ok: false };
    }
  }
}

const results = [];
const queue = jobs.slice();
await Promise.all(Array.from({ length: 6 }, async () => {
  while (queue.length) { const j = queue.shift(); results.push({ ...j, ...(await check(j.url)) }); }
}));

const broken = results.filter((r) => !r.ok);
const blocked = results.filter((r) => r.ok && r.status !== 200 && typeof r.status === "number" && r.status >= 400);
let md = `## Link check\n\n${results.length} links, ${broken.length} broken, ${blocked.length} blocked by site (not counted as broken)\n\n`;
if (broken.length) md += "| event | url | status |\n|---|---|---|\n" + broken.map((r) => `| ${r.id} | ${r.url} | ${r.status} |`).join("\n") + "\n";
console.log(md);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md);
