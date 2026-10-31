<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# AI创造的奇迹 · Miracles Made by AI

**网站 / Website：** https://jwcommunity.space/ai/miracles

中文：[AI创造的奇迹](https://jwcommunity.space/ai/miracles) · English: [Miracles Made by AI](https://jwcommunity.space/ai/miracles?lang=en)

按时间顺序收录 AI 实际解决或推进了的具体问题。主角是问题，不是模型。从 1956 年第一个自动证明定理的程序，到今天参与解决数学和物理前沿难题。

A chronological record of concrete problems AI has solved or advanced. The problem is the protagonist, not the model. From the first theorem-proving program in 1956 to AI taking part in frontier mathematics and physics today.

> 每条都附原始来源链接，内容按来源的说法整理，本仓库不作独立核验；有争议或尚未同行评审的条目会标出“边界”。
> Every entry links to its sources and is summarised as they report it; this repository does not independently verify claims, and disputed or non-peer-reviewed items are marked.

## 怎么读 / How to read

| | 中文 | English |
|---|---|---|
| 完整时间线（最早 → 最新）/ Full timeline | [TIMELINE.md](TIMELINE.md) | [TIMELINE.en.md](TIMELINE.en.md) |
| 按领域 / By field | [数学](domains/zh/math.md) · [博弈](domains/zh/games.md) · [医学](domains/zh/medicine.md) · [生物](domains/zh/biology.md) · [算法与软件](domains/zh/computing.md) · [感知与语言](domains/zh/language.md) · [物理](domains/zh/physics.md) · [机器人与自主系统](domains/zh/robotics.md) · [地球与气候](domains/zh/earth.md) · [化学](domains/zh/chemistry.md) · [天文](domains/zh/astronomy.md) · [材料](domains/zh/materials.md) · [其他](domains/zh/other.md) | [Mathematics](domains/en/math.md) · [Games](domains/en/games.md) · [Medicine](domains/en/medicine.md) · [Biology](domains/en/biology.md) · [Algorithms & software](domains/en/computing.md) · [Perception & language](domains/en/language.md) · [Physics](domains/en/physics.md) · [Robotics & autonomy](domains/en/robotics.md) · [Earth & climate](domains/en/earth.md) · [Chemistry](domains/en/chemistry.md) · [Astronomy](domains/en/astronomy.md) · [Materials](domains/en/materials.md) · [Other](domains/en/other.md) |

当前 233 条，覆盖 1956–2026。Currently 233 entries, 1956–2026.

## 分布 / Coverage

| 时期 / Period | 条数 / Entries |
|---|---|
| [1950s-1970s](TIMELINE.md#1950s-1970s) | 21 |
| [1980s-1990s](TIMELINE.md#1980s-1990s) | 15 |
| [2000s](TIMELINE.md#2000s) | 7 |
| [2010s](TIMELINE.md#2010s) | 36 |
| [2020-2023](TIMELINE.md#2020-2023) | 49 |
| [2024](TIMELINE.md#2024) | 14 |
| [2025](TIMELINE.md#2025) | 26 |
| [2026](TIMELINE.md#2026) | 65 |

| 领域 / Field | 条数 / Entries |
|---|---|
| 数学 / Mathematics | 70 |
| 博弈 / Games | 26 |
| 医学 / Medicine | 23 |
| 生物 / Biology | 23 |
| 算法与软件 / Algorithms & software | 21 |
| 感知与语言 / Perception & language | 19 |
| 物理 / Physics | 15 |
| 机器人与自主系统 / Robotics & autonomy | 11 |
| 地球与气候 / Earth & climate | 8 |
| 化学 / Chemistry | 6 |
| 天文 / Astronomy | 5 |
| 材料 / Materials | 5 |
| 其他 / Other | 1 |

## 最近新增 / Most recent

- 2026-10-27｜抗体片段的结合能力、稳定性与聚集问题，能不能一起改进？
- 2026-10-27｜CAR-T 的调控元件能不能缩短，同时保持或改善实验表现？
- 2026-10-27｜针对过敏反应的 IgE，能否找到结合或促使其脱离细胞的候选分子？
- 2026-10-26｜关于 3-SAT 难度的指数时间假设，能被推翻吗？
- 2026-10-26｜局部光滑猜想能不能在所有维度成立，并推进 Kakeya 问题？
- 2026-10-26｜包含量子色动力学的四维量子场论，能建立严格存在性证明吗？
- 2026-10-23｜放射科医生不足时，AI 能不能把结核筛查带到基层和矿井？
- 2026-10-22｜成熟开源软件的测试入口，能不能进一步得到机器检查的不崩溃证明？
- 2026-10-22｜卫星图里同样是绿色，能不能分清天然林、人工林和树木农场？
- 2026-10-21｜百万级脑细胞扰动数据，能不能更快转化为可检验的疾病研究线索？
- 2026-10-21｜缺少专业超声医师的基层诊所，能不能可靠估计孕周？
- 2026-10-20｜AI 能不能设计出经实验确认可结合蝎毒神经毒素的蛋白质？

## 仓库结构 / Structure

```
data/events.json         全部条目（唯一数据源）/ all entries — single source of truth
TIMELINE.md, TIMELINE.en.md, domains/   由脚本生成的可读页面 / generated readable pages
index.html, assets/      静态网站 / static site (reads data/events.json)
scripts/build-docs.mjs   生成上述 Markdown / generates the Markdown
scripts/validate.mjs     格式检查 / format check
scripts/check-links.mjs  链接检查 → data/link-report.json / link check
AGENTS.md                自动更新代理的说明 / instructions for the update agent
```

更新流程：编辑 `data/events.json` → `node scripts/validate.mjs` → `node scripts/build-docs.mjs` → 提交。
Workflow: edit `data/events.json` → `node scripts/validate.mjs` → `node scripts/build-docs.mjs` → commit.

## 网站与同步 / Website and synchronization

正式网站位于健文社区的「AI 学习 → AI创造的奇迹」，首页和产品页也有入口；无需登录即可浏览。支持搜索、领域筛选、中英文、时间排序和入门精选。
The public website is part of Jianwen Community's AI Learning section, with additional links from the homepage and Products. Browsing does not require an account.

本仓库的 `data/events.json` 是案例数据源；README、时间线和领域文档由脚本生成。健文社区使用随站点部署的版本快照，仓库提交不会直接改动已经上线的数据。
This repository owns the event data and generated documentation. The community website serves a deployed snapshot; a commit here does not directly change the live website.

维护者在[社区网站仓库](https://github.com/SmallHorseBrother/jianwen-community)运行 `node scripts/sync-ai-miracles.mjs --write`，先校验上游数据，再更新案例、来源版本和许可说明；检查并提交这些改动后，沿用网站现有部署流程发布。可用 `--ref <commit-sha>` 固定来源版本；不带 `--write` 时仅检查，不修改文件。
Maintainers run `node scripts/sync-ai-miracles.mjs --write` in the community repository, review and commit the validated snapshot, then publish through the existing website deployment. Use `--ref <commit-sha>` to pin a revision, or omit `--write` for a read-only check.

本仓库保留可独立运行的静态页面。GitHub Pages 仅在仓库管理员启用后作为可选部署；旧 Pages 地址目前不是正式网站入口。
The standalone static page is retained. GitHub Pages is optional and only deploys when enabled by a repository administrator; its former address is not the canonical public website.

发现遗漏或错误？欢迎[提交 Issue](https://github.com/tzhu40816-ai/ai-miriacles/issues/new)。Spotted a gap or an error? [Open an issue](https://github.com/tzhu40816-ai/ai-miriacles/issues/new).

## 许可 / License

代码 MIT；数据（`data/`）CC BY 4.0。Code MIT; data CC BY 4.0.
