<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# 时间线：从最早到现在

按时间顺序收录 AI 实际解决或推进了的具体问题。主角是问题，不是模型。

共 123 条 · [← 返回 README](README.md) · 其他语言：[English](TIMELINE.en.md)

[1950s-1970s](#1950s-1970s) · [1980s-1990s](#1980s-1990s) · [2000s](#2000s) · [2010s](#2010s) · [2020-2023](#2020-2023) · [2024](#2024) · [2025](#2025) · [2026](#2026)

## 1950s-1970s

#### 1956｜给定逻辑公理，机器能不能自己找到定理的证明？

Newell、Simon 和 Shaw 的程序为《数学原理》第二章前 52 条定理中的 38 条找到了证明，其中一条比原书的证明更简洁。

*数学 · Logic Theorist*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Logic_Theorist) (资料)

#### 1957｜机器能不能从例子中学会区分简单图形？

Rosenblatt 的感知机通过调整连接权重，学会了区分简单的图案，是最早的可学习神经网络之一。

> **边界：** 单层感知机能力有限，1969 年 Minsky 与 Papert 指出了它的局限。

*感知与语言 · Perceptron*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Perceptron) (资料)

#### 1958｜《数学原理》中的命题逻辑定理，机器能全部证明吗？

王浩在 IBM 704 上编写的程序，在几分钟内证明了《数学原理》中全部 350 多条一阶命题逻辑定理。

*数学 · Hao Wang's IBM 704 program*　来源：[IBM J. Res. Dev. 1960](https://doi.org/10.1147/rd.41.0002) (论文)

#### 1959｜机器能不能证明平面几何题？

Gelernter 在 IBM 的几何定理证明程序用图形启发式剪枝搜索，证明了中学几何水平的定理。

*数学 · Geometry Theorem Machine*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Herbert_Gelernter) (资料)

#### 1959｜程序能不能通过自我对弈，学得比编写它的人下得更好？

Arthur Samuel 的西洋跳棋程序通过自我对弈调整评估函数，最终下得比 Samuel 本人更好。“机器学习”一词也由此流行。

*博弈 · Samuel's checkers program*　来源：[IBM J. Res. Dev. 1959](https://doi.org/10.1147/rd.33.0210) (论文)

#### 1961｜机器能不能做大学微积分考试里的不定积分题？

Slagle 的 SAINT 程序用启发式搜索求解符号积分，在 MIT 一年级微积分期末考题上答对了 54 道中的 52 道。

*数学 · SAINT*　来源：[Wikipedia](https://en.wikipedia.org/wiki/James_Robert_Slagle) (资料)

#### 1964｜机器能不能读懂用英语写的代数应用题，并列出方程求解？

Bobrow 的 STUDENT 程序把中学代数应用题的英文描述翻译成方程并求解。

*感知与语言 · STUDENT*　来源：[Wikipedia](https://en.wikipedia.org/wiki/STUDENT_(computer_program)) (资料)

#### 1965｜看着质谱数据，能不能推断出未知分子的结构？

斯坦福的 DENDRAL 把化学家的知识写成规则，生成并筛选候选结构，是第一批真正处理专业领域问题的“专家系统”。

*化学 · DENDRAL*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Dendral) (资料)

#### 约 1970｜机器人能不能自己感知环境、规划路线、完成多步任务？

斯坦福研究院的 Shakey 是第一个能对自身行动进行推理的移动机器人，A* 搜索算法和 STRIPS 规划器也诞生于这个项目。

*机器人与自主系统 · Shakey*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Shakey_the_robot) (资料)

#### 1970｜机器能不能听懂人的指令，在一个积木世界里移动物体并回答问题？

Winograd 的 SHRDLU 能在虚拟积木世界里理解相当复杂的英语句子、执行指令并解释自己的行为。

> **边界：** 只在一个很小的封闭世界里有效。

*感知与语言 · SHRDLU*　来源：[Wikipedia](https://en.wikipedia.org/wiki/SHRDLU) (资料)

#### 约 1972｜能不能根据症状和化验结果，判断血液感染的病菌并推荐抗生素？

斯坦福的 MYCIN 用约 600 条规则进行诊断推理，在评估中给出的建议与感染科专家相当。

> **边界：** 从未在临床中实际使用。

*医学 · MYCIN*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Mycin) (资料)

#### 1976｜机器能不能自己提出数学概念和猜想？

Lenat 的 AM 程序从集合论出发，用启发式规则自己“发现”了自然数、质数，并提出了哥德巴赫猜想等已知猜想。

> **边界：** 都是重新发现，没有产生新的数学。

*数学 · AM (Automated Mathematician)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (资料)

#### 1979｜一辆小车能不能只靠摄像头，自己绕过满屋子的椅子？

Moravec 的斯坦福小车用立体视觉建图，在大约五个小时里自主穿过了一个摆满椅子的房间。

*机器人与自主系统 · Stanford Cart*　来源：[Computer History Museum](https://www.computerhistory.org/collections/catalog/102723520) (资料) · [Wikipedia](https://en.wikipedia.org/wiki/Hans_Moravec) (资料)

#### 1979-07｜程序能不能击败一项棋类游戏的世界冠军？

Hans Berliner 的双陆棋程序 BKG 9.8 以 7:1 击败世界冠军 Luigi Villa，是程序首次击败棋类世界冠军。

> **边界：** 双陆棋含掷骰运气成分，Berliner 本人也承认运气占了一部分。

*博弈 · BKG 9.8*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Hans_Berliner) (资料)

## 1980s-1990s

#### 1980｜复杂的计算机订单配置，能不能交给程序自动完成？

DEC 公司的专家系统 XCON 自动配置 VAX 计算机订单，据报道每年为公司节省数千万美元。

*算法与软件 · XCON (R1)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Xcon) (资料)

#### 1981｜程序设计出的舰队，能不能在人类锦标赛中夺冠？

Lenat 的 EURISKO 为太空战棋游戏 Traveller 设计舰队，连续两年赢得全国锦标赛，用的是人类没有想到的非常规战术。

*博弈 · EURISKO*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Eurisko) (资料)

#### 1982-09-03｜专家系统能不能预测出地下隐藏的矿藏？

PROSPECTOR 根据地质数据预测了华盛顿州 Mount Tolman 附近一处未被发现的钼矿，后来的钻探证实了这一预测。

*地球与气候 · PROSPECTOR*　来源：[Science 1982](https://doi.org/10.1126/science.217.4563.927) (论文)

#### 1986｜神经网络能不能自己学会把英文单词读出来？

Sejnowski 和 Rosenberg 的 NETtalk 通过训练学会了把英文文本转换成发音，学习过程听起来像儿童学说话。

*感知与语言 · NETtalk*　来源：[Wikipedia](https://en.wikipedia.org/wiki/NETtalk_(artificial_neural_network)) (资料)

#### 1988-11｜国际象棋程序能不能在正式比赛中击败特级大师？

卡内基梅隆大学的 Deep Thought 在正式锦标赛中击败了特级大师 Bent Larsen，是计算机首次在锦标赛中战胜特级大师。

*博弈 · Deep Thought*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Thought_(chess_computer)) (资料)

#### 1989｜机器能不能认出手写的邮政编码？

LeCun 等人用反向传播训练卷积神经网络识别手写数字，后来被用于美国邮政和银行支票的自动识别。

*感知与语言 · LeNet*　来源：[Neural Computation 1989](https://doi.org/10.1162/neco.1989.1.4.541) (论文)

#### 1992｜不靠人教，只靠自己跟自己下，能下到顶尖人类水平吗？

IBM 的 Tesauro 用时间差分强化学习训练神经网络下双陆棋，达到接近世界顶尖选手的水平，还改变了人类高手对某些开局的下法。

*博弈 · TD-Gammon*　来源：[Wikipedia](https://en.wikipedia.org/wiki/TD-Gammon) (资料)

#### 1994｜西洋跳棋的人机世界冠军会是谁？

阿尔伯塔大学的 Chinook 成为第一个在人类锦标赛中赢得世界冠军头衔的程序。

> **边界：** 对手 Tinsley 因病中途退赛，Chinook 由此获得头衔。

*博弈 · Chinook*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Chinook_(computer_program)) (资料)

#### 1995-07｜汽车能不能在高速公路上自己掌握方向盘，横穿美国？

卡内基梅隆大学的 Navlab 5 完成了“不用手横穿美国”之旅，约 98% 的路程由视觉系统自动转向。

> **边界：** 油门和刹车仍由人控制。

*机器人与自主系统 · Navlab 5 (RALPH)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Navlab) (资料)

#### 1996-10｜所有 Robbins 代数都是布尔代数吗？（悬而未决 60 年的 Robbins 猜想）

Argonne 实验室 McCune 的自动推理程序 EQP 找到了关键证明，结合已有成果解决了这个困扰数学家几十年的问题。

*数学 · EQP*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (资料) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (报道)

#### 1997-05-11｜计算机能不能在正式比赛中击败国际象棋世界冠军？

IBM 的深蓝以 3.5:2.5 击败卡斯帕罗夫，是计算机首次在标准赛制的对局中战胜在任世界冠军。

*博弈 · Deep Blue*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov) (资料)

#### 1997-08｜黑白棋程序能不能击败人类世界冠军？

Buro 的 Logistello 以 6:0 击败黑白棋世界冠军村上健。

*博弈 · Logistello*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Logistello) (资料)

#### 1999-05｜航天器能不能在没有地面指挥的情况下，自己规划任务、自己处理故障？

NASA 的 Remote Agent 在深空一号探测器上自主控制了几天，期间自行诊断并处理了模拟故障。

*机器人与自主系统 · Remote Agent*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Space_1) (资料)

## 2000s

#### 2005-10-08｜无人车能不能自己穿越 200 多公里的沙漠？

斯坦福的 Stanley 自动驾驶约 212 公里，赢得 DARPA 大挑战赛。一年前同一比赛中没有任何车辆跑完全程。

*机器人与自主系统 · Stanley*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Stanley_(vehicle)) (资料)

#### 2006-03-22｜计算机自己“进化”出来的天线，能不能好到真的被送上太空？

NASA 用进化算法设计的 X 波段天线形状怪异但满足任务要求，随 ST5 卫星发射升空，是第一个飞上太空的计算机进化设计硬件。

*算法与软件 · Evolutionary algorithm (NASA Ames)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Evolved_antenna) (资料)

#### 2007-07-19｜西洋跳棋双方都下最优时，结局是什么？

Schaeffer 团队经过 18 年计算证明：双方都不犯错时，西洋跳棋必然是和棋。

*博弈 · Chinook*　来源：[Science 2007](https://doi.org/10.1126/science.1144079) (论文)

#### 2007-11-03｜无人车能不能在有其他车辆的城市道路上遵守交规行驶？

在 DARPA 城市挑战赛中，卡内基梅隆大学的 Boss 在模拟城市环境里遵守交规、与其他车辆交互，赢得冠军。

*机器人与自主系统 · Boss (Tartan Racing)*　来源：[Wikipedia](https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2007)) (资料)

#### 2009-04-03｜机器能不能自己提出假设、设计实验、得出新的科学发现？

“机器人科学家”Adam 自主提出并实验验证了酵母中若干“孤儿酶”对应的基因。

*生物 · Adam*　来源：[Science 2009](https://doi.org/10.1126/science.1165620) (论文)

#### 2009-04-03｜只给运动数据，机器能不能找出描述它的物理公式？

Schmidt 与 Lipson 用符号回归，从摆和振子的实验数据中重新找出了能量守恒等关系式。

> **边界：** 是从数据重新发现已知规律，不是发现新物理。

*物理 · Eureqa (symbolic regression)*　来源：[Science 2009](https://doi.org/10.1126/science.1165893) (论文)

## 2010s

#### 2011-02-16｜机器能不能听懂充满双关和暗示的自然语言问题，并答得比人快、比人准？

IBM Watson 在美国问答节目《危险边缘》中击败两位历史最佳选手。

*感知与语言 · IBM Watson*　来源：[Wikipedia](https://en.wikipedia.org/wiki/IBM_Watson) (资料)

#### 2012-09｜机器能不能看懂上千类日常物体的照片？

AlexNet 在 ImageNet 比赛中把 top-5 错误率降到约 15%，比第二名低 10 个百分点以上，从此深度学习成为主流。

*感知与语言 · AlexNet*　来源：[Wikipedia](https://en.wikipedia.org/wiki/AlexNet) (资料)

#### 2013-12-19｜同一个程序只看屏幕像素，能不能学会几十种不同的电子游戏？

DeepMind 的 DQN 只看画面和分数，在 49 款雅达利游戏中的大约一半上达到或超过人类职业测试员的水平。

*博弈 · DQN*　来源：[arXiv](https://arxiv.org/abs/1312.5602) (论文) · [Nature 2015](https://doi.org/10.1038/nature14236) (论文)

#### 2015-01-09｜一对一有限注德州扑克，存在“不会输”的打法吗？

阿尔伯塔大学的 Cepheus 计算出了一对一有限注德州扑克的近似最优策略，宣布该游戏“基本被破解”。

*博弈 · Cepheus*　来源：[Science 2015](https://doi.org/10.1126/science.1259433) (论文)

#### 2015-09-09｜怎样设计实验，才能制备出复杂的高维量子纠缠态？

Krenn 等人的程序 MELVIN 自动搜索光学实验方案，找到了人类没有想到的设计，其中一些后来在实验室中实现。

*物理 · MELVIN*　来源：[arXiv](https://arxiv.org/abs/1509.02749) (论文) · [PRL 2016](https://doi.org/10.1103/PhysRevLett.116.090405) (论文)

#### 2015-12-10｜机器识别图片，能不能比人还准？

微软亚洲研究院的 ResNet 在 ImageNet 上的错误率约 3.6%，低于常被引用的人类约 5% 的水平，残差结构也成为此后深度网络的基础。

> **边界：** “人类水平”只是基于少数标注者的估计。

*感知与语言 · ResNet*　来源：[arXiv](https://arxiv.org/abs/1512.03385) (论文)

#### 2016-03-15｜被认为还要十年才能被攻克的围棋，机器能下赢世界顶尖棋手吗？

DeepMind 的 AlphaGo 以 4:1 击败李世石。第 2 局的“第 37 手”让职业棋手重新思考围棋。

*博弈 · AlphaGo*　来源：[Nature 2016](https://doi.org/10.1038/nature16961) (论文) · [Wikipedia](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol) (资料)

#### 2016-05｜能不能把正整数涂成两种颜色，使得没有同色的勾股数组？（布尔勾股数问题）

Heule 等人用 SAT 求解器证明答案是否定的：一直涂到 7824 还可以，到 7825 就不可能了。证明文件达 200 TB。

> **边界：** 属于自动推理加大规模计算，不是学习型 AI。

*数学 · SAT solver*　来源：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (资料) · [arXiv](https://arxiv.org/abs/1605.00723) (论文)

#### 2016-06-07｜量子多体系统的状态维数随粒子数指数增长，能不能更高效地表示和计算它？

Carleo 与 Troyer 用神经网络表示波函数，在若干一维和二维自旋模型上算出了高精度的基态和动力学。

> **边界：** 只针对特定模型，不是一般量子多体问题的通解。

*物理 · Neural-network quantum states*　来源：[arXiv](https://arxiv.org/abs/1606.02318) (论文) · [Science 2017](https://doi.org/10.1126/science.aag2302) (论文)

#### 2016-09-26｜机器翻译能不能接近人工翻译的质量？

谷歌的神经机器翻译系统在若干语言对上把翻译错误减少约 60%，并很快替换了谷歌翻译的旧系统。

*感知与语言 · Google Neural Machine Translation*　来源：[arXiv](https://arxiv.org/abs/1609.08144) (论文)

#### 2016-10-17｜机器听写日常对话，能不能和专业转录员一样准？

微软报告其语音识别系统在 Switchboard 电话对话测试中的词错误率与专业人工转录员持平。

*感知与语言 · Microsoft speech recognition*　来源：[arXiv](https://arxiv.org/abs/1610.05256) (论文)

#### 2016-11-29｜AI 看眼底照片，能不能像眼科医生一样发现糖尿病视网膜病变？

谷歌团队的深度学习模型在糖尿病视网膜病变筛查中达到了与眼科医生相当的灵敏度和特异度。

*医学 · Deep learning (Google)*　来源：[JAMA 2016](https://doi.org/10.1001/jama.2016.17216) (论文)

#### 2017-01-25｜AI 看皮肤照片，能不能像皮肤科医生一样判断是不是皮肤癌？

斯坦福团队训练的卷积网络在区分恶性黑色素瘤等任务上，表现与 21 位皮肤科医生相当。

*医学 · Deep CNN (Stanford)*　来源：[Nature 2017](https://doi.org/10.1038/nature21056) (论文)

#### 2017-01-30｜看不到对手底牌、充满诈唬的扑克，机器能赢职业选手吗？

卡内基梅隆大学的 Libratus 在 12 万手一对一无限注德州扑克中大比分战胜四位顶尖职业选手。

*博弈 · Libratus*　来源：[Science 2018](https://doi.org/10.1126/science.aao1733) (论文)

#### 2017-03-02｜AI 能不能在无限注扑克中击败职业选手？

阿尔伯塔大学的 DeepStack 用深度学习做“直觉”判断，在一对一无限注德州扑克中战胜了职业选手。

*博弈 · DeepStack*　来源：[Science 2017](https://doi.org/10.1126/science.aam6960) (论文)

#### 2017-10-19｜完全不学人类棋谱，从零开始能不能下得比人类最强的 AI 还好？

AlphaGo Zero 只靠自我对弈训练三天，就以 100:0 击败了战胜李世石的那个版本。

*博弈 · AlphaGo Zero*　来源：[Nature 2017](https://doi.org/10.1038/nature24270) (论文)

#### 2017-12-14｜已有的望远镜数据里，还藏着没被发现的行星吗？

神经网络在开普勒望远镜的数据中找出了此前漏检的行星 Kepler-90i，使 Kepler-90 成为已知行星数与太阳系并列最多（8 颗）的恒星系统。

*天文 · Google neural network + NASA Kepler data*　来源：[NASA](https://www.nasa.gov/news-release/artificial-intelligence-nasa-data-used-to-discover-eighth-planet-circling-distant-star/) (官方)

#### 2018-03-28｜给定一个目标分子，AI 能不能规划出可行的化学合成路线？

Segler 等人用神经网络结合蒙特卡洛树搜索规划逆合成路线；在双盲测试中，化学家认为 AI 的路线和文献中的路线一样好。

*化学 · 3N-MCTS*　来源：[Nature 2018](https://doi.org/10.1038/nature25978) (论文)

#### 2018-12-07｜只知道规则、完全不看人类棋谱，能不能从零学会国际象棋、将棋和围棋？

AlphaZero 只靠自我对弈，在三种棋类上都击败了当时最强的专用程序。

*博弈 · AlphaZero*　来源：[Science 2018](https://doi.org/10.1126/science.aar6404) (论文)

#### 2019-04-13｜在需要团队配合、长期规划的复杂电子竞技中，AI 能赢世界冠军吗？

OpenAI Five 在 Dota 2 中以 2:0 击败了当时的世界冠军战队 OG。

*博弈 · OpenAI Five*　来源：[arXiv](https://arxiv.org/abs/1912.06680) (论文)

#### 2019-07-03｜只读科学论文的文字，AI 能不能提前预测出好的热电材料？

伯克利实验室用 330 万篇材料学摘要训练词向量；用历史文献回测时，模型提前好几年“推荐”了后来被发现的热电材料。

*材料 · Word embeddings (Berkeley Lab)*　来源：[Nature 2019](https://doi.org/10.1038/s41586-019-1335-8) (论文)

#### 2019-07-11｜六人同桌的多人扑克，机器也能赢吗？

Pluribus 在六人无限注德州扑克中战胜精英职业选手，是 AI 首次在主要的多人博弈中超越顶尖人类。

*博弈 · Pluribus*　来源：[Science 2019](https://doi.org/10.1126/science.aay2400) (论文)

#### 2019-09-02｜AI 能不能在几周内设计出有活性的新药分子？

Insilico Medicine 用生成模型在 21 天内设计出 DDR1 激酶抑制剂，其中先导分子在细胞和小鼠实验中显示了活性。

> **边界：** 早期临床前结果。

*医学 · GENTRL (Insilico Medicine)*　来源：[Nature Biotech 2019](https://doi.org/10.1038/s41587-019-0224-x) (论文)

#### 2019-10-15｜机器人的手能不能像人手一样灵巧，单手还原魔方？

OpenAI 在模拟环境中训练的机械手，在真实世界里单手还原了魔方。

> **边界：** 还原步骤由传统算法计算，AI 负责的是手部操作；成功率有限。

*机器人与自主系统 · Dactyl (OpenAI)*　来源：[arXiv](https://arxiv.org/abs/1910.07113) (论文)

#### 2019-10-30｜在信息不完全、需要实时操作的《星际争霸 II》中，AI 能达到顶级人类水平吗？

AlphaStar 在官方天梯上以三个种族都达到“宗师”段位，排名超过 99.8% 的活跃玩家。

*博弈 · AlphaStar*　来源：[Nature 2019](https://doi.org/10.1038/s41586-019-1724-z) (论文)

## 2020-2023

#### 2020-01-01｜AI 看乳腺 X 光片，能不能比放射科医生漏诊更少、误报更少？

在英美两国的数据上，模型的假阳性和假阴性都低于放射科医生；在英国的双人阅片流程中，可以替代第二位医生而不降低效果。

*医学 · Google Health*　来源：[Nature 2020](https://doi.org/10.1038/s41586-019-1799-6) (论文)

#### 2020-02-20｜能不能在已有化合物中，找到结构全新的抗生素候选？

MIT 团队用深度学习筛选了上亿个分子，找到 halicin，它在实验室和小鼠实验中对多种耐药菌有效。

> **边界：** 候选药物，尚未获批用于临床。

*医学 · Deep learning (MIT)*　来源：[Cell 2020](https://doi.org/10.1016/j.cell.2020.01.021) (论文) · [Broad Institute](https://www.broadinstitute.org/publications/broad627466) (官方)

#### 2020-07-08｜机器人化学家能不能自己在实验室里走动、做实验，找到更好的催化剂？

利物浦大学的移动机器人在 8 天内自主完成了 688 次实验，找到了比初始配方活性高约 6 倍的光催化剂混合物。

*化学 · Mobile robotic chemist (Liverpool)*　来源：[Nature 2020](https://doi.org/10.1038/s41586-020-2442-2) (论文)

#### 2020-09｜能不能直接从基本原理，更准确地算出原子和分子的电子结构？

DeepMind 的 FermiNet 用神经网络表示多电子波函数，在若干小分子上达到了接近化学精度的结果。

*物理 · FermiNet*　来源：[Phys. Rev. Research 2020](https://doi.org/10.1103/PhysRevResearch.2.033429) (论文)

#### 2020-11-30｜只知道氨基酸序列，能不能准确预测蛋白质的三维结构？（困扰生物学 50 年的“蛋白质折叠问题”）

AlphaFold 2 在 CASP14 竞赛中的预测精度达到接近实验测定的水平，后来又公开了超过 2 亿个蛋白质的预测结构。

> **边界：** 解决的是结构预测，蛋白质如何动态折叠、如何相互作用等问题仍在研究中。

*生物 · AlphaFold 2*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03819-2) (论文)

#### 2020-12-02｜能不能让高空气球在平流层里自己借风导航、长时间停留在一个地方？

Loon 项目用强化学习控制器在赤道上空进行了 39 天实测，比人工设计的控制器更好地保持在目标区域附近。

*机器人与自主系统 · Deep RL (Loon)*　来源：[Nature 2020](https://doi.org/10.1038/s41586-020-2939-8) (论文)

#### 2020-12-23｜连游戏规则都不告诉它，AI 还能学会下棋和打游戏吗？

MuZero 自己学习环境模型，在围棋、国际象棋、将棋上达到 AlphaZero 的水平，并在雅达利游戏上创下新纪录。

*博弈 · MuZero*　来源：[Nature 2020](https://doi.org/10.1038/s41586-020-03051-4) (论文)

#### 2021-02-03｜能不能让计算机自动发现 π、e 等基本常数的新公式？

以色列理工学院的 Ramanujan Machine 自动生成了数十个关于基本常数的新连分数猜想，其中一些后来被证明。

*数学 · Ramanujan Machine*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03229-4) (论文)

#### 2021-04-29｜能不能自动构造反例，推翻图论和组合数学中的猜想？

Adam Zsolt Wagner 用强化学习构造图和矩阵，找到了若干已发表猜想的反例。

*数学 · Cross-entropy RL*　来源：[arXiv](https://arxiv.org/abs/2104.14516) (论文)

#### 2021-06-09｜芯片布局能不能交给 AI，在几小时内完成工程师几周的工作？

谷歌称其强化学习方法在 6 小时内生成的芯片布局与人类专家相当或更好，并用于 TPU 的设计。

> **边界：** 方法的有效性和可复现性受到学术界的质疑和争论。

*算法与软件 · Deep RL (Google)*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03544-w) (论文)

#### 2021-07-15｜蛋白质结构预测能不能做到人人可用，还能预测蛋白质复合物？

Baker 实验室的 RoseTTAFold 以开源方式达到接近 AlphaFold 2 的精度，还能预测蛋白质复合物的结构。

*生物 · RoseTTAFold*　来源：[Science 2021](https://doi.org/10.1126/science.abj8754) (论文)

#### 2021-09-29｜未来一两个小时会在哪里下雨、下多大？

DeepMind 与英国气象局合作的生成模型做短时降水预报；在盲评中，56 位气象专家中 89% 认为它优于现有方法。

*地球与气候 · DGMR*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-03854-z) (论文)

#### 2021-12-01｜纽结的几何性质和代数性质之间，有没有尚未发现的联系？

机器学习帮助数学家发现了纽结理论中的新关系，也为表示论中的一个猜想提供了线索，数学家随后完成了严格证明。

*数学 · DeepMind + mathematicians*　来源：[Nature 2021](https://doi.org/10.1038/s41586-021-04086-x) (论文)

#### 2021-12-09｜量子化学中被广泛使用的密度泛函，能不能修正它对“分数电子”问题的系统性错误？

DeepMind 训练的神经网络泛函 DM21 正确处理了分数电荷和分数自旋这类长期困扰传统泛函的情况。

*化学 · DM21*　来源：[Science 2021](https://doi.org/10.1126/science.abj6511) (论文)

#### 2022-02-09｜在高速赛车游戏中，AI 能不能既跑得最快又遵守赛道礼仪，击败顶尖车手？

索尼的 GT Sophy 在《GT 赛车》中击败了世界顶尖的人类车手，同时遵守比赛规则。

*博弈 · GT Sophy*　来源：[Nature 2022](https://doi.org/10.1038/s41586-021-04357-7) (论文)

#### 2022-02-16｜怎样协调几十个线圈，控制托卡马克里高温等离子体的形状？

强化学习控制器在瑞士 TCV 托卡马克的真实装置上，成功控制出多种等离子体构型。

*物理 · Deep RL (DeepMind + EPFL)*　来源：[Nature 2022](https://doi.org/10.1038/s41586-021-04301-9) (论文)

#### 2022-03-09｜残缺的古希腊铭文，能不能补全文字、判断年代和出处？

DeepMind 的 Ithaca 修复文字的准确率达 62%，与历史学家合作时把历史学家的准确率从 25% 提高到 72%。

*感知与语言 · Ithaca*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-04448-z) (论文)

#### 2022-04-27｜能不能造出一种酶，在常温下几天内分解塑料瓶？

德克萨斯大学用机器学习指导突变，得到 FAST-PETase，能在一周内基本降解多种 PET 塑料制品。

*生物 · MutCompute*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-04599-z) (论文)

#### 2022-09-15｜给定一个想要的蛋白质形状，能不能设计出会折叠成这个形状的氨基酸序列？

ProteinMPNN 设计序列的成功率远高于传统方法，许多设计在实验中得到验证。

*生物 · ProteinMPNN*　来源：[Science 2022](https://doi.org/10.1126/science.add2187) (论文)

#### 2022-10-05｜矩阵乘法还能更快吗？

AlphaTensor 找到了 4×4 矩阵在模 2 运算下只需 47 次乘法的算法，打破了 Strassen 方法 50 多年来的纪录。

> **边界：** 这一改进只在模 2 运算下成立。

*算法与软件 · AlphaTensor*　来源：[Nature 2022](https://doi.org/10.1038/s41586-022-05172-4) (论文)

#### 2022-11-22｜在需要谈判、结盟和说服的桌游《外交》中，AI 能不能和人类打成一片并取胜？

Meta 的 Cicero 在线上《外交》比赛中用自然语言与人谈判，得分超过平均人类玩家的两倍，排名进入前 10%。

*博弈 · Cicero*　来源：[Science 2022](https://doi.org/10.1126/science.ade9097) (论文)

#### 2022-12-01｜信息高度隐藏的军棋类游戏 Stratego，AI 能达到人类专家水平吗？

DeepNash 在 Gravon 平台上排名历史前三，胜率约 84%。

*博弈 · DeepNash*　来源：[Science 2022](https://doi.org/10.1126/science.add4679) (论文)

#### 2022-12-08｜AI 能不能解决需要理解题意、设计算法的编程竞赛题？

AlphaCode 在 Codeforces 模拟比赛中排名约在参赛者的前 54%，达到中等人类选手水平。

*算法与软件 · AlphaCode*　来源：[Science 2022](https://doi.org/10.1126/science.abq1158) (论文)

#### 2023-03-16｜地球上数以亿计、从未被研究过的微生物蛋白质，长什么样？

Meta 用蛋白质语言模型 ESMFold 预测了超过 6 亿个宏基因组蛋白质的结构，其中很多与已知蛋白都不相似。

*生物 · ESMFold*　来源：[Science 2023](https://doi.org/10.1126/science.ade2574) (论文)

#### 2023-05-25｜针对世卫组织列为最危险级别的鲍曼不动杆菌，能找到新的抗生素候选吗？

研究者用深度学习找到 abaucin，它对鲍曼不动杆菌的作用范围很窄，在小鼠伤口感染模型中有效。

> **边界：** 候选药物，尚未获批用于临床。

*医学 · Deep learning (McMaster/MIT)*　来源：[Nature Chem. Bio. 2023](https://doi.org/10.1038/s41589-023-01349-8) (论文)

#### 2023-06-07｜被优化了几十年的基础排序代码，还能更快吗？

AlphaDev 找到了更快的短序列排序汇编程序，已被合并进 LLVM 的 C++ 标准库。

*算法与软件 · AlphaDev*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06004-9) (论文)

#### 2023-07-05｜中期天气预报，AI 能不能超过传统数值模式？

华为的盘古气象大模型在多项中期预报指标上优于欧洲中期天气预报中心的业务系统，速度快一万倍以上。

*地球与气候 · Pangu-Weather (Huawei)*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06185-3) (论文)

#### 2023-07-11｜能不能从零设计出能与特定靶点结合的全新蛋白质？

Baker 实验室的 RFdiffusion 用扩散模型设计新蛋白，实验验证了大量结合蛋白、对称结构和酶活性位点支架。

*生物 · RFdiffusion*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06415-8) (论文)

#### 2023-09-19｜人类基因中的单字母突变，哪些会致病？

AlphaMissense 对 7100 万种可能的错义突变做了预测，其中 89% 被划分为“可能致病”或“可能良性”；此前人类专家只确认过约 0.1%。

> **边界：** 是预测，用于临床诊断仍需结合其他证据。

*生物 · AlphaMissense*　来源：[Science 2023](https://doi.org/10.1126/science.adg7492) (论文)

#### 2023-10-12｜维苏威火山喷发烧焦的古罗马卷轴，不打开能读出来吗？

参赛者用机器学习从 CT 扫描中识别出墨迹，读出第一个单词“紫色”；2024 年 2 月，团队读出了 2000 多个字符。

*感知与语言 · Machine learning (Vesuvius Challenge)*　来源：[Vesuvius Challenge](https://scrollprize.org/grandprize) (官方)

#### 2023-11｜能不能用火星陨石成分，找到能从水中制氧的催化剂配方？

中国科学技术大学的机器人 AI 化学家在数百万种可能配方中自动合成、测试并优化，找到了有效的析氧催化剂。

> **边界：** 实验在地面实验室完成，并非已经在火星上制氧。

*化学 · Robotic AI chemist (USTC)*　来源：[Nature Synthesis 2023](https://doi.org/10.1038/s44160-023-00424-1) (论文)

#### 2023-11-14｜AI 能不能比传统数值天气预报预测得更准？

GraphCast 的 10 天全球天气预报在约 90% 的评测指标上优于欧洲中期天气预报中心的高精度业务系统，单台机器不到一分钟就能算完。

*地球与气候 · GraphCast*　来源：[Science 2023](https://doi.org/10.1126/science.adi2336) (论文)

#### 2023-11-29｜还有多少稳定的无机晶体材料没有被发现？

GNoME 预测了 220 万种新晶体，其中约 38 万种被认为是稳定的；同期的自动化实验室合成出了其中一部分。

> **边界：** “新材料”的数量和新颖性受到部分材料学家质疑。

*材料 · GNoME*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06735-9) (论文)

#### 2023-12-14｜有限几何中“没有三点共线”的点集（cap set），最大能构造到多大？

FunSearch 让大语言模型写程序、自动评估并迭代，在 8 维中找到了比已知更大的 cap set，并改进了相关的渐近下界。

> **边界：** 改进的是下界和具体构造，不是确定了最大值。

*数学 · FunSearch*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (论文)

#### 2023-12-20｜大语言模型能不能自己查资料、写代码、操控实验设备，完成真实的化学实验？

卡内基梅隆大学的 Coscientist 自主规划并执行了钯催化交叉偶联等反应，并对反应条件进行了优化。

*化学 · Coscientist*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06792-0) (论文)

#### 2023-12-20｜能不能找到一类全新的、能杀死耐药金黄色葡萄球菌的抗生素？

MIT 团队用可解释深度学习筛选了 1200 万个化合物，发现了一类新的抗生素结构，在小鼠模型中对 MRSA 有效。

> **边界：** 临床前结果。

*医学 · Explainable deep learning (MIT)*　来源：[Nature 2023](https://doi.org/10.1038/s41586-023-06887-8) (论文)

## 2024

#### 2024-01-17｜奥数几何题需要的辅助线，机器能自己想到吗？

AlphaGeometry 在 30 道国际奥数几何题中解出 25 道，接近金牌选手的平均水平。

*数学 · AlphaGeometry*　来源：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (论文)

#### 2024-02-21｜核聚变装置里的等离子体撕裂不稳定性，能不能提前预测并避免？

普林斯顿团队的 AI 控制器在 DIII-D 托卡马克上提前约 300 毫秒预测撕裂不稳定性，并实时调整，使等离子体保持高性能运行。

*物理 · Deep RL (Princeton/DIII-D)*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-07024-9) (论文)

#### 2024-05-08｜蛋白质与 DNA、RNA、药物小分子结合在一起时，结构是什么样？

AlphaFold 3 把结构预测扩展到几乎所有生物分子的复合物，在蛋白质与药物分子相互作用的预测上明显优于传统对接方法。

*生物 · AlphaFold 3*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-07487-w) (论文)

#### 2024-07-25｜AI 能不能在国际数学奥林匹克竞赛的全部题型上拿到奖牌？

DeepMind 的系统解出 2024 年 IMO 六题中的四题，达到银牌水平，证明以 Lean 形式化语言写成。

> **边界：** 题目先由人工翻译成形式化语言，部分题目的计算时间远超比赛时限。

*数学 · AlphaProof + AlphaGeometry 2*　来源：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (官方)

#### 2024-10-09｜AI 预测蛋白质结构的工作，算不算得上诺贝尔奖级别的科学贡献？

2024 年诺贝尔化学奖一半授予 Hassabis 与 Jumper（AlphaFold），另一半授予 David Baker（计算蛋白质设计）。

*生物 · AlphaFold / protein design*　来源：[Nobel Prize](https://www.nobelprize.org/prizes/chemistry/2024/press-release/) (官方)

#### 2024-12-04｜天气预报能不能给出更可靠的概率，比如台风走向的不确定性？

GenCast 的 15 天集合预报在 97% 的评测目标上优于欧洲中期天气预报中心的集合预报系统。

*地球与气候 · GenCast*　来源：[Nature 2024](https://doi.org/10.1038/s41586-024-08252-9) (论文)

## 2025

#### 2025-02-19｜AI 能不能提出连科学家还没发表的研究假说？

谷歌称其 AI co-scientist 独立提出了关于细菌基因转移机制的假说，与伦敦帝国理工学院团队尚未发表的实验发现一致。

> **边界：** 发布方主张；系统可能用到了相关的已发表文献。

*生物 · AI co-scientist (Google)*　来源：[arXiv](https://arxiv.org/abs/2502.18864) (论文)

#### 2025-05-14｜两个 4×4 复数矩阵相乘，能不能少做一次乘法？11 维空间里一个球周围最多能贴多少个球？

AlphaEvolve 找到了 48 次标量乘法的 4×4 复矩阵乘法算法（此前为 49 次），还找到了 11 维中 593 个球的接触构型，把已知下界提高了。

> **边界：** 593 是“至少能放这么多”，不是证明了最大值。

*数学 · AlphaEvolve*　来源：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (官方) · [arXiv](https://arxiv.org/abs/2506.13131) (论文)

#### 2025-05-20｜多智能体系统能不能自己提出并验证一种眼病的候选疗法？

FutureHouse 的 Robin 系统提出：已获批的青光眼药物 ripasudil 可能用于治疗干性老年黄斑变性，并设计和分析了支持这一假说的实验。

> **边界：** 仅有细胞实验，尚未进行临床试验。

*医学 · Robin (FutureHouse)*　来源：[arXiv](https://arxiv.org/abs/2505.13400) (论文)

#### 2025-07-21｜只用自然语言、在比赛时限内，AI 能拿到国际数学奥林匹克金牌吗？

Google DeepMind 的 Gemini Deep Think（成绩经 IMO 官方评分）和 OpenAI 的实验模型都宣布解出 2025 年 IMO 六题中的五题，达到金牌分数线。

> **边界：** 竞赛题是已有答案的题目，不等于解决开放问题。

*数学 · Gemini Deep Think; OpenAI experimental model*　来源：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (官方) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (报道)

#### 2025-09-18｜流体方程中那些极难捕捉的“不稳定奇点”，能不能被找出来？

Google DeepMind 与布朗大学、纽约大学、斯坦福大学合作，用神经网络加高精度数值方法，在多个流体方程中发现了新的不稳定自相似奇点族。

> **边界：** 是高精度数值发现，不是严格证明；也不等于解决了 Navier–Stokes 问题。

*数学 · Physics-informed neural networks (Google DeepMind et al.)*　来源：[Google DeepMind](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/) (官方) · [Physics World](https://physicsworld.com/a/neural-networks-discover-unstable-singularities-in-fluid-systems/) (报道)

#### 2025-11-03｜把 AI 同时用在几十个数学问题上，能有多少收获？

Terence Tao 等人与 AlphaEvolve 合作研究了 67 个分析、组合和几何问题，在其中一部分上重新找到已知最优构造，或给出了改进的构造。

*数学 · AlphaEvolve*　来源：[arXiv](https://arxiv.org/abs/2511.02864) (论文)

#### 2025-11-20｜埃尔德什第 848 号问题（一个乘法数论中的极值问题）的答案是什么？

OpenAI 称 GPT-5 为解决这个问题提供了关键想法，研究者据此完成了证明。

> **边界：** 发布方的报告，人机分工需要看原文。

*数学 · GPT-5*　来源：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (官方)

## 2026

#### 2026-01-12｜埃尔德什第 728 号问题（关于阶乘整除性）能被解决吗？

GPT-5.2 Pro 与 Harmonic 的 Aristotle 合作给出了解答，并在 Lean 中完成形式化验证，被描述为基本自主完成。

> **边界：** Terence Tao 评论说，这更多体现的是速度，而不是题目的难度。

*数学 · GPT-5.2 Pro + Aristotle (Harmonic)*　来源：[arXiv](https://arxiv.org/abs/2601.07421) (论文) · [The Decoder](https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/) (报道)

#### 2026-02｜AI 能不能自主解决埃尔德什问题集中的多个开放问题？

Google DeepMind 报告其 Aletheia 系统自主解决了埃尔德什第 652 号、第 1051 号等问题。

*数学 · Gemini Deep Think (Aletheia)*　来源：[arXiv](https://arxiv.org/abs/2601.22401) (论文)

#### 2026-02-03｜数值半群合冲的 Fel 猜想成立吗？

Axiom Math 的 AxiomProver 从自然语言陈述出发证明了这一猜想，并在 Lean 中完成形式化。

*数学 · AxiomProver (Axiom Math)*　来源：[arXiv](https://arxiv.org/abs/2602.03716) (论文)

#### 2026-03-23｜一个超图 Ramsey 类问题的下界构造能不能改进？

GPT-5.4 Pro 给出了改进的构造，Epoch AI 将 FrontierMath 开放问题列表中的这一题标为已解决。

*数学 · GPT-5.4 Pro*　来源：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (官方)

#### 2026-03-31｜二项式系数的小素因子、加性基的拆分等几个埃尔德什问题，能被解决吗？

OpenAI 的内部模型给出了这几个问题的简短证明，相关结果以论文形式发布。

*数学 · OpenAI internal model*　来源：[arXiv](https://arxiv.org/abs/2603.29961) (论文)

#### 2026-04-15｜埃尔德什、Sárközy 和 Szemerédi 关于本原集求和的猜想成立吗？（埃尔德什第 1196 号问题）

在 Liam Price 的提示下，GPT-5.4 Pro 证明了猜想中的精确界 1+O(1/log x)。

*数学 · GPT-5.4 Pro*　来源：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (资料)

#### 2026-06｜颗粒堵塞理论中，为什么两个临界指数满足 a + b = 1？

这个关系早有高精度数值支持，却一直缺少解析证明。诺贝尔奖得主 Parisi 与 Zamponi 等人在与 Claude 的交互中得到并核查了证明。

> **边界：** 结论在无限维硬球的 fullRSB 理论框架内成立。

*物理 · Claude*　来源：[arXiv](https://arxiv.org/abs/2606.03300) (论文) · [Live Science](https://livescience.com/physics-mathematics/mathematics/nobel-prize-winning-physicist-and-team-use-claude-ai-to-solve-decades-old-math-puzzle) (报道)

#### 2026-08-10｜黎曼ζ函数的非平凡零点，能证明至少有多大比例落在临界线上？

Anthropic 称，Claude 的研究版本把已知下界从 41.6% 提高到 67.2%，同时公开了论文、专家意见和 Lean 形式化证明。

> **边界：** 黎曼猜想本身没有被证明，这是攻关过程中顺带得到的结果。

*数学 · Claude (research version)*　来源：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (官方)

#### 2026-09-03｜雄性果蝇完整的中枢神经系统是怎样连接的？

借助 AI 辅助的电子显微镜图像分割与重建，研究者公开了超过 16.6 万个神经元、1.25 亿个突触连接的完整图谱。

*生物 · AI-assisted EM reconstruction (Google Research + Janelia)*　来源：[Google Research](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/) (官方) · [Janelia](https://male-cns.janelia.org/) (官方)

#### 2026-09-04｜费马大定理的证明，能不能完整地用计算机逐步验证？

Anthropic 称数十个 Claude 智能体用 Lean 完成了费马大定理证明的端到端形式化，写了约 1300 万行 Lean 代码。

> **边界：** 是对已知证明的形式化验证，不是新的数学发现；发布方自己的研究。

*数学 · Claude*　来源：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (官方)

#### 2026-09-08｜一开始光滑的三维流体，会不会在有限时间内出现奇点？（Navier–Stokes 千禧年难题）

OpenAI 称其内部模型证明了：在施加光滑外力的情况下，Navier–Stokes 方程的解会在有限时间内爆破，并公开了 Lean 形式化证明；同时还给出了无外力 Euler 方程的爆破结果。

> **边界：** 这是发布方的主张，尚未经同行评审，也未获克雷研究所认定。Buckmaster 与 Alpöge 同期发表了相关的爆破结果，双方存在归属争议。

*数学 · OpenAI internal model (GPT-6 Astra for Lean)*　来源：[OpenAI](https://openai.com/index/navier-stokes-solution/) (官方) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (官方) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (报道)

#### 2026-09-17｜线性拟阵上的“强秘书问题”猜想成立吗？

研究者通过与 ChatGPT 对话得到了该猜想在线性拟阵情形下的证明。

> **边界：** 前一天另一组人类研究者用几乎相同的方法发布了同样的结果。

*数学 · ChatGPT (GPT-6 Astra)*　来源：[arXiv](https://arxiv.org/abs/2609.20797) (论文) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (论文)

#### 2026-09-21｜在数据很少的情况下，能不能设计出一类新的杀菌聚合物？

斯坦福团队从抗菌肽数据迁移学习并结合主动学习，合成的 10 种聚合物都能抑制大肠杆菌，其中一种对生物膜特别有效。

> **边界：** 临床前研究。

*材料 · Transfer + active learning (Stanford)*　来源：[Stanford](https://news.stanford.edu/stories/2026/09/bacteria-killing-polymers-new-class-antibiotics) (官方) · [Matter 2026](https://doi.org/10.1016/j.matt.2026.103026) (论文)

#### 2026-09-23｜噬菌体 DNA 中一个奇怪的重复序列，背后是什么新的生物系统？

Anthropic 称约 950 个 Claude 智能体用 21 小时搜索 DNA 数据，发现了一种与逆转录酶相关的新系统，后续实验确认这些重复序列会被转录成短 RNA。

> **边界：** 生物学功能尚不清楚；发布方自己的研究。

*生物 · Claude (≈950 agents)*　来源：[Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) (官方)

#### 2026-09-23｜银河系里还有多少稀有的沃尔夫-拉叶星没被发现？

机器学习从 Gaia 光谱中挑出 30 个候选，后续观测确认了 13 颗新的银河系沃尔夫-拉叶星。

> **边界：** AI 负责挑选候选，确认靠的是光谱观测。

*天文 · Machine learning on Gaia spectra*　来源：[arXiv](https://arxiv.org/abs/2609.28640) (论文)

#### 2026-10-06｜一个 AI 模型能同时在多少个数学问题上取得新结果？

OpenAI 一次性公开了一批由内部模型得到的新数学结果，平均每个结果约用 3 小时推理，其中许多附有 Lean 形式化证明。

> **边界：** 各结果的验证程度不同，需要逐题拆分查看。

*数学 · OpenAI internal model*　来源：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (官方) · [GitHub openai/math](https://github.com/openai/math) (官方)

