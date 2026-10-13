<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 生物：AI 解决的问题

共 13 条 · [← 返回 README](../../README.md)

#### 2009-04-03｜机器能不能自己提出假设、设计实验、得出新的科学发现？

“机器人科学家”Adam 自主提出并实验验证了酵母中若干“孤儿酶”对应的基因。

*Adam*　来源：[Science 2009](https://doi.org/10.1126/science.1165620) (论文)

#### 2020-11-30｜只知道氨基酸序列，能不能准确预测蛋白质的三维结构？（困扰生物学 50 年的“蛋白质折叠问题”）

AlphaFold 2 在 CASP14 竞赛中的预测精度达到接近实验测定的水平，后来又公开了超过 2 亿个蛋白质的预测结构。

> **边界：** 解决的是结构预测，蛋白质如何动态折叠、如何相互作用等问题仍在研究中。

*AlphaFold 2*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03819-2) (论文)

#### 2021-07-15｜蛋白质结构预测能不能做到人人可用，还能预测蛋白质复合物？

Baker 实验室的 RoseTTAFold 以开源方式达到接近 AlphaFold 2 的精度，还能预测蛋白质复合物的结构。

*RoseTTAFold*　来源：[Science 2021](https://doi.org/10.1126/science.abj8754) (论文)

#### 2022-04-27｜能不能造出一种酶，在常温下几天内分解塑料瓶？

德克萨斯大学用机器学习指导突变，得到 FAST-PETase，能在一周内基本降解多种 PET 塑料制品。

*MutCompute*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-04599-z) (论文)

#### 2022-09-15｜给定一个想要的蛋白质形状，能不能设计出会折叠成这个形状的氨基酸序列？

ProteinMPNN 设计序列的成功率远高于传统方法，许多设计在实验中得到验证。

*ProteinMPNN*　来源：[Science 2022](https://doi.org/10.1126/science.add2187) (论文)

#### 2023-03-16｜地球上数以亿计、从未被研究过的微生物蛋白质，长什么样？

Meta 用蛋白质语言模型 ESMFold 预测了超过 6 亿个宏基因组蛋白质的结构，其中很多与已知蛋白都不相似。

*ESMFold*　来源：[Science 2023](https://doi.org/10.1126/science.ade2574) (论文)

#### 2023-07-11｜能不能从零设计出能与特定靶点结合的全新蛋白质？

Baker 实验室的 RFdiffusion 用扩散模型设计新蛋白，实验验证了大量结合蛋白、对称结构和酶活性位点支架。

*RFdiffusion*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06415-8) (论文)

#### 2023-09-19｜人类基因中的单字母突变，哪些会致病？

AlphaMissense 对 7100 万种可能的错义突变做了预测，其中 89% 被划分为“可能致病”或“可能良性”；此前人类专家只确认过约 0.1%。

> **边界：** 是预测，用于临床诊断仍需结合其他证据。

*AlphaMissense*　来源：[Science 2023](https://doi.org/10.1126/science.adg7492) (论文)

#### 2024-05-08｜蛋白质与 DNA、RNA、药物小分子结合在一起时，结构是什么样？

AlphaFold 3 把结构预测扩展到几乎所有生物分子的复合物，在蛋白质与药物分子相互作用的预测上明显优于传统对接方法。

*AlphaFold 3*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-07487-w) (论文)

#### 2024-10-09｜AI 预测蛋白质结构的工作，算不算得上诺贝尔奖级别的科学贡献？

2024 年诺贝尔化学奖一半授予 Hassabis 与 Jumper（AlphaFold），另一半授予 David Baker（计算蛋白质设计）。

*AlphaFold / protein design*　来源：[Nobel Prize](https://www.nobelprize.org/prizes/chemistry/2024/press-release/) (官方)

#### 2025-02-19｜AI 能不能提出连科学家还没发表的研究假说？

谷歌称其 AI co-scientist 独立提出了关于细菌基因转移机制的假说，与伦敦帝国理工学院团队尚未发表的实验发现一致。

> **边界：** 发布方主张；系统可能用到了相关的已发表文献。

*AI co-scientist (Google)*　来源：[arXiv](https://arxiv.org/abs/2502.18864) (论文)

#### 2026-09-03｜雄性果蝇完整的中枢神经系统是怎样连接的？

借助 AI 辅助的电子显微镜图像分割与重建，研究者公开了超过 16.6 万个神经元、1.25 亿个突触连接的完整图谱。

*AI-assisted EM reconstruction (Google Research + Janelia)*　来源：[Google Research](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/) (官方) · [Janelia](https://male-cns.janelia.org/) (官方)

#### 2026-09-23｜噬菌体 DNA 中一个奇怪的重复序列，背后是什么新的生物系统？

Anthropic 称约 950 个 Claude 智能体用 21 小时搜索 DNA 数据，发现了一种与逆转录酶相关的新系统，后续实验确认这些重复序列会被转录成短 RNA。

> **边界：** 生物学功能尚不清楚；发布方自己的研究。

*Claude (≈950 agents)*　来源：[Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) (官方)

