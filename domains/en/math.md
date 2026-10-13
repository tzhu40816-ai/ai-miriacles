<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# Mathematics: problems AI has solved

29 entries · [← Back to README](../../README.md)

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

#### 1976｜Can a machine invent mathematical concepts and conjectures on its own?

Douglas Lenat's AM started from set theory and, guided by heuristics, 'discovered' natural numbers and primes and re-proposed known conjectures such as Goldbach's.

> **Limits：** Rediscoveries, not new mathematics.

*AM (Automated Mathematician)*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Automated_Mathematician) (Reference)

#### 1996-10｜Is every Robbins algebra Boolean? (the 60-year-old Robbins conjecture)

William McCune's automated reasoning program EQP at Argonne found the key proof, settling — together with earlier results — a problem that had resisted mathematicians for decades.

*EQP*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Robbins_algebra) (Reference) · [New York Times](https://www.nytimes.com/1996/12/10/science/computer-math-proof-shows-reasoning-power.html) (News)

#### 2016-05｜Can the positive integers be 2-coloured so that no Pythagorean triple is monochromatic?

Heule and colleagues used a SAT solver to prove the answer is no: it works up to 7824 but becomes impossible at 7825. The proof is 200 TB.

> **Limits：** Automated reasoning plus massive computation, not learning-based AI.

*SAT solver*　Sources：[Wikipedia](https://en.wikipedia.org/wiki/Boolean_Pythagorean_triples_problem) (Reference) · [arXiv](https://arxiv.org/abs/1605.00723) (Paper)

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

#### 2025-11-03｜What happens when AI is applied to dozens of math problems at once?

Terence Tao and collaborators applied AlphaEvolve to 67 problems in analysis, combinatorics and geometry, rediscovering best-known constructions in many and improving some.

*AlphaEvolve*　Sources：[arXiv](https://arxiv.org/abs/2511.02864) (Paper)

#### 2025-11-20｜What is the answer to Erdős Problem #848, an extremal question in multiplicative number theory?

OpenAI reports GPT-5 supplied the key idea that researchers used to settle the problem.

> **Limits：** Publisher's report; see the paper for division of labour.

*GPT-5*　Sources：[OpenAI](https://cdn.openai.com/pdf/4a25f921-e4e0-479a-9b38-5367b47e8fd0/early-science-acceleration-experiments-with-gpt-5.pdf) (Official)

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

#### 2026-03-23｜Can the lower-bound construction for a Ramsey-type hypergraph problem be improved?

GPT-5.4 Pro produced an improved construction, and Epoch AI marked this FrontierMath open problem as solved.

*GPT-5.4 Pro*　Sources：[Epoch AI](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) (Official)

#### 2026-03-31｜Can several Erdős questions — small prime factors of binomial coefficients, splitting additive bases — be resolved?

An OpenAI internal model produced short proofs resolving these questions, released as a paper.

*OpenAI internal model*　Sources：[arXiv](https://arxiv.org/abs/2603.29961) (Paper)

#### 2026-04-15｜Is the Erdős–Sárközy–Szemerédi conjecture on primitive-set sums true? (Erdős #1196)

Prompted by Liam Price, GPT-5.4 Pro proved the sharp 1+O(1/log x) bound conjectured by Erdős, Sárközy and Szemerédi.

*GPT-5.4 Pro*　Sources：[erdosproblems.com](https://www.erdosproblems.com/history/1196) (Reference)

#### 2026-08-10｜What fraction of the Riemann zeta function's nontrivial zeros can be proven to lie on the critical line?

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

