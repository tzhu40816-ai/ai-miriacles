<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 数学：AI 解决的问题

共 69 条 · [← 返回 README](../../README.md)

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

#### 1965｜能不能找到一种简单、通用、适合机器执行的逻辑推理规则？

Robinson 提出的归结原理，让计算机可以用单一规则对一阶逻辑进行完备的机械推理，成为自动定理证明和逻辑编程的基础。

*Resolution principle (J. A. Robinson)*　来源：[JACM 1965](https://doi.org/10.1145/321250.321253) (论文) · [Wikipedia](https://en.wikipedia.org/wiki/Resolution_(logic)) (资料)

#### 1976｜机器能不能自己提出数学概念和猜想？

Lenat 的 AM 程序从集合论出发，用启发式规则自己“发现”了自然数、质数，并提出了哥德巴赫猜想等已知猜想。

> **边界：** 都是重新发现，没有产生新的数学。

*AM (Automated Mathematician)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (资料)

#### 1976｜任何地图只用四种颜色，就能让相邻的区域颜色不同吗？（四色定理）

Appel 和 Haken 把证明化为 1900 多种情形，用计算机逐一检查，第一次让计算机成为证明一个著名数学定理不可缺少的一部分。

> **边界：** 属于计算机辅助的穷举验证，不是学习或推理系统；收录它是因为它引发了“机器证明算不算证明”的长期讨论。

*Appel–Haken computer-assisted proof*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Four_color_theorem) (资料)

#### 1977｜几何定理的证明，能不能变成计算机可以执行的代数计算？

吴文俊提出的“吴方法”把初等几何的定理转化为多项式方程组的计算，使计算机可以机械地证明大量几何定理，开创了几何定理机器证明的新路线。

> **边界：** 属于符号计算与自动推理，不是学习型 AI。

*Wu's method (吴文俊)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Wu%27s_method_of_characteristic_set) (资料)

#### 1996-10｜所有 Robbins 代数都是布尔代数吗？（悬而未决 60 年的 Robbins 猜想）

Argonne 实验室 McCune 的自动推理程序 EQP 找到了关键证明，结合已有成果解决了这个困扰数学家几十年的问题。

*EQP*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (资料) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (报道)

#### 2014-02｜埃尔德什差异猜想：任何 ±1 无穷序列，差异是否都能无限大？先从常数 C=2 的情形问起

Konev 和 Lisitsa 用 SAT 求解器证明：长度 1161 的 ±1 序列不可能保持差异 2 以内（长度 1160 的存在），从而证明了 C=2 的情形；机器生成的证明文件约 13 GB。

> **边界：** 只证明了 C=2；属于自动推理，不是学习型 AI。

*SAT solver (Glucose)*　来源：[arXiv](https://arxiv.org/abs/1402.2184) (论文)

#### 2014-08｜开普勒猜想（球的最密堆积）的证明，能不能被计算机逐步完整验证？

Hales 领导的 Flyspeck 项目用 HOL Light 和 Isabelle 完成了开普勒猜想证明的形式化验证。

> **边界：** 验证的是已有的人类证明，不是新结果。

*HOL Light and Isabelle (Flyspeck)*　来源：[Forum Math. Pi 2017](https://doi.org/10.1017/fmp.2017.1) (论文)

#### 2016-05｜能不能把正整数涂成两种颜色，使得没有同色的勾股数组？（布尔勾股数问题）

Heule 等人用 SAT 求解器证明答案是否定的：一直涂到 7824 还可以，到 7825 就不可能了。证明文件达 200 TB。

> **边界：** 属于自动推理加大规模计算，不是学习型 AI。

*SAT solver*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (资料) · [arXiv](https://arxiv.org/abs/1605.00723) (论文)

#### 2017｜能不能把前 N 个正整数涂成五种颜色，使得没有同色的 a + b = c？（第五个 Schur 数）

Heule 用 SAT 求解器证明第五个 Schur 数是 160：涂到 160 可以，到 161 就不可能。证明文件约 2 PB。

> **边界：** 属于自动推理加大规模计算，不是学习型 AI。

*SAT solver (Heule)*　来源：[arXiv](https://arxiv.org/abs/1711.08076) (论文)

#### 2019-10｜七维空间里，用单位立方体铺满空间时，一定会有两个立方体整面相接吗？（Keller 猜想第 7 维）

Brakensiek、Heule 等人用 SAT 求解器证明 Keller 猜想在 7 维成立，补上了这一长期悬而未决的维度。

> **边界：** 自动推理加大规模计算，不是学习型 AI。

*SAT solver*　来源：[arXiv](https://arxiv.org/abs/1910.03740) (论文)

#### 2021-02-03｜能不能让计算机自动发现 π、e 等基本常数的新公式？

以色列理工学院的 Ramanujan Machine 自动生成了数十个关于基本常数的新连分数猜想，其中一些后来被证明。

*Ramanujan Machine*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03229-4) (论文)

#### 2021-04-29｜能不能自动构造反例，推翻图论和组合数学中的猜想？

Adam Zsolt Wagner 用强化学习构造图和矩阵，找到了若干已发表猜想的反例。

*Cross-entropy RL*　来源：[arXiv](https://arxiv.org/abs/2104.14516) (论文)

#### 2021-12-01｜纽结的几何性质和代数性质之间，有没有尚未发现的联系？

机器学习帮助数学家发现了纽结理论中的新关系，也为表示论中的一个猜想提供了线索，数学家随后完成了严格证明。

*DeepMind + mathematicians*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-04086-x) (论文)

#### 2022-04-21｜椭圆曲线的秩（与伯奇–斯温纳顿–戴尔猜想有关）能不能从数据里看出规律？

研究者用机器学习预测椭圆曲线的秩，在平均化的 a_p 数据里看到了一种随秩而变的波动，被称为“椭圆曲线的燕群飞舞（murmurations）”。后来数学家已在若干情形下证明了这种现象。

> **边界：** 这是一个新现象，而不是对伯奇–斯温纳顿–戴尔猜想的证明，该猜想仍未解决。发现带有运气成分：数据恰好按导子排序、a_p 没有归一化。

*Machine-learning classifiers (He, Lee, Oliver, Pozdnyakov)*　来源：[arXiv](https://arxiv.org/abs/2204.10140) (论文) · [Quanta Magazine](https://www.quantamagazine.org/elliptic-curve-murmurations-found-with-ai-take-flight-20240305/) (报道)

#### 2023-01-23｜无限方格网的“堆积色数”是多少？（2002 年起悬而未决）

Subercaseaux 和 Heule 用新的 SAT 编码和对称性破除方法证明答案是 15，并给出了经过验证的不可满足性证明。

> **边界：** 属于自动推理加大规模计算，不是学习型 AI。

*SAT solver (Subercaseaux & Heule)*　来源：[arXiv](https://arxiv.org/abs/2301.09757) (论文)

#### 2023-12-14｜有限几何中“没有三点共线”的点集（cap set），最大能构造到多大？

FunSearch 让大语言模型写程序、自动评估并迭代，在 8 维中找到了比已知更大的 cap set，并改进了相关的渐近下界。

> **边界：** 改进的是下界和具体构造，不是确定了最大值。

*FunSearch*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (论文)

#### 2024-01-17｜奥数几何题需要的辅助线，机器能自己想到吗？

AlphaGeometry 在 30 道国际奥数几何题中解出 25 道，接近金牌选手的平均水平。

*AlphaGeometry*　来源：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (论文)

#### 2024-03｜“幸福结局”问题：平面上最少多少个点，就一定含有一个空的凸六边形？

Heule 和 Scheucher 用 SAT 求解器证明，平面上任意 30 个一般位置的点必含一个空六边形；证明约拆成 31 万个子问题并行求解，并经形式化验证的检查器核对。

> **边界：** 自动推理加大规模计算，不是学习型 AI。

*SAT solver (CaDiCaL, cube-and-conquer)*　来源：[arXiv](https://arxiv.org/abs/2403.00737) (论文)

#### 2024-07-25｜AI 能不能在国际数学奥林匹克竞赛的全部题型上拿到奖牌？

DeepMind 的系统解出 2024 年 IMO 六题中的四题，达到银牌水平，证明以 Lean 形式化语言写成。

> **边界：** 题目先由人工翻译成形式化语言，部分题目的计算时间远超比赛时限。

*AlphaProof + AlphaGeometry 2*　来源：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (官方)

#### 2024-08｜拓扑中的 Andrews–Curtis 猜想：强化学习能不能找到“难以化简”的群表示？

Shehper 等人用强化学习解出了两个贪心搜索解不出的 Miller–Schupp 表示，其中一个与著名的潜在反例 AK(3) 等价；同时把 AK(n) 缩短为长度 n+11 的等价表示。

> **边界：** Andrews–Curtis 猜想本身仍未解决；这里只依据论文摘要，未逐项核对。

*Reinforcement learning and greedy search*　来源：[arXiv](https://arxiv.org/abs/2408.15332) (论文)

#### 2024-10｜动力系统的全局稳定性证书（李雅普诺夫函数）长期没有通用方法，AI 能不能找到？

Alfarano、Charton 和 Hayat 训练 Transformer 直接输出李雅普诺夫函数：在随机生成的多项式系统上找到新函数的比例为 10.1%，先进的算法方法只有 2.1%；在没有通用算法的非多项式系统上为 12.7%。

> **边界：** 评测基于随机生成的系统，而不是某些著名的具体系统。

*Sequence-to-sequence transformers (Meta FAIR, École des Ponts)*　来源：[arXiv](https://arxiv.org/abs/2410.08304) (论文)

#### 2024-11-01｜立方体里“保持直径的最少边子图”，30 年前的猜想成立吗？

Charton、Ellenberg、Wagner 和 Williamson 的 PatternBoost 把局部搜索与 Transformer 结合，在 d=6 时找到只有 81 条边的子图，比猜想的构造少一条（82 条），推翻了猜想。

> **边界：** 摘要把该猜想归于 Graham；这里只依据论文摘要。

*PatternBoost (transformer + local search)*　来源：[arXiv](https://arxiv.org/abs/2411.00566) (论文)

#### 2025-05-14｜两个 4×4 复数矩阵相乘，能不能少做一次乘法？11 维空间里一个球周围最多能贴多少个球？

AlphaEvolve 找到了 48 次标量乘法的 4×4 复矩阵乘法算法（此前为 49 次），还找到了 11 维中 593 个球的接触构型，把已知下界提高了。

> **边界：** 593 是“至少能放这么多”，不是证明了最大值。

*AlphaEvolve*　来源：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (官方) · [arXiv](https://arxiv.org/abs/2506.13131) (论文)

#### 2025-07-21｜只用自然语言、在比赛时限内，AI 能拿到国际数学奥林匹克金牌吗？

Google DeepMind 的 Gemini Deep Think（成绩经 IMO 官方评分）和 OpenAI 的实验模型都宣布解出 2025 年 IMO 六题中的五题，达到金牌分数线。

> **边界：** 竞赛题是已有答案的题目，不等于解决开放问题。

*Gemini Deep Think; OpenAI experimental model*　来源：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (官方) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (报道)

#### 2025-09｜素数定理的强形式，能不能让 AI 在形式化证明语言 Lean 里完整地写出来？

Math, Inc. 的 Gauss 智能体在约三周内完成了强素数定理的 Lean 形式化，这项工作原本由陶哲轩和 Kontorovich 在推进；后来更强的 Gauss 用两三天就复现了它。

> **边界：** 时间和能力的说法来自 Math, Inc. 或项目组，IEEE Spectrum 的报道没有独立核实；是对已知定理的形式化，不是新结果。

*Gauss (Math, Inc.)*　来源：[IEEE Spectrum](https://spectrum.ieee.org/ai-proof-verification) (报道) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2025-09-18｜流体方程中那些极难捕捉的“不稳定奇点”，能不能被找出来？

Google DeepMind 与布朗大学、纽约大学、斯坦福大学合作，用神经网络加高精度数值方法，在多个流体方程中发现了新的不稳定自相似奇点族。

> **边界：** 是高精度数值发现，不是严格证明；也不等于解决了 Navier–Stokes 问题。

*Physics-informed neural networks (Google DeepMind et al.)*　来源：[Google DeepMind](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/) (官方) · [Physics World](https://physicsworld.com/a/neural-networks-discover-unstable-singularities-in-fluid-systems/) (报道)

#### 2025-11｜能不能通过强化学习，让 AI 在形式化数学语言里自己找到奥赛级别的证明？

DeepMind 在《自然》上发表了 AlphaProof 的方法：用强化学习在 Lean 里训练，使它能在 2024 年国际数学奥林匹克中做出银牌水平的证明。

*AlphaProof*　来源：[Google Research](https://research.google/pubs/olympiad-level-formal-mathematical-reasoning-with-reinforcement-learning/) (论文) · [Nature press release](https://www.natureasia.com/en/info/press-releases/detail/9147) (官方)

#### 2025-11-03｜把 AI 同时用在几十个数学问题上，能有多少收获？

Terence Tao 等人与 AlphaEvolve 合作研究了 67 个分析、组合和几何问题，在其中一部分上重新找到已知最优构造，或给出了改进的构造。

*AlphaEvolve*　来源：[arXiv](https://arxiv.org/abs/2511.02864) (论文)

#### 2025-11-20｜埃尔德什第 848 号问题（一个乘法数论中的极值问题）的答案是什么？

OpenAI 称 GPT-5 为解决这个问题提供了关键想法，研究者据此完成了证明。

> **边界：** 发布方的报告，人机分工需要看原文。

*GPT-5*　来源：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (官方)

#### 2025-12-08｜埃尔德什第 1026 号问题能被解决吗？

Boris Alexeev、Stijn Cambie、Terence Tao 等人与 Harmonic 的 Aristotle 合作，在 Lean 中形式化证明了主要猜想；陶哲轩把它描述为真正的人机合作。

> **边界：** 事后发现核心结果在已有文献中出现过，当时并不知道。

*Aristotle (Harmonic) with human mathematicians*　来源：[Terence Tao's blog](https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/) (官方) · [erdosproblems.com](https://www.erdosproblems.com/1026) (资料)

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

#### 2026-02-04｜“几乎所有素数”都是“部分正则”的吗？

Axiom Math 的 AxiomProver 从自然语言陈述出发，证明了一个密度为 1 的素数集合满足部分正则条件，并在 Lean 中形式化。

*AxiomProver (Axiom Math)*　来源：[arXiv](https://arxiv.org/abs/2602.05090) (论文)

#### 2026-02-20｜在数学家出的一组尚无公开答案的研究级问题（First Proof）上，AI 能答对多少？

OpenAI 提交了 First Proof 的答案，称其中至少 5 题（第 4、5、6、9、10 题）有很高概率是正确的。

> **边界：** 专家评审尚未结束，其余答案仍在审核。

*OpenAI unreleased research system*　来源：[arXiv](https://arxiv.org/abs/2602.05192) (论文) · [OpenAI](https://openai.com/index/first-proof-submissions) (官方)

#### 2026-02-28｜能不能把一个三维有向图的所有弧，拆成三个首尾相接的完整环？（Knuth 在研究的开放问题）

Donald Knuth 在笔记里写道，Claude Opus 4.6 在约一个小时的探索中找到了一个对所有奇数 m 都适用的构造；Filip Stappers 测试了 m=3 到 101，Knuth 随后自己证明了构造的正确性。

> **边界：** 当时只解决了奇数 m，偶数 m 仍是开放的；Knuth 的补记说，偶数情形后来借助其他 AI 系统解决。证明由人类给出。

*Claude Opus 4.6*　来源：[Donald Knuth (note)](https://cs.stanford.edu/~knuth/papers/claude-cycles.pdf) (官方)

#### 2026-03｜小 Ramsey 数的下界，能不能被 AI 设计出来的搜索算法推高？

Nagda、Raghavan 和 Thakurta 用 AlphaEvolve 为每个 Ramsey 数单独演化搜索算法，把 R(3,13)、R(3,18)、R(4,13)、R(4,14)、R(4,15) 的下界各提高 1，并在 r,s≤22 的范围内持平或改进了共 28 个下界。

> **边界：** 改进的是下界，Ramsey 数的确切值仍未知。

*AlphaEvolve*　来源：[arXiv](https://arxiv.org/html/2603.09172v2) (论文)

#### 2026-03-02｜菲尔兹奖得主 Viazovska 证明 8 维和 24 维的最密球堆积，能不能由 AI 在 Lean 里完整验证？

Math, Inc. 称 Gauss 在约五天内完成了 8 维证明的形式化（2 月 23 日公布），并在约两周内完成 24 维证明，产生 20 多万行 Lean 代码（3 月 2 日公布）；24 维没有现成的蓝图，Gauss 还补出了所需的背景理论。

> **边界：** 多数时间与能力的说法来自 Math, Inc. 或项目组；24 维之前已有大量人类工作作为基础，报道称是人机合作；是对已知定理的形式化。

*Gauss (Math, Inc.)*　来源：[IEEE Spectrum](https://spectrum.ieee.org/ai-proof-verification) (报道)

#### 2026-03-23｜一个超图 Ramsey 类问题的下界构造能不能改进？

GPT-5.4 Pro 给出了改进的构造，Epoch AI 将 FrontierMath 开放问题列表中的这一题标为已解决。

*GPT-5.4 Pro*　来源：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (官方)

#### 2026-03-31｜二项式系数的小素因子、加性基的拆分等几个埃尔德什问题，能被解决吗？

OpenAI 的内部模型给出了这几个问题的简短证明，相关结果以论文形式发布。

*OpenAI internal model*　来源：[arXiv](https://arxiv.org/abs/2603.29961) (论文)

#### 2026-04-15｜埃尔德什、Sárközy 和 Szemerédi 关于本原集求和的猜想成立吗？（埃尔德什第 1196 号问题）

在 Liam Price 的提示下，GPT-5.4 Pro 证明了猜想中的精确界 1+O(1/log x)。

*GPT-5.4 Pro*　来源：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (资料)

#### 2026-05｜博苏克猜想（任何有界图形都能分成 d+1 个直径更小的部分）最低在几维开始失效？

一个 GitHub 仓库称，借助 GPT-5.5 Pro 得到了 63 维的反例，把此前的 64 维（Jenrich 和 Brouwer）降低了一维，并附有精确的验证脚本和图证书。

> **边界：** 来自作者个人的仓库，未见同行评审；验证脚本检查的是证明中用到的有限计算，不等于完整验证论证本身；证明的 PDF 我没有读过。

*GPT-5.5 Pro (with Max Grinzstajn)*　来源：[GitHub](https://github.com/maaxgrin/borsuk-63-counterexample) (官方) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-05-20｜平面上 n 个点最多能有多少对点距离恰好为 1？埃尔德什 1946 年的猜想成立吗？（单位距离问题）

OpenAI 称其内部通用推理模型推翻了埃尔德什关于上界为 n^(1+o(1)) 的猜想：它把问题与代数数论中的无限类域塔（Golod–Shafarevich）联系起来，对无穷多个 n 构造出至少 n^(1+δ) 对单位距离。Will Sawin 随后给出了显式指数 1.014。

> **边界：** 原始证明没有给出具体的 δ；已知上界仍是 O(n^(4/3))，所以问题本身没有解决。OpenAI 的页面没有提 Lean，由外部数学家检查；报道称人类的核查和整理工作量不小；形式化后来由其他人完成。

*OpenAI internal reasoning model*　来源：[OpenAI](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) (官方) · [Sawin, arXiv](https://arxiv.org/abs/2605.20579) (论文) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (报道)

#### 2026-06｜到 2026 年年中，埃尔德什问题集里有多少开放问题被 AI 解决？

陶哲轩维护的维基页面逐题记录 AI 在埃尔德什问题上的贡献，把由 AI 基本独自解决的问题单独列出，例如 2026 年的第 125、741、38、694 号等，以及 5 月由 OpenAI 内部模型和 Claude Mythos 先后解决的第 90 号。

> **边界：** 该页面标注，有些结果后来发现已有文献；页面数据截至 2026 年 6 月 30 日，之后不再更新。

*GPT-5.x, Claude, Gemini, Aristotle, Aletheia and others*　来源：[Tao's wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) (资料) · [Erdős #90](https://www.erdosproblems.com/90) (资料) · [Erdős #619](https://www.erdosproblems.com/619) (资料)

#### 2026-07｜Crouzeix 猜想：矩阵的函数，范数是否不超过函数在数值域上最大值的 2 倍？（悬而未决 20 多年）

报道称，北京协和医学院的博士后金善木（Shanmu Jin）借助 GPT-5.6 Sol 证明了该猜想；决定性的一步出现在约 16 小时的一次自主运行中。Townsend 审阅后交给 Greenbaum 和 Crouzeix，据称他们确认证明正确；八天后 Lorist 和 Schwenninger 发表了一个更短的、同样使用 GPT-5.6 探索思路的证明。

> **边界：** 尚未同行评审；AI 与人的贡献比例不明；Brett Wick 提醒，提示词里要求“假设存在完整证明”有让系统接受细微漏洞的风险。

*GPT-5.6 Sol (with Shanmu Jin)*　来源：[Brett Wick](https://www.math.wustl.edu/wp/wick/?p=210) (资料) · [Interesting Engineering](https://interestingengineering.com/ai-robotics/china-doctor-cracks-math-problem-with-chatgpt) (报道)

#### 2026-07｜每个无桥图是否都有一族圈，使每条边恰好被覆盖两次？（圈双覆盖猜想）

OpenAI 在 2026 年 7 月宣布了圈双覆盖猜想的一个证明；Jim Geelen 和 Sang-il Oum 随即各自在 arXiv 上发布了对该证明的解读文章，以便更易读懂。

> **边界：** 我看到的两篇 arXiv 页面没有说明证明是否已被独立验证或同行评审，也没有说明 AI 与人各自的贡献；Wikipedia 的列表称模型为 GPT-5.6 Sol Ultra。

*OpenAI model*　来源：[Oum, arXiv](https://arxiv.org/abs/2607.16356) (论文) · [Geelen, arXiv](https://arxiv.org/abs/2607.15399) (论文) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-07｜阶为 n 的有限局部自由群概形，是否一定被 n 消灭？（Grothendieck 的一个问题，交换情形由 Deligne 证明）

Akhil Mathew 在 AI 的协助下构造了一个非交换的反例：阶为 4 的有限自由群概形，却不被 4 消灭，并在 Lean 的 Mathlib 里形式化；PR 中披露 Codex 和 Claude 协助了构造与形式化。

> **边界：** PR 页面只写了年份；确切日期取自 Xena Project 的汇总（7 月 11 日），其中对 AI 角色的描述与 PR 不完全一致。

*Codex and Claude, with Akhil Mathew*　来源：[Mathlib PR](https://github.com/leanprover-community/mathlib4/pull/41748) (资料) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (报道)

#### 2026-07-20｜多项式映射只要雅可比行列式是非零常数，就一定可逆吗？（雅可比猜想，Smale 的 18 个问题之一）

Anthropic 的数学家 Levent Alpöge 称，Claude Fable 5 找到了一个三维多项式映射：雅可比行列式为常数 −2，却把不同的点映到同一个点，于是三维以上的雅可比猜想不成立。反例短得能放进一条 X 帖子。

> **边界：** 二维的情形仍未解决。发现过程（如何提示模型）当时没有公开。Lean 形式化在 DeepMind 的 formal-conjectures 仓库里推进，我看到时尚未确认合并；后续有人把行列式缩放为 1，使其在所有特征下成立。消息出自 Anthropic 自己的研究者。

*Claude Fable 5*　来源：[ScienceDaily](https://www.sciencedaily.com/releases/2026/08/260804034634.htm) (报道) · [The Week](https://theweek.com/tech/mathematicians-are-buzzing-about-an-ai-solution-to-a-math-mystery) (报道) · [formal-conjectures PR](https://github.com/google-deepmind/formal-conjectures/pull/4474) (资料) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (报道)

#### 2026-07-23｜在国际数学奥林匹克的全部六道题上，AI 能不能拿到满分？

报道称，华为的 Celia 和小红书的 dots-note-3.0 在 2026 年上海 IMO 上拿到 42/42 的满分，而 2025 年谷歌和 OpenAI 的模型只达到金牌线。

> **边界：** 成绩由公司发布；报道没有提到 IMO 官方评分，也没有评分方法的细节。

*Huawei Celia; Xiaohongshu dots-note-3.0*　来源：[NewsBytes](https://www.newsbytesapp.com/news/science/for-first-time-ai-scores-100-at-international-mathematical-olympiad/story) (报道)

#### 2026-08｜Hadamard 矩阵猜想仍未解决，但此前没人构造出的 668 阶等，能构造出来吗？

Epoch AI 的开放问题页面称，Anthropic 的一位研究者报告，由三位人类与 Claude 组成的团队得到了 2000 阶以内所有此前没有已知构造的容许阶数的 Hadamard 矩阵（页面点名 668 阶）；Wikipedia 的列表给出了十二个阶数。

> **边界：** Epoch 暂时把该题标为 AI 已解决，若团队报告人类对核心数学想法有重大贡献会修改；页面没有说明验证方式；Hadamard 猜想本身仍未解决。

*Claude (internal Anthropic model)*　来源：[Epoch AI](https://epoch.ai/frontiermath/open-problems/hadamard) (资料) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-08｜多项式的零点都在单位圆盘内时，每个零点附近一单位圆盘内是否一定有导数的零点？（Sendov 猜想）

据 Wikipedia 的汇总，Lech Mazur 借助 GPT-5.6 Pro 给出了对所有次数 n≥2 的证明；陶哲轩把论证梳理简化，并在 Lean 中形式化，该形式化的代码几乎全部由 Claude Opus 5 在他的指导下写出。证明同时涵盖 Phelps–Rodriguez 猜想。

> **边界：** Lean 项目页面写明“没有进行任何外部或独立评审”，也不主张新颖性（另有先前的 Lean 形式化）；用到数值证书。

*GPT-5.6 Pro (Lech Mazur); Claude Opus 5 for the Lean formalisation*　来源：[Lean package (teorth/sendov)](https://reservoir.lean-lang.org/@teorth/sendov) (资料) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-08-01｜给定最小距离，二进制纠错码最多能有多大？

OpenAI 称 Astra 对任意给定最小距离的二进制码的最大规模给出了指数级改进的界，对高维球码也有类似结果。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审，称论证在 Lean 中形式化。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方)

#### 2026-08-01｜算子代数中的 Connes 刚性猜想成立吗？

OpenAI 称 Astra 给出了这个猜想的反例，即猜想不成立。

> **边界：** 发布方主张；Lean 形式化已公开，同行评审尚未完成。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (报道)

#### 2026-08-01｜重心是唯一内部格点的凸体，体积最大能是多少？（Ehrhart 体积猜想）

OpenAI 称 Astra 在每个维度都确定了这个最大体积。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审。Wikipedia 的汇总把它描述为部分证明（给出上界 (n+1)^n/n!，等号情形仍未解决），与 OpenAI 的说法不一致。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-08-01｜多色三角形 Ramsey 数增长多快？极值图论的紧致性与退化猜想成立吗？（埃尔德什第 183、146、180 号问题）

OpenAI 称 Astra 给出了多色三角形 Ramsey 数的超指数下界（解决埃尔德什第 183 号问题），并就极值图论的紧致性与退化猜想给出结果（解决第 146 和 180 号问题）。

> **边界：** 发布方主张；OpenAI 的页面未提外部专家评审。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方)

#### 2026-08-01｜是不是每个可数群都能用有限置换来近似？（Gromov 1999 年提出的 sofic 群问题）

OpenAI 称 Astra 给出了第一个非 sofic 群的显式构造，从而回答了这个问题。

> **边界：** 发布方主张；Lean 形式化已公开，同行评审尚未完成。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (报道)

#### 2026-08-01｜高维空间里，等大小的球最多能占据多大比例的空间？（球堆积密度的上界）

OpenAI 称 Astra 给出了高维球堆积密度的新上界，一直推进到 Cohn–Elkies 阈值。

> **边界：** 发布方主张；上界的改进不等于确定了最大密度。OpenAI 的页面未提外部专家评审。

*OpenAI Astra (unreleased)*　来源：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (报道)

#### 2026-08-10｜黎曼猜想还没解决，但黎曼ζ函数的非平凡零点，能证明至少有多大比例落在临界线上？（黎曼猜想的部分进展）

Anthropic 称，Claude 的研究版本把已知下界从 41.6% 提高到 67.2%，同时公开了论文、专家意见和 Lean 形式化证明。

> **边界：** 黎曼猜想本身没有被证明，这是攻关过程中顺带得到的结果。

*Claude (research version)*　来源：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (官方)

#### 2026-08-30｜相邻素数之差有无穷多次不超过某个常数，这个常数最小能证到多少？（孪生素数猜想的方向）

OpenAI 的论文《Improved Short Gaps Between Primes》称，由 GPT-6 Astra 给出证明：相邻素数之差无穷多次不超过 186，改进了此前的 246。方法基于 Zhang、Polymath 8 和 Maynard 的筛法。

> **边界：** 论文附有 Lean 形式化，但它以数值积分界和指数和估计为显式假设，所以并未从头完整验证；尚未得到独立核实；孪生素数猜想（间隔为 2）仍然开放。

*GPT-6 Astra (OpenAI)*　来源：[OpenAI paper (PDF)](https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/short_gaps.pdf) (官方) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-09-04｜费马大定理的证明，能不能完整地用计算机逐步验证？

Anthropic 称数十个 Claude 智能体用 Lean 完成了费马大定理证明的端到端形式化，写了约 1300 万行 Lean 代码。

> **边界：** 是对已知证明的形式化验证，不是新的数学发现；发布方自己的研究。

*Claude*　来源：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (官方)

#### 2026-09-07｜环论中的 Köthe 猜想成立吗？

Adamczewski、Böhmler 和 Marczinzik 的预印本构造了 Köthe 猜想的反例，并回答了 Rowen 的一个问题。Wikipedia 的汇总称，这项工作使用了 GPT-6 Astra，并附有 Lean 形式化。

> **边界：** arXiv 页面本身没有提到 AI 或 Lean，这两点来自 Wikipedia 的汇总；预印本，尚无同行评审信息。

*GPT-6 Astra (with Epoch AI)*　来源：[arXiv](https://arxiv.org/abs/2609.07996) (论文) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (资料)

#### 2026-09-08｜一开始光滑的三维流体，会不会在有限时间内出现奇点？（Navier–Stokes 千禧年难题）

OpenAI 称其内部模型证明了：在施加光滑外力的情况下，Navier–Stokes 方程的解会在有限时间内爆破，并公开了 Lean 形式化证明；同时还给出了无外力 Euler 方程的爆破结果。

> **边界：** 这是发布方的主张，尚未经同行评审，也未获克雷研究所认定。Buckmaster 与 Alpöge 同期发表了相关的爆破结果，双方存在归属争议。

*OpenAI internal model (GPT-6 Astra for Lean)*　来源：[OpenAI](https://openai.com/index/navier-stokes-solution/) (官方) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (官方) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (报道)

#### 2026-09-17｜线性拟阵上的“强秘书问题”猜想成立吗？

研究者通过与 ChatGPT 对话得到了该猜想在线性拟阵情形下的证明。

> **边界：** 前一天另一组人类研究者用几乎相同的方法发布了同样的结果。

*ChatGPT (GPT-6 Astra)*　来源：[arXiv](https://arxiv.org/abs/2609.20797) (论文) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (论文)

#### 2026-09-28｜高维空间里，一个球最多能同时与多少个等大的球相切？（亲吻数下界）

浙江大学的 Qiushi Engine 多智能体系统自主搜索、分析和验证，把 19 个维度（25、27、32–39、43、45、49–55）的亲吻数下界刷新，例如 K(25) ≥ 197,580，K(55) ≥ 53,301,140。

> **边界：** 预印本；作者称每个结果都有可独立检查的有限证书，我没有逐个核对。

*Qiushi Engine (Zhejiang University)*　来源：[arXiv](https://arxiv.org/html/2609.35051) (论文)

#### 2026-10-06｜一个 AI 模型能同时在多少个数学问题上取得新结果？

OpenAI 一次性公开了一批由内部模型得到的新数学结果，平均每个结果约用 3 小时推理，其中许多附有 Lean 形式化证明。

> **边界：** 各结果的验证程度不同，需要逐题拆分查看。

*OpenAI internal model*　来源：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方)

