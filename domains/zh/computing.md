<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 算法与软件：AI 解决的问题

共 18 条 · [← 返回 README](../../README.md)

#### 1959｜能不能写出一个与具体领域无关、通用的解题程序？

Newell、Shaw 和 Simon 的通用问题求解器（GPS）把“手段—目的分析”形式化，用同一套方法解决逻辑证明、河内塔等不同类型的问题。

> **边界：** 只对结构清晰、定义明确的问题有效。

*General Problem Solver*　来源：[Wikipedia](https://en.wikipedia.org/wiki/General_Problem_Solver) (资料)

#### 1980｜复杂的计算机订单配置，能不能交给程序自动完成？

DEC 公司的专家系统 XCON 自动配置 VAX 计算机订单，据报道每年为公司节省数千万美元。

*XCON (R1)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Xcon) (资料)

#### 2006-03-22｜计算机自己“进化”出来的天线，能不能好到真的被送上太空？

NASA 用进化算法设计的 X 波段天线形状怪异但满足任务要求，随 ST5 卫星发射升空，是第一个飞上太空的计算机进化设计硬件。

*Evolutionary algorithm (NASA Ames)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Evolved_antenna) (资料)

#### 2021-06-09｜芯片布局能不能交给 AI，在几小时内完成工程师几周的工作？

谷歌称其强化学习方法在 6 小时内生成的芯片布局与人类专家相当或更好，并用于 TPU 的设计。

> **边界：** 方法的有效性和可复现性受到学术界的质疑和争论。

*Deep RL (Google)*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03544-w) (论文)

#### 2022-10-05｜矩阵乘法还能更快吗？

AlphaTensor 找到了 4×4 矩阵在模 2 运算下只需 47 次乘法的算法，打破了 Strassen 方法 50 多年来的纪录。

> **边界：** 这一改进只在模 2 运算下成立。

*AlphaTensor*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-05172-4) (论文)

#### 2022-12-08｜AI 能不能解决需要理解题意、设计算法的编程竞赛题？

AlphaCode 在 Codeforces 模拟比赛中排名约在参赛者的前 54%，达到中等人类选手水平。

*AlphaCode*　来源：[Science 2022](https://doi.org/10.1126/science.abq1158) (论文)

#### 2023-06-07｜被优化了几十年的基础排序代码，还能更快吗？

AlphaDev 找到了更快的短序列排序汇编程序，已被合并进 LLVM 的 C++ 标准库。

*AlphaDev*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06004-9) (论文)

#### 2024-10-08｜机器学习的基础性发现，算不算诺贝尔奖级别的物理学贡献？

2024 年诺贝尔物理学奖授予 John Hopfield 和 Geoffrey Hinton，以表彰他们“使人工神经网络机器学习成为可能的基础性发现和发明”。

*Hopfield networks / Boltzmann machines*　来源：[Nobel Prize](https://www.nobelprize.org/prizes/physics/2024/press-release/) (官方)

#### 2024-11-01｜AI 能不能自己在真实软件里发现此前未知的安全漏洞？

谷歌的 Big Sleep 智能体在广泛使用的数据库 SQLite 发布前，发现了一个此前未知的可利用漏洞（栈缓冲区下溢），开发者当天修复。

*Big Sleep (Google)*　来源：[Google Project Zero](https://googleprojectzero.blogspot.com/2024/10/from-naptime-to-big-sleep.html) (官方)

#### 2025-03-12｜完全由 AI 写出的研究论文，能不能通过学术会议的同行评审？

Sakana AI 称，其 AI Scientist 生成的 3 篇论文中有 1 篇在 ICLR 2025 的一个研讨会上得到高于接收线的评审分数（平均 6.33）。

> **边界：** 只是研讨会，接收门槛低于主会；人类挑选了提交的论文，论文在评审后按约定撤回，作者自己的评审认为三篇都达不到主会水平。

*The AI Scientist-v2 (Sakana AI)*　来源：[Sakana AI](https://sakana.ai/ai-scientist-first-publication/) (官方)

#### 2025-08-08｜AI 系统能不能自动发现并修复开源软件里的漏洞？

DARPA 的 AI 网络挑战赛决赛中，参赛系统在 63 个人为植入的漏洞里找到 54 个、修复 43 个；还发现了 18 个真实的、此前未被发现的漏洞，其中 11 个给出了补丁。

> **边界：** 来自竞赛评分，不直接等于真实世界表现；真实漏洞仍在负责任披露流程中。

*AIxCC finalists (Team Atlanta et al.)*　来源：[DARPA](https://darpa.mil/news/2025/aixcc-results) (官方)

#### 2025-09｜在世界大学生程序设计竞赛总决赛的题目上，AI 能不能超过人类队伍？

OpenAI 称其系统做对了全部 12 道题，Google DeepMind 的 Gemini 2.5 Deep Think 做对 10 道（包括一道没有任何人类队伍解出的题）；最好的人类队伍解出 11 道。

> **边界：** 成绩由公司发布，且按公司的说法在与学生相同的条件下完成。

*OpenAI models; Gemini 2.5 Deep Think*　来源：[The Decoder](https://the-decoder.com/openai-outperforms-humans-and-google-at-the-worlds-top-collegiate-programming-contest/) (报道) · [TechRepublic](https://www.techrepublic.com/article/openai-deepmind-icpc-2025-results/) (报道)

#### 2026-04｜AI 能不能在所有主流操作系统和浏览器里，找到成千上万个此前未知的高危漏洞？

Anthropic 称 Claude Mythos Preview 发现了数千个高危漏洞，包括一个存在了 27 年的 OpenBSD 远程崩溃漏洞、一个自动化测试一直没发现的 FFmpeg 漏洞，以及把多个 Linux 内核漏洞串联起来取得系统控制的方法；该模型不公开发布，只向 40 多家机构开放，用于修补软件。

> **边界：** 以上均为发布方的说法，尚无独立核验；Anthropic 承诺在 90 天内公布已修复漏洞的情况。

*Claude Mythos Preview (Project Glasswing)*　来源：[Anthropic](https://www.anthropic.com/glasswing) (官方) · [Anthropic red team](https://red.anthropic.com/2026/mythos-preview/) (官方) · [CyberInsider](https://cyberinsider.com/anthropic-launches-project-glasswing-after-its-new-ai-model-finds-thousands-of-zero-day-flaws/) (报道)

#### 2026-05-07｜一年之后，AlphaEvolve 在数学、芯片、软件和科学里实际帮上了什么忙？

DeepMind 称 AlphaEvolve 帮助改进了旅行商问题和 Ramsey 数的下界、参与设计新一代 TPU、把 Spanner 的写放大降低 20%，并把 DeepConsensus 的变异检测错误减少 30%。

> **边界：** 发布方汇总的数字，未逐项核验。

*AlphaEvolve*　来源：[Google DeepMind](https://deepmind.google/blog/alphaevolve-impact/) (官方)

#### 2026-07-22｜可拆分流总能转成不可拆分流，同时让拥塞和成本都有界吗？（Dinitz–Garg–Goemans 猜想）

Dmitry Rybin 在 X 上称，GPT-5.6 Pro 用四条简短的提示给出了反例：一个小图里分数流的成本是 58，而所有满足拥塞要求的不可拆分路由成本至少为 60。

> **边界：** 目前没有论文；介绍这一结果的页面没有找到对该具体图的独立重建，只提到有研究者核对了算术。该页面称，这不会直接改变实际网络路由，主要是理论上的界限。

*GPT-5.6 Pro (with Dmitry Rybin)*　来源：[DataCamp](https://www.datacamp.com/blog/gpt-5-6-dinitz-garg-goemans-conjecture) (报道)

#### 2026-08-01｜格上的最近向量问题，能近似到多好？（与后量子密码有关）

OpenAI 称 Astra 证明了欧氏最近向量问题在多项式因子内近似是 NP 难的。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方)

#### 2026-08-01｜计算矩阵的积和式（permanent），算术电路至少需要多大？

OpenAI 称 Astra 为用算术电路和算术公式计算积和式给出了新的下界，其中算术公式的下界为 n⁴/log n 量级。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方)

#### 2026-08-01｜两人量子博弈重复多次后，获胜概率能不能指数衰减？（量子并行重复）

OpenAI 称 Astra 证明了一般两人量子博弈的指数并行重复定理。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方)

