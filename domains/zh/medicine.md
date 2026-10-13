<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 医学：AI 解决的问题

共 18 条 · [← 返回 README](../../README.md)

#### 约 1972｜能不能根据症状和化验结果，判断血液感染的病菌并推荐抗生素？

斯坦福的 MYCIN 用约 600 条规则进行诊断推理，在评估中给出的建议与感染科专家相当。

> **边界：** 从未在临床中实际使用。

*MYCIN*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Mycin) (资料)

#### 2016-11-29｜AI 看眼底照片，能不能像眼科医生一样发现糖尿病视网膜病变？

谷歌团队的深度学习模型在糖尿病视网膜病变筛查中达到了与眼科医生相当的灵敏度和特异度。

*Deep learning (Google)*　来源：[JAMA 2016](https://doi.org/10.1001/jama.2016.17216) (论文)

#### 2017-01-25｜AI 看皮肤照片，能不能像皮肤科医生一样判断是不是皮肤癌？

斯坦福团队训练的卷积网络在区分恶性黑色素瘤等任务上，表现与 21 位皮肤科医生相当。

*Deep CNN (Stanford)*　来源：[Nature 2017](https://doi.org/10.1038/nature21056) (论文)

#### 2017-11｜AI 看胸部 X 光片，能不能像放射科医生一样发现肺炎？

斯坦福团队的 CheXNet 在一项测试中，检测肺炎的表现超过了参与比较的放射科医生的平均水平。

> **边界：** 基于回顾性数据集的比较，不是临床试验。

*CheXNet (Stanford)*　来源：[arXiv](https://arxiv.org/abs/1711.05225) (论文)

#### 2017-12-12｜AI 看病理切片，能不能发现乳腺癌淋巴结转移？

在 Camelyon16 挑战赛中，多个深度学习算法检测淋巴结转移的表现优于在限定时间内读片的病理医生小组。

*Deep learning (Camelyon16)*　来源：[JAMA 2017](https://doi.org/10.1001/jama.2017.14585) (论文)

#### 2018-04-11｜AI 能不能在没有医生判读的情况下，独立诊断疾病？

美国 FDA 批准 IDx-DR 上市，这是第一个获批可以由 AI 独立给出筛查结果的医疗设备，用于发现糖尿病视网膜病变。

*IDx-DR*　来源：[Eyewire News (reproduces the FDA release)](https://eyewire.news/news/fda-permits-marketing-of-ai-based-device-to-detect-certain-diabetes-related-eye-problems) (报道)

#### 2019-05-20｜AI 看低剂量 CT，能不能比放射科医生更准地发现肺癌？

谷歌团队的模型在肺癌筛查 CT 上的表现优于六位放射科医生，尤其在有既往影像对比时。

> **边界：** 回顾性研究；临床效果还需前瞻性验证。

*Deep learning (Google)*　来源：[Nature Medicine 2019](https://doi.org/10.1038/s41591-019-0447-x) (论文)

#### 2019-09-02｜AI 能不能在几周内设计出有活性的新药分子？

Insilico Medicine 用生成模型在 21 天内设计出 DDR1 激酶抑制剂，其中先导分子在细胞和小鼠实验中显示了活性。

> **边界：** 早期临床前结果。

*GENTRL (Insilico Medicine)*　来源：[Nature Biotech 2019](https://doi.org/10.1038/s41587-019-0224-x) (论文)

#### 2020-01-01｜AI 看乳腺 X 光片，能不能比放射科医生漏诊更少、误报更少？

在英美两国的数据上，模型的假阳性和假阴性都低于放射科医生；在英国的双人阅片流程中，可以替代第二位医生而不降低效果。

*Google Health*　来源：[Nature 2020](https://doi.org/10.1038/s41586-019-1799-6) (论文)

#### 2020-02-20｜能不能在已有化合物中，找到结构全新的抗生素候选？

MIT 团队用深度学习筛选了上亿个分子，找到 halicin，它在实验室和小鼠实验中对多种耐药菌有效。

> **边界：** 候选药物，尚未获批用于临床。

*Deep learning (MIT)*　来源：[Cell 2020](https://doi.org/10.1016/j.cell.2020.01.021) (论文) · [Broad Institute](https://www.broadinstitute.org/publications/broad627466) (官方)

#### 2022-12｜AI 能不能答对医师资格考试题？

谷歌的 Med-PaLM 在美国医师执照考试（USMLE）风格的题目上取得 67.6% 的正确率，是第一个超过 60% 及格线的模型。

> **边界：** 是考试题，不是临床实践能力。

*Med-PaLM*　来源：[arXiv](https://arxiv.org/abs/2212.13138) (论文) · [Nature 2023](https://doi.org/10.1038/s41586-023-06291-2) (论文)

#### 2023-05-25｜针对世卫组织列为最危险级别的鲍曼不动杆菌，能找到新的抗生素候选吗？

研究者用深度学习找到 abaucin，它对鲍曼不动杆菌的作用范围很窄，在小鼠伤口感染模型中有效。

> **边界：** 候选药物，尚未获批用于临床。

*Deep learning (McMaster/MIT)*　来源：[Nature Chem. Bio. 2023](https://doi.org/10.1038/s41589-023-01349-8) (论文)

#### 2023-08-01｜AI 辅助乳腺癌筛查，能不能在不漏诊的前提下减少医生的阅片量？

瑞典 MASAI 随机试验的中期结果显示，AI 辅助阅片的癌症检出率不低于常规双人阅片，同时阅片工作量下降了约 44%。

> **边界：** 中期结果；长期结局（如间期癌）需要继续跟踪。

*AI-supported mammography screening (MASAI)*　来源：[Lancet Oncology 2023](https://doi.org/10.1016/S1470-2045(23)00298-X) (论文)

#### 2023-12-20｜能不能找到一类全新的、能杀死耐药金黄色葡萄球菌的抗生素？

MIT 团队用可解释深度学习筛选了 1200 万个化合物，发现了一类新的抗生素结构，在小鼠模型中对 MRSA 有效。

> **边界：** 临床前结果。

*Explainable deep learning (MIT)*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06887-8) (论文)

#### 2025-05-20｜多智能体系统能不能自己提出并验证一种眼病的候选疗法？

FutureHouse 的 Robin 系统提出：已获批的青光眼药物 ripasudil 可能用于治疗干性老年黄斑变性，并设计和分析了支持这一假说的实验。

> **边界：** 仅有细胞实验，尚未进行临床试验。

*Robin (FutureHouse)*　来源：[arXiv](https://arxiv.org/abs/2505.13400) (论文)

#### 2025-06｜从靶点到分子都由 AI 发现的药，在病人身上有效吗？

Insilico Medicine 的 rentosertib 是由 AI 找到靶点并设计分子的 TNIK 抑制剂，在特发性肺纤维化患者的 2a 期试验中，最高剂量组的肺功能较安慰剂组有改善趋势。

> **边界：** 2a 期试验规模小、时间短，疗效仍需更大规模的试验验证。

*Rentosertib (Insilico Medicine)*　来源：[Drug Discovery Trends](https://www.drugdiscoverytrends.com/insilicos-ai-designed-rentosertib-shows-promise-in-first-phase-2a-trial-results/) (报道) · [AJMC](https://www.ajmc.com/view/ai-derived-therapy-for-ipf-shows-potential-in-phase-2a-trial) (报道)

#### 2025-08-14｜AI 能不能凭空设计出全新的抗生素，而不只是从已有分子里筛选？

MIT 的 Collins 团队用生成式 AI 设计了数千万个虚拟化合物，挑出的两种（NG1 针对淋病奈瑟菌，DN1 针对耐甲氧西林金黄色葡萄球菌）在小鼠感染模型中有效。

> **边界：** 临床前结果。

*Generative AI (Collins lab, MIT)*　来源：[Broad Institute](https://www.broadinstitute.org/news/using-ai-researchers-design-new-compounds-kill-antibiotic-resistant-bacteria) (官方) · [BioPharmaTrend](https://www.biopharmatrend.com/news/generative-ai-designs-novel-antibiotics-against-mrsa-and-drug-resistant-gonorrhea-1349/) (报道)

#### 2025-10-15｜AI 能不能提出一个人类还没想到的抗癌免疫新思路，并被实验验证？

谷歌和耶鲁用单细胞语言模型筛选了 4000 多种药物，预测 CK2 抑制剂 silmitasertib 在特定免疫环境下能增强肿瘤的抗原呈递；在人类细胞模型中，它与低剂量干扰素合用使抗原呈递增加约 50%。

> **边界：** 只在细胞模型中验证，机制未明，距离临床还很远。

*C2S-Scale 27B (Google DeepMind + Yale)*　来源：[The Decoder](https://the-decoder.com/google-deepminds-new-gemma-model-helped-discover-a-new-cancer-treatment-pathway/) (报道)

