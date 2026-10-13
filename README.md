# AI创造的奇迹 · Miracles Made by AI

**网站 / Website:** https://tzhu40816-ai.github.io/ai-miriacles/

从 1956 年第一个自动证明定理的程序，到今天参与解决数学和物理前沿难题——按时间顺序记录 **AI 实际解决或推进了的具体问题**。主角是问题，不是模型。

A chronological record of concrete problems AI has solved or advanced — from the first theorem-proving program in 1956 to today's frontier mathematics and physics. The problem is the protagonist, not the model.

## 说明 / Notes

- 每条都附原始来源链接，按来源的说法整理，本站不作独立核验；有争议或未经同行评审的条目会标出“边界”。
  Every entry links to its sources and is summarised as they report it; unverified or disputed claims are marked.
- 支持中文 / English，可在 `assets/i18n.js` 中添加更多语言。
- 发现遗漏或错误？欢迎[提交 Issue](https://github.com/tzhu40816-ai/ai-miriacles/issues/new)。

## 结构 / Structure

```
data/events.json        全部条目（唯一数据源）/ all entries (single source of truth)
index.html, assets/     静态网站 / static site, no build step
scripts/validate.mjs    格式检查，失败则不发布 / format check, blocks deploy on failure
scripts/check-links.mjs 检查链接，结果写入 data/link-report.json / link check, writes data/link-report.json
AGENTS.md               自动更新代理的说明 / instructions for the update agent
```

本地预览 / Local preview: `python3 -m http.server` then open http://localhost:8000

## 许可 / License

代码 MIT；数据（`data/`）CC BY 4.0。Code MIT; data CC BY 4.0.
