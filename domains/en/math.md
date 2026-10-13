<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# Mathematics: problems AI has solved

69 entries · [← Back to README](../../README.md)

#### 1956｜Given the axioms of logic, can a machine find proofs of theorems by itself?

Newell, Simon and Shaw's program proved 38 of the first 52 theorems in Chapter 2 of Principia Mathematica, one of them more elegantly than the book.

*Logic Theorist*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Logic_Theorist) (Reference)

#### 1958｜Can a machine prove every propositional theorem in Principia Mathematica?

Hao Wang's program on the IBM 704 proved all 350+ propositional-logic theorems of Principia Mathematica in minutes.

*Hao Wang's IBM 704 program*　Sources：[IBM J. Res. Dev. 1960](https://doi.org/10.1147/rd.41.0002) (Paper)

#### 1959｜Can a machine prove plane-geometry theorems?

Gelernter's geometry prover at IBM used the diagram as a heuristic to prune search and proved high-school-level geometry theorems.

*Geometry Theorem Machine*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Herbert_Gelernter) (Reference)

#### 1961｜Can a machine solve the integrals on a college calculus exam?

James Slagle's SAINT used heuristic search for symbolic integration and solved 52 of 54 problems from MIT freshman calculus finals.

*SAINT*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/James_Robert_Slagle) (Reference)

#### 1965｜Is there a simple, general inference rule that suits machine execution?

J. A. Robinson's resolution principle let computers carry out complete mechanical reasoning in first-order logic with a single rule, and became the basis of automated theorem proving and logic programming.

*Resolution principle (J. A. Robinson)*　Sources：[JACM 1965](https://doi.org/10.1145/321250.321253) (Paper) · [Wikipedia](https://en.wikipedia.org/wiki/Resolution_(logic)) (Reference)

#### 1976｜Can a machine invent mathematical concepts and conjectures on its own?

Douglas Lenat's AM started from set theory and, guided by heuristics, 'discovered' natural numbers and primes and re-proposed known conjectures such as Goldbach's.

> **Limits：** Rediscoveries, not new mathematics.

*AM (Automated Mathematician)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (Reference)

#### 1976｜Can every map be coloured with four colours so that neighbouring regions differ? (the Four Colour Theorem)

Appel and Haken reduced the proof to about 1,900 configurations checked by computer — the first time a computer was indispensable in proving a famous theorem.

> **Limits：** Computer-assisted exhaustive checking, not a learning or reasoning system; included because it began the long debate over whether machine proofs count as proofs.

*Appel–Haken computer-assisted proof*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Four_color_theorem) (Reference)

#### 1977｜Can proving geometry theorems be turned into algebra a computer can carry out?

Wu Wen-Tsun's method converts elementary-geometry theorems into computations on polynomial systems, letting computers mechanically prove large classes of geometry theorems.

> **Limits：** Symbolic computation and automated reasoning, not learning-based AI.

*Wu's method (吴文俊)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Wu%27s_method_of_characteristic_set) (Reference)

#### 1996-10｜Is every Robbins algebra Boolean? (the 60-year-old Robbins conjecture)

William McCune's automated reasoning program EQP at Argonne found the key proof, settling — together with earlier results — a problem that had resisted mathematicians for decades.

*EQP*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (Reference) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (News)

#### 2014-02｜Erdős discrepancy conjecture: must every infinite ±1 sequence have unbounded discrepancy? Start with the case C = 2

Konev and Lisitsa used a SAT solver to prove that no ±1 sequence of length 1161 has discrepancy 2 (one of length 1160 exists), settling the case C = 2; the machine-generated proof certificate is about 13 GB.

> **Limits：** Only the case C = 2; automated reasoning, not learning-based AI.

*SAT solver (Glucose)*　Sources：[arXiv](https://arxiv.org/abs/1402.2184) (Paper)

#### 2014-08｜Can the proof of the Kepler conjecture on sphere packing be checked completely by computer?

Thomas Hales's Flyspeck project completed a formal verification of the proof of the Kepler conjecture in HOL Light and Isabelle.

> **Limits：** Verifies an existing human proof; not a new result.

*HOL Light and Isabelle (Flyspeck)*　Sources：[Forum Math. Pi 2017](https://doi.org/10.1017/fmp.2017.1) (Paper)

#### 2016-05｜Can the positive integers be 2-coloured so that no Pythagorean triple is monochromatic?

Heule and colleagues used a SAT solver to prove the answer is no: it works up to 7824 but becomes impossible at 7825. The proof is 200 TB.

> **Limits：** Automated reasoning plus massive computation, not learning-based AI.

*SAT solver*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (Reference) · [arXiv](https://arxiv.org/abs/1605.00723) (Paper)

#### 2017｜How far can the integers be 5-coloured with no monochromatic a + b = c? (the fifth Schur number)

Marijn Heule used a SAT solver to prove the fifth Schur number is 160: 5-colouring works up to 160 and is impossible at 161. The proof file is about 2 petabytes.

> **Limits：** Automated reasoning plus massive computation, not learning-based AI.

*SAT solver (Heule)*　Sources：[arXiv](https://arxiv.org/abs/1711.08076) (Paper)

#### 2019-10｜Tiling 7-dimensional space with unit cubes, must two cubes always share a full face? (Keller's conjecture in dimension 7)

Brakensiek, Heule and colleagues used a SAT solver to prove Keller's conjecture holds in dimension 7, closing the last open low dimension.

> **Limits：** Automated reasoning plus heavy computation, not learning-based AI.

*SAT solver*　Sources：[arXiv](https://arxiv.org/abs/1910.03740) (Paper)

#### 2021-02-03｜Can a computer automatically discover new formulas for fundamental constants like π and e?

Technion's Ramanujan Machine generated dozens of new continued-fraction conjectures for fundamental constants, some later proven.

*Ramanujan Machine*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-03229-4) (Paper)

#### 2021-04-29｜Can a machine construct counterexamples that refute conjectures in graph theory and combinatorics?

Adam Zsolt Wagner used reinforcement learning to construct graphs and matrices, finding counterexamples to several published conjectures.

*Cross-entropy RL*　Sources：[arXiv](https://arxiv.org/abs/2104.14516) (Paper)

#### 2021-12-01｜Are there undiscovered links between the geometric and algebraic invariants of knots?

Machine learning pointed mathematicians to a new relation in knot theory and progress on a representation-theory conjecture, which they then proved rigorously.

*DeepMind + mathematicians*　Sources：[Nature 2021](https://doi.org/10.1038/s41586-021-04086-x) (Paper)

#### 2022-04-21｜Can patterns in data reveal the rank of an elliptic curve (the quantity behind the Birch–Swinnerton-Dyer conjecture)?

Researchers used machine learning to predict the rank of elliptic curves and, averaging the a_p data, saw a rank-dependent oscillation they called murmurations of elliptic curves. Mathematicians have since proved the effect in several settings.

> **Limits：** A new phenomenon, not a proof of the Birch–Swinnerton-Dyer conjecture, which remains open. The discovery was partly lucky: the data happened to be sorted by conductor and the a_p were not normalised.

*Machine-learning classifiers (He, Lee, Oliver, Pozdnyakov)*　Sources：[arXiv](https://arxiv.org/abs/2204.10140) (Paper) · [Quanta Magazine](https://www.quantamagazine.org/elliptic-curve-murmurations-found-with-ai-take-flight-20240305/) (News)

#### 2023-01-23｜What is the packing chromatic number of the infinite square grid? (open since 2002)

Subercaseaux and Heule used a new SAT encoding and symmetry breaking to prove the answer is 15, with a verified proof of unsatisfiability.

> **Limits：** Automated reasoning plus heavy computation, not learning-based AI.

*SAT solver (Subercaseaux & Heule)*　Sources：[arXiv](https://arxiv.org/abs/2301.09757) (Paper)

#### 2023-12-14｜How large can a cap set — a set with no three points on a line — be made?

FunSearch had an LLM write programs that were automatically scored and evolved, finding larger cap sets in dimension 8 and improving an asymptotic lower bound.

> **Limits：** Improves constructions and lower bounds; the maximum is not determined.

*FunSearch*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (Paper)

#### 2024-01-17｜Can a machine come up with the auxiliary constructions olympiad geometry needs?

AlphaGeometry solved 25 of 30 olympiad geometry problems, approaching the average IMO gold medallist.

*AlphaGeometry*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (Paper)

#### 2024-03｜The Happy Ending problem: how many points in the plane guarantee an empty convex hexagon?

Heule and Scheucher used a SAT solver to prove that every 30 points in general position in the plane contain an empty hexagon; the search was split into about 312,000 subproblems and the proof was checked by a formally verified checker.

> **Limits：** Automated reasoning plus heavy computation, not learning-based AI.

*SAT solver (CaDiCaL, cube-and-conquer)*　Sources：[arXiv](https://arxiv.org/abs/2403.00737) (Paper)

#### 2024-07-25｜Can AI earn a medal across a full International Mathematical Olympiad?

DeepMind's systems solved 4 of 6 IMO 2024 problems — silver-medal standard — with proofs written in the Lean formal language.

> **Limits：** Problems were manually formalised; some took far longer than contest time.

*AlphaProof + AlphaGeometry 2*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (Official)

#### 2024-08｜Andrews–Curtis conjecture in topology: can reinforcement learning untangle hard group presentations?

Shehper et al. used reinforcement learning to solve two Miller–Schupp presentations that greedy search could not, one AC-equivalent to the famous potential counterexample AK(3), and shortened AK(n) to an equivalent presentation of length n+11.

> **Limits：** The Andrews–Curtis conjecture itself remains open; based on the paper's summary, not checked in detail.

*Reinforcement learning and greedy search*　Sources：[arXiv](https://arxiv.org/abs/2408.15332) (Paper)

#### 2024-10｜Lyapunov functions, which certify the stability of dynamical systems, have no general method; can AI find them?

Alfarano, Charton and Hayat trained transformers to output Lyapunov functions directly: they found new functions for 10.1% of random polynomial systems versus 2.1% for state-of-the-art methods, and 12.7% of non-polynomial systems, where no general algorithm exists.

> **Limits：** Evaluated on randomly generated systems rather than famous specific ones.

*Sequence-to-sequence transformers (Meta FAIR, École des Ponts)*　Sources：[arXiv](https://arxiv.org/abs/2410.08304) (Paper)

#### 2024-11-01｜Is a 30-year-old conjecture about the fewest edges in a diameter-preserving subgraph of the cube true?

Charton, Ellenberg, Wagner and Williamson's PatternBoost, combining local search with a transformer, found a d = 6 subgraph with 81 edges, one fewer than the conjectured construction's 82, disproving the conjecture.

> **Limits：** The paper attributes the conjecture to Graham; based on the abstract only.

*PatternBoost (transformer + local search)*　Sources：[arXiv](https://arxiv.org/abs/2411.00566) (Paper)

#### 2025-05-14｜Can two 4×4 complex matrices be multiplied with one fewer multiplication? How many spheres can touch one sphere in 11 dimensions?

AlphaEvolve found a 48-multiplication algorithm for 4×4 complex matrices (previously 49) and a 593-sphere kissing configuration in 11 dimensions, raising the known lower bound.

> **Limits：** 593 is a lower bound, not the proven maximum.

*AlphaEvolve*　Sources：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (Official) · [arXiv](https://arxiv.org/abs/2506.13131) (Paper)

#### 2025-07-21｜Working in natural language within contest time, can AI reach IMO gold?

Google DeepMind's Gemini Deep Think (officially graded by the IMO) and an OpenAI experimental model both reported solving 5 of 6 IMO 2025 problems, a gold-medal score.

> **Limits：** Competition problems have known answers; not the same as open research problems.

*Gemini Deep Think; OpenAI experimental model*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (Official) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (News)

#### 2025-09｜Can AI write a full formal proof of the strong prime number theorem in Lean?

Math, Inc.'s Gauss agent completed a Lean formalisation of the strong prime number theorem in about three weeks, a task Terence Tao and Alex Kontorovich had been working on; a later, stronger Gauss reproduced it in two to three days.

> **Limits：** Timing and capability claims come from Math, Inc. or the project team and were not independently verified in the IEEE Spectrum report; a formalisation of a known theorem, not a new result.

*Gauss (Math, Inc.)*　Sources：[IEEE Spectrum](https://spectrum.ieee.org/ai-proof-verification) (News) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2025-09-18｜Can the elusive 'unstable singularities' of fluid equations be found?

Google DeepMind with Brown, NYU and Stanford used neural networks plus high-precision numerics to discover new families of unstable self-similar singularities in several fluid equations.

> **Limits：** High-precision numerical discoveries, not rigorous proofs, and not a Navier–Stokes solution.

*Physics-informed neural networks (Google DeepMind et al.)*　Sources：[Google DeepMind](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/) (Official) · [Physics World](https://physicsworld.com/a/neural-networks-discover-unstable-singularities-in-fluid-systems/) (News)

#### 2025-11｜Can reinforcement learning let AI find olympiad-level proofs inside a formal mathematical language?

DeepMind published AlphaProof's method in Nature: reinforcement learning inside Lean, the system behind its silver-medal-level proofs at IMO 2024.

*AlphaProof*　Sources：[Google Research](https://research.google/pubs/olympiad-level-formal-mathematical-reasoning-with-reinforcement-learning/) (Paper) · [Nature press release](https://www.natureasia.com/en/info/press-releases/detail/9147) (Official)

#### 2025-11-03｜What happens when AI is applied to dozens of math problems at once?

Terence Tao and collaborators applied AlphaEvolve to 67 problems in analysis, combinatorics and geometry, rediscovering best-known constructions in many and improving some.

*AlphaEvolve*　Sources：[arXiv](https://arxiv.org/abs/2511.02864) (Paper)

#### 2025-11-20｜What is the answer to Erdős Problem #848, an extremal question in multiplicative number theory?

OpenAI reports GPT-5 supplied the key idea that researchers used to settle the problem.

> **Limits：** Publisher's report; see the paper for division of labour.

*GPT-5*　Sources：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (Official)

#### 2025-12-08｜Can Erdős Problem #1026 be settled?

Boris Alexeev, Stijn Cambie, Terence Tao and others worked with Harmonic's Aristotle to prove the main conjecture formally in Lean; Tao described it as a genuine human–AI collaboration.

> **Limits：** The core result was later found to exist in prior literature, unknown at the time.

*Aristotle (Harmonic) with human mathematicians*　Sources：[Terence Tao's blog](https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/) (Official) · [erdosproblems.com](https://www.erdosproblems.com/1026) (Reference)

#### 2026-01-12｜Can Erdős Problem #728, on factorial divisibility, be resolved?

GPT-5.2 Pro working with Harmonic's Aristotle produced a resolution, formally verified in Lean, described as essentially autonomous.

> **Limits：** Terence Tao commented that it says more about speed than about difficulty.

*GPT-5.2 Pro + Aristotle (Harmonic)*　Sources：[arXiv](https://arxiv.org/abs/2601.07421) (Paper) · [The Decoder](https://the-decoder.com/terence-tao-says-gpt-5-2-pro-cracked-an-erdos-problem-but-warns-the-win-says-more-about-speed-than-difficulty/) (News)

#### 2026-02｜Can AI autonomously resolve several open Erdős problems?

Google DeepMind reported its Aletheia system autonomously resolved Erdős Problems #652, #1051 and others.

*Gemini Deep Think (Aletheia)*　Sources：[arXiv](https://arxiv.org/abs/2601.22401) (Paper)

#### 2026-02-03｜Is Fel's conjecture on syzygies of numerical semigroups true?

Axiom Math's AxiomProver proved the conjecture from its natural-language statement and formalised the proof in Lean.

*AxiomProver (Axiom Math)*　Sources：[arXiv](https://arxiv.org/abs/2602.03716) (Paper)

#### 2026-02-04｜Are almost all primes 'partially regular'?

Axiom Math's AxiomProver proved, from a natural-language statement, that a density-one set of primes satisfies a partial regularity condition, and formalised it in Lean.

*AxiomProver (Axiom Math)*　Sources：[arXiv](https://arxiv.org/abs/2602.05090) (Paper)

#### 2026-02-20｜On a set of research-level problems from mathematicians with no public answers (First Proof), how many can AI solve?

OpenAI submitted answers to First Proof and says at least five (problems 4, 5, 6, 9 and 10) have a high chance of being correct.

> **Limits：** This is the publisher’s assessment in its February 20, 2026 announcement, not final verification of all answers. OpenAI also acknowledged that its initially promising attempt for problem 2 was incorrect. Some attempts involved human prompting, selection and feedback.

*OpenAI unreleased research system*　Sources：[arXiv](https://arxiv.org/abs/2602.05192) (Paper) · [OpenAI](https://openai.com/index/first-proof-submissions) (Official)

#### 2026-02-28｜Can the arcs of a particular 3D directed graph be split into three Hamiltonian cycles? (an open problem Knuth was working on)

Donald Knuth wrote that Claude Opus 4.6 found, in about an hour of exploration, a construction that works for all odd m; Filip Stappers tested m = 3 to 101 and Knuth then proved the construction correct himself.

> **Limits：** Only odd m was solved at the time; even m was open, and Knuth's postscripts report it was later settled with other AI systems. The proof itself was supplied by a human.

*Claude Opus 4.6*　Sources：[Donald Knuth (note)](https://cs.stanford.edu/~knuth/papers/claude-cycles.pdf) (Official)

#### 2026-03｜Can small Ramsey-number lower bounds be pushed up by search algorithms an AI designs?

Nagda, Raghavan and Thakurta used AlphaEvolve to evolve a separate search algorithm for each Ramsey number, raising the lower bounds of R(3,13), R(3,18), R(4,13), R(4,14) and R(4,15) by one each and matching or improving 28 bounds in total for r, s ≤ 22.

> **Limits：** These are lower bounds; the exact values remain unknown.

*AlphaEvolve*　Sources：[arXiv](https://arxiv.org/html/2603.09172v2) (Paper)

#### 2026-03-02｜Can AI fully verify in Lean Viazovska's proofs of optimal sphere packing in dimensions 8 and 24?

Math, Inc. says Gauss formalised the dimension-8 proof in about five days (announced 23 February) and the dimension-24 proof in about two weeks, producing over 200,000 lines of Lean (announced 2 March); for dimension 24 there was no existing blueprint, and Gauss had to build missing background theory.

> **Limits：** Most timing and capability claims come from Math, Inc. or the project team; extensive human groundwork preceded the dimension-24 work and the report calls it a human–AI collaboration; a formalisation of known theorems.

*Gauss (Math, Inc.)*　Sources：[IEEE Spectrum](https://spectrum.ieee.org/ai-proof-verification) (News)

#### 2026-03-23｜Can the lower-bound construction for a Ramsey-type hypergraph problem be improved?

GPT-5.4 Pro produced an improved construction, and Epoch AI marked this FrontierMath open problem as solved.

*GPT-5.4 Pro*　Sources：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (Official)

#### 2026-03-31｜Can several Erdős questions — small prime factors of binomial coefficients, splitting additive bases — be resolved?

An OpenAI internal model produced short proofs resolving these questions, released as a paper.

*OpenAI internal model*　Sources：[arXiv](https://arxiv.org/abs/2603.29961) (Paper)

#### 2026-04-15｜Is the Erdős–Sárközy–Szemerédi conjecture on primitive-set sums true? (Erdős #1196)

Prompted by Liam Price, GPT-5.4 Pro proved the sharp 1+O(1/log x) bound conjectured by Erdős, Sárközy and Szemerédi.

*GPT-5.4 Pro*　Sources：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (Reference)

#### 2026-05｜In what lowest dimension does Borsuk's conjecture (every bounded set splits into d+1 parts of smaller diameter) fail?

A GitHub repository says that with GPT-5.5 Pro's help a 63-dimensional counterexample was obtained, improving the earlier 64 dimensions (Jenrich and Brouwer) by one, and provides an exact verification script and graph certificates.

> **Limits：** From an individual's repository with no peer review; the script checks finite computations used in the proof, not the whole argument; I have not read the proof PDF.

*GPT-5.5 Pro (with Max Grinzstajn)*　Sources：[GitHub](https://github.com/maaxgrin/borsuk-63-counterexample) (Official) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-05-20｜How many pairs among n points in the plane can be exactly distance 1 apart? Is Erdős's 1946 conjecture true? (the unit distance problem)

OpenAI says its internal general-purpose reasoning model disproved Erdős's conjectured n^(1+o(1)) upper bound: linking the problem to infinite class field towers (Golod–Shafarevich) in algebraic number theory, it constructed at least n^(1+δ) unit-distance pairs for infinitely many n. Will Sawin then gave an explicit exponent 1.014.

> **Limits：** The original proof gives no explicit δ, and the best known upper bound is still O(n^(4/3)), so the problem itself is not settled. OpenAI's page does not mention Lean and says external mathematicians checked it; reports say the human checking and write-up were substantial; a formalisation was later done by others.

*OpenAI internal reasoning model*　Sources：[OpenAI](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) (Official) · [Sawin, arXiv](https://arxiv.org/abs/2605.20579) (Paper) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (News)

#### 2026-06｜By mid-2026, how many open Erdős problems has AI solved?

A wiki maintained by Terence Tao records AI contributions to Erdős problems problem by problem and lists those solved essentially by AI alone — for example #125, #741, #38 and #694 in 2026, and #90 solved in May by an OpenAI internal model and Claude Mythos.

> **Limits：** The page notes some results were later found in prior literature; its data runs to 30 June 2026 and it is no longer updated.

*GPT-5.x, Claude, Gemini, Aristotle, Aletheia and others*　Sources：[Tao's wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) (Reference) · [Erdős #90](https://www.erdosproblems.com/90) (Reference) · [Erdős #619](https://www.erdosproblems.com/619) (Reference)

#### 2026-07｜Crouzeix's conjecture: is the norm of a function of a matrix at most twice the function's maximum over the numerical range? (open for 20+ years)

Reports say Shanmu Jin, a postdoctoral researcher at Peking Union Medical College, proved the conjecture with GPT-5.6 Sol; the decisive step emerged in an autonomous run of about 16 hours. Townsend reviewed it and passed it to Greenbaum and Crouzeix, who reportedly confirmed it is correct; eight days later Lorist and Schwenninger posted a much shorter proof, also exploring strategies with GPT-5.6.

> **Limits：** Not peer reviewed; the split between AI and human contribution is unclear; Brett Wick cautions that a prompt telling the system to assume a complete proof exists risks accepting a subtle gap.

*GPT-5.6 Sol (with Shanmu Jin)*　Sources：[Brett Wick](https://www.math.wustl.edu/wp/wick/?p=210) (Reference) · [Interesting Engineering](https://interestingengineering.com/ai-robotics/china-doctor-cracks-math-problem-with-chatgpt) (News)

#### 2026-07｜Does every bridgeless graph have a collection of cycles covering each edge exactly twice? (the cycle double cover conjecture)

In July 2026 OpenAI announced a proof of the cycle double cover conjecture; Jim Geelen and Sang-il Oum each posted expositions of it on arXiv to make it easier to follow.

> **Limits：** The two arXiv pages I read do not say whether the proof has been independently verified or peer reviewed, or how the work was split between AI and humans; Wikipedia's list names the model as GPT-5.6 Sol Ultra.

*OpenAI model*　Sources：[Oum, arXiv](https://arxiv.org/abs/2607.16356) (Paper) · [Geelen, arXiv](https://arxiv.org/abs/2607.15399) (Paper) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-07｜Is a finite locally free group scheme of order n always killed by n? (a question of Grothendieck; Deligne proved the commutative case)

Akhil Mathew, with AI assistance, gave a non-commutative counterexample, a finite free group scheme of order 4 that is not killed by 4, and formalised it in Lean's Mathlib; the PR discloses that Codex and Claude assisted with the construction and formalisation.

> **Limits：** The PR gives only the year; the date comes from the Xena Project roundup (11 July), whose description of the AI's role differs somewhat from the PR.

*Codex and Claude, with Akhil Mathew*　Sources：[Mathlib PR](https://github.com/leanprover-community/mathlib4/pull/41748) (Reference) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (News)

#### 2026-07-20｜Must a polynomial map with a nonzero constant Jacobian determinant be invertible? (the Jacobian conjecture, one of Smale's 18 problems)

Anthropic mathematician Levent Alpöge says Claude Fable 5 found a 3D polynomial map with constant Jacobian determinant −2 that sends different points to the same point, so the Jacobian conjecture fails in dimension 3 and above. The counterexample is short enough to fit in a single X post.

> **Limits：** The two-dimensional case remains open. How the model was prompted had not been made public at the time. A Lean formalisation is under way in DeepMind's formal-conjectures repository and I could not confirm it was merged; a rescaled determinant-1 version was later proposed so that it works in all characteristics. The announcement came from an Anthropic researcher.

*Claude Fable 5*　Sources：[ScienceDaily](https://www.sciencedaily.com/releases/2026/08/260804034634.htm) (News) · [The Week](https://theweek.com/tech/mathematicians-are-buzzing-about-an-ai-solution-to-a-math-mystery) (News) · [formal-conjectures PR](https://github.com/google-deepmind/formal-conjectures/pull/4474) (Reference) · [Xena Project](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/) (News)

#### 2026-07-23｜Can AI score full marks on all six International Mathematical Olympiad problems?

Reports say Huawei's Celia and Xiaohongshu's dots-note-3.0 scored a perfect 42/42 at IMO 2026 in Shanghai, whereas in 2025 Google's and OpenAI's models reached only the gold line.

> **Limits：** Company-announced; the report mentions no official IMO grading and gives no grading details.

*Huawei Celia; Xiaohongshu dots-note-3.0*　Sources：[NewsBytes](https://www.newsbytesapp.com/news/science/for-first-time-ai-scores-100-at-international-mathematical-olympiad/story) (News)

#### 2026-08｜The Hadamard conjecture is open, but can orders such as 668, for which no matrix was known, be constructed?

Epoch AI's open-problems page says an Anthropic researcher reported that a team of three humans and Claude produced Hadamard matrices for all admissible orders up to 2000 with no previously known construction (the page names order 668); Wikipedia's list gives twelve orders.

> **Limits：** Epoch has provisionally marked the problem solved by AI and will revise it if the team reports significant human contribution to the core ideas; the page does not describe how it was verified; the Hadamard conjecture itself is still open.

*Claude (internal Anthropic model)*　Sources：[Epoch AI](https://epoch.ai/frontiermath/open-problems/hadamard) (Reference) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-08｜If all zeros of a polynomial lie in the closed unit disk, must each zero have a zero of the derivative within distance 1? (Sendov's conjecture)

According to Wikipedia's roundup, Lech Mazur used GPT-5.6 Pro to give a proof for all degrees n ≥ 2; Terence Tao digested and simplified the argument and formalised it in Lean, with nearly all of the Lean code written by Claude Opus 5 under his direction. The proof also covers the Phelps–Rodriguez conjecture.

> **Limits：** The Lean project page states that no external or independent review has been performed and claims no novelty (an earlier Lean formalisation exists); it relies on numerical certificates.

*GPT-5.6 Pro (Lech Mazur); Claude Opus 5 for the Lean formalisation*　Sources：[Lean package (teorth/sendov)](https://reservoir.lean-lang.org/@teorth/sendov) (Reference) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-08-01｜How large can a binary error-correcting code with a given minimum distance be?

OpenAI says Astra gave exponentially improved bounds on the maximum size of binary codes at any prescribed minimum distance, with analogous results for high-dimensional spherical codes.

> **Limits：** Publisher's claim; OpenAI's page mentions no external expert review and says the arguments were formalised in Lean.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official)

#### 2026-08-01｜Does Connes's rigidity conjecture in operator algebras hold?

OpenAI says Astra disproved the conjecture.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

#### 2026-08-01｜How large can the volume of a convex body be if its centroid is its only interior lattice point? (Ehrhart's volume conjecture)

OpenAI says Astra determined this maximum volume in every dimension.

> **Limits：** Publisher's claim; OpenAI's page mentions no external expert review. Wikipedia's roundup describes it as a partial proof (the upper bound (n+1)^n/n!, equality case still open), which differs from OpenAI's wording.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-08-01｜How fast do multicolour triangle Ramsey numbers grow, and do the compactness and degeneracy conjectures of extremal graph theory hold? (Erdős problems #183, #146, #180)

OpenAI says Astra gave a superexponential lower bound for multicolour triangle Ramsey numbers (resolving Erdős problem #183) and results on the compactness and degeneracy conjectures in extremal graph theory (resolving #146 and #180).

> **Limits：** Publisher's claim; OpenAI's page mentions no external expert review.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official)

#### 2026-08-01｜Can every countable group be approximated by finite permutations? (Gromov's 1999 question on sofic groups)

OpenAI says Astra gave the first explicit construction of a non-sofic group, answering the question.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

#### 2026-08-01｜In high dimensions, what fraction of space can equal spheres fill at most? (upper bounds on sphere-packing density)

OpenAI says Astra gave new upper bounds on high-dimensional sphere-packing density, down to the Cohn–Elkies threshold.

> **Limits：** Publisher's claim; an improved upper bound does not determine the maximum density. OpenAI's page mentions no external expert review.

*OpenAI Astra (unreleased)*　Sources：[OpenAI](https://openai.com/index/ten-advances-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

#### 2026-08-10｜The Riemann Hypothesis is still open, but what proportion of the zeta function's nontrivial zeros can be proved to lie on the critical line? (partial progress toward the Riemann Hypothesis)

Anthropic reports that a research version of Claude raised the known lower bound from 41.6% to 67.2%, releasing the paper, expert notes and a Lean formalization.

> **Limits：** The Riemann hypothesis itself remains unproven; this was a byproduct of the attempt.

*Claude (research version)*　Sources：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (Official)

#### 2026-08-30｜The gap between consecutive primes is at most some constant infinitely often; how small can that constant be proved to be? (toward the twin prime conjecture)

OpenAI's paper Improved Short Gaps Between Primes says GPT-6 Astra proved that consecutive primes differ by at most 186 infinitely often, improving on the earlier 246. The method builds on the sieve methods of Zhang, Polymath 8 and Maynard.

> **Limits：** The paper includes a Lean formalisation, but it takes numerical integral bounds and exponential-sum estimates as explicit assumptions, so it does not verify the result from first principles; not independently verified; the twin prime conjecture (gap 2) remains open.

*GPT-6 Astra (OpenAI)*　Sources：[OpenAI paper (PDF)](https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/short_gaps.pdf) (Official) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-09-04｜Can the proof of Fermat's Last Theorem be fully checked by computer?

Anthropic reports dozens of Claude agents completed an end-to-end Lean formalization of the proof of Fermat's Last Theorem, about 13 million lines of Lean.

> **Limits：** Formal verification of a known proof, not new mathematics; company research.

*Claude*　Sources：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (Official)

#### 2026-09-07｜Does Köthe's conjecture in ring theory hold?

A preprint by Adamczewski, Böhmler and Marczinzik constructs a counterexample to Köthe's conjecture and answers a question of Rowen. Wikipedia's roundup says the work used GPT-6 Astra and includes a Lean formalisation.

> **Limits：** The arXiv page itself mentions neither AI nor Lean; those come from Wikipedia's roundup; a preprint with no peer-review information.

*GPT-6 Astra (with Epoch AI)*　Sources：[arXiv](https://arxiv.org/abs/2609.07996) (Paper) · [Wikipedia list](https://en.wikipedia.org/wiki/List_of_mathematical_discoveries_by_artificial_intelligence) (Reference)

#### 2026-09-08｜Can a smooth 3D fluid develop a singularity in finite time? (the Navier–Stokes Millennium Problem)

OpenAI says its internal model proved finite-time blowup for Navier–Stokes with a smooth external force, releasing a Lean formalization, plus a blowup result for the unforced Euler equations.

> **Limits：** Publisher's claim; not yet peer reviewed or recognised by the Clay Institute. Buckmaster and Alpöge posted related blowup results concurrently, with a dispute over credit.

*OpenAI internal model (GPT-6 Astra for Lean)*　Sources：[OpenAI](https://openai.com/index/navier-stokes-solution/) (Official) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (Official) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (News)

#### 2026-09-17｜Does the strong secretary conjecture hold for linear matroids?

Researchers obtained a proof of the conjecture for linear matroids through a conversation with ChatGPT.

> **Limits：** Another team posted essentially the same result with a nearly identical approach the day before.

*ChatGPT (GPT-6 Astra)*　Sources：[arXiv](https://arxiv.org/abs/2609.20797) (Paper) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (Paper)

#### 2026-09-28｜In high dimensions, how many equal spheres can touch a central one at once? (kissing-number lower bounds)

Zhejiang University's multi-agent Qiushi Engine searched, analysed and verified autonomously, improving kissing-number lower bounds in 19 dimensions (25, 27, 32–39, 43, 45, 49–55), e.g. K(25) ≥ 197,580 and K(55) ≥ 53,301,140.

> **Limits：** A preprint; the authors say each result comes with finite, independently checkable certificates, which I have not checked one by one.

*Qiushi Engine (Zhejiang University)*　Sources：[arXiv](https://arxiv.org/html/2609.35051) (Paper)

#### 2026-10-06｜How many mathematical problems can one AI model produce new results on at once?

OpenAI released new mathematical results from an internal model and Lean formalizations of some proofs. The publisher estimates average compute per result as equivalent to roughly three hours of ChatGPT Pro thinking, and provides reasoning summaries and attempted-problem statistics.

> **Limits：** Verification varies by result; each needs to be examined individually.

*OpenAI internal model*　Sources：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

