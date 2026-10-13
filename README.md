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
| 按领域 / By field | [数学](domains/zh/math.md) · [博弈](domains/zh/games.md) · [生物](domains/zh/biology.md) · [感知与语言](domains/zh/language.md) · [算法与软件](domains/zh/computing.md) · [医学](domains/zh/medicine.md) · [物理](domains/zh/physics.md) · [机器人与自主系统](domains/zh/robotics.md) · [地球与气候](domains/zh/earth.md) · [化学](domains/zh/chemistry.md) · [天文](domains/zh/astronomy.md) · [材料](domains/zh/materials.md) · [其他](domains/zh/other.md) | [Mathematics](domains/en/math.md) · [Games](domains/en/games.md) · [Biology](domains/en/biology.md) · [Perception & language](domains/en/language.md) · [Algorithms & software](domains/en/computing.md) · [Medicine](domains/en/medicine.md) · [Physics](domains/en/physics.md) · [Robotics & autonomy](domains/en/robotics.md) · [Earth & climate](domains/en/earth.md) · [Chemistry](domains/en/chemistry.md) · [Astronomy](domains/en/astronomy.md) · [Materials](domains/en/materials.md) · [Other](domains/en/other.md) |

当前 218 条，覆盖 1956–2026。Currently 218 entries, 1956–2026.

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
| [2026](TIMELINE.md#2026) | 50 |

| 领域 / Field | 条数 / Entries |
|---|---|
| 数学 / Mathematics | 69 |
| 博弈 / Games | 26 |
| 生物 / Biology | 20 |
| 感知与语言 / Perception & language | 19 |
| 算法与软件 / Algorithms & software | 18 |
| 医学 / Medicine | 18 |
| 物理 / Physics | 13 |
| 机器人与自主系统 / Robotics & autonomy | 11 |
| 地球与气候 / Earth & climate | 7 |
| 化学 / Chemistry | 6 |
| 天文 / Astronomy | 5 |
| 材料 / Materials | 5 |
| 其他 / Other | 1 |

## 最近新增 / Most recent

- 2026-10-08｜紫外巡天留下的大片空白，能不能补成一幅覆盖全天的紫外地图？
- 2026-10-06｜一个 AI 模型能同时在多少个数学问题上取得新结果？
- 2026-09-28｜高维空间里，一个球最多能同时与多少个等大的球相切？（亲吻数下界）
- 2026-09-23｜噬菌体 DNA 中一个奇怪的重复序列，背后是什么新的生物系统？
- 2026-09-23｜银河系里还有多少稀有的沃尔夫-拉叶星没被发现？
- 2026-09-21｜在数据很少的情况下，能不能设计出一类新的杀菌聚合物？
- 2026-09-17｜线性拟阵上的“强秘书问题”猜想成立吗？
- 2026-09-08｜一开始光滑的三维流体，会不会在有限时间内出现奇点？（Navier–Stokes 千禧年难题）
- 2026-09-07｜环论中的 Köthe 猜想成立吗？
- 2026-09-04｜费马大定理的证明，能不能完整地用计算机逐步验证？
- 2026-09-03｜雄性果蝇完整的中枢神经系统是怎样连接的？
- 2026-08-30｜相邻素数之差有无穷多次不超过某个常数，这个常数最小能证到多少？（孪生素数猜想的方向）

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
