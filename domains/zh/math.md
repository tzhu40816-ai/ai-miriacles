<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 数学：AI 解决的问题

共 29 条 · [← 返回 README](../../README.md)

#### 1956｜给定逻辑公理，机器能不能自己找到定理的证明？

Newell、Simon 和 Shaw 的程序为《数学原理》第二章前 52 条定理中的 38 条找到了证明，其中一条比原书的证明更简洁。

*Logic Theorist*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Logic_Theorist) (资料)

#### 1958｜《数学原理》中的命题逻辑定理，机器能全部证明吗？

王浩在 IBM 704 上编写的程序，在几分钟内证明了《数学原理》中全部 350 多条一阶命题逻辑定理。

*Hao Wang's IBM 704 program*　来源：[IBM J. Res. Dev. 1960](https://doi.org/10.1147/rd.41.0002) (论文)

#### 1959｜机器能不能证明平面几何题？

Gelernter 在 IBM 的几何定理证明程序用图形启发式剪枝搜索，证明了中学几何水平的定理。

*Geometry Theorem Machine*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Herbert_Gelernter) (资料)

#### 1961｜机器能不能做大学微积分考试里的不定积分题？

Slagle 的 SAINT 程序用启发式搜索求解符号积分，在 MIT 一年级微积分期末考题上答对了 54 道中的 52 道。

*SAINT*　来源：[Wikipedia](https://en.wikipedia.org/wiki/James_Robert_Slagle) (资料)

#### 1976｜机器能不能自己提出数学概念和猜想？

Lenat 的 AM 程序从集合论出发，用启发式规则自己“发现”了自然数、质数，并提出了哥德巴赫猜想等已知猜想。

> **边界：** 都是重新发现，没有产生新的数学。

*AM (Automated Mathematician)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (资料)

#### 1996-10｜所有 Robbins 代数都是布尔代数吗？（悬而未决 60 年的 Robbins 猜想）

Argonne 实验室 McCune 的自动推理程序 EQP 找到了关键证明，结合已有成果解决了这个困扰数学家几十年的问题。

*EQP*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (资料) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (报道)

#### 2016-05｜能不能把正整数涂成两种颜色，使得没有同色的勾股数组？（布尔勾股数问题）

Heule 等人用 SAT 求解器证明答案是否定的：一直涂到 7824 还可以，到 7825 就不可能了。证明文件达 200 TB。

> **边界：** 属于自动推理加大规模计算，不是学习型 AI。

*SAT solver*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (资料) · [arXiv](https://arxiv.org/abs/1605.00723) (论文)

#### 2021-02-03｜能不能让计算机自动发现 π、e 等基本常数的新公式？

以色列理工学院的 Ramanujan Machine 自动生成了数十个关于基本常数的新连分数猜想，其中一些后来被证明。

*Ramanujan Machine*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03229-4) (论文)

#### 2021-04-29｜能不能自动构造反例，推翻图论和组合数学中的猜想？

Adam Zsolt Wagner 用强化学习构造图和矩阵，找到了若干已发表猜想的反例。

*Cross-entropy RL*　来源：[arXiv](https://arxiv.org/abs/2104.14516) (论文)

#### 2021-12-01｜纽结的几何性质和代数性质之间，有没有尚未发现的联系？

机器学习帮助数学家发现了纽结理论中的新关系，也为表示论中的一个猜想提供了线索，数学家随后完成了严格证明。

*DeepMind + mathematicians*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-04086-x) (论文)

#### 2023-12-14｜有限几何中“没有三点共线”的点集（cap set），最大能构造到多大？

FunSearch 让大语言模型写程序、自动评估并迭代，在 8 维中找到了比已知更大的 cap set，并改进了相关的渐近下界。

> **边界：** 改进的是下界和具体构造，不是确定了最大值。

*FunSearch*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (论文)

#### 2024-01-17｜奥数几何题需要的辅助线，机器能自己想到吗？

AlphaGeometry 在 30 道国际奥数几何题中解出 25 道，接近金牌选手的平均水平。

*AlphaGeometry*　来源：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (论文)

#### 2024-07-25｜AI 能不能在国际数学奥林匹克竞赛的全部题型上拿到奖牌？

DeepMind 的系统解出 2024 年 IMO 六题中的四题，达到银牌水平，证明以 Lean 形式化语言写成。

> **边界：** 题目先由人工翻译成形式化语言，部分题目的计算时间远超比赛时限。

*AlphaProof + AlphaGeometry 2*　来源：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (官方)

#### 2025-05-14｜两个 4×4 复数矩阵相乘，能不能少做一次乘法？11 维空间里一个球周围最多能贴多少个球？

AlphaEvolve 找到了 48 次标量乘法的 4×4 复矩阵乘法算法（此前为 49 次），还找到了 11 维中 593 个球的接触构型，把已知下界提高了。

> **边界：** 593 是“至少能放这么多”，不是证明了最大值。

*AlphaEvolve*　来源：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (官方) · [arXiv](https://arxiv.org/abs/2506.13131) (论文)

#### 2025-07-21｜只用自然语言、在比赛时限内，AI 能拿到国际数学奥林匹克金牌吗？

Google DeepMind 的 Gemini Deep Think（成绩经 IMO 官方评分）和 OpenAI 的实验模型都宣布解出 2025 年 IMO 六题中的五题，达到金牌分数线。

> **边界：** 竞赛题是已有答案的题目，不等于解决开放问题。

*Gemini Deep Think; OpenAI experimental model*　来源：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (官方) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (报道)

#### 2025-09-18｜流体方程中那些极难捕捉的“不稳定奇点”，能不能被找出来？

Google DeepMind 与布朗大学、纽约大学、斯坦福大学合作，用神经网络加高精度数值方法，在多个流体方程中发现了新的不稳定自相似奇点族。

> **边界：** 是高精度数值发现，不是严格证明；也不等于解决了 Navier–Stokes 问题。

*Physics-informed neural networks (Google DeepMind et al.)*　来源：[Google DeepMind](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/) (官方) · [Physics World](https://physicsworld.com/a/neural-networks-discover-unstable-singularities-in-fluid-systems/) (报道)

#### 2025-11-03｜把 AI 同时用在几十个数学问题上，能有多少收获？

Terence Tao 等人与 AlphaEvolve 合作研究了 67 个分析、组合和几何问题，在其中一部分上重新找到已知最优构造，或给出了改进的构造。

*AlphaEvolve*　来源：[arXiv](https://arxiv.org/abs/2511.02864) (论文)

#### 2025-11-20｜埃尔德什第 848 号问题（一个乘法数论中的极值问题）的答案是什么？

OpenAI 称 GPT-5 为解决这个问题提供了关键想法，研究者据此完成了证明。

> **边界：** 发布方的报告，人机分工需要看原文。

*GPT-5*　来源：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (官方)

#### 2026-01-12｜埃尔德什第 728 号问题（关于阶乘整除性）能被解决吗？

GPT-5.2 Pro 与 Harmonic 的 Aristotle 合作给出了解答，并在 Lean 中完成形式化验证，被描述为基本自主完成。

> **边界：** Terence Tao 评论说，这更多体现的是速度，而不是题目的难度。

*GPT-5.2 Pro + Aristotle (Harmonic)*　来源：[arXiv](https://arxiv.org/abs/2601.07421) (论文) · [The Decoder](https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/) (报道)

#### 2026-02｜AI 能不能自主解决埃尔德什问题集中的多个开放问题？

Google DeepMind 报告其 Aletheia 系统自主解决了埃尔德什第 652 号、第 1051 号等问题。

*Gemini Deep Think (Aletheia)*　来源：[arXiv](https://arxiv.org/abs/2601.22401) (论文)

#### 2026-02-03｜数值半群合冲的 Fel 猜想成立吗？

Axiom Math 的 AxiomProver 从自然语言陈述出发证明了这一猜想，并在 Lean 中完成形式化。

*AxiomProver (Axiom Math)*　来源：[arXiv](https://arxiv.org/abs/2602.03716) (论文)

#### 2026-03-23｜一个超图 Ramsey 类问题的下界构造能不能改进？

GPT-5.4 Pro 给出了改进的构造，Epoch AI 将 FrontierMath 开放问题列表中的这一题标为已解决。

*GPT-5.4 Pro*　来源：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (官方)

#### 2026-03-31｜二项式系数的小素因子、加性基的拆分等几个埃尔德什问题，能被解决吗？

OpenAI 的内部模型给出了这几个问题的简短证明，相关结果以论文形式发布。

*OpenAI internal model*　来源：[arXiv](https://arxiv.org/abs/2603.29961) (论文)

#### 2026-04-15｜埃尔德什、Sárközy 和 Szemerédi 关于本原集求和的猜想成立吗？（埃尔德什第 1196 号问题）

在 Liam Price 的提示下，GPT-5.4 Pro 证明了猜想中的精确界 1+O(1/log x)。

*GPT-5.4 Pro*　来源：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (资料)

#### 2026-08-10｜黎曼ζ函数的非平凡零点，能证明至少有多大比例落在临界线上？

Anthropic 称，Claude 的研究版本把已知下界从 41.6% 提高到 67.2%，同时公开了论文、专家意见和 Lean 形式化证明。

> **边界：** 黎曼猜想本身没有被证明，这是攻关过程中顺带得到的结果。

*Claude (research version)*　来源：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (官方)

#### 2026-09-04｜费马大定理的证明，能不能完整地用计算机逐步验证？

Anthropic 称数十个 Claude 智能体用 Lean 完成了费马大定理证明的端到端形式化，写了约 1300 万行 Lean 代码。

> **边界：** 是对已知证明的形式化验证，不是新的数学发现；发布方自己的研究。

*Claude*　来源：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (官方)

#### 2026-09-08｜一开始光滑的三维流体，会不会在有限时间内出现奇点？（Navier–Stokes 千禧年难题）

OpenAI 称其内部模型证明了：在施加光滑外力的情况下，Navier–Stokes 方程的解会在有限时间内爆破，并公开了 Lean 形式化证明；同时还给出了无外力 Euler 方程的爆破结果。

> **边界：** 这是发布方的主张，尚未经同行评审，也未获克雷研究所认定。Buckmaster 与 Alpöge 同期发表了相关的爆破结果，双方存在归属争议。

*OpenAI internal model (GPT-6 Astra for Lean)*　来源：[OpenAI](https://openai.com/index/navier-stokes-solution/) (官方) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (官方) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (报道)

#### 2026-09-17｜线性拟阵上的“强秘书问题”猜想成立吗？

研究者通过与 ChatGPT 对话得到了该猜想在线性拟阵情形下的证明。

> **边界：** 前一天另一组人类研究者用几乎相同的方法发布了同样的结果。

*ChatGPT (GPT-6 Astra)*　来源：[arXiv](https://arxiv.org/abs/2609.20797) (论文) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (论文)

#### 2026-10-06｜一个 AI 模型能同时在多少个数学问题上取得新结果？

OpenAI 一次性公开了一批由内部模型得到的新数学结果，平均每个结果约用 3 小时推理，其中许多附有 Lean 形式化证明。

> **边界：** 各结果的验证程度不同，需要逐题拆分查看。

*OpenAI internal model*　来源：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方)

