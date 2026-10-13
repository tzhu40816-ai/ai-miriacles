<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 感知与语言：AI 解决的问题

共 19 条 · [← 返回 README](../../README.md)

#### 1957｜机器能不能从例子中学会区分简单图形？

Rosenblatt 的感知机通过调整连接权重，学会了区分简单的图案，是最早的可学习神经网络之一。

> **边界：** 单层感知机能力有限，1969 年 Minsky 与 Papert 指出了它的局限。

*Perceptron*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Perceptron) (资料)

#### 1964｜机器能不能读懂用英语写的代数应用题，并列出方程求解？

Bobrow 的 STUDENT 程序把中学代数应用题的英文描述翻译成方程并求解。

*STUDENT*　来源：[Wikipedia](https://en.wikipedia.org/wiki/STUDENT_(computer_program)) (资料)

#### 1966｜机器能不能和人用自然语言聊起来？

Weizenbaum 的 ELIZA 用简单的模式匹配模仿心理治疗师的对话，让许多使用者以为它真的“理解”自己。

> **边界：** 程序没有任何理解能力，Weizenbaum 本人也强调这一点。

*ELIZA*　来源：[CACM 1966](https://doi.org/10.1145/365153.365168) (论文)

#### 1970｜机器能不能听懂人的指令，在一个积木世界里移动物体并回答问题？

Winograd 的 SHRDLU 能在虚拟积木世界里理解相当复杂的英语句子、执行指令并解释自己的行为。

> **边界：** 只在一个很小的封闭世界里有效。

*SHRDLU*　来源：[Wikipedia](https://en.wikipedia.org/wiki/SHRDLU) (资料)

#### 1986｜神经网络能不能自己学会把英文单词读出来？

Sejnowski 和 Rosenberg 的 NETtalk 通过训练学会了把英文文本转换成发音，学习过程听起来像儿童学说话。

*NETtalk*　来源：[Wikipedia](https://en.wikipedia.org/wiki/NETtalk_(artificial_neural_network)) (资料)

#### 1989｜机器能不能认出手写的邮政编码？

LeCun 等人用反向传播训练卷积神经网络识别手写数字，后来被用于美国邮政和银行支票的自动识别。

*LeNet*　来源：[Neural Computation 1989](https://doi.org/10.1162/neco.1989.1.4.541) (论文)

#### 1998｜能不能用一个端到端训练的神经网络来识别文档和手写字符？

LeCun 等人的 LeNet-5 在手写数字识别上表现出色，并被用于银行支票的自动读取，奠定了卷积神经网络的基本样式。

*LeNet-5*　来源：[Proc. IEEE 1998](https://doi.org/10.1109/5.726791) (论文)

#### 2006-07-28｜很深的神经网络，能不能被有效地训练出来？

Hinton 与 Salakhutdinov 用逐层预训练的方法训练深度自编码器，在降维任务上优于主成分分析，被视为深度学习复兴的起点之一。

*Deep belief nets / deep autoencoders*　来源：[Science 2006](https://doi.org/10.1126/science.1127647) (论文)

#### 2011-02-16｜机器能不能听懂充满双关和暗示的自然语言问题，并答得比人快、比人准？

IBM Watson 在美国问答节目《危险边缘》中击败两位历史最佳选手。

*IBM Watson*　来源：[Wikipedia](https://en.wikipedia.org/wiki/IBM_Watson) (资料)

#### 2012-09｜机器能不能看懂上千类日常物体的照片？

AlexNet 在 ImageNet 比赛中把 top-5 错误率降到约 15%，比第二名低 10 个百分点以上，从此深度学习成为主流。

*AlexNet*　来源：[Wikipedia](https://en.wikipedia.org/wiki/AlexNet) (资料)

#### 2014｜机器核对两张照片是不是同一个人，能不能接近人类？

Facebook 的 DeepFace 在标准人脸验证测试 LFW 上达到约 97.35% 的准确率，接近人类的 97.53%。

*DeepFace*　来源：[Wikipedia](https://en.wikipedia.org/wiki/DeepFace) (资料)

#### 2015-12-10｜机器识别图片，能不能比人还准？

微软亚洲研究院的 ResNet 在 ImageNet 上的错误率约 3.6%，低于常被引用的人类约 5% 的水平，残差结构也成为此后深度网络的基础。

> **边界：** “人类水平”只是基于少数标注者的估计。

*ResNet*　来源：[arXiv](https://arxiv.org/abs/1512.03385) (论文)

#### 2016-09-26｜机器翻译能不能接近人工翻译的质量？

谷歌的神经机器翻译系统在若干语言对上把翻译错误减少约 60%，并很快替换了谷歌翻译的旧系统。

*Google Neural Machine Translation*　来源：[arXiv](https://arxiv.org/abs/1609.08144) (论文)

#### 2016-10-17｜机器听写日常对话，能不能和专业转录员一样准？

微软报告其语音识别系统在 Switchboard 电话对话测试中的词错误率与专业人工转录员持平。

*Microsoft speech recognition*　来源：[arXiv](https://arxiv.org/abs/1610.05256) (论文)

#### 2022-03-09｜残缺的古希腊铭文，能不能补全文字、判断年代和出处？

DeepMind 的 Ithaca 修复文字的准确率达 62%，与历史学家合作时把历史学家的准确率从 25% 提高到 72%。

*Ithaca*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-04448-z) (论文)

#### 2022-07｜机器翻译能不能覆盖 200 种语言，包括资源很少的语言？

Meta 的 NLLB-200 在 200 种语言之间互译，在很多低资源语言上显著优于此前的系统。

*NLLB-200 (Meta)*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-07335-x) (论文)

#### 2023-03-14｜AI 能不能通过律师资格考试？

OpenAI 报告 GPT-4 在模拟统一律师资格考试中的成绩进入应试者的前 10%，而上一代模型只在后 10%。

> **边界：** 后续研究认为这一百分位被高估。

*GPT-4*　来源：[arXiv](https://arxiv.org/abs/2303.08774) (论文)

#### 2023-10-12｜维苏威火山喷发烧焦的古罗马卷轴，不打开能读出来吗？

参赛者用机器学习从 CT 扫描中识别出墨迹，读出第一个单词“紫色”；2024 年 2 月，团队读出了 2000 多个字符。

*Machine learning (Vesuvius Challenge)*　来源：[Vesuvius Challenge](https://scrollprize.org/grandprize) (官方)

#### 2025-03｜在三方对话的图灵测试中，AI 能不能被人类当成真人？

Jones 与 Bergen 的实验中，GPT-4.5 在被指示扮演某种人设时，被判断为真人的比例约 73%，高于与之对话的真人。

> **边界：** 图灵测试是否衡量智能存在争议。

*GPT-4.5*　来源：[arXiv](https://arxiv.org/abs/2503.23674) (论文)

