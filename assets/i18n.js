// UI strings. To add a language: copy the "en" block, translate it,
// and add the code to LANGS. Event content falls back to en → zh if a
// translation is missing.
window.LANGS = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" }
];

window.UI = {
  zh: {
    title: "AI创造的奇迹",
    subtitle: "从寻找一道题的证明，到参与解决人类尚未解决的问题",
    intro: "这里按时间顺序收录 AI 实际解决或推进了的具体问题。主角是问题，不是模型。每条都附有原始来源链接，内容按来源的说法整理，本站不作独立核验。",
    search: "搜索问题、系统或关键词…",
    all: "全部",
    oldest: "从最早开始",
    newest: "从最新开始",
    count: (n, total) => n === total ? `共 ${total} 条` : `显示 ${n} / ${total} 条`,
    caveat: "边界",
    approx: "约",
    empty: "没有符合条件的条目。",
    footer: "数据持续自动更新。发现遗漏或错误？",
    report: "提交线索",
    source: "源代码与数据",
    kinds: { paper: "论文", official: "官方", news: "报道", reference: "资料" },
    domains: {
      math: "数学", physics: "物理", chemistry: "化学", materials: "材料",
      biology: "生物", medicine: "医学", astronomy: "天文", earth: "地球与气候",
      computing: "算法与软件", games: "博弈", robotics: "机器人与自主系统",
      language: "感知与语言", other: "其他"
    }
  },
  en: {
    title: "Miracles Made by AI",
    subtitle: "From searching for a proof, to helping solve problems no human had solved",
    intro: "A chronological record of concrete problems AI has solved or advanced. The problem is the protagonist, not the model. Every entry links to its original sources and is summarised as those sources report it; this site does not independently verify claims.",
    search: "Search problems, systems, keywords…",
    all: "All",
    oldest: "Oldest first",
    newest: "Newest first",
    count: (n, total) => n === total ? `${total} entries` : `Showing ${n} of ${total}`,
    caveat: "Limits",
    approx: "c.",
    empty: "No matching entries.",
    footer: "Updated automatically. Spotted a gap or an error?",
    report: "Submit a lead",
    source: "Source & data",
    kinds: { paper: "Paper", official: "Official", news: "News", reference: "Reference" },
    domains: {
      math: "Mathematics", physics: "Physics", chemistry: "Chemistry", materials: "Materials",
      biology: "Biology", medicine: "Medicine", astronomy: "Astronomy", earth: "Earth & climate",
      computing: "Algorithms & software", games: "Games", robotics: "Robotics & autonomy",
      language: "Perception & language", other: "Other"
    }
  }
};
