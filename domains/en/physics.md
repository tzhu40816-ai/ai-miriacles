<!-- 本文件由 scripts/build-docs.mjs 从 data/events.json 自动生成，请勿手工修改。 / Auto-generated from data/events.json; do not edit by hand. -->

# Physics: problems AI has solved

13 entries · [← Back to README](../../README.md)

#### 2009-04-03｜Given only motion data, can a machine find the physical law that describes it?

Schmidt and Lipson used symbolic regression to recover conservation laws such as energy from experimental data on pendulums and oscillators.

> **Limits：** Rediscovery of known laws, not new physics.

*Eureqa (symbolic regression)*　Sources：[Science 2009](https://doi.org/10.1126/science.1165893) (Paper)

#### 2015-09-09｜How do you design an experiment that produces complex high-dimensional entangled quantum states?

Krenn et al.'s program MELVIN automatically searched optical setups and found designs humans had not thought of; some were later built in the lab.

*MELVIN*　Sources：[arXiv](https://arxiv.org/abs/1509.02749) (Paper) · [PRL 2016](https://doi.org/10.1103/PhysRevLett.116.090405) (Paper)

#### 2016-06-07｜Can quantum many-body states, whose size grows exponentially, be represented and computed more efficiently?

Carleo and Troyer represented wavefunctions with neural networks and obtained high-accuracy ground states and dynamics for several 1D and 2D spin models.

> **Limits：** Specific models, not a general solution of the many-body problem.

*Neural-network quantum states*　Sources：[arXiv](https://arxiv.org/abs/1606.02318) (Paper) · [Science 2017](https://doi.org/10.1126/science.aag2302) (Paper)

#### 2017-02｜Can a neural network identify phases of matter without hand-picked order parameters?

Carrasquilla and Melko trained neural networks to tell ordered from disordered phases directly from spin configurations and to locate the phase transition.

*Neural networks (Carrasquilla & Melko)*　Sources：[Nature Physics 2017](https://doi.org/10.1038/nphys4035) (Paper)

#### 2020-01｜Can a neural network discover a physical concept such as heliocentrism from observations alone?

Iten et al.'s SciNet learned a sun-centred representation from planetary sky positions and found the minimal number of variables needed to describe the system.

> **Limits：** Rediscovery of known concepts in simple systems.

*SciNet*　Sources：[PRL 2020](https://doi.org/10.1103/PhysRevLett.124.010508) (Paper)

#### 2020-04-15｜Can symbolic regression rediscover 100 equations from the Feynman Lectures on Physics from data?

Udrescu and Tegmark's AI Feynman combined neural networks with physics-inspired simplification and rediscovered all 100 test equations, versus 71 for the previous best method.

> **Limits：** Rediscovery of known equations.

*AI Feynman*　Sources：[Science Advances 2020](https://doi.org/10.1126/sciadv.aay2631) (Paper)

#### 2020-09｜Can we compute the electronic structure of atoms and molecules more accurately from first principles?

DeepMind's FermiNet represented many-electron wavefunctions with a neural network, reaching near chemical accuracy on several small molecules.

*FermiNet*　Sources：[Phys. Rev. Research 2020](https://doi.org/10.1103/PhysRevResearch.2.033429) (Paper)

#### 2022-02-16｜How do you coordinate dozens of coils to shape hot plasma inside a tokamak?

A reinforcement-learning controller shaped a variety of plasma configurations on the real TCV tokamak in Switzerland.

*Deep RL (DeepMind + EPFL)*　Sources：[Nature 2022](https://doi.org/10.1038/s41586-021-04301-9) (Paper)

#### 2024-02-21｜Can tearing instabilities in fusion plasmas be predicted and avoided in advance?

A Princeton AI controller predicted tearing instabilities about 300 ms ahead on the DIII-D tokamak and adjusted in real time to keep the plasma at high performance.

*Deep RL (Princeton/DIII-D)*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-07024-9) (Paper)

#### 2024-11-20｜Can the errors that constantly arise in quantum computers be identified and corrected more accurately?

DeepMind's AlphaQubit decoded surface-code errors with a neural network and had lower error rates than the best earlier decoders on real data from Google's Sycamore processor.

> **Limits：** Not yet fast enough for real-time correction.

*AlphaQubit*　Sources：[Nature 2024](https://doi.org/10.1038/s41586-024-08148-8) (Paper)

#### 2026-02-13｜Are tree-level gluon scattering amplitudes with one negative- and all other positive-helicity gluons really zero?

Guevara, Lupsasca, Skinner, Strominger and colleagues showed these amplitudes do not vanish in the 'half-collinear' regime. Humans computed cases up to n=6, GPT-5.2 Pro simplified them and conjectured a formula for all n, and an internal OpenAI model spent about 12 hours producing a formal proof.

> **Limits：** The authors checked the formula analytically; the result holds in a specific kinematic regime.

*GPT-5.2 Pro and an internal OpenAI model*　Sources：[OpenAI](https://openai.com/index/new-result-theoretical-physics/) (Official) · [arXiv](https://arxiv.org/abs/2602.12176) (Paper)

#### 2026-03｜Can an equilibrium result for the Vlasov–Maxwell–Landau plasma equations be formalised semi-autonomously by AI?

A preprint reports a 'semi-autonomous formalization' in Lean of an equilibrium result for the Vlasov–Maxwell–Landau equations.

> **Limits：** Only title-level information has been read; a formalisation of an existing result.

*AI-assisted Lean formalization*　Sources：[arXiv](https://arxiv.org/abs/2603.15929) (Paper)

#### 2026-06｜In the theory of jamming, why do two critical exponents satisfy a + b = 1?

The relation had strong numerical support but no analytic proof. Nobel laureate Giorgio Parisi, Francesco Zamponi and colleagues obtained and checked a proof while working with Claude.

> **Limits：** Holds within the infinite-dimensional hard-sphere fullRSB framework.

*Claude*　Sources：[arXiv](https://arxiv.org/abs/2606.03300) (Paper) · [Live Science](https://livescience.com/physics-mathematics/mathematics/nobel-prize-winning-physicist-and-team-use-claude-ai-to-solve-decades-old-math-puzzle) (News)

