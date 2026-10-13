<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# Mathematics: problems AI has solved

45 entries · [← Back to README](../../README.md)

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

#### 2023-12-14｜How large can a cap set — a set with no three points on a line — be made?

FunSearch had an LLM write programs that were automatically scored and evolved, finding larger cap sets in dimension 8 and improving an asymptotic lower bound.

> **Limits：** Improves constructions and lower bounds; the maximum is not determined.

*FunSearch*　Sources：[Nature 2023](https://doi.org/10.1038/s41586-023-06924-6) (Paper)

#### 2024-01-17｜Can a machine come up with the auxiliary constructions olympiad geometry needs?

AlphaGeometry solved 25 of 30 olympiad geometry problems, approaching the average IMO gold medallist.

*AlphaGeometry*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-023-06747-5) (Paper)

#### 2024-07-25｜Can AI earn a medal across a full International Mathematical Olympiad?

DeepMind's systems solved 4 of 6 IMO 2024 problems — silver-medal standard — with proofs written in the Lean formal language.

> **Limits：** Problems were manually formalised; some took far longer than contest time.

*AlphaProof + AlphaGeometry 2*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) (Official)

#### 2025-05-14｜Can two 4×4 complex matrices be multiplied with one fewer multiplication? How many spheres can touch one sphere in 11 dimensions?

AlphaEvolve found a 48-multiplication algorithm for 4×4 complex matrices (previously 49) and a 593-sphere kissing configuration in 11 dimensions, raising the known lower bound.

> **Limits：** 593 is a lower bound, not the proven maximum.

*AlphaEvolve*　Sources：[Google DeepMind](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) (Official) · [arXiv](https://arxiv.org/abs/2506.13131) (Paper)

#### 2025-07-21｜Working in natural language within contest time, can AI reach IMO gold?

Google DeepMind's Gemini Deep Think (officially graded by the IMO) and an OpenAI experimental model both reported solving 5 of 6 IMO 2025 problems, a gold-medal score.

> **Limits：** Competition problems have known answers; not the same as open research problems.

*Gemini Deep Think; OpenAI experimental model*　Sources：[Google DeepMind](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad) (Official) · [Simon Willison](https://simonwillison.net/2025/Jul/21/gemini-imo/) (News)

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

> **Limits：** Expert review was not complete; the remaining answers were still under review.

*OpenAI unreleased research system*　Sources：[arXiv](https://arxiv.org/abs/2602.05192) (Paper) · [OpenAI](https://openai.com/index/first-proof-submissions) (Official)

#### 2026-02-28｜Can the arcs of a particular 3D directed graph be split into three Hamiltonian cycles? (an open problem Knuth was working on)

Donald Knuth wrote that Claude Opus 4.6 found, in about an hour of exploration, a construction that works for all odd m; Filip Stappers tested m = 3 to 101 and Knuth then proved the construction correct himself.

> **Limits：** Only odd m was solved at the time; even m was open, and Knuth's postscripts report it was later settled with other AI systems. The proof itself was supplied by a human.

*Claude Opus 4.6*　Sources：[Donald Knuth (note)](https://cs.stanford.edu/~knuth/papers/claude-cycles.pdf) (Official)

#### 2026-03-23｜Can the lower-bound construction for a Ramsey-type hypergraph problem be improved?

GPT-5.4 Pro produced an improved construction, and Epoch AI marked this FrontierMath open problem as solved.

*GPT-5.4 Pro*　Sources：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (Official)

#### 2026-03-31｜Can several Erdős questions — small prime factors of binomial coefficients, splitting additive bases — be resolved?

An OpenAI internal model produced short proofs resolving these questions, released as a paper.

*OpenAI internal model*　Sources：[arXiv](https://arxiv.org/abs/2603.29961) (Paper)

#### 2026-04-15｜Is the Erdős–Sárközy–Szemerédi conjecture on primitive-set sums true? (Erdős #1196)

Prompted by Liam Price, GPT-5.4 Pro proved the sharp 1+O(1/log x) bound conjectured by Erdős, Sárközy and Szemerédi.

*GPT-5.4 Pro*　Sources：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (Reference)

#### 2026-06｜By mid-2026, how many open Erdős problems has AI solved?

A wiki maintained by Terence Tao records AI contributions to Erdős problems problem by problem and lists those solved essentially by AI alone — for example #125, #741, #38 and #694 in 2026, and #90 solved in May by an OpenAI internal model and Claude Mythos.

> **Limits：** The page notes some results were later found in prior literature; its data runs to 30 June 2026 and it is no longer updated.

*GPT-5.x, Claude, Gemini, Aristotle, Aletheia and others*　Sources：[Tao's wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems) (Reference) · [Erdős #90](https://www.erdosproblems.com/90) (Reference) · [Erdős #619](https://www.erdosproblems.com/619) (Reference)

#### 2026-07-23｜Can AI score full marks on all six International Mathematical Olympiad problems?

Reports say Huawei's Celia and Xiaohongshu's dots-note-3.0 scored a perfect 42/42 at IMO 2026 in Shanghai, whereas in 2025 Google's and OpenAI's models reached only the gold line.

> **Limits：** Company-announced; the report mentions no official IMO grading and gives no grading details.

*Huawei Celia; Xiaohongshu dots-note-3.0*　Sources：[NewsBytes](https://www.newsbytesapp.com/news/science/for-first-time-ai-scores-100-at-international-mathematical-olympiad/story) (News)

#### 2026-08-01｜Does Connes's rigidity conjecture in operator algebras hold?

OpenAI says Astra disproved the conjecture.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-01｜Can every countable group be approximated by finite permutations? (Gromov's 1999 question on sofic groups)

OpenAI says Astra gave the first explicit construction of a non-sofic group, answering the question.

> **Limits：** Publisher's claim; Lean formalisation is public, peer review pending.

*OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-01｜In high dimensions, what fraction of space can equal spheres fill at most? (upper bounds on sphere-packing density)

OpenAI says Astra improved the general upper bound on sphere-packing density in high dimensions — the first improvement since 1978.

> **Limits：** Publisher's claim; an improved upper bound does not determine the maximum density. Peer review pending.

*OpenAI Astra (unreleased)*　Sources：[GitHub openai/math](https://github.com/openai/math) (Official) · [Noqta](https://noqta.tn/en/news/openai-astra-ten-math-proofs-lean-certificates-2026) (News)

#### 2026-08-10｜The Riemann Hypothesis is still open, but what proportion of the zeta function's nontrivial zeros can be proved to lie on the critical line? (partial progress toward the Riemann Hypothesis)

Anthropic reports that a research version of Claude raised the known lower bound from 41.6% to 67.2%, releasing the paper, expert notes and a Lean formalization.

> **Limits：** The Riemann hypothesis itself remains unproven; this was a byproduct of the attempt.

*Claude (research version)*　Sources：[Anthropic](https://www.anthropic.com/research/riemann-zeta) (Official)

#### 2026-09-04｜Can the proof of Fermat's Last Theorem be fully checked by computer?

Anthropic reports dozens of Claude agents completed an end-to-end Lean formalization of the proof of Fermat's Last Theorem, about 13 million lines of Lean.

> **Limits：** Formal verification of a known proof, not new mathematics; company research.

*Claude*　Sources：[Anthropic](https://www.anthropic.com/news/formalizing-fermats-last-theorem) (Official)

#### 2026-09-08｜Can a smooth 3D fluid develop a singularity in finite time? (the Navier–Stokes Millennium Problem)

OpenAI says its internal model proved finite-time blowup for Navier–Stokes with a smooth external force, releasing a Lean formalization, plus a blowup result for the unforced Euler equations.

> **Limits：** Publisher's claim; not yet peer reviewed or recognised by the Clay Institute. Buckmaster and Alpöge posted related blowup results concurrently, with a dispute over credit.

*OpenAI internal model (GPT-6 Astra for Lean)*　Sources：[OpenAI](https://openai.com/index/navier-stokes-solution/) (Official) · [GitHub (Lean)](https://github.com/openai/NavierStokesAndEuler) (Official) · [Axios](https://axios.com/2026/09/08/ai-math-anthropic-openai-google) (News)

#### 2026-09-17｜Does the strong secretary conjecture hold for linear matroids?

Researchers obtained a proof of the conjecture for linear matroids through a conversation with ChatGPT.

> **Limits：** Another team posted essentially the same result with a nearly identical approach the day before.

*ChatGPT (GPT-6 Astra)*　Sources：[arXiv](https://arxiv.org/abs/2609.20797) (Paper) · [arXiv (concurrent)](https://arxiv.org/abs/2609.19118) (Paper)

#### 2026-10-06｜How many mathematical problems can one AI model produce new results on at once?

OpenAI released a large batch of new mathematical results from an internal model — about three hours of reasoning each on average — many with Lean formalizations.

> **Limits：** Verification varies by result; each needs to be examined individually.

*OpenAI internal model*　Sources：[OpenAI](https://openai.com/index/sharing-ai-progress-in-mathematics/) (Official) · [GitHub openai/math](https://github.com/openai/math) (Official)

