<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# Timeline: from the earliest to today

A chronological record of concrete problems AI has solved or advanced. The problem is the protagonist, not the model.

189 entries · [← Back to README](README.md) · Other language：[中文](TIMELINE.md)

[1950s-1970s](#1950s-1970s) · [1980s-1990s](#1980s-1990s) · [2000s](#2000s) · [2010s](#2010s) · [2020-2023](#2020-2023) · [2024](#2024) · [2025](#2025) · [2026](#2026)

## 1950s-1970s

#### 1956｜Given the axioms of logic, can a machine find proofs of theorems by itself?

Newell, Simon and Shaw's program proved 38 of the first 52 theorems in Chapter 2 of Principia Mathematica, one of them more elegantly than the book.

*Mathematics · Logic Theorist*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Logic_Theorist) (Reference)

#### 1957｜Can a machine learn to tell simple shapes apart from examples?

Rosenblatt's perceptron learned to classify simple patterns by adjusting its connection weights — one of the first trainable neural networks.

> **Limits：** Single-layer perceptrons are limited, as Minsky and Papert showed in 1969.

*Perception & language · Perceptron*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Perceptron) (Reference)

#### 1958｜Can a machine prove every propositional theorem in Principia Mathematica?

Hao Wang's program on the IBM 704 proved all 350+ propositional-logic theorems of Principia Mathematica in minutes.

*Mathematics · Hao Wang's IBM 704 program*　Sources：[IBM J. Res. Dev. 1960](https://doi.org/10.1147/rd.41.0002) (Paper)

#### 1959｜Can a machine prove plane-geometry theorems?

Gelernter's geometry prover at IBM used the diagram as a heuristic to prune search and proved high-school-level geometry theorems.

*Mathematics · Geometry Theorem Machine*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Herbert_Gelernter) (Reference)

#### 1959｜Can one domain-independent program solve many kinds of problems?

Newell, Shaw and Simon's General Problem Solver formalised means–ends analysis and used the same method on logic proofs, Towers of Hanoi and other puzzles.

> **Limits：** Worked only on well-structured, well-defined problems.

*Algorithms & software · General Problem Solver*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/General_Problem_Solver) (Reference)

#### 1959｜Can a program learn, by playing itself, to play better than the person who wrote it?

Arthur Samuel's checkers program tuned its evaluation function through self-play and came to outplay Samuel himself; it popularised the term "machine learning".

*Games · Samuel's checkers program*　Sources：[IBM J. Res. Dev. 1959](https://doi.org/10.1147/rd.33.0210) (Paper)

#### 1961｜Can a machine solve the integrals on a college calculus exam?

James Slagle's SAINT used heuristic search for symbolic integration and solved 52 of 54 problems from MIT freshman calculus finals.

*Mathematics · SAINT*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/James_Robert_Slagle) (Reference)

#### 1962｜Can a self-taught program beat a genuine checkers master?

Arthur Samuel's checkers program beat the checkers master Robert Nealey in a publicised match, one of the era's best-known machine-over-human results.

> **Limits：** Nealey was not a top player, and humans later beat the program several times.

*Games · Samuel's checkers program*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Arthur_Samuel_(computer_scientist)) (Reference)

#### 1964｜Can a machine read algebra word problems in English and solve them?

Daniel Bobrow's STUDENT translated high-school algebra word problems written in English into equations and solved them.

*Perception & language · STUDENT*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/STUDENT_(computer_program)) (Reference)

#### 1965｜From mass-spectrometry data, can a machine infer the structure of an unknown molecule?

Stanford's DENDRAL encoded chemists' knowledge as rules to generate and prune candidate structures — one of the first expert systems to tackle a real scientific task.

*Chemistry · DENDRAL*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Dendral) (Reference)

#### 1965｜Is there a simple, general inference rule that suits machine execution?

J. A. Robinson's resolution principle let computers carry out complete mechanical reasoning in first-order logic with a single rule, and became the basis of automated theorem proving and logic programming.

*Mathematics · Resolution principle (J. A. Robinson)*　Sources：[JACM 1965](https://doi.org/10.1145/321250.321253) (Paper) · [Wikipedia](https://en.wikipedia.org/wiki/Resolution_(logic)) (Reference)

#### 1966｜Can a machine hold a conversation in natural language?

Weizenbaum's ELIZA imitated a psychotherapist with simple pattern matching, and many users felt it genuinely 'understood' them.

> **Limits：** The program had no understanding at all — as Weizenbaum himself stressed.

*Perception & language · ELIZA*　Sources：[CACM 1966](https://doi.org/10.1145/365153.365168) (Paper)

#### 1967｜Can a chess program enter real human tournaments?

Greenblatt's Mac Hack VI was among the first chess programs to play in human tournaments and receive a rating.

*Games · Mac Hack VI*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Mac_Hack) (Reference)

#### c. 1970｜Can a robot perceive its surroundings, plan, and carry out multi-step tasks?

SRI's Shakey was the first mobile robot to reason about its own actions; the A* search algorithm and the STRIPS planner came out of the project.

*Robotics & autonomy · Shakey*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Shakey_the_robot) (Reference)

#### 1970｜Can a machine follow English commands to move blocks and answer questions about them?

Terry Winograd's SHRDLU understood fairly complex English in a virtual blocks world, carried out commands and explained its actions.

> **Limits：** Worked only in a tiny closed world.

*Perception & language · SHRDLU*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/SHRDLU) (Reference)

#### c. 1972｜Can a machine identify the bacteria behind a blood infection and recommend antibiotics?

Stanford's MYCIN reasoned with roughly 600 rules; in evaluations its recommendations compared well with infectious-disease specialists.

> **Limits：** Never used in actual clinical practice.

*Medicine · MYCIN*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Mycin) (Reference)

#### 1976｜Can a machine invent mathematical concepts and conjectures on its own?

Douglas Lenat's AM started from set theory and, guided by heuristics, 'discovered' natural numbers and primes and re-proposed known conjectures such as Goldbach's.

> **Limits：** Rediscoveries, not new mathematics.

*Mathematics · AM (Automated Mathematician)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (Reference)

#### 1976｜Can every map be coloured with four colours so that neighbouring regions differ? (the Four Colour Theorem)

Appel and Haken reduced the proof to about 1,900 configurations checked by computer — the first time a computer was indispensable in proving a famous theorem.

> **Limits：** Computer-assisted exhaustive checking, not a learning or reasoning system; included because it began the long debate over whether machine proofs count as proofs.

*Mathematics · Appel–Haken computer-assisted proof*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Four_color_theorem) (Reference)

#### 1977｜Can proving geometry theorems be turned into algebra a computer can carry out?

Wu Wen-Tsun's method converts elementary-geometry theorems into computations on polynomial systems, letting computers mechanically prove large classes of geometry theorems.

> **Limits：** Symbolic computation and automated reasoning, not learning-based AI.

*Mathematics · Wu's method (吴文俊)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Wu%27s_method_of_characteristic_set) (Reference)

#### 1979｜Can a cart cross a chair-filled room using only its camera?

Hans Moravec's Stanford Cart used stereo vision to map obstacles and crossed a chair-filled room on its own in about five hours.

*Robotics & autonomy · Stanford Cart*　Sources：[Computer History Museum](https://www.computerhistory.org/collections/catalog/102723520) (Reference) · [Wikipedia](https://en.wikipedia.org/wiki/Hans_Moravec) (Reference)

#### 1979-07｜Can a program beat a reigning world champion at a board game?

Hans Berliner's backgammon program BKG 9.8 beat world champion Luigi Villa 7–1 — the first time a program defeated a world champion at a board game.

> **Limits：** Backgammon involves dice; Berliner acknowledged luck played a part.

*Games · BKG 9.8*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Hans_Berliner) (Reference)

## 1980s-1990s

#### 1980｜Can a program configure complex computer orders automatically?

DEC's expert system XCON configured VAX computer orders automatically, reportedly saving the company tens of millions of dollars a year.

*Algorithms & software · XCON (R1)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Xcon) (Reference)

#### 1981｜Can a program design a fleet that wins a human tournament?

Lenat's EURISKO designed fleets for the Traveller war game and won the national tournament two years running with unconventional tactics.

*Games · EURISKO*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Eurisko) (Reference)

#### 1982-09-03｜Can an expert system predict a hidden ore deposit?

PROSPECTOR used geological data to predict an undiscovered molybdenum deposit near Mount Tolman, Washington, later confirmed by drilling.

*Earth & climate · PROSPECTOR*　Sources：[Science 1982](https://doi.org/10.1126/science.217.4563.927) (Paper)

#### 1983｜Can a chess program reach master level?

Bell Labs' special-purpose Belle became the first computer to earn a US Chess Federation master rating.

*Games · Belle*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Belle_(chess_machine)) (Reference)

#### 1986｜Can a neural network learn to read English text aloud?

Sejnowski and Rosenberg's NETtalk learned to convert English text to pronunciation; its training sounded like a child learning to speak.

*Perception & language · NETtalk*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/NETtalk_(artificial_neural_network)) (Reference)

#### 1988-11｜Can a chess program beat a grandmaster in tournament play?

Carnegie Mellon's Deep Thought beat grandmaster Bent Larsen, the first computer win over a grandmaster in a regular tournament.

*Games · Deep Thought*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Thought_(chess_computer)) (Reference)

#### 1989｜Can a machine read handwritten ZIP codes?

LeCun et al. trained a convolutional network with backpropagation to read handwritten digits; the approach was later deployed to read mail and bank cheques.

*Perception & language · LeNet*　Sources：[Neural Computation 1989](https://doi.org/10.1162/neco.1989.1.4.541) (Paper)

#### 1992｜Can a program reach top human level purely by playing against itself?

IBM's Gerald Tesauro trained a neural network with temporal-difference learning to play backgammon near world-champion level; it even changed how experts played certain openings.

*Games · TD-Gammon*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/TD-Gammon) (Reference)

#### 1994｜Who would hold the man–machine world title in checkers?

The University of Alberta's Chinook became the first program to win a human world-championship title.

> **Limits：** Opponent Marion Tinsley withdrew for health reasons mid-match.

*Games · Chinook*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Chinook_(computer_program)) (Reference)

#### 1995-07｜Can a car steer itself across the United States on highways?

Carnegie Mellon's Navlab 5 drove 'No Hands Across America', steering itself by vision for about 98% of the trip.

> **Limits：** Throttle and brakes were still human-controlled.

*Robotics & autonomy · Navlab 5 (RALPH)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Navlab) (Reference)

#### 1996-10｜Is every Robbins algebra Boolean? (the 60-year-old Robbins conjecture)

William McCune's automated reasoning program EQP at Argonne found the key proof, settling — together with earlier results — a problem that had resisted mathematicians for decades.

*Mathematics · EQP*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (Reference) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (News)

#### 1997-05-11｜Can a computer beat the world chess champion in a match?

IBM's Deep Blue beat Garry Kasparov 3½–2½, the first match victory by a computer over a reigning world champion under standard time controls.

*Games · Deep Blue*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov) (Reference)

#### 1997-08｜Can an Othello program beat the human world champion?

Michael Buro's Logistello beat Othello world champion Takeshi Murakami 6–0.

*Games · Logistello*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Logistello) (Reference)

#### 1998｜Can one end-to-end trained neural network recognise documents and handwriting?

LeCun et al.'s LeNet-5 excelled at handwritten digits and was used to read bank cheques, setting the template for convolutional networks.

*Perception & language · LeNet-5*　Sources：[Proc. IEEE 1998](https://doi.org/10.1109/5.726791) (Paper)

#### 1999-05｜Can a spacecraft plan its own operations and handle faults without ground control?

NASA's Remote Agent autonomously controlled the Deep Space 1 probe for several days, diagnosing and handling simulated faults on its own.

*Robotics & autonomy · Remote Agent*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Deep_Space_1) (Reference)

## 2000s

#### 2005-10-08｜Can a driverless car cross 200+ km of desert on its own?

Stanford's Stanley drove about 212 km autonomously to win the DARPA Grand Challenge; a year earlier no vehicle had finished.

*Robotics & autonomy · Stanley*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Stanley_(vehicle)) (Reference)

#### 2006-03-22｜Can a computer-evolved antenna be good enough to fly in space?

An X-band antenna designed by NASA's evolutionary algorithm — oddly shaped but meeting mission specs — flew on the ST5 spacecraft, the first computer-evolved hardware in space.

*Algorithms & software · Evolutionary algorithm (NASA Ames)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Evolved_antenna) (Reference)

#### 2006-07-28｜Can very deep neural networks be trained effectively?

Hinton and Salakhutdinov trained deep autoencoders with layer-wise pre-training, beating PCA at dimensionality reduction — a starting point of the deep-learning revival.

*Perception & language · Deep belief nets / deep autoencoders*　Sources：[Science 2006](https://doi.org/10.1126/science.1127647) (Paper)

#### 2007-07-19｜What is the outcome of checkers under perfect play?

After 18 years of computation, Schaeffer's team proved that checkers is a draw with perfect play by both sides.

*Games · Chinook*　Sources：[Science 2007](https://doi.org/10.1126/science.1144079) (Paper)

#### 2007-11-03｜Can driverless cars handle city streets with traffic and traffic rules?

In the DARPA Urban Challenge, Carnegie Mellon's Boss obeyed traffic rules and interacted with other vehicles in a mock city to win.

*Robotics & autonomy · Boss (Tartan Racing)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2007)) (Reference)

#### 2009-04-03｜Can a machine form hypotheses, run experiments and make a new scientific discovery by itself?

The 'robot scientist' Adam autonomously hypothesised and experimentally confirmed genes encoding several orphan enzymes in yeast.

*Biology · Adam*　Sources：[Science 2009](https://doi.org/10.1126/science.1165620) (Paper)

#### 2009-04-03｜Given only motion data, can a machine find the physical law that describes it?

Schmidt and Lipson used symbolic regression to recover conservation laws such as energy from experimental data on pendulums and oscillators.

> **Limits：** Rediscovery of known laws, not new physics.

*Physics · Eureqa (symbolic regression)*　Sources：[Science 2009](https://doi.org/10.1126/science.1165893) (Paper)

## 2010s

#### 2011-02-16｜Can a machine answer pun-laden natural-language questions faster and better than people?

IBM Watson defeated the two greatest human champions on the quiz show Jeopardy!.

*Perception & language · IBM Watson*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/IBM_Watson) (Reference)

#### 2012-09｜Can a machine recognise photos across a thousand everyday object categories?

AlexNet cut ImageNet top-5 error to about 15%, more than 10 points ahead of the runner-up, launching the deep-learning era.

*Perception & language · AlexNet*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/AlexNet) (Reference)

#### 2013-12-19｜Can one program learn dozens of different video games from screen pixels alone?

DeepMind's DQN, seeing only pixels and score, reached or exceeded professional human tester level on about half of 49 Atari games.

*Games · DQN*　Sources：[arXiv](https://arxiv.org/abs/1312.5602) (Paper) · [Nature 2015](https://doi.org/10.1038/nature14236) (Paper)

#### 2014｜Can machines tell whether two photos show the same person as well as humans can?

Facebook's DeepFace reached about 97.35% on the LFW face-verification benchmark, close to the human 97.53%.

*Perception & language · DeepFace*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/DeepFace) (Reference)

#### 2014-08｜Can the proof of the Kepler conjecture on sphere packing be checked completely by computer?

Thomas Hales's Flyspeck project completed a formal verification of the proof of the Kepler conjecture in HOL Light and Isabelle.

> **Limits：** Verifies an existing human proof; not a new result.

*Mathematics · HOL Light and Isabelle (Flyspeck)*　Sources：[Forum Math. Pi 2017](https://doi.org/10.1017/fmp.2017.1) (Paper)

#### 2015-01-09｜Is there an essentially unbeatable strategy for heads-up limit hold'em?

Alberta's Cepheus computed a near-optimal strategy for heads-up limit Texas hold'em, declaring the game 'essentially weakly solved'.

*Games · Cepheus*　Sources：[Science 2015](https://doi.org/10.1126/science.1259433) (Paper)

#### 2015-09-09｜How do you design an experiment that produces complex high-dimensional entangled quantum states?

Krenn et al.'s program MELVIN automatically searched optical setups and found designs humans had not thought of; some were later built in the lab.

*Physics · MELVIN*　Sources：[arXiv](https://arxiv.org/abs/1509.02749) (Paper) · [PRL 2016](https://doi.org/10.1103/PhysRevLett.116.090405) (Paper)

#### 2015-12-10｜Can machines classify images more accurately than people?

Microsoft Research Asia's ResNet reached about 3.6% ImageNet error, below the often-cited ~5% human figure; its residual design became a foundation of deep networks.

> **Limits：** The 'human level' figure is an estimate from a few annotators.

*Perception & language · ResNet*　Sources：[arXiv](https://arxiv.org/abs/1512.03385) (Paper)

#### 2016-03-15｜Can a machine beat a top professional at Go, long thought a decade away?

DeepMind's AlphaGo beat Lee Sedol 4–1; its 'Move 37' in game 2 made professionals rethink the game.

*Games · AlphaGo*　Sources：[Nature 2016](https://doi.org/10.1038/nature16961) (Paper) · [Wikipedia](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol) (Reference)

#### 2016-05｜Can the positive integers be 2-coloured so that no Pythagorean triple is monochromatic?

Heule and colleagues used a SAT solver to prove the answer is no: it works up to 7824 but becomes impossible at 7825. The proof is 200 TB.

> **Limits：** Automated reasoning plus massive computation, not learning-based AI.

*Mathematics · SAT solver*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (Reference) · [arXiv](https://arxiv.org/abs/1605.00723) (Paper)

#### 2016-06-07｜Can quantum many-body states, whose size grows exponentially, be represented and computed more efficiently?

Carleo and Troyer represented wavefunctions with neural networks and obtained high-accuracy ground states and dynamics for several 1D and 2D spin models.

> **Limits：** Specific models, not a general solution of the many-body problem.

*Physics · Neural-network quantum states*　Sources：[arXiv](https://arxiv.org/abs/1606.02318) (Paper) · [Science 2017](https://doi.org/10.1126/science.aag2302) (Paper)

#### 2016-09-26｜Can machine translation approach human quality?

Google's neural machine translation system cut translation errors by about 60% on several language pairs and soon replaced Google Translate's old system.

*Perception & language · Google Neural Machine Translation*　Sources：[arXiv](https://arxiv.org/abs/1609.08144) (Paper)

#### 2016-10-17｜Can machines transcribe conversational speech as well as professional transcribers?

Microsoft reported its speech recognizer matched professional human transcribers' word error rate on the Switchboard conversational benchmark.

*Perception & language · Microsoft speech recognition*　Sources：[arXiv](https://arxiv.org/abs/1610.05256) (Paper)

#### 2016-11-29｜Can AI detect diabetic eye disease from retinal photos as well as ophthalmologists?

Google's deep learning model detected referable diabetic retinopathy with sensitivity and specificity comparable to ophthalmologists.

*Medicine · Deep learning (Google)*　Sources：[JAMA 2016](https://doi.org/10.1001/jama.2016.17216) (Paper)

#### 2017｜How far can the integers be 5-coloured with no monochromatic a + b = c? (the fifth Schur number)

Marijn Heule used a SAT solver to prove the fifth Schur number is 160: 5-colouring works up to 160 and is impossible at 161. The proof file is about 2 petabytes.

> **Limits：** Automated reasoning plus massive computation, not learning-based AI.

*Mathematics · SAT solver (Heule)*　Sources：[arXiv](https://arxiv.org/abs/1711.08076) (Paper)

#### 2017-01-25｜Can AI classify skin cancer from photos as well as dermatologists?

A Stanford-trained convolutional network matched 21 board-certified dermatologists at distinguishing malignant skin lesions such as melanoma.

*Medicine · Deep CNN (Stanford)*　Sources：[Nature 2017](https://doi.org/10.1038/nature21056) (Paper)

#### 2017-01-30｜Can a machine beat professionals at poker, with hidden cards and bluffing?

Carnegie Mellon's Libratus decisively beat four top professionals over 120,000 hands of heads-up no-limit Texas hold'em.

*Games · Libratus*　Sources：[Science 2018](https://doi.org/10.1126/science.aao1733) (Paper)

#### 2017-02｜Can a neural network identify phases of matter without hand-picked order parameters?

Carrasquilla and Melko trained neural networks to tell ordered from disordered phases directly from spin configurations and to locate the phase transition.

*Physics · Neural networks (Carrasquilla & Melko)*　Sources：[Nature Physics 2017](https://doi.org/10.1038/nphys4035) (Paper)

#### 2017-03-02｜Can AI beat professionals at no-limit poker?

Alberta's DeepStack used deep learning as 'intuition' and beat professional players at heads-up no-limit hold'em.

*Games · DeepStack*　Sources：[Science 2017](https://doi.org/10.1126/science.aam6960) (Paper)

#### 2017-10-19｜Without any human games, can a program from scratch surpass the best Go AI?

AlphaGo Zero trained by self-play alone for three days and beat the version that defeated Lee Sedol 100–0.

*Games · AlphaGo Zero*　Sources：[Nature 2017](https://doi.org/10.1038/nature24270) (Paper)

#### 2017-11｜Can AI detect pneumonia on chest X-rays as well as radiologists?

Stanford's CheXNet outperformed the average of the radiologists it was compared with at detecting pneumonia in one test.

> **Limits：** A retrospective dataset comparison, not a clinical trial.

*Medicine · CheXNet (Stanford)*　Sources：[arXiv](https://arxiv.org/abs/1711.05225) (Paper)

#### 2017-12-12｜Can AI find breast-cancer metastases in lymph-node pathology slides?

In the Camelyon16 challenge, several deep-learning algorithms detected lymph-node metastases better than a panel of pathologists reading under time constraints.

*Medicine · Deep learning (Camelyon16)*　Sources：[JAMA 2017](https://doi.org/10.1001/jama.2017.14585) (Paper)

#### 2017-12-14｜Are there undiscovered planets hiding in existing telescope data?

A neural network found the previously missed planet Kepler-90i in Kepler data, making Kepler-90 the first system known to tie our Solar System with eight planets.

*Astronomy · Google neural network + NASA Kepler data*　Sources：[NASA](https://www.nasa.gov/news-release/artificial-intelligence-nasa-data-used-to-discover-eighth-planet-circling-distant-star/) (Official)

#### 2018-03-28｜Given a target molecule, can AI plan a viable chemical synthesis route?

Segler et al. combined neural networks with Monte Carlo tree search for retrosynthesis; in double-blind tests chemists rated the AI routes as good as literature routes.

*Chemistry · 3N-MCTS*　Sources：[Nature 2018](https://doi.org/10.1038/nature25978) (Paper)

#### 2018-04-11｜Can AI diagnose a disease without a physician interpreting the result?

The US FDA authorised IDx-DR, the first device cleared to give a screening result using AI without a clinician interpreting the image, for diabetic retinopathy.

*Medicine · IDx-DR*　Sources：[US FDA](https://www.fda.gov/news-events/press-announcements/fda-permits-marketing-artificial-intelligence-based-device-detect-certain-diabetes-related-eye) (Official)

#### 2018-12｜Can AI clearly lead traditional methods at the CASP13 protein-structure prediction contest?

DeepMind's first AlphaFold won CASP13 with clearly higher accuracy than other entries, paving the way for AlphaFold 2 two years later.

*Biology · AlphaFold (first version)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/AlphaFold) (Reference)

#### 2018-12-07｜Knowing only the rules and no human games, can a machine master chess, shogi and Go from scratch?

Through self-play alone, AlphaZero defeated the strongest specialised programs in all three games.

*Games · AlphaZero*　Sources：[Science 2018](https://doi.org/10.1126/science.aar6404) (Paper)

#### 2019-04-13｜Can AI beat the world champions at a complex team e-sport requiring long-term planning?

OpenAI Five beat reigning Dota 2 world champions OG 2–0.

*Games · OpenAI Five*　Sources：[arXiv](https://arxiv.org/abs/1912.06680) (Paper)

#### 2019-05-20｜Can AI read low-dose CT scans better than radiologists to detect lung cancer?

Google's model outperformed six radiologists on lung-cancer screening CT, particularly when prior scans were available.

> **Limits：** Retrospective; clinical impact needs prospective validation.

*Medicine · Deep learning (Google)*　Sources：[Nature Medicine 2019](https://doi.org/10.1038/s41591-019-0447-x) (Paper)

#### 2019-07-03｜By reading only the text of papers, can AI predict good thermoelectric materials in advance?

Berkeley Lab trained word embeddings on 3.3 million materials abstracts; in historical back-tests the model 'recommended' thermoelectric materials years before they were reported.

*Materials · Word embeddings (Berkeley Lab)*　Sources：[Nature 2019](https://doi.org/10.1038/s41586-019-1335-8) (Paper)

#### 2019-07-11｜Can a machine win at six-player poker?

Pluribus beat elite professionals at six-player no-limit hold'em, the first superhuman result in a major multiplayer game.

*Games · Pluribus*　Sources：[Science 2019](https://doi.org/10.1126/science.aay2400) (Paper)

#### 2019-09-02｜Can AI design active new drug molecules in weeks?

Insilico Medicine's generative model designed DDR1 kinase inhibitors in 21 days; the lead compound was active in cell and mouse experiments.

> **Limits：** Early preclinical result.

*Medicine · GENTRL (Insilico Medicine)*　Sources：[Nature Biotech 2019](https://doi.org/10.1038/s41587-019-0224-x) (Paper)

#### 2019-10｜Tiling 7-dimensional space with unit cubes, must two cubes always share a full face? (Keller's conjecture in dimension 7)

Brakensiek, Heule and colleagues used a SAT solver to prove Keller's conjecture holds in dimension 7, closing the last open low dimension.

> **Limits：** Automated reasoning plus heavy computation, not learning-based AI.

*Mathematics · SAT solver*　Sources：[arXiv](https://arxiv.org/abs/1910.03740) (Paper)

#### 2019-10-15｜Can a robot hand be dexterous enough to solve a Rubik's Cube one-handed?

OpenAI's robot hand, trained in simulation, manipulated and solved a Rubik's Cube one-handed in the real world.

> **Limits：** The solution sequence came from a classical solver; AI handled manipulation, with limited success rate.

*Robotics & autonomy · Dactyl (OpenAI)*　Sources：[arXiv](https://arxiv.org/abs/1910.07113) (Paper)

#### 2019-10-30｜Can AI reach top human level in StarCraft II, with hidden information and real-time control?

AlphaStar reached Grandmaster on the official ladder with all three races, above 99.8% of active players.

*Games · AlphaStar*　Sources：[Nature 2019](https://doi.org/10.1038/s41586-019-1724-z) (Paper)

## 2020-2023

#### 2020-01｜Can a neural network discover a physical concept such as heliocentrism from observations alone?

Iten et al.'s SciNet learned a sun-centred representation from planetary sky positions and found the minimal number of variables needed to describe the system.

> **Limits：** Rediscovery of known concepts in simple systems.

*Physics · SciNet*　Sources：[PRL 2020](https://doi.org/10.1103/PhysRevLett.124.010508) (Paper)

#### 2020-01-01｜Can AI read mammograms with fewer misses and false alarms than radiologists?

On UK and US data the model reduced both false positives and false negatives relative to radiologists, and could stand in for the second reader in UK double reading.

*Medicine · Google Health*　Sources：[Nature 2020](https://doi.org/10.1038/s41586-019-1799-6) (Paper)

#### 2020-02-20｜Can we find structurally novel antibiotic candidates among existing compounds?

An MIT team used deep learning to screen over 100 million molecules and identified halicin, which killed many drug-resistant bacteria in the lab and in mice.

> **Limits：** A drug candidate, not an approved medicine.

*Medicine · Deep learning (MIT)*　Sources：[Cell 2020](https://doi.org/10.1016/j.cell.2020.01.021) (Paper) · [Broad Institute](https://www.broadinstitute.org/publications/broad627466) (Official)

#### 2020-04-15｜Can symbolic regression rediscover 100 equations from the Feynman Lectures on Physics from data?

Udrescu and Tegmark's AI Feynman combined neural networks with physics-inspired simplification and rediscovered all 100 test equations, versus 71 for the previous best method.

> **Limits：** Rediscovery of known equations.

*Physics · AI Feynman*　Sources：[Science Advances 2020](https://doi.org/10.1126/sciadv.aay2631) (Paper)

#### 2020-07-08｜Can a robot chemist move around a lab, run experiments, and find a better catalyst on its own?

Liverpool's mobile robot autonomously ran 688 experiments over 8 days and found a photocatalyst mixture about six times more active than the starting formulation.

*Chemistry · Mobile robotic chemist (Liverpool)*　Sources：[Nature 2020](https://doi.org/10.1038/s41586-020-2442-2) (Paper)

#### 2020-09｜Can we compute the electronic structure of atoms and molecules more accurately from first principles?

DeepMind's FermiNet represented many-electron wavefunctions with a neural network, reaching near chemical accuracy on several small molecules.

*Physics · FermiNet*　Sources：[Phys. Rev. Research 2020](https://doi.org/10.1103/PhysRevResearch.2.033429) (Paper)

#### 2020-10-08｜Can driverless taxis with no safety driver serve the public?

Waymo opened fully driverless ride-hailing to the public in the Phoenix area, Arizona.

> **Limits：** Limited service area and conditions at first; expanded to other cities later.

*Robotics & autonomy · Waymo Driver*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Waymo) (Reference)

#### 2020-11-30｜From its amino-acid sequence alone, can we predict a protein's 3D structure? (the 50-year protein-folding problem)

At CASP14, AlphaFold 2 reached accuracy competitive with experimental methods; predicted structures for over 200 million proteins were later released.

> **Limits：** Solves structure prediction; folding dynamics and interactions remain open research.

*Biology · AlphaFold 2*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-03819-2) (Paper)

#### 2020-12-02｜Can stratospheric balloons navigate the winds by themselves to stay on station?

Loon's reinforcement-learning controller, tested for 39 days over the equator, kept balloons near their target better than the hand-designed controller.

*Robotics & autonomy · Deep RL (Loon)*　Sources：[Nature 2020](https://doi.org/10.1038/s41586-020-2939-8) (Paper)

#### 2020-12-23｜Can AI master games without even being told the rules?

MuZero learned its own model of the environment, matching AlphaZero at Go, chess and shogi and setting new records on Atari.

*Games · MuZero*　Sources：[Nature 2020](https://doi.org/10.1038/s41586-020-03051-4) (Paper)

#### 2021-02-03｜Can a computer automatically discover new formulas for fundamental constants like π and e?

Technion's Ramanujan Machine generated dozens of new continued-fraction conjectures for fundamental constants, some later proven.

*Mathematics · Ramanujan Machine*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-03229-4) (Paper)

#### 2021-04-29｜Can a machine construct counterexamples that refute conjectures in graph theory and combinatorics?

Adam Zsolt Wagner used reinforcement learning to construct graphs and matrices, finding counterexamples to several published conjectures.

*Mathematics · Cross-entropy RL*　Sources：[arXiv](https://arxiv.org/abs/2104.14516) (Paper)

#### 2021-06-09｜Can AI lay out a chip in hours instead of engineers' weeks?

Google reported its RL method produced chip floorplans comparable or superior to human experts in under 6 hours, and used it in TPU design.

> **Limits：** Its effectiveness and reproducibility have been disputed by other researchers.

*Algorithms & software · Deep RL (Google)*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-03544-w) (Paper)

#### 2021-07-15｜Can accurate protein-structure prediction be open to everyone and extend to complexes?

The Baker lab's open RoseTTAFold reached accuracy approaching AlphaFold 2 and could model protein complexes.

*Biology · RoseTTAFold*　Sources：[Science 2021](https://doi.org/10.1126/science.abj8754) (Paper)

#### 2021-09-29｜Where will it rain in the next hour or two, and how hard?

A generative model built by DeepMind with the UK Met Office for short-term rain forecasts was preferred by 89% of 56 Met Office forecasters in blind evaluation.

*Earth & climate · DGMR*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-03854-z) (Paper)

#### 2021-11｜How many of the Kepler telescope's planet candidates are real planets?

NASA's deep-learning classifier ExoMiner validated 301 new exoplanets and can explain the basis of its decisions.

*Astronomy · ExoMiner*　Sources：[arXiv](https://arxiv.org/abs/2111.10009) (Paper)

#### 2021-12-01｜Are there undiscovered links between the geometric and algebraic invariants of knots?

Machine learning pointed mathematicians to a new relation in knot theory and progress on a representation-theory conjecture, which they then proved rigorously.

*Mathematics · DeepMind + mathematicians*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-04086-x) (Paper)

#### 2021-12-09｜Can density functional theory's systematic errors with fractional electrons be fixed?

DeepMind's neural-network functional DM21 correctly handled fractional charge and spin, long-standing failure cases of conventional functionals.

*Chemistry · DM21*　Sources：[Science 2021](https://doi.org/10.1126/science.abj6511) (Paper)

#### 2022-02-09｜Can AI out-race champion drivers in a racing simulator while respecting racing etiquette?

Sony's GT Sophy beat the world's best Gran Turismo drivers in head-to-head races while following sportsmanship rules.

*Games · GT Sophy*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-021-04357-7) (Paper)

#### 2022-02-16｜How do you coordinate dozens of coils to shape hot plasma inside a tokamak?

A reinforcement-learning controller shaped a variety of plasma configurations on the real TCV tokamak in Switzerland.

*Physics · Deep RL (DeepMind + EPFL)*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-021-04301-9) (Paper)

#### 2022-03-09｜Can damaged ancient Greek inscriptions be restored, dated and located?

DeepMind's Ithaca restored text with 62% accuracy, and raised historians' accuracy from 25% to 72% when they worked with it.

*Perception & language · Ithaca*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-022-04448-z) (Paper)

#### 2022-04-27｜Can we engineer an enzyme that breaks down plastic bottles in days at mild temperatures?

UT Austin used machine learning to guide mutations, producing FAST-PETase, which largely depolymerised various PET products within a week.

*Biology · MutCompute*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-022-04599-z) (Paper)

#### 2022-07｜Can machine translation cover 200 languages, including low-resource ones?

Meta's NLLB-200 translates among 200 languages and clearly beat previous systems on many low-resource languages.

*Perception & language · NLLB-200 (Meta)*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-07335-x) (Paper)

#### 2022-07-28｜Can the 3D structures of nearly all known proteins be had at once?

DeepMind and EMBL-EBI expanded the AlphaFold database to over 200 million protein structures, free to everyone.

*Biology · AlphaFold DB*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/alphafold-reveals-the-structure-of-the-protein-universe/) (Official)

#### 2022-09-15｜Given a desired protein shape, can we design a sequence that folds into it?

ProteinMPNN designed sequences with far higher success than prior methods, with many designs validated experimentally.

*Biology · ProteinMPNN*　Sources：[Science 2022](https://doi.org/10.1126/science.add2187) (Paper)

#### 2022-10-05｜Can matrix multiplication be done with fewer operations?

AlphaTensor found an algorithm for 4×4 matrices over arithmetic mod 2 using 47 multiplications, beating Strassen's 50-year-old record in that setting.

> **Limits：** This improvement holds only for arithmetic mod 2.

*Algorithms & software · AlphaTensor*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-022-05172-4) (Paper)

#### 2022-11-22｜Can AI negotiate, ally and persuade well enough to win at Diplomacy with humans?

Meta's Cicero negotiated in natural language in online Diplomacy, scoring more than double the average human and ranking in the top 10%.

*Games · Cicero*　Sources：[Science 2022](https://doi.org/10.1126/science.ade9097) (Paper)

#### 2022-12｜Can AI pass medical licensing exam questions?

Google's Med-PaLM scored 67.6% on USMLE-style questions, the first model to clear the ~60% pass mark.

> **Limits：** Exam questions, not clinical practice.

*Medicine · Med-PaLM*　Sources：[arXiv](https://arxiv.org/abs/2212.13138) (Paper) · [Nature 2023](https://doi.org/10.1038/s41586-023-06291-2) (Paper)

#### 2022-12-01｜Can AI reach expert level at Stratego, a game of heavily hidden information?

DeepNash reached an all-time top-3 ranking on the Gravon platform with about an 84% win rate.

*Games · DeepNash*　Sources：[Science 2022](https://doi.org/10.1126/science.add4679) (Paper)

#### 2022-12-08｜Can AI solve competitive programming problems that require understanding and algorithm design?

AlphaCode ranked around the top 54% of participants in simulated Codeforces contests — median human competitor level.

*Algorithms & software · AlphaCode*　Sources：[Science 2022](https://doi.org/10.1126/science.abq1158) (Paper)

#### 2023-03-14｜Can AI pass the bar exam?

OpenAI reported GPT-4 scored in roughly the top 10% of test-takers on a simulated Uniform Bar Exam, whereas the previous model was near the bottom 10%.

> **Limits：** Later analysis argued the percentile was overstated.

*Perception & language · GPT-4*　Sources：[arXiv](https://arxiv.org/abs/2303.08774) (Paper)

#### 2023-03-16｜What do hundreds of millions of never-studied microbial proteins look like?

Meta's protein language model ESMFold predicted structures for over 600 million metagenomic proteins, many unlike any known protein.

*Biology · ESMFold*　Sources：[Science 2023](https://doi.org/10.1126/science.ade2574) (Paper)

#### 2023-05-25｜Can we find a new antibiotic against Acinetobacter baumannii, a WHO critical-priority pathogen?

Researchers used deep learning to identify abaucin, a narrow-spectrum compound active against A. baumannii in a mouse wound model.

> **Limits：** A drug candidate, not an approved medicine.

*Medicine · Deep learning (McMaster/MIT)*　Sources：[Nature Chem. Bio. 2023](https://doi.org/10.1038/s41589-023-01349-8) (Paper)

#### 2023-06-07｜Can decades-optimised basic sorting routines get any faster?

AlphaDev discovered faster assembly routines for sorting short sequences; they were merged into LLVM's C++ standard library.

*Algorithms & software · AlphaDev*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06004-9) (Paper)

#### 2023-07-05｜Can AI beat traditional numerical models at medium-range weather forecasting?

Huawei's Pangu-Weather outperformed ECMWF's operational system on several medium-range metrics while running over 10,000 times faster.

*Earth & climate · Pangu-Weather (Huawei)*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06185-3) (Paper)

#### 2023-07-11｜Can we design brand-new proteins from scratch that bind a chosen target?

The Baker lab's RFdiffusion used diffusion models to design new proteins; many binders, symmetric assemblies and enzyme scaffolds were validated experimentally.

*Biology · RFdiffusion*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06415-8) (Paper)

#### 2023-08-01｜Can AI-supported breast screening cut radiologists' reading load without missing cancers?

Interim results of Sweden's randomised MASAI trial showed AI-supported screening detected cancers at least as well as standard double reading while cutting screen-reading workload by about 44%.

> **Limits：** Interim results; longer-term outcomes such as interval cancers need follow-up.

*Medicine · AI-supported mammography screening (MASAI)*　Sources：[Lancet Oncology 2023](https://doi.org/10.1016/S1470-2045(23)00298-X) (Paper)

#### 2023-08-30｜Can an autonomous drone beat human world-champion pilots in a race?

The University of Zurich's Swift, trained with deep reinforcement learning, beat several world-champion human drone pilots on a real race track.

> **Limits：** On a specific, controlled indoor track.

*Robotics & autonomy · Swift*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06419-4) (Paper)

#### 2023-09-19｜Which single-letter mutations in human genes cause disease?

AlphaMissense classified 89% of 71 million possible missense variants as likely pathogenic or benign, versus about 0.1% confirmed by experts before.

> **Limits：** Predictions; clinical use needs other evidence.

*Biology · AlphaMissense*　Sources：[Science 2023](https://doi.org/10.1126/science.adg7492) (Paper)

#### 2023-10-12｜Can carbonised scrolls from Vesuvius be read without unrolling them?

Contestants used machine learning on CT scans to detect ink and read the first word, 'purple'; by February 2024 a team had read over 2,000 characters.

*Perception & language · Machine learning (Vesuvius Challenge)*　Sources：[Vesuvius Challenge](https://scrollprize.org/grandprize) (Official)

#### 2023-11｜Can we find an oxygen-producing catalyst made from Martian meteorite materials?

USTC's robotic AI chemist automatically synthesised, tested and optimised candidates from millions of possible recipes, finding an effective oxygen-evolution catalyst.

> **Limits：** Done in an Earth lab, not on Mars.

*Chemistry · Robotic AI chemist (USTC)*　Sources：[Nature Synthesis 2023](https://doi.org/10.1038/s44160-023-00424-1) (Paper)

#### 2023-11-14｜Can AI forecast the weather better than traditional numerical models?

GraphCast's 10-day global forecasts beat ECMWF's high-resolution operational system on about 90% of verification targets, running in under a minute on one machine.

*Earth & climate · GraphCast*　Sources：[Science 2023](https://doi.org/10.1126/science.adi2336) (Paper)

#### 2023-11-29｜Can an autonomous lab actually make materials that computation predicts?

Berkeley Lab's A-Lab autonomously synthesised 41 of 58 target materials in 17 days.

> **Limits：** Some materials scientists argued several phase identifications were wrong and the success rate overstated.

*Materials · A-Lab (Berkeley Lab)*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06734-w) (Paper)

#### 2023-11-29｜How many stable inorganic crystals remain undiscovered?

GNoME predicted 2.2 million new crystals, about 380,000 of them deemed stable; an autonomous lab synthesised some of them.

> **Limits：** Some materials scientists have questioned the count and novelty of the 'new materials'.

*Materials · GNoME*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06735-9) (Paper)

#### 2023-12-14｜How large can a cap set — a set with no three points on a line — be made?

FunSearch had an LLM write programs that were automatically scored and evolved, finding larger cap sets in dimension 8 and improving an asymptotic lower bound.

> **Limits：** Improves constructions and lower bounds; the maximum is not determined.

*Mathematics · FunSearch*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (Paper)

#### 2023-12-20｜Can an LLM agent search, write code and operate lab equipment to run real chemistry?

Carnegie Mellon's Coscientist autonomously planned and executed reactions such as palladium-catalysed cross-couplings and optimised their conditions.

*Chemistry · Coscientist*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06792-0) (Paper)

#### 2023-12-20｜Can we find a whole new structural class of antibiotics against MRSA?

An MIT team screened 12 million compounds with explainable deep learning and found a new structural class of antibiotics effective against MRSA in mice.

> **Limits：** Preclinical.

*Medicine · Explainable deep learning (MIT)*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06887-8) (Paper)

## 2024

#### 2024-01-17｜Can a machine come up with the auxiliary constructions olympiad geometry needs?

AlphaGeometry solved 25 of 30 olympiad geometry problems, approaching the average IMO gold medallist.

*Mathematics · AlphaGeometry*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (Paper)

#### 2024-02-21｜Can tearing instabilities in fusion plasmas be predicted and avoided in advance?

A Princeton AI controller predicted tearing instabilities about 300 ms ahead on the DIII-D tokamak and adjusted in real time to keep the plasma at high performance.

*Physics · Deep RL (Princeton/DIII-D)*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-07024-9) (Paper)

#### 2024-05-08｜What do proteins look like when bound to DNA, RNA and drug molecules?

AlphaFold 3 extended structure prediction to complexes of nearly all biomolecules, clearly beating classical docking on protein–ligand interactions.

*Biology · AlphaFold 3*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-07487-w) (Paper)

#### 2024-07-25｜Can AI earn a medal across a full International Mathematical Olympiad?

DeepMind's systems solved 4 of 6 IMO 2024 problems — silver-medal standard — with proofs written in the Lean formal language.

> **Limits：** Problems were manually formalised; some took far longer than contest time.

*Mathematics · AlphaProof + AlphaGeometry 2*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (Official)

#### 2024-08-07｜Can a robot play table tennis at amateur human level?

DeepMind's robot beat all beginners and about half of intermediate players in matches, but no advanced players.

*Robotics & autonomy · Google DeepMind table-tennis robot*　Sources：[arXiv](https://arxiv.org/abs/2408.03906) (Paper)

#### 2024-10-08｜Do the foundations of machine learning count as Nobel-level physics?

The 2024 Nobel Prize in Physics went to John Hopfield and Geoffrey Hinton 'for foundational discoveries and inventions that enable machine learning with artificial neural networks'.

*Algorithms & software · Hopfield networks / Boltzmann machines*　Sources：[Nobel Prize](https://www.nobelprize.org/prizes/physics/2024/press-release/) (Official)

#### 2024-10-09｜Does AI protein-structure work count as Nobel-level science?

The 2024 Nobel Prize in Chemistry went half to Hassabis and Jumper (AlphaFold) and half to David Baker (computational protein design).

*Biology · AlphaFold / protein design*　Sources：[Nobel Prize](https://www.nobelprize.org/prizes/chemistry/2024/press-release/) (Official)

#### 2024-11-01｜Can AI find previously unknown security vulnerabilities in real software on its own?

Google's Big Sleep agent found a previously unknown exploitable stack buffer underflow in the widely used SQLite database before release; it was fixed the same day.

*Algorithms & software · Big Sleep (Google)*　Sources：[Google Project Zero](https://googleprojectzero.blogspot.com/2024/10/from-naptime-to-big-sleep.html) (Official)

#### 2024-11-20｜Can the errors that constantly arise in quantum computers be identified and corrected more accurately?

DeepMind's AlphaQubit decoded surface-code errors with a neural network and had lower error rates than the best earlier decoders on real data from Google's Sycamore processor.

> **Limits：** Not yet fast enough for real-time correction.

*Physics · AlphaQubit*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-08148-8) (Paper)

#### 2024-12-04｜Can weather forecasts give more reliable probabilities, such as cyclone-track uncertainty?

GenCast's 15-day ensemble forecasts beat ECMWF's ensemble system on 97% of evaluated targets.

*Earth & climate · GenCast*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-08252-9) (Paper)

## 2025

#### 2025-01-16｜Can AI 'simulate' hundreds of millions of years of evolution to design a functional protein nature lacks?

EvolutionaryScale's ESM3 designed a new green fluorescent protein, esmGFP, whose sequence is far from known fluorescent proteins; experiments confirmed it fluoresces.

*Biology · ESM3*　Sources：[Science 2025](https://doi.org/10.1126/science.ads0018) (Paper)

#### 2025-01-16｜Can AI directly design stable new materials with specified properties?

Microsoft's generative model MatterGen produced inorganic materials to target properties; one was synthesised and its measured bulk modulus came within 20% of the design target.

> **Limits：** Only a handful of materials were synthesised.

*Materials · MatterGen (Microsoft)*　Sources：[Microsoft Research](https://www.microsoft.com/en-us/research/publication/a-generative-model-for-inorganic-materials-design/) (Official) · [Microsoft blog](https://microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai) (Official)

#### 2025-02-19｜Can AI propose a scientific hypothesis that scientists had found but not yet published?

Google says its AI co-scientist independently proposed a hypothesis on a bacterial gene-transfer mechanism that matched Imperial College's unpublished experimental finding.

> **Limits：** Company claim; related published literature may have informed the system.

*Biology · AI co-scientist (Google)*　Sources：[arXiv](https://arxiv.org/abs/2502.18864) (Paper)

#### 2025-03｜In a three-party Turing test, can AI be mistaken for a human?

In Jones and Bergen's experiment, GPT-4.5 prompted with a persona was judged to be the human about 73% of the time — more often than the real human.

> **Limits：** Whether the Turing test measures intelligence is disputed.

*Perception & language · GPT-4.5*　Sources：[arXiv](https://arxiv.org/abs/2503.23674) (Paper)

#### 2025-03-12｜Can a research paper written entirely by AI pass academic peer review?

Sakana AI reports that one of three papers generated by its AI Scientist received above-threshold reviews (average 6.33) at an ICLR 2025 workshop.

> **Limits：** A workshop, with a lower bar than the main conference; humans chose which papers to submit, the paper was withdrawn after review by design, and the authors' own review judged none main-track quality.

*Algorithms & software · The AI Scientist-v2 (Sakana AI)*　Sources：[Sakana AI](https://sakana.ai/ai-scientist-first-publication/) (Official)

#### 2025-05-14｜Can two 4×4 complex matrices be multiplied with one fewer multiplication? How many spheres can touch one sphere in 11 dimensions?

AlphaEvolve found a 48-multiplication algorithm for 4×4 complex matrices (previously 49) and a 593-sphere kissing configuration in 11 dimensions, raising the known lower bound.

> **Limits：** 593 is a lower bound, not the proven maximum.

*Mathematics · AlphaEvolve*　Sources：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (Official) · [arXiv](https://arxiv.org/abs/2506.13131) (Paper)

#### 2025-05-20｜Can a multi-agent system propose and test a candidate treatment for an eye disease?

FutureHouse's Robin proposed that ripasudil, an approved glaucoma drug, could treat dry age-related macular degeneration, and designed and analysed supporting experiments.

> **Limits：** Cell-level evidence only; no clinical trial.

*Medicine · Robin (FutureHouse)*　Sources：[arXiv](https://arxiv.org/abs/2505.13400) (Paper)

#### 2025-05-21｜Can one model forecast weather, air quality, ocean waves and cyclone tracks together?

Microsoft's Aurora is an Earth-system foundation model that beat existing operational systems on air quality, ocean waves, tropical-cyclone tracks and more, at much lower compute cost.

*Earth & climate · Aurora (Microsoft)*　Sources：[Nature 2025](https://doi.org/10.1038/s41586-025-09005-y) (Paper) · [Microsoft](https://news.microsoft.com/source/features/ai/from-forecasting-storms-to-designing-molecules-how-new-ai-foundation-models-can-speed-up-scientific-discovery/) (Official)

#### 2025-06｜Does a drug whose target and molecule were both found by AI work in patients?

Insilico Medicine's rentosertib, a TNIK inhibitor whose target and molecule were found by AI, showed a trend toward better lung function than placebo at the top dose in a phase 2a trial in idiopathic pulmonary fibrosis.

> **Limits：** A small, short phase 2a trial; efficacy needs confirmation in larger trials.

*Medicine · Rentosertib (Insilico Medicine)*　Sources：[Drug Discovery Trends](https://www.drugdiscoverytrends.com/insilicos-ai-designed-rentosertib-shows-promise-in-first-phase-2a-trial-results/) (News) · [AJMC](https://www.ajmc.com/view/ai-derived-therapy-for-ipf-shows-potential-in-phase-2a-trial) (News)

#### 2025-07｜Can AI design a gene-editing tool that nature does not have?

Profluent used protein language models to design the CRISPR editor OpenCRISPR-1, whose sequence is far from natural proteins yet is active in human cells.

*Biology · OpenCRISPR-1 (Profluent)*　Sources：[Nature 2025](https://doi.org/10.1038/s41586-025-09298-z) (Paper)

#### 2025-07-21｜Working in natural language within contest time, can AI reach IMO gold?

Google DeepMind's Gemini Deep Think (officially graded by the IMO) and an OpenAI experimental model both reported solving 5 of 6 IMO 2025 problems, a gold-medal score.

> **Limits：** Competition problems have known answers; not the same as open research problems.

*Mathematics · Gemini Deep Think; OpenAI experimental model*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (Official) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (News)

#### 2025-08-08｜Can AI systems automatically find and fix vulnerabilities in open-source software?

In DARPA's AI Cyber Challenge final, systems found 54 of 63 planted vulnerabilities and patched 43; they also found 18 real vulnerabilities, with patches for 11.

> **Limits：** Competition scoring, not direct real-world performance; the real vulnerabilities are still in responsible disclosure.

*Algorithms & software · AIxCC finalists (Team Atlanta et al.)*　Sources：[DARPA](https://darpa.mil/news/2025/aixcc-results) (Official)

#### 2025-08-14｜Can AI design brand-new antibiotics from scratch rather than just screen existing molecules?

MIT's Collins lab used generative AI to design tens of millions of virtual compounds; two picked from them (NG1 against gonorrhoea, DN1 against MRSA) worked in mouse infection models.

> **Limits：** Preclinical.

*Medicine · Generative AI (Collins lab, MIT)*　Sources：[Broad Institute](https://www.broadinstitute.org/news/using-ai-researchers-design-new-compounds-kill-antibiotic-resistant-bacteria) (Official) · [BioPharmaTrend](https://www.biopharmatrend.com/news/generative-ai-designs-novel-antibiotics-against-mrsa-and-drug-resistant-gonorrhea-1349/) (News)

#### 2025-09｜On the ICPC World Finals problems, can AI beat the human teams?

OpenAI says its system solved all 12 problems; Google DeepMind's Gemini 2.5 Deep Think solved 10, including one no human team solved; the best human team solved 11.

> **Limits：** Company-reported results, stated to be under the same conditions as the students.

*Algorithms & software · OpenAI models; Gemini 2.5 Deep Think*　Sources：[The Decoder](https://the-decoder.com/openai-outperforms-humans-and-google-at-the-worlds-top-collegiate-programming-contest/) (News) · [TechRepublic](https://www.techrepublic.com/article/openai-deepmind-icpc-2025-results/) (News)

#### 2025-09-04｜Can the tiny jitters of mirrors in a gravitational-wave detector be controlled better?

DeepMind and LIGO used reinforcement learning to design a controller that sharply cut the noise introduced by mirror control, which should help detect more and more distant gravitational-wave events.

*Astronomy · Deep Loop Shaping (Google DeepMind + LIGO)*　Sources：[Google DeepMind](https://deepmind.google/blog/using-ai-to-perceive-the-universe-in-greater-depth/) (Official) · [LIGO](https://www.ligo.caltech.edu/news/ligo20250908) (Official)

#### 2025-09-17｜Can AI design whole viral genomes that are viable and infect bacteria?

Teams at the Arc Institute and Stanford used genomic language models to propose about 300 variant genomes of the phage phiX174; 16 replicated in E. coli and lysed their hosts.

> **Limits：** Preprint stage; training data excluded human-infecting viruses.

*Biology · Evo / Evo 2 (Arc Institute, Stanford)*　Sources：[BioPharmaTrend](https://www.biopharmatrend.com/news/stanfordarc-team-reports-ai-made-viruses-that-kill-bacteria-1383/) (News) · [Arc Institute](https://arcinstitute.org/news/hie-king-first-synthetic-phage) (Official)

#### 2025-09-18｜Can the elusive 'unstable singularities' of fluid equations be found?

Google DeepMind with Brown, NYU and Stanford used neural networks plus high-precision numerics to discover new families of unstable self-similar singularities in several fluid equations.

> **Limits：** High-precision numerical discoveries, not rigorous proofs, and not a Navier–Stokes solution.

*Mathematics · Physics-informed neural networks (Google DeepMind et al.)*　Sources：[Google DeepMind](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/) (Official) · [Physics World](https://physicsworld.com/a/neural-networks-discover-unstable-singularities-in-fluid-systems/) (News)

#### 2025-10-15｜Can AI propose a new cancer-immunity idea no one had thought of, and have it confirmed in the lab?

Google and Yale used a single-cell language model to screen over 4,000 drugs and predicted the CK2 inhibitor silmitasertib would boost antigen presentation in a specific immune context; in human cell models, combined with low-dose interferon it raised antigen presentation by about 50%.

> **Limits：** Cell models only, mechanism unexplained, far from the clinic.

*Medicine · C2S-Scale 27B (Google DeepMind + Yale)*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/how-a-gemma-model-helped-discover-a-new-potential-cancer-therapy-pathway/) (Official)

#### 2025-11｜Can reinforcement learning let AI find olympiad-level proofs inside a formal mathematical language?

DeepMind published AlphaProof's method in Nature: reinforcement learning inside Lean, the system behind its silver-medal-level proofs at IMO 2024.

*Mathematics · AlphaProof*　Sources：[Google Research](https://research.google/pubs/olympiad-level-formal-mathematical-reasoning-with-reinforcement-learning/) (Paper) · [Nature press release](https://www.natureasia.com/en/info/press-releases/detail/9147) (Official)

#### 2025-11｜Can an AI-scientist agent work for hours — reading papers, writing code, analysing data — and reach discoveries by itself?

Edison Scientific's Kosmos can run for about 12 hours at a time and reported discoveries across several fields; the publisher reports independent scientists judged about 79.4% of statements in its reports accurate.

> **Limits：** The publisher's own evaluation; roughly one in five statements was inaccurate.

*Other · Kosmos (Edison Scientific)*　Sources：[arXiv](https://arxiv.org/abs/2511.02824) (Paper) · [Edison Scientific](https://edisonscientific.com/articles/announcing-kosmos) (Official)

#### 2025-11-03｜What happens when AI is applied to dozens of math problems at once?

Terence Tao and collaborators applied AlphaEvolve to 67 problems in analysis, combinatorics and geometry, rediscovering best-known constructions in many and improving some.

*Mathematics · AlphaEvolve*　Sources：[arXiv](https://arxiv.org/abs/2511.02864) (Paper)

#### 2025-11-05｜Can AI design antibodies from scratch that bind a chosen target?

The Baker lab extended RFdiffusion to design new antibody fragments against chosen targets, with structural experiments confirming binding modes closely matching the designs.

> **Limits：** Initial designs had modest affinity and need further optimisation.

*Biology · RFdiffusion / RFantibody (Baker lab)*　Sources：[UW Institute for Protein Design](https://www.ipd.uw.edu/2025/11/rfantibody-in-nature) (Official) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/41193805/) (Paper)

#### 2025-11-20｜What is the answer to Erdős Problem #848, an extremal question in multiplicative number theory?

OpenAI reports GPT-5 supplied the key idea that researchers used to settle the problem.

> **Limits：** Publisher's report; see the paper for division of labour.

*Mathematics · GPT-5*　Sources：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (Official)

#### 2025-12-08｜Can Erdős Problem #1026 be settled?

Boris Alexeev, Stijn Cambie, Terence Tao and others worked with Harmonic's Aristotle to prove the main conjecture formally in Lean; Tao described it as a genuine human–AI collaboration.

> **Limits：** The core result was later found to exist in prior literature, unknown at the time.

*Mathematics · Aristotle (Harmonic) with human mathematicians*　Sources：[Terence Tao's blog](https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/) (Official) · [erdosproblems.com](https://www.erdosproblems.com/1026) (Reference)

#### 2025-12-17｜Can a national weather service put AI global forecasts into its operational suite?

NOAA announced operational AI global models: AIGFS (built on GraphCast), the AI ensemble AIGEFS, and the hybrid HGEFS; NOAA says AIGFS needs about 0.3% of the compute of the traditional GFS, finishing a 16-day forecast in roughly 40 minutes.

> **Limits：** Version 1 degrades tropical-cyclone intensity forecasts; ensemble and hybrid results are from initial testing.

*Earth & climate · AIGFS / AIGEFS / HGEFS (NOAA)*　Sources：[HPCwire](https://www.hpcwire.com/aiwire/2025/12/17/noaa-deploys-new-generation-of-ai-driven-global-weather-models/) (News)

## 2026

#### 2026-01-12｜Can Erdős Problem #728, on factorial divisibility, be resolved?

GPT-5.2 Pro working with Harmonic's Aristotle produced a resolution, formally verified in Lean, described as essentially autonomous.

> **Limits：** Terence Tao commented that it says more about speed than about difficulty.

*Mathematics · GPT-5.2 Pro + Aristotle (Harmonic)*　Sources：[arXiv](https://arxiv.org/abs/2601.07421) (Paper) · [The Decoder](https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/) (News)

#### 2026-01-28｜What happens when variants occur in the non-coding DNA that makes up most of the genome?

AlphaGenome reads up to a million DNA bases and predicts thousands of signals including gene expression and splicing; it matched or beat the best existing models in 25 of 26 variant-effect evaluations.

> **Limits：** Computational predictions, not experimental measurements.

*Biology · AlphaGenome*　Sources：[Nature press release](https://www.natureasia.com/en/info/press-releases/detail/9222) (Official) · [Google DeepMind](https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/) (Official)

#### 2026-02｜Can AI autonomously resolve several open Erdős problems?

Google DeepMind reported its Aletheia system autonomously resolved Erdős Problems #652, #1051 and others.

*Mathematics · Gemini Deep Think (Aletheia)*　Sources：[arXiv](https://arxiv.org/abs/2601.22401) (Paper)

#### 2026-02-03｜Is Fel's conjecture on syzygies of numerical semigroups true?

Axiom Math's AxiomProver proved the conjecture from its natural-language statement and formalised the proof in Lean.

*Mathematics · AxiomProver (Axiom Math)*　Sources：[arXiv](https://arxiv.org/abs/2602.03716) (Paper)

#### 2026-02-04｜Are almost all primes 'partially regular'?

Axiom Math's AxiomProver proved, from a natural-language statement, that a density-one set of primes satisfies a partial regularity condition, and formalised it in Lean.

*Mathematics · AxiomProver (Axiom Math)*　Sources：[arXiv](https://arxiv.org/abs/2602.05090) (Paper)

#### 2026-02-13｜Are tree-level gluon scattering amplitudes with one negative- and all other positive-helicity gluons really zero?

Guevara, Lupsasca, Skinner, Strominger and colleagues showed these amplitudes do not vanish in the 'half-collinear' regime. Humans computed cases up to n=6, GPT-5.2 Pro simplified them and conjectured a formula for all n, and an internal OpenAI model spent about 12 hours producing a formal proof.

> **Limits：** The authors checked the formula analytically; the result holds in a specific kinematic regime.

*Physics · GPT-5.2 Pro and an internal OpenAI model*　Sources：[OpenAI](https://openai.com/index/new-result-theoretical-physics/) (Official) · [arXiv](https://arxiv.org/abs/2602.12176) (Paper)

#### 2026-02-20｜On a set of research-level problems from mathematicians with no public answers (First Proof), how many can AI solve?

OpenAI submitted answers to First Proof and says at least five (problems 4, 5, 6, 9 and 10) have a high chance of being correct.

> **Limits：** Expert review was not complete; the remaining answers were still under review.

*Mathematics · OpenAI unreleased research system*　Sources：[arXiv](https://arxiv.org/abs/2602.05192) (Paper) · [OpenAI](https://openai.com/index/first-proof-submissions) (Official)

#### 2026-02-28｜Can the arcs of a particular 3D directed graph be split into three Hamiltonian cycles? (an open problem Knuth was working on)

Donald Knuth wrote that Claude Opus 4.6 found, in about an hour of exploration, a construction that works for all odd m; Filip Stappers tested m = 3 to 101 and Knuth then proved the construction correct himself.

> **Limits：** Only odd m was solved at the time; even m was open, and Knuth's postscripts report it was later settled with other AI systems. The proof itself was supplied by a human.

*Mathematics · Claude Opus 4.6*　Sources：[Donald Knuth (note)](https://cs.stanford.edu/~knuth/papers/claude-cycles.pdf) (Official)

#### 2026-03｜Can an equilibrium result for the Vlasov–Maxwell–Landau plasma equations be formalised semi-autonomously by AI?

A preprint reports a 'semi-autonomous formalization' in Lean of an equilibrium result for the Vlasov–Maxwell–Landau equations.

> **Limits：** Only title-level information has been read; a formalisation of an existing result.

*Physics · AI-assisted Lean formalization*　Sources：[arXiv](https://arxiv.org/abs/2603.15929) (Paper)

#### 2026-03-23｜Can the lower-bound construction for a Ramsey-type hypergraph problem be improved?

GPT-5.4 Pro produced an improved construction, and Epoch AI marked this FrontierMath open problem as solved.

*Mathematics · GPT-5.4 Pro*　Sources：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (Official)

#### 2026-03-31｜Can several Erdős questions — small prime factors of binomial coefficients, splitting additive bases — be resolved?

An OpenAI internal model produced short proofs resolving these questions, released as a paper.

*Mathematics · OpenAI internal model*　Sources：[arXiv](https://arxiv.org/abs/2603.29961) (Paper)

#### 2026-04｜Can AI find thousands of previously unknown high-severity vulnerabilities across all major operating systems and browsers?

Anthropic says Claude Mythos Preview found thousands of high-severity vulnerabilities, including a 27-year-old OpenBSD remote-crash bug, an FFmpeg flaw missed by millions of automated tests, and a way to chain Linux kernel bugs to take control; the model is not public and is available to 40+ vetted organisations to fix software.

> **Limits：** All figures are the publisher's claims, not independently verified; Anthropic promised to report on patched vulnerabilities within 90 days.

*Algorithms & software · Claude Mythos Preview (Project Glasswing)*　Sources：[Anthropic](https://www.anthropic.com/glasswing) (Official) · [Anthropic red team](https://red.anthropic.com/2026/mythos-preview/) (Official) · [CyberInsider](https://cyberinsider.com/anthropic-launches-project-glasswing-after-its-new-ai-model-finds-thousands-of-zero-day-flaws/) (News)

#### 2026-04-15｜Is the Erdős–Sárközy–Szemerédi conjecture on primitive-set sums true? (Erdős #1196)

Prompted by Liam Price, GPT-5.4 Pro proved the sharp 1+O(1/log x) bound conjectured by Erdős, Sárközy and Szemerédi.

*Mathematics · GPT-5.4 Pro*　Sources：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (Reference)

#### 2026-05-07｜A year on, what has AlphaEvolve actually delivered in mathematics, chips, software and science?

DeepMind says AlphaEvolve helped improve lower bounds for the travelling salesman problem and Ramsey numbers, took part in next-generation TPU design, cut Spanner's write amplification by 20%, and reduced DeepConsensus variant-detection errors by 30%.

> **Limits：** Figures compiled by the publisher, not checked item by item.

*Algorithms & software · AlphaEvolve*　Sources：[Google DeepMind](https://deepmind.google/blog/alphaevolve-impact/) (Official)

#### 2026-06｜By mid-2026, how many open Erdős problems has AI solved?

A wiki maintained by Terence Tao records AI contributions to Erdős problems problem by problem and lists those solved essentially by AI alone — for example #125, #741, #38 and #694 in 2026, and #90 solved in May by an OpenAI internal model and Claude Mythos.

> **Limits：** The page notes some results were later found in prior literature; its data runs to 30 June 2026 and it is no longer updated.

*Mathematics · GPT-5.x, Claude, Gemini, Aristotle, Aletheia and others*　Sources：[Tao's wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) (Reference) · [Erdős #90](https://www.erdosproblems.com/90) (Reference) · [Erdős #619](https://www.erdosproblems.com/619) (Reference)

#### 2026-06｜In the theory of jamming, why do two critical exponents satisfy a + b = 1?

The relation had strong numerical support but no analytic proof. Nobel laureate Giorgio Parisi, Francesco Zamponi and colleagues obtained and checked a proof while working with Claude.

> **Limits：** Holds within the infinite-dimensional hard-sphere fullRSB framework.

*Physics · Claude*　Sources：[arXiv](https://arxiv.org/abs/2606.03300) (Paper) · [Live Science](https://livescience.com/physics-mathematics/mathematics/nobel-prize-winning-physicist-and-team-use-claude-ai-to-solve-decades-old-math-puzzle) (News)

#### 2026-07-23｜Can AI score full marks on all six International Mathematical Olympiad problems?

Reports say Huawei's Celia and Xiaohongshu's dots-note-3.0 scored a perfect 42/42 at IMO 2026 in Shanghai, whereas in 2025 Google's and OpenAI's models reached only the gold line.

> **Limits：** Company-announced; the report mentions no official IMO grading and gives no grading details.

*Mathematics · Huawei Celia; Xiaohongshu dots-note-3.0*　Sources：[NewsBytes](https://www.newsbytesapp.com/news/science/for-first-time-ai-scores-100-at-international-mathematical-olympiad/story) (News)

#### 2026-08-01｜Does Connes's rigidity conjecture in operator algebras hold?

OpenAI says Astra disproved the conjecture.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*Mathematics · OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-01｜Can every countable group be approximated by finite permutations? (Gromov's 1999 question on sofic groups)

OpenAI says Astra gave the first explicit construction of a non-sofic group, answering the question.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*Mathematics · OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-01｜In high dimensions, what fraction of space can equal spheres fill at most? (upper bounds on sphere-packing density)

OpenAI says Astra improved the general upper bound on sphere-packing density in high dimensions — the first improvement since 1978.

> **Limits：** Publisher's claim; an improved upper bound does not determine the maximum density. Peer review pending.

*Mathematics · OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-10｜What fraction of the Riemann zeta function's nontrivial zeros can be proven to lie on the critical line?

Anthropic reports that a research version of Claude raised the known lower bound from 41.6% to 67.2%, releasing the paper, expert notes and a Lean formalization.

> **Limits：** The Riemann hypothesis itself remains unproven; this was a byproduct of the attempt.

*Mathematics · Claude (research version)*　Sources：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (Official)

#### 2026-09-03｜How is the complete male fruit-fly nervous system wired?

With AI-assisted electron-microscopy segmentation and reconstruction, researchers released a map of over 166,000 neurons and 125 million synapses.

*Biology · AI-assisted EM reconstruction (Google Research + Janelia)*　Sources：[Google Research](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/) (Official) · [Janelia](https://male-cns.janelia.org/) (Official)

#### 2026-09-04｜Can the proof of Fermat's Last Theorem be fully checked by computer?

Anthropic reports dozens of Claude agents completed an end-to-end Lean formalization of the proof of Fermat's Last Theorem, about 13 million lines of Lean.

> **Limits：** Formal verification of a known proof, not new mathematics; company research.

*Mathematics · Claude*　Sources：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (Official)

#### 2026-09-08｜Can a smooth 3D fluid develop a singularity in finite time? (the Navier–Stokes Millennium Problem)

OpenAI says its internal model proved finite-time blowup for Navier–Stokes with a smooth external force, releasing a Lean formalization, plus a blowup result for the unforced Euler equations.

> **Limits：** Publisher's claim; not yet peer reviewed or recognised by the Clay Institute. Buckmaster and Alpöge posted related blowup results concurrently, with a dispute over credit.

*Mathematics · OpenAI internal model (GPT-6 Astra for Lean)*　Sources：[OpenAI](https://openai.com/index/navier-stokes-solution/) (Official) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (Official) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (News)

#### 2026-09-17｜Does the strong secretary conjecture hold for linear matroids?

Researchers obtained a proof of the conjecture for linear matroids through a conversation with ChatGPT.

> **Limits：** Another team posted essentially the same result with a nearly identical approach the day before.

*Mathematics · ChatGPT (GPT-6 Astra)*　Sources：[arXiv](https://arxiv.org/abs/2609.20797) (Paper) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (Paper)

#### 2026-09-21｜With little data, can we design a new class of antibacterial polymers?

A Stanford team used transfer from antimicrobial-peptide data plus active learning; all 10 synthesised polymers inhibited E. coli, one especially effective against biofilms.

> **Limits：** Preclinical.

*Materials · Transfer + active learning (Stanford)*　Sources：[Stanford](https://news.stanford.edu/stories/2026/09/bacteria-killing-polymers-new-class-antibiotics) (Official) · [Matter 2026](https://doi.org/10.1016/j.matt.2026.103026) (Paper)

#### 2026-09-23｜What new biological system lies behind an odd repeat pattern in phage DNA?

Anthropic reports about 950 Claude agents searched DNA data for 21 hours and found a new reverse-transcriptase-associated system; lab work confirmed the repeats are transcribed into short RNAs.

> **Limits：** Biological function unknown; company research.

*Biology · Claude (≈950 agents)*　Sources：[Anthropic](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system) (Official)

#### 2026-09-23｜How many rare Wolf–Rayet stars remain undiscovered in the Milky Way?

Machine learning picked 30 candidates from Gaia spectra; follow-up spectroscopy confirmed 13 new Milky Way Wolf–Rayet stars.

> **Limits：** AI chose targets; spectroscopy did the confirming.

*Astronomy · Machine learning on Gaia spectra*　Sources：[arXiv](https://arxiv.org/abs/2609.28640) (Paper)

#### 2026-10-06｜How many mathematical problems can one AI model produce new results on at once?

OpenAI released a large batch of new mathematical results from an internal model — about three hours of reasoning each on average — many with Lean formalizations.

> **Limits：** Verification varies by result; each needs to be examined individually.

*Mathematics · OpenAI internal model*　Sources：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

