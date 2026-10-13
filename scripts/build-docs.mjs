// Generates the human-readable Markdown from data/events.json.
//   README.md                 overview, stats, index
//   TIMELINE.md / TIMELINE.en.md   full chronological timeline (zh / en)
//   domains/zh/<domain>.md, domains/en/<domain>.md   per-field timelines
// Never edit those files by hand: edit data/events.json and run
//   node scripts/build-docs.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const root = new URL("../", import.meta.url);
const events = JSON.parse(readFileSync(new URL("data/events.json", root), "utf8"))
  .sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));

// reuse the website's UI strings (domain names, link kinds)
const win = {};
new Function("window", readFileSync(new URL("assets/i18n.js", root), "utf8"))(win);
const UI = win.UI;

const SITE = "https://jwcommunity.space/ai/miracles";
const REPO = "https://github.com/tzhu40816-ai/ai-miriacles";

const ERAS = [
  ["1950s-1970s", (y) => y < 1980],
  ["1980s-1990s", (y) => y < 2000],
  ["2000s", (y) => y < 2010],
  ["2010s", (y) => y < 2020],
  ["2020-2023", (y) => y < 2024],
  ["2024", (y) => y === 2024],
  ["2025", (y) => y === 2025],
  ["2026", (y) => y >= 2026],
];
const eraOf = (e) => ERAS.find(([, f]) => f(+e.date.slice(0, 4)))[0];
const pick = (f, lang) => (f && (f[lang] || f.en || f.zh)) || "";
const oneLine = (s) => s.replace(/\s+/g, " ").trim();

const T = {
  zh: {
    lead: "按时间顺序收录 AI 实际解决或推进了的具体问题。主角是问题，不是模型。",
    caveat: "边界", approx: "约", sources: "来源",
    timelineTitle: "时间线：从最早到现在", domainTitle: (d) => `${d}：AI 解决的问题`,
    back: "← 返回 README", other: "其他语言", entries: (n) => `共 ${n} 条`,
  },
  en: {
    lead: "A chronological record of concrete problems AI has solved or advanced. The problem is the protagonist, not the model.",
    caveat: "Limits", approx: "c.", sources: "Sources",
    timelineTitle: "Timeline: from the earliest to today", domainTitle: (d) => `${d}: problems AI has solved`,
    back: "← Back to README", other: "Other language", entries: (n) => `${n} entries`,
  },
};

function renderEntry(e, lang, withDomain = true) {
  const u = UI[lang], t = T[lang];
  const date = (e.approx ? t.approx + " " : "") + e.date;
  const links = (e.links || []).map((l) => `[${l.label || new URL(l.url).hostname}](${l.url}) (${u.kinds[l.kind] || l.kind})`).join(" · ");
  const meta = [withDomain ? u.domains[e.domain] || e.domain : null, e.system].filter(Boolean).join(" · ");
  let s = `#### ${date}｜${oneLine(pick(e.title, lang))}\n\n${oneLine(pick(e.summary, lang))}\n\n`;
  if (e.caveat) s += `> **${t.caveat}：** ${oneLine(pick(e.caveat, lang))}\n\n`;
  s += `${meta ? `*${meta}*　` : ""}${t.sources}：${links}\n\n`;
  return s;
}

function renderList(list, lang, headingLevel = "##") {
  let out = "", era = null;
  for (const e of list) {
    const k = eraOf(e);
    if (k !== era) { out += `${headingLevel} ${k}\n\n`; era = k; }
    out += renderEntry(e, lang);
  }
  return out;
}

const suffix = (lang) => (lang === "zh" ? "" : ".en");
const stamp = `<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->\n\n`;

// ---- timelines ----
for (const lang of ["zh", "en"]) {
  const other = lang === "zh" ? "en" : "zh";
  let md = stamp + `# ${T[lang].timelineTitle}\n\n${T[lang].lead}\n\n` +
    `${T[lang].entries(events.length)} · [${T[lang].back}](README.md) · ${T[lang].other}：[${other === "zh" ? "中文" : "English"}](TIMELINE${suffix(other)}.md)\n\n` +
    ERAS.filter(([k]) => events.some((e) => eraOf(e) === k)).map(([k]) => `[${k}](#${k})`).join(" · ") + "\n\n";
  md += renderList(events, lang);
  writeFileSync(new URL(`TIMELINE${suffix(lang)}.md`, root), md);
}

// ---- per-domain pages ----
rmSync(new URL("domains/", root), { recursive: true, force: true });
const byDomain = {};
for (const e of events) (byDomain[e.domain] ||= []).push(e);
for (const lang of ["zh", "en"]) {
  mkdirSync(new URL(`domains/${lang}/`, root), { recursive: true });
  for (const [d, list] of Object.entries(byDomain)) {
    const name = UI[lang].domains[d] || d;
    let md = stamp + `# ${T[lang].domainTitle(name)}\n\n${T[lang].entries(list.length)} · [${T[lang].back}](../../README.md)\n\n`;
    for (const e of list) md += renderEntry(e, lang, false);
    writeFileSync(new URL(`domains/${lang}/${d}.md`, root), md);
  }
}

// ---- README ----
const years = events.map((e) => +e.date.slice(0, 4));
const first = Math.min(...years), last = Math.max(...years);
const eraRows = ERAS.map(([k]) => [k, events.filter((e) => eraOf(e) === k).length]).filter(([, n]) => n);
const domRows = Object.entries(byDomain).sort((a, b) => b[1].length - a[1].length);
const recent = events.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
const recentLine = (e, lang) => `- ${e.date}｜${oneLine(pick(e.title, lang))}`;

const readme = `${stamp}# AI创造的奇迹 · Miracles Made by AI

**网站 / Website：** ${SITE}

中文：[AI创造的奇迹](${SITE}) · English: [Miracles Made by AI](${SITE}?lang=en)

${T.zh.lead}从 ${first} 年第一个自动证明定理的程序，到今天参与解决数学和物理前沿难题。

${T.en.lead} From the first theorem-proving program in ${first} to AI taking part in frontier mathematics and physics today.

> 每条都附原始来源链接，内容按来源的说法整理，本仓库不作独立核验；有争议或尚未同行评审的条目会标出“边界”。
> Every entry links to its sources and is summarised as they report it; this repository does not independently verify claims, and disputed or non-peer-reviewed items are marked.

## 怎么读 / How to read

| | 中文 | English |
|---|---|---|
| 完整时间线（最早 → 最新）/ Full timeline | [TIMELINE.md](TIMELINE.md) | [TIMELINE.en.md](TIMELINE.en.md) |
| 按领域 / By field | ${domRows.map(([d]) => `[${UI.zh.domains[d]}](domains/zh/${d}.md)`).join(" · ")} | ${domRows.map(([d]) => `[${UI.en.domains[d]}](domains/en/${d}.md)`).join(" · ")} |

当前 ${events.length} 条，覆盖 ${first}–${last}。Currently ${events.length} entries, ${first}–${last}.

## 分布 / Coverage

| 时期 / Period | 条数 / Entries |
|---|---|
${eraRows.map(([k, n]) => `| [${k}](TIMELINE.md#${k}) | ${n} |`).join("\n")}

| 领域 / Field | 条数 / Entries |
|---|---|
${domRows.map(([d, l]) => `| ${UI.zh.domains[d]} / ${UI.en.domains[d]} | ${l.length} |`).join("\n")}

## 最近新增 / Most recent

${recent.map((e) => recentLine(e, "zh")).join("\n")}

## 仓库结构 / Structure

\`\`\`
data/events.json         全部条目（唯一数据源）/ all entries — single source of truth
TIMELINE.md, TIMELINE.en.md, domains/   由脚本生成的可读页面 / generated readable pages
index.html, assets/      静态网站 / static site (reads data/events.json)
scripts/build-docs.mjs   生成上述 Markdown / generates the Markdown
scripts/validate.mjs     格式检查 / format check
scripts/check-links.mjs  链接检查 → data/link-report.json / link check
AGENTS.md                自动更新代理的说明 / instructions for the update agent
\`\`\`

更新流程：编辑 \`data/events.json\` → \`node scripts/validate.mjs\` → \`node scripts/build-docs.mjs\` → 提交。
Workflow: edit \`data/events.json\` → \`node scripts/validate.mjs\` → \`node scripts/build-docs.mjs\` → commit.

## 网站与同步 / Website and synchronization

正式网站位于健文社区的「AI 学习 → AI创造的奇迹」，首页和产品页也有入口；无需登录即可浏览。支持搜索、领域筛选、中英文、时间排序和入门精选。
The public website is part of Jianwen Community's AI Learning section, with additional links from the homepage and Products. Browsing does not require an account.

本仓库的 \`data/events.json\` 是案例数据源；README、时间线和领域文档由脚本生成。健文社区使用随站点部署的版本快照，仓库提交不会直接改动已经上线的数据。
This repository owns the event data and generated documentation. The community website serves a deployed snapshot; a commit here does not directly change the live website.

维护者在[社区网站仓库](https://github.com/SmallHorseBrother/jianwen-community)运行 \`node scripts/sync-ai-miracles.mjs --write\`，先校验上游数据，再更新案例、来源版本和许可说明；检查并提交这些改动后，沿用网站现有部署流程发布。可用 \`--ref <commit-sha>\` 固定来源版本；不带 \`--write\` 时仅检查，不修改文件。
Maintainers run \`node scripts/sync-ai-miracles.mjs --write\` in the community repository, review and commit the validated snapshot, then publish through the existing website deployment. Use \`--ref <commit-sha>\` to pin a revision, or omit \`--write\` for a read-only check.

本仓库保留可独立运行的静态页面。GitHub Pages 仅在仓库管理员启用后作为可选部署；旧 Pages 地址目前不是正式网站入口。
The standalone static page is retained. GitHub Pages is optional and only deploys when enabled by a repository administrator; its former address is not the canonical public website.

发现遗漏或错误？欢迎[提交 Issue](${REPO}/issues/new)。Spotted a gap or an error? [Open an issue](${REPO}/issues/new).

## 许可 / License

代码 MIT；数据（\`data/\`）CC BY 4.0。Code MIT; data CC BY 4.0.
`;
writeFileSync(new URL("README.md", root), readme);
console.log(`✓ docs built: ${events.length} events, ${Object.keys(byDomain).length} domains`);
