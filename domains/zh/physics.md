<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 物理：AI 解决的问题

共 13 条 · [← 返回 README](../../README.md)

#### 2009-04-03｜只给运动数据，机器能不能找出描述它的物理公式？

Schmidt 与 Lipson 用符号回归，从摆和振子的实验数据中重新找出了能量守恒等关系式。

> **边界：** 是从数据重新发现已知规律，不是发现新物理。

*Eureqa (symbolic regression)*　来源：[Science 2009](https://doi.org/10.1126/science.1165893) (论文)

#### 2015-09-09｜怎样设计实验，才能制备出复杂的高维量子纠缠态？

Krenn 等人的程序 MELVIN 自动搜索光学实验方案，找到了人类没有想到的设计，其中一些后来在实验室中实现。

*MELVIN*　来源：[arXiv](https://arxiv.org/abs/1509.02749) (论文) · [PRL 2016](https://doi.org/10.1103/PhysRevLett.116.090405) (论文)

#### 2016-06-07｜量子多体系统的状态维数随粒子数指数增长，能不能更高效地表示和计算它？

Carleo 与 Troyer 用神经网络表示波函数，在若干一维和二维自旋模型上算出了高精度的基态和动力学。

> **边界：** 只针对特定模型，不是一般量子多体问题的通解。

*Neural-network quantum states*　来源：[arXiv](https://arxiv.org/abs/1606.02318) (论文) · [Science 2017](https://doi.org/10.1126/science.aag2302) (论文)

#### 2017-02｜神经网络能不能不靠人给定的序参量，直接识别物质的不同相？

Carrasquilla 与 Melko 训练神经网络，从模型的自旋构型中区分有序相和无序相，并定位相变点。

*Neural networks (Carrasquilla & Melko)*　来源：[Nature Physics 2017](https://doi.org/10.1038/nphys4035) (论文)

#### 2020-01｜神经网络能不能只看观测数据，自己发现“日心说”这样的物理概念？

Iten 等人的 SciNet 从行星的天空位置数据中学到了以太阳为中心的表示，并找出了描述系统所需的最少变量。

> **边界：** 是在简单系统中重新发现已知概念。

*SciNet*　来源：[PRL 2020](https://doi.org/10.1103/PhysRevLett.124.010508) (论文)

#### 2020-04-15｜符号回归能不能从数据中重新发现费曼物理讲义里的 100 个公式？

Udrescu 与 Tegmark 的 AI Feynman 结合神经网络与物理启发的化简方法，从数据中重新发现了全部 100 个测试公式，而此前的方法只发现 71 个。

> **边界：** 是重新发现已知公式。

*AI Feynman*　来源：[Science Advances 2020](https://doi.org/10.1126/sciadv.aay2631) (论文)

#### 2020-09｜能不能直接从基本原理，更准确地算出原子和分子的电子结构？

DeepMind 的 FermiNet 用神经网络表示多电子波函数，在若干小分子上达到了接近化学精度的结果。

*FermiNet*　来源：[Phys. Rev. Research 2020](https://doi.org/10.1103/PhysRevResearch.2.033429) (论文)

#### 2022-02-16｜怎样协调几十个线圈，控制托卡马克里高温等离子体的形状？

强化学习控制器在瑞士 TCV 托卡马克的真实装置上，成功控制出多种等离子体构型。

*Deep RL (DeepMind + EPFL)*　来源：[Nature 2022](https://doi.org/10.1038/s41586-021-04301-9) (论文)

#### 2024-02-21｜核聚变装置里的等离子体撕裂不稳定性，能不能提前预测并避免？

普林斯顿团队的 AI 控制器在 DIII-D 托卡马克上提前约 300 毫秒预测撕裂不稳定性，并实时调整，使等离子体保持高性能运行。

*Deep RL (Princeton/DIII-D)*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-07024-9) (论文)

#### 2024-11-20｜量子计算机里不断出现的错误，能不能更准确地识别并纠正？

DeepMind 的 AlphaQubit 用神经网络解码表面码的错误，在谷歌 Sycamore 处理器的真实数据上比此前最好的解码器错误率更低。

> **边界：** 速度还不足以用于实时纠错。

*AlphaQubit*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-08148-8) (论文)

#### 2026-02-13｜只有一个负螺旋度、其余都是正螺旋度的胶子树图散射振幅，真的恒为零吗？

Guevara、Lupsasca、Skinner、Strominger 等人指出，在“半共线”动量区域它们并不为零。人类手算了 n≤6 的情形，GPT-5.2 Pro 化简表达式并猜出了适用于所有 n 的公式，OpenAI 的内部模型花了约 12 小时给出了形式证明。

> **边界：** 作者对公式做了解析验证；结论适用于特定的运动学区域。

*GPT-5.2 Pro and an internal OpenAI model*　来源：[OpenAI](https://openai.com/index/new-result-theoretical-physics/) (官方) · [arXiv](https://arxiv.org/abs/2602.12176) (论文)

#### 2026-03｜等离子体动理学中 Vlasov–Maxwell–Landau 方程的平衡态结果，能不能由 AI 半自主地形式化验证？

一篇预印本报告了在 Lean 中对 Vlasov–Maxwell–Landau 平衡态结果所做的“半自主形式化”。

> **边界：** 我只读过标题和摘要级别的信息；是形式化已有结果。

*AI-assisted Lean formalization*　来源：[arXiv](https://arxiv.org/abs/2603.15929) (论文)

#### 2026-06｜颗粒堵塞理论中，为什么两个临界指数满足 a + b = 1？

这个关系早有高精度数值支持，却一直缺少解析证明。诺贝尔奖得主 Parisi 与 Zamponi 等人在与 Claude 的交互中得到并核查了证明。

> **边界：** 结论在无限维硬球的 fullRSB 理论框架内成立。

*Claude*　来源：[arXiv](https://arxiv.org/abs/2606.03300) (论文) · [Live Science](https://livescience.com/physics-mathematics/mathematics/nobel-prize-winning-physicist-and-team-use-claude-ai-to-solve-decades-old-math-puzzle) (报道)

