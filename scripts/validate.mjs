// Checks data/events.json format. Exit code 1 on any error (blocks deploy).
// Usage: node scripts/validate.mjs
import { readFileSync } from "node:fs";

const DOMAINS = ["math", "physics", "chemistry", "materials", "biology", "medicine", "astronomy",
  "earth", "computing", "games", "robotics", "language", "other"];
const KINDS = ["paper", "official", "news", "reference"];
const DATE = /^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/;

let events;
try {
  events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url), "utf8"));
} catch (e) {
  console.error("data/events.json is not valid JSON:", e.message);
  process.exit(1);
}

const errors = [];
const ids = new Set();
const urls = new Map();
if (!Array.isArray(events)) errors.push("top level must be an array");

for (const [i, e] of (events || []).entries()) {
  const at = `#${i} (${e && e.id})`;
  if (!e || typeof e !== "object") { errors.push(`${at}: not an object`); continue; }
  if (!e.id || !/^[a-z0-9-]+$/.test(e.id)) errors.push(`${at}: id must be lowercase letters, digits, dashes`);
  if (ids.has(e.id)) errors.push(`${at}: duplicate id`);
  ids.add(e.id);
  if (!DATE.test(e.date || "")) errors.push(`${at}: date must be YYYY, YYYY-MM or YYYY-MM-DD`);
  if (!DOMAINS.includes(e.domain)) errors.push(`${at}: domain must be one of ${DOMAINS.join(", ")}`);
  for (const k of ["title", "summary"]) {
    if (!e[k] || !e[k].zh || !e[k].en) errors.push(`${at}: ${k} needs both zh and en`);
  }
  if (e.caveat && (!e.caveat.zh || !e.caveat.en)) errors.push(`${at}: caveat needs both zh and en`);
  if (!Array.isArray(e.links) || e.links.length === 0) errors.push(`${at}: at least one link required`);
  for (const l of e.links || []) {
    try { const u = new URL(l.url); if (!/^https?:$/.test(u.protocol)) throw 0; }
    catch { errors.push(`${at}: bad url ${l.url}`); continue; }
    if (!KINDS.includes(l.kind)) errors.push(`${at}: link kind must be one of ${KINDS.join(", ")}`);
    if (urls.has(l.url) && urls.get(l.url) !== e.id)
      console.warn(`warning: ${l.url} used by both ${urls.get(l.url)} and ${e.id} — possible duplicate event`);
    urls.set(l.url, e.id);
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n` + errors.map((x) => "  - " + x).join("\n"));
  process.exit(1);
}
console.log(`✓ ${events.length} events OK`);
