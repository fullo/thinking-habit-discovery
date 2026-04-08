// Scientific papers database for the Thinking Habit Discovery project
// Extracted from: dimensioni_pensiero.md, thinking_patterns_catalog.md, condizioni_facilitanti.md

export const papers = [
  // ============================================================
  // D1 — COGNITIVE CHANNEL
  // ============================================================
  {
    id: "fernyhough-2016",
    authors: "Fernyhough, C.",
    year: 2016,
    title: "The Voices Within: The History and Science of How We Talk to Ourselves",
    dimension: ["D1", "D2"],
    relevance: "Foundational work on inner speech as condensed, fragmented internal dialogue evolving from Vygotskian egocentric speech. Central to the verbal-internal channel.",
    doi: null
  },
  {
    id: "morin-michaud-2007",
    authors: "Morin, A. & Michaud, J.",
    year: 2007,
    title: "Self-awareness and the left inferior frontal gyrus: Inner speech use during self-related processing",
    dimension: ["D1"],
    relevance: "Demonstrates activation of Broca's area and superior temporal cortex during self-talk, providing neural evidence for inner speech as a cognitive channel.",
    doi: "10.1016/j.brainresbull.2007.06.013"
  },
  {
    id: "kahneman-2011",
    authors: "Kahneman, D.",
    year: 2011,
    title: "Thinking, Fast and Slow",
    dimension: ["D1", "D2"],
    relevance: "System 2 (slow, deliberate thinking) is often verbal. Foundational framework for understanding cognitive effort and reasoning strategies.",
    doi: null
  },
  {
    id: "hurlburt-2011",
    authors: "Hurlburt, R. T.",
    year: 2011,
    title: "Investigating Pristine Inner Experience: Moments of Truth",
    dimension: ["D1"],
    relevance: "Documents unsymbolized thinking — thought without words, images, or sensory form — challenging assumptions that all cognition is language-based.",
    doi: "10.1017/CBO9780511842627"
  },
  {
    id: "kosslyn-1994",
    authors: "Kosslyn, S. M.",
    year: 1994,
    title: "Image and Brain: The Resolution of the Imagery Debate",
    dimension: ["D1"],
    relevance: "Demonstrates that mental images activate primary visual cortex, establishing the neurological basis of visual-spatial thinking as a genuine cognitive channel.",
    doi: "10.7551/mitpress/3653.001.0001"
  },
  {
    id: "grandin-2006",
    authors: "Grandin, T.",
    year: 2006,
    title: "Thinking in Pictures: My Life with Autism",
    dimension: ["D1"],
    relevance: "Paradigmatic case of predominantly visual thinking, demonstrating that some individuals think almost entirely in images rather than words.",
    doi: null
  },
  {
    id: "kozhevnikov-2005",
    authors: "Kozhevnikov, M., Kosslyn, S. & Shephard, J.",
    year: 2005,
    title: "Spatial versus object visualizers: A new characterization of visual cognitive style",
    dimension: ["D1"],
    relevance: "Distinguishes visual-spatial from verbal cognitive styles, showing these represent distinct processing preferences with different neural substrates.",
    doi: "10.3758/bf03195337"
  },
  {
    id: "zeman-2015",
    authors: "Zeman, A., Dewar, M. & Della Sala, S.",
    year: 2015,
    title: "Lives without imagery — Congenital aphantasia",
    dimension: ["D1"],
    relevance: "First formal characterization of aphantasia — complete absence of mental imagery — defining one extreme of the visual-spatial cognitive channel.",
    doi: "10.1016/j.cortex.2015.05.019"
  },
  {
    id: "zeman-2020",
    authors: "Zeman, A., Milton, F., Della Sala, S., Dewar, M., Frayling, T., Gadber, J., Hattersley, A., Heron-Maxwell, C., Lau-Zhu, A., Thorley, C., Winlove, C. & Byrd, E.",
    year: 2020,
    title: "Phantasia — The psychological significance of lifelong visual imagery vividness extremes",
    dimension: ["D1"],
    relevance: "Shows that aphantasic individuals use compensatory abstract strategies, confirming abstract-propositional thinking as a distinct cognitive channel.",
    doi: "10.1016/j.cortex.2020.04.003"
  },
  {
    id: "varela-1991",
    authors: "Varela, F. J., Thompson, E. & Rosch, E.",
    year: 1991,
    title: "The Embodied Mind: Cognitive Science and Human Experience",
    dimension: ["D1"],
    relevance: "Foundational text for embodied cognition — the idea that thinking passes through the body and is constituted by sensorimotor interaction, not just brain computation.",
    doi: "10.7551/mitpress/9780262529365.001.0001"
  },
  {
    id: "lakoff-johnson-1999",
    authors: "Lakoff, G. & Johnson, M.",
    year: 1999,
    title: "Philosophy in the Flesh: The Embodied Mind and its Challenge to Western Thought",
    dimension: ["D1"],
    relevance: "Extends embodied cognition theory showing how abstract thought is grounded in bodily experience through conceptual metaphors.",
    doi: null
  },
  {
    id: "goldin-meadow-2003",
    authors: "Goldin-Meadow, S.",
    year: 2003,
    title: "Hearing Gesture: How Our Hands Help Us Think",
    dimension: ["D1"],
    relevance: "Demonstrates that gestures are not mere accompaniment to thought — they actively influence and shape cognitive processes.",
    doi: "10.2307/j.ctv1w9m9ds"
  },
  {
    id: "damasio-1994",
    authors: "Damasio, A. R.",
    year: 1994,
    title: "Descartes' Error: Emotion, Reason, and the Human Brain",
    dimension: ["D1"],
    relevance: "Introduces the somatic marker hypothesis: emotions and bodily sensations serve as cognitive shortcuts in decision-making, supporting the somatic cognitive channel.",
    doi: null
  },
  {
    id: "craig-2002",
    authors: "Craig, A. D.",
    year: 2002,
    title: "How do you feel? Interoception: the sense of the physiological condition of the body",
    dimension: ["D1"],
    relevance: "Establishes interoception — perception of internal body signals — as a genuine cognitive input channel, supporting somatic thinking.",
    doi: "10.1038/nrn894"
  },
  {
    id: "thompson-2007",
    authors: "Thompson, E.",
    year: 2007,
    title: "Mind in Life: Biology, Phenomenology, and the Sciences of Mind",
    dimension: ["D1"],
    relevance: "Advances enactivism — cognition emerges from sensorimotor interaction with the environment — extending the theoretical basis for embodied thinking.",
    doi: null
  },
  {
    id: "levitin-2006",
    authors: "Levitin, D. J.",
    year: 2006,
    title: "This Is Your Brain on Music: The Science of a Human Obsession",
    dimension: ["D1"],
    relevance: "Shows that music activates extended cognitive networks, supporting the auditory-rhythmic channel as a genuine mode of non-verbal thought.",
    doi: null
  },
  {
    id: "halpern-2015",
    authors: "Halpern, A. R.",
    year: 2015,
    title: "Differences in auditory imagery self-report predict neural and behavioral outcomes",
    dimension: ["D1"],
    relevance: "Establishes auditory imagery — hearing sounds in the mind — as a measurable cognitive substrate, supporting the auditory-rhythmic thinking channel.",
    doi: "10.1037/pmu0000081"
  },
  {
    id: "hadamard-1945",
    authors: "Hadamard, J.",
    year: 1945,
    title: "The Psychology of Invention in the Mathematical Field",
    dimension: ["D1"],
    relevance: "Classic work on mathematical thinking as a paradigmatic case of abstract-propositional thought without sensory support.",
    doi: "10.2307/j.ctvzsmf1c"
  },
  {
    id: "rizzolatti-craighero-2004",
    authors: "Rizzolatti, G. & Craighero, L.",
    year: 2004,
    title: "The mirror-neuron system",
    dimension: ["D1"],
    relevance: "Describes the mirror neuron system underlying motor simulation and imitative cognition, supporting the somatic-kinesthetic channel.",
    doi: "10.1146/annurev.neuro.27.070203.144230"
  },

  // ============================================================
  // D2 — STRATEGY / DYNAMICS
  // ============================================================
  {
    id: "johnson-johnson-2007",
    authors: "Johnson, D. W. & Johnson, R. T.",
    year: 2007,
    title: "Creative Controversy: Intellectual Challenge in the Classroom",
    dimension: ["D2"],
    relevance: "Establishes constructive controversy as a productive cognitive strategy where intellectual conflict drives deeper understanding.",
    doi: null
  },
  {
    id: "kahneman-klein-2009",
    authors: "Kahneman, D. & Klein, G.",
    year: 2009,
    title: "Conditions for intuitive expertise: A failure to disagree",
    dimension: ["D2"],
    relevance: "Defines adversarial collaboration as a thinking strategy and identifies conditions under which expert intuition is legitimate versus illusory.",
    doi: "10.1037/a0016755"
  },
  {
    id: "schwenk-1990",
    authors: "Schwenk, C. R.",
    year: 1990,
    title: "Effects of devil's advocacy and dialectical inquiry on decision making: A meta-analysis",
    dimension: ["D2"],
    relevance: "Meta-analysis showing devil's advocacy as an effective decision-making technique that improves quality of reasoning.",
    doi: "10.1016/0749-5978(90)90051-A"
  },
  {
    id: "lord-1984",
    authors: "Lord, C. G., Lepper, M. R. & Preston, E.",
    year: 1984,
    title: "Considering the opposite: A corrective strategy for social judgment",
    dimension: ["D2"],
    relevance: "Demonstrates that considering-the-opposite reduces confirmation bias, validating adversarial self-questioning as a debiasing strategy.",
    doi: "10.1037/0022-3514.47.6.1231"
  },
  {
    id: "botvinick-2001",
    authors: "Botvinick, M. M., Braver, T. S., Barch, D. M., Carter, C. S. & Cohen, J. D.",
    year: 2001,
    title: "Conflict monitoring and cognitive control",
    dimension: ["D2"],
    relevance: "Identifies the anterior cingulate cortex's role in error monitoring and conflict detection, the neural substrate of adversarial thinking.",
    doi: "10.1037/0033-295X.108.3.624"
  },
  {
    id: "beck-1979",
    authors: "Beck, A. T.",
    year: 1979,
    title: "Cognitive Therapy and the Emotional Disorders",
    dimension: ["D2"],
    relevance: "Introduces Socratic questioning in cognitive therapy as a method for restructuring beliefs through progressive interrogation.",
    doi: null
  },
  {
    id: "pressley-1987",
    authors: "Pressley, M., McDaniel, M. A., Turnure, J. E., Wood, E. & Ahmad, M.",
    year: 1987,
    title: "Generation and precision of elaborative interrogation",
    dimension: ["D2"],
    relevance: "Shows that asking 'why?' (elaborative interrogation) significantly improves comprehension and learning, supporting the Socratic strategy.",
    doi: "10.1037/0278-7393.13.2.291"
  },
  {
    id: "chi-1989",
    authors: "Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P. & Glaser, R.",
    year: 1989,
    title: "Self-explanations: How students study and use examples in learning to solve problems",
    dimension: ["D2"],
    relevance: "Establishes the self-explanation effect: asking 'why does this work?' improves learning, supporting both Socratic and teaching-to-think strategies.",
    doi: "10.1207/s15516709cog1302_1"
  },
  {
    id: "flower-hayes-1981",
    authors: "Flower, L. & Hayes, J. R.",
    year: 1981,
    title: "A cognitive process theory of writing",
    dimension: ["D2"],
    relevance: "Models writing as a draft-revise cycle, establishing iterative refinement as a fundamental cognitive strategy in composition.",
    doi: "10.2307/356600"
  },
  {
    id: "norman-1988",
    authors: "Norman, D. A.",
    year: 1988,
    title: "The Design of Everyday Things",
    dimension: ["D2"],
    relevance: "Introduces iterative design as a cognitive strategy — improving through successive approximations rather than seeking perfection initially.",
    doi: null
  },
  {
    id: "chase-2009",
    authors: "Chase, C. C., Chin, D. B., Oppezzo, M. A. & Schwartz, D. L.",
    year: 2009,
    title: "Teachable agents and the protege effect: Increasing the effort towards learning",
    dimension: ["D2"],
    relevance: "Demonstrates the protege effect: teaching improves the teacher's own understanding, validating teaching-to-think as a cognitive strategy.",
    doi: "10.1007/s10956-009-9180-4"
  },
  {
    id: "duran-2017",
    authors: "Duran, D.",
    year: 2017,
    title: "Learning-by-teaching. Evidence and implications as a pedagogical mechanism",
    dimension: ["D2"],
    relevance: "Reviews evidence that learning by teaching produces deeper understanding than passive study, supporting the teaching-to-think strategy.",
    doi: "10.1080/14703297.2016.1156011"
  },
  {
    id: "polya-1945",
    authors: "Polya, G.",
    year: 1945,
    title: "How to Solve It: A New Aspect of Mathematical Method",
    dimension: ["D2"],
    relevance: "Classic text on decomposition as a problem-solving strategy, foundational for the deconstructive/reverse-engineering approach.",
    doi: "10.1515/9781400828678"
  },
  {
    id: "ratcliff-1978",
    authors: "Ratcliff, R.",
    year: 1978,
    title: "A theory of memory retrieval",
    dimension: ["D2"],
    relevance: "Introduces the drift-diffusion model showing how evidence accumulates toward a decision threshold, supporting the accumulative-threshold strategy.",
    doi: "10.1037/0033-295X.85.2.59"
  },
  {
    id: "kounios-beeman-2009",
    authors: "Kounios, J. & Beeman, M.",
    year: 2009,
    title: "The Aha! moment: The cognitive neuroscience of insight",
    dimension: ["D2"],
    relevance: "Shows gamma activity in right superior temporal gyrus preceding 'aha' moments, providing neural evidence for accumulative-threshold insight.",
    doi: "10.1111/j.1467-8721.2009.01638.x"
  },
  {
    id: "tversky-1972",
    authors: "Tversky, A.",
    year: 1972,
    title: "Elimination by aspects: A theory of choice",
    dimension: ["D2"],
    relevance: "Formalizes elimination by aspects as a decision strategy — systematically discarding options to converge on a choice.",
    doi: "10.1037/h0032955"
  },
  {
    id: "simon-1956",
    authors: "Simon, H. A.",
    year: 1956,
    title: "Rational choice and the structure of the environment",
    dimension: ["D2"],
    relevance: "Introduces bounded rationality and satisficing — proceeding by elimination under cognitive constraints rather than optimizing.",
    doi: "10.1037/h0042769"
  },
  {
    id: "hofstadter-sander-2013",
    authors: "Hofstadter, D. & Sander, E.",
    year: 2013,
    title: "Surfaces and Essences: Analogy as the Fuel and Fire of Thinking",
    dimension: ["D2", "D5"],
    relevance: "Argues analogy is the core of all cognition — not a rhetorical device but the fundamental mechanism by which we understand anything.",
    doi: null
  },
  {
    id: "gentner-1983",
    authors: "Gentner, D.",
    year: 1983,
    title: "Structure-mapping: A theoretical framework for analogy",
    dimension: ["D2", "D5"],
    relevance: "Establishes structure-mapping theory: analogy transfers structural relations between domains, not superficial attributes.",
    doi: "10.1016/s0364-0213(83)80009-3"
  },
  {
    id: "green-2010",
    authors: "Green, A. E., Kraemer, D. J. M., Fugelsang, J. A., Gray, J. R. & Dunbar, K. N.",
    year: 2010,
    title: "Connecting long distance: Semantic distance in analogical reasoning modulates frontopolar cortex activity",
    dimension: ["D2", "D5"],
    relevance: "Identifies rostrolateral prefrontal cortex activation during analogical reasoning, providing neural evidence for analogy as a distinct cognitive operation.",
    doi: "10.1093/cercor/bhp081"
  },
  {
    id: "lakoff-johnson-1980",
    authors: "Lakoff, G. & Johnson, M.",
    year: 1980,
    title: "Metaphors We Live By",
    dimension: ["D2", "D5"],
    relevance: "Shows that conceptual metaphors structure everyday thought — we understand abstract concepts through embodied metaphorical mappings.",
    doi: "10.7208/chicago/9780226470993.001.0001"
  },
  {
    id: "osborn-1953",
    authors: "Osborn, A. F.",
    year: 1953,
    title: "Applied Imagination: Principles and Procedures of Creative Problem-Solving",
    dimension: ["D2", "D3"],
    relevance: "Establishes brainstorming rules — quantity generates quality, judgment suspended — foundational for the generative-expansive strategy.",
    doi: null
  },
  {
    id: "torrance-1966",
    authors: "Torrance, E. P.",
    year: 1966,
    title: "Torrance Tests of Creative Thinking",
    dimension: ["D2", "D3"],
    relevance: "Defines fluency, flexibility, and originality as measurable dimensions of divergent thinking, establishing empirical assessment of creative cognition.",
    doi: "10.1037/t05532-000"
  },
  {
    id: "beaty-2016",
    authors: "Beaty, R. E., Benedek, M., Silvia, P. J. & Schacter, D. L.",
    year: 2016,
    title: "Creative cognition and brain network dynamics",
    dimension: ["D2", "D3", "CF"],
    relevance: "Shows Default Mode Network involvement in spontaneous idea generation and its interaction with executive control, providing neural basis for divergent-convergent cycling.",
    doi: "10.1016/j.tics.2015.10.004"
  },
  {
    id: "barnett-ceci-2002",
    authors: "Barnett, S. M. & Ceci, S. J.",
    year: 2002,
    title: "When and where do we apply what we learn? A taxonomy for far transfer",
    dimension: ["D2"],
    relevance: "Distinguishes near from far transfer in learning, providing the framework for understanding cross-domain translation as a cognitive strategy.",
    doi: "10.1037/0033-2909.128.4.612"
  },
  {
    id: "repko-2008",
    authors: "Repko, A. F.",
    year: 2008,
    title: "Interdisciplinary Research: Process and Theory",
    dimension: ["D2"],
    relevance: "Frames interdisciplinarity as a cognitive strategy for translating problems across domain boundaries.",
    doi: null
  },
  {
    id: "star-griesemer-1989",
    authors: "Star, S. L. & Griesemer, J. R.",
    year: 1989,
    title: "Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907-39",
    dimension: ["D2"],
    relevance: "Introduces boundary objects — artifacts that translate meaning between communities of practice — supporting the cross-domain translation strategy.",
    doi: "10.1177/030631289019003001"
  },
  {
    id: "bruner-1986",
    authors: "Bruner, J.",
    year: 1986,
    title: "Actual Minds, Possible Worlds",
    dimension: ["D2"],
    relevance: "Distinguishes paradigmatic (logical) from narrative thinking as two fundamental cognitive modes, establishing narrative as a legitimate reasoning strategy.",
    doi: "10.4159/9780674029019"
  },
  {
    id: "sarbin-1986",
    authors: "Sarbin, T. R.",
    year: 1986,
    title: "Narrative Psychology: The Storied Nature of Human Conduct",
    dimension: ["D2"],
    relevance: "Foundational text for narrative psychology — the idea that humans naturally organize experience and understanding through stories.",
    doi: null
  },
  {
    id: "mcadams-1993",
    authors: "McAdams, D. P.",
    year: 1993,
    title: "The Stories We Live By: Personal Myths and the Making of the Self",
    dimension: ["D2"],
    relevance: "Shows how narrative identity shapes cognition — we understand ourselves and problems by constructing personal stories.",
    doi: null
  },
  {
    id: "gottschall-2012",
    authors: "Gottschall, J.",
    year: 2012,
    title: "The Storytelling Animal: How Stories Make Us Human",
    dimension: ["D2"],
    relevance: "Argues the brain is a narrative machine — we compulsively construct stories to make sense of experience.",
    doi: null
  },
  {
    id: "green-brock-2000",
    authors: "Green, M. C. & Brock, T. C.",
    year: 2000,
    title: "The role of transportation in the persuasiveness of public narratives",
    dimension: ["D2"],
    relevance: "Demonstrates narrative transport — stories activate mental simulation and emotion, making narrative a powerful cognitive tool.",
    doi: "10.1037/0022-3514.79.5.701"
  },
  {
    id: "schacter-addis-2007",
    authors: "Schacter, D. L. & Addis, D. R.",
    year: 2007,
    title: "The cognitive neuroscience of constructive memory: Remembering the past and imagining the future",
    dimension: ["D2"],
    relevance: "Shows that the brain reuses episodic memory circuits for future simulation, establishing the neural basis for mental simulation thinking.",
    doi: "10.1098/rstb.2007.2087"
  },
  {
    id: "johnson-laird-1983",
    authors: "Johnson-Laird, P. N.",
    year: 1983,
    title: "Mental Models: Towards a Cognitive Science of Language, Inference, and Consciousness",
    dimension: ["D2", "D5"],
    relevance: "Introduces mental model theory — people reason by constructing and manipulating internal models rather than applying formal logic rules.",
    doi: null
  },
  {
    id: "gilbert-wilson-2007",
    authors: "Gilbert, D. T. & Wilson, T. D.",
    year: 2007,
    title: "Prospection: Experiencing the future",
    dimension: ["D2"],
    relevance: "Establishes prospection — the ability to pre-experience the future — as a fundamental cognitive capacity underlying mental simulation.",
    doi: "10.1126/science.1144161"
  },
  {
    id: "klein-2007",
    authors: "Klein, G.",
    year: 2007,
    title: "Performing a project premortem",
    dimension: ["D2"],
    relevance: "Introduces the pre-mortem technique — imagining failure to identify causes — as a structured application of prospective mental simulation.",
    doi: "10.1109/emr.2008.4534313"
  },
  {
    id: "chase-simon-1973",
    authors: "Chase, W. G. & Simon, H. A.",
    year: 1973,
    title: "Perception in chess",
    dimension: ["D2"],
    relevance: "Classic study showing chess masters perceive patterns (chunks) rather than individual pieces, establishing pattern recognition as the basis of expertise.",
    doi: "10.1016/0010-0285(73)90004-2"
  },
  {
    id: "saffran-1996",
    authors: "Saffran, J. R., Aslin, R. N. & Newport, E. L.",
    year: 1996,
    title: "Statistical learning by 8-month-old infants",
    dimension: ["D2", "D5"],
    relevance: "Demonstrates that the brain automatically extracts statistical patterns from input, supporting pattern recognition and inductive reasoning as innate capacities.",
    doi: "10.1126/science.274.5294.1926"
  },
  {
    id: "friston-2010",
    authors: "Friston, K.",
    year: 2010,
    title: "The free-energy principle: A unified brain theory?",
    dimension: ["D2"],
    relevance: "Proposes the Bayesian brain hypothesis — the brain as a predictive machine constantly seeking regularities — supporting pattern recognition thinking.",
    doi: "10.1038/nrn2787"
  },
  {
    id: "klein-1998",
    authors: "Klein, G.",
    year: 1998,
    title: "Sources of Power: How People Make Decisions",
    dimension: ["D2"],
    relevance: "Introduces recognition-primed decision making — experts decide by recognizing familiar patterns rather than analyzing options — supporting pattern-recognition strategy.",
    doi: "10.7551/mitpress/11307.001.0001"
  },
  {
    id: "von-neumann-morgenstern-1944",
    authors: "Von Neumann, J. & Morgenstern, O.",
    year: 1944,
    title: "Theory of Games and Economic Behavior",
    dimension: ["D2"],
    relevance: "Foundational text for game theory and strategic thinking — anticipating opponents as a cognitive strategy.",
    doi: null
  },
  {
    id: "ku-2005",
    authors: "Ku, G., Malhotra, D. & Murnighan, J. K.",
    year: 2005,
    title: "Towards a competitive arousal model of decision-making: A study of auction fever in live and Internet auctions",
    dimension: ["D2"],
    relevance: "Demonstrates competitive arousal effects on cognitive performance, supporting competition as a thinking activator.",
    doi: "10.1016/j.obhdp.2004.10.001"
  },
  {
    id: "deterding-2011",
    authors: "Deterding, S., Dixon, D., Khaled, R. & Nacke, L.",
    year: 2011,
    title: "From game design elements to gamefulness: Defining 'gamification'",
    dimension: ["D2"],
    relevance: "Defines gamification and its effects on cognitive engagement, supporting competitive-strategic thinking as a motivational cognitive strategy.",
    doi: "10.1145/2181037.2181040"
  },
  {
    id: "caillois-1958",
    authors: "Caillois, R.",
    year: 1958,
    title: "Les jeux et les hommes: Le masque et le vertige",
    dimension: ["D2"],
    relevance: "Classifies competition (agon) as a fundamental form of play, providing philosophical grounding for competitive thinking.",
    doi: "10.14375/np.9782072643095"
  },
  {
    id: "flavell-1979",
    authors: "Flavell, J. H.",
    year: 1979,
    title: "Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry",
    dimension: ["D2"],
    relevance: "Foundational definition of metacognition — knowledge and regulation of one's own cognitive processes — as a distinct thinking strategy.",
    doi: "10.1037/0003-066X.34.10.906"
  },
  {
    id: "nelson-narens-1990",
    authors: "Nelson, T. O. & Narens, L.",
    year: 1990,
    title: "Metamemory: A theoretical framework and new findings",
    dimension: ["D2"],
    relevance: "Develops the theoretical framework for metamemory and metacognitive monitoring, supporting metacognition as an active thinking strategy.",
    doi: "10.1016/S0079-7421(08)60053-5"
  },
  {
    id: "zimmerman-2002",
    authors: "Zimmerman, B. J.",
    year: 2002,
    title: "Becoming a self-regulated learner: An overview",
    dimension: ["D2"],
    relevance: "Describes self-regulated learning cycle (planning, monitoring, reflection) — metacognitive strategy applied to learning contexts.",
    doi: "10.1207/S15430421TIP4102_2"
  },
  {
    id: "hart-1965",
    authors: "Hart, J. T.",
    year: 1965,
    title: "Memory and the feeling-of-knowing experience",
    dimension: ["D2"],
    relevance: "First empirical study of feeling-of-knowing — the metacognitive sense of knowing that you know (or don't), supporting metacognitive monitoring.",
    doi: "10.1037/h0022263"
  },
  {
    id: "premack-woodruff-1978",
    authors: "Premack, D. & Woodruff, G.",
    year: 1978,
    title: "Does the chimpanzee have a theory of mind?",
    dimension: ["D2"],
    relevance: "Introduces Theory of Mind — the ability to attribute mental states to others — foundational for perspective-taking as a cognitive strategy.",
    doi: "10.1017/S0140525X00076512"
  },
  {
    id: "de-bono-1985",
    authors: "De Bono, E.",
    year: 1985,
    title: "Six Thinking Hats",
    dimension: ["D2"],
    relevance: "Formalizes deliberate perspective-switching as a structured thinking method, supporting perspective-taking strategy.",
    doi: null
  },
  {
    id: "mitchell-1989",
    authors: "Mitchell, D. J., Russo, J. E. & Pennington, N.",
    year: 1989,
    title: "Back to the future: Temporal perspective in the explanation of events",
    dimension: ["D2", "D3"],
    relevance: "Shows prospective hindsight increases causal identification by 30%, supporting temporal-scale shifting and pre-mortem as cognitive strategies.",
    doi: "10.1002/bdm.3960020103"
  },
  {
    id: "norem-cantor-1986",
    authors: "Norem, J. K. & Cantor, N.",
    year: 1986,
    title: "Defensive pessimism: Harnessing anxiety as motivation",
    dimension: ["D2"],
    relevance: "Establishes defensive pessimism as an adaptive cognitive strategy — imagining worst cases to motivate preparation.",
    doi: "10.1037/0022-3514.51.6.1208"
  },

  // ============================================================
  // D3 — DIRECTION
  // ============================================================
  {
    id: "guilford-1956",
    authors: "Guilford, J. P.",
    year: 1956,
    title: "The structure of intellect",
    dimension: ["D3"],
    relevance: "Introduces the distinction between divergent and convergent thinking — the two fundamental directions of cognitive movement.",
    doi: "10.1037/h0040755"
  },
  {
    id: "tversky-kahneman-1974",
    authors: "Tversky, A. & Kahneman, D.",
    year: 1974,
    title: "Judgment under uncertainty: Heuristics and biases",
    dimension: ["D3"],
    relevance: "Describes how decision-making converges through heuristics and biases, relevant to understanding convergent thinking direction.",
    doi: "10.1126/science.185.4157.1124"
  },
  {
    id: "de-bono-1967",
    authors: "De Bono, E.",
    year: 1967,
    title: "The Use of Lateral Thinking",
    dimension: ["D3"],
    relevance: "Introduces lateral thinking — deliberate provocation to break expected logical paths — defining a fundamental direction of cognitive movement.",
    doi: null
  },
  {
    id: "koestler-1964",
    authors: "Koestler, A.",
    year: 1964,
    title: "The Act of Creation",
    dimension: ["D3"],
    relevance: "Introduces bisociation — creativity as collision of incompatible frames — supporting lateral thinking as a distinct cognitive direction.",
    doi: null
  },
  {
    id: "ohlsson-1992",
    authors: "Ohlsson, S.",
    year: 1992,
    title: "Information-processing explanations of insight and related phenomena",
    dimension: ["D3"],
    relevance: "Explains insight as problem restructuring, supporting lateral direction — solutions require reframing, not just incremental progress.",
    doi: null
  },
  {
    id: "rasmussen-1985",
    authors: "Rasmussen, J.",
    year: 1985,
    title: "The role of hierarchical knowledge representation in decision making and system management",
    dimension: ["D3"],
    relevance: "Develops abstraction hierarchy framework — moving between levels of abstraction — defining the abstractive direction in thought.",
    doi: "10.1109/TSMC.1985.6313353"
  },
  {
    id: "craik-lockhart-1972",
    authors: "Craik, F. I. M. & Lockhart, R. S.",
    year: 1972,
    title: "Levels of processing: A framework for memory research",
    dimension: ["D3"],
    relevance: "Establishes levels of processing in memory — deeper (more abstract) processing leads to better retention — supporting the abstractive direction.",
    doi: "10.1016/S0022-5371(72)80001-X"
  },
  {
    id: "christoff-2001",
    authors: "Christoff, K., Prabhakaran, V., Dorfman, J., Zhao, Z., Kroger, J. K., Holyoak, K. J. & Gabrieli, J. D. E.",
    year: 2001,
    title: "Rostrolateral prefrontal cortex involvement in relational integration during reasoning",
    dimension: ["D3"],
    relevance: "Identifies neural correlates of relational complexity and abstract reasoning in rostral prefrontal cortex.",
    doi: "10.1006/nimg.2001.0922"
  },
  {
    id: "paivio-1971",
    authors: "Paivio, A.",
    year: 1971,
    title: "Imagery and Verbal Processes",
    dimension: ["D3"],
    relevance: "Introduces dual coding theory and the concreteness effect — concrete concepts are more easily processed — supporting the concretizing direction.",
    doi: "10.4324/9781315798868"
  },
  {
    id: "medin-schaffer-1978",
    authors: "Medin, D. L. & Schaffer, M. M.",
    year: 1978,
    title: "Context theory of classification learning",
    dimension: ["D3"],
    relevance: "Establishes exemplar theory — categories are learned through concrete examples, not definitions — supporting the concretizing direction.",
    doi: "10.1037/0033-295X.85.3.207"
  },
  {
    id: "barsalou-2008",
    authors: "Barsalou, L. W.",
    year: 2008,
    title: "Grounded cognition",
    dimension: ["D3"],
    relevance: "Shows abstract concepts are anchored in sensory experience (grounded cognition), supporting the concretizing direction in thought.",
    doi: "10.1146/annurev.psych.59.103006.093639"
  },
  {
    id: "adams-2021",
    authors: "Adams, G. S., Converse, B. A., Hales, A. H. & Klotz, L. E.",
    year: 2021,
    title: "People systematically overlook subtractive changes",
    dimension: ["D3"],
    relevance: "Published in Nature, demonstrates strong additive bias — people fail to see subtractive solutions — establishing the subtractive direction as a distinct, underused mode.",
    doi: "10.1038/s41586-021-03380-y"
  },
  {
    id: "miller-1956",
    authors: "Miller, G. A.",
    year: 1956,
    title: "The magical number seven, plus or minus two: Some limits on our capacity for processing information",
    dimension: ["D3"],
    relevance: "Introduces chunking — compressing information into manageable units — foundational for the compressive direction in thinking.",
    doi: "10.1037/h0043158"
  },
  {
    id: "ericsson-pool-2016",
    authors: "Ericsson, A. & Pool, R.",
    year: 2016,
    title: "Peak: Secrets from the New Science of Expertise",
    dimension: ["D3"],
    relevance: "Describes knowledge distillation in expertise as a compression operation — experts create increasingly compact mental representations.",
    doi: null
  },
  {
    id: "frederick-2002",
    authors: "Frederick, S., Loewenstein, G. & O'Donoghue, T.",
    year: 2002,
    title: "Time discounting and time preference: A critical review",
    dimension: ["D3"],
    relevance: "Reviews temporal discounting — the brain values events differently based on temporal distance — supporting temporal-scale shifting as a thinking direction.",
    doi: "10.1257/002205102320161311"
  },
  {
    id: "brand-1999",
    authors: "Brand, S.",
    year: 1999,
    title: "The Clock of the Long Now: Time and Responsibility",
    dimension: ["D3"],
    relevance: "Advocates long-term thinking as a deliberate cognitive practice, supporting temporal-scale shifting direction.",
    doi: null
  },
  {
    id: "schwartz-1991",
    authors: "Schwartz, P.",
    year: 1991,
    title: "The Art of the Long View: Planning for the Future in an Uncertain World",
    dimension: ["D3"],
    relevance: "Develops scenario planning — building alternative futures — as a systematic approach to temporal-scale shifting in strategic thinking.",
    doi: null
  },
  {
    id: "stokes-2005",
    authors: "Stokes, P. D.",
    year: 2005,
    title: "Creativity from Constraints: The Psychology of Breakthrough",
    dimension: ["D2", "D3"],
    relevance: "Shows that constraints can increase creativity by forcing novel solutions within bounded spaces.",
    doi: null
  },

  // ============================================================
  // D4 — EXTERNALIZATION MEDIUM
  // ============================================================
  {
    id: "hardy-2006",
    authors: "Hardy, J.",
    year: 2006,
    title: "Speaking clearly: A critical review of the self-talk literature",
    dimension: ["D4"],
    relevance: "Reviews evidence that self-directed speech improves performance and self-regulation, supporting voice as an externalization medium for thinking.",
    doi: "10.1016/j.psychsport.2005.04.002"
  },
  {
    id: "clark-chalmers-1998",
    authors: "Clark, A. & Chalmers, D.",
    year: 1998,
    title: "The extended mind",
    dimension: ["D4"],
    relevance: "Foundational paper for extended cognition — external tools (voice, writing, diagrams) are part of the cognitive system, not just outputs.",
    doi: "10.1093/analys/58.1.7"
  },
  {
    id: "pickering-garrod-2004",
    authors: "Pickering, M. J. & Garrod, S.",
    year: 2004,
    title: "Toward a mechanistic psychology of dialogue",
    dimension: ["D4"],
    relevance: "Shows interactive alignment in dialogue — brains synchronize during conversation — supporting verbal externalization toward others.",
    doi: "10.1017/S0140525X04000056"
  },
  {
    id: "klein-1999",
    authors: "Klein, P. D.",
    year: 1999,
    title: "Reopening inquiry into cognitive processes in writing-to-learn",
    dimension: ["D4"],
    relevance: "Reviews writing-to-learn research showing writing activates distinct metacognitive processes, supporting writing as a thinking medium.",
    doi: "10.1023/a:1021913217147"
  },
  {
    id: "bangert-drowns-2004",
    authors: "Bangert-Drowns, R. L., Hurley, M. M. & Wilkinson, B.",
    year: 2004,
    title: "The effects of school-based writing-to-learn interventions on academic achievement: A meta-analysis",
    dimension: ["D4"],
    relevance: "Meta-analysis confirming writing-to-learn improves academic achievement, validating writing as a cognitive externalization medium.",
    doi: "10.3102/00346543074001029"
  },
  {
    id: "pennebaker-1997",
    authors: "Pennebaker, J. W.",
    year: 1997,
    title: "Writing about emotional experiences as a therapeutic process",
    dimension: ["D4"],
    relevance: "Demonstrates cognitive and emotional benefits of expressive writing (journaling), supporting writing as a medium for self-directed thinking.",
    doi: "10.1111/j.1467-9280.1997.tb00403.x"
  },
  {
    id: "larkin-simon-1987",
    authors: "Larkin, J. H. & Simon, H. A.",
    year: 1987,
    title: "Why a diagram is (sometimes) worth ten thousand words",
    dimension: ["D4"],
    relevance: "Formally proves when and why diagrams are computationally more efficient than text for reasoning, supporting diagrammatic externalization.",
    doi: "10.1111/j.1551-6708.1987.tb00863.x"
  },
  {
    id: "novak-canas-2008",
    authors: "Novak, J. D. & Canas, A. J.",
    year: 2008,
    title: "The theory underlying concept maps and how to construct and use them",
    dimension: ["D4"],
    relevance: "Develops concept mapping as an explicit tool for representing conceptual relationships, supporting diagrammatic externalization.",
    doi: null
  },
  {
    id: "papert-1991",
    authors: "Papert, S.",
    year: 1991,
    title: "Situating constructionism",
    dimension: ["D4"],
    relevance: "Introduces constructionism — learning happens by building external artifacts — foundational for physical/prototype externalization.",
    doi: null
  },
  {
    id: "levi-strauss-1962",
    authors: "Levi-Strauss, C.",
    year: 1962,
    title: "La pensee sauvage",
    dimension: ["D4"],
    relevance: "Introduces bricolage — thinking with whatever materials are at hand — supporting physical externalization as a legitimate cognitive mode.",
    doi: null
  },
  {
    id: "hostetter-alibali-2008",
    authors: "Hostetter, A. B. & Alibali, M. W.",
    year: 2008,
    title: "Visible embodiment: Gestures as simulated action",
    dimension: ["D4"],
    relevance: "Proposes gesture as simulated action, connecting physical externalization to embodied cognition theory.",
    doi: "10.3758/PBR.15.3.495"
  },
  {
    id: "wing-2006",
    authors: "Wing, J. M.",
    year: 2006,
    title: "Computational thinking",
    dimension: ["D4"],
    relevance: "Defines computational thinking as a fundamental skill — formalizing problems algorithmically — supporting code/formal externalization.",
    doi: "10.1145/1118178.1118215"
  },
  {
    id: "knuth-1984",
    authors: "Knuth, D. E.",
    year: 1984,
    title: "Literate programming",
    dimension: ["D4"],
    relevance: "Proposes literate programming — code as a form of writing and thinking — supporting formal externalization as a cognitive medium.",
    doi: "10.1093/comjnl/27.2.97"
  },

  // ============================================================
  // D5 — LOGICAL FORM
  // ============================================================
  {
    id: "rips-1994",
    authors: "Rips, L. J.",
    year: 1994,
    title: "The Psychology of Proof: Deductive Reasoning in Human Thinking",
    dimension: ["D5"],
    relevance: "Proposes mental logic theory — people use innate inference rules for deductive reasoning — one of two competing models of logical thought.",
    doi: "10.7551/mitpress/5680.001.0001"
  },
  {
    id: "goel-2007",
    authors: "Goel, V.",
    year: 2007,
    title: "Anatomy of deductive reasoning",
    dimension: ["D5"],
    relevance: "Maps neural correlates of deductive reasoning to dorsolateral prefrontal and parietal cortex, providing brain-based evidence for the deductive form.",
    doi: "10.1016/j.tics.2007.09.003"
  },
  {
    id: "tenenbaum-2011",
    authors: "Tenenbaum, J. B., Kemp, C., Griffiths, T. L. & Goodman, N. D.",
    year: 2011,
    title: "How to grow a mind: Statistics, structure, and abstraction",
    dimension: ["D5"],
    relevance: "Formalizes inductive reasoning as Bayesian inference — learning structured knowledge from limited data — providing a computational account of induction.",
    doi: "10.1126/science.1192788"
  },
  {
    id: "rosch-1978",
    authors: "Rosch, E.",
    year: 1978,
    title: "Principles of categorization",
    dimension: ["D5"],
    relevance: "Establishes prototype theory of categorization as a form of inductive reasoning — categories have graded structure, not sharp boundaries.",
    doi: "10.4324/9781032633275-4"
  },
  {
    id: "lipton-2004",
    authors: "Lipton, P.",
    year: 2004,
    title: "Inference to the Best Explanation",
    dimension: ["D5"],
    relevance: "Comprehensive treatment of abductive reasoning — inference to the best explanation — establishing it as a distinct and pervasive logical form.",
    doi: "10.4324/9780203470855"
  },
  {
    id: "magnani-2001",
    authors: "Magnani, L.",
    year: 2001,
    title: "Abduction, Reason and Science: Processes of Discovery and Explanation",
    dimension: ["D5"],
    relevance: "Develops abductive reasoning theory following Peirce, arguing most everyday reasoning is abductive rather than deductive.",
    doi: "10.1007/978-1-4419-8562-0"
  },
  {
    id: "kolodner-1993",
    authors: "Kolodner, J. L.",
    year: 1993,
    title: "Case-Based Reasoning",
    dimension: ["D5"],
    relevance: "Develops case-based reasoning in AI — solving new problems using past cases — a computational formalization of analogical logical form.",
    doi: null
  },
  {
    id: "lipton-1990",
    authors: "Lipton, P.",
    year: 1990,
    title: "Contrastive explanation",
    dimension: ["D5"],
    relevance: "Formalizes contrastive explanation — explaining why X rather than Y — supporting contrastive/negation thinking patterns.",
    doi: "10.1017/S1358246100005130"
  },

  // ============================================================
  // CF — FACILITATING CONDITIONS
  // ============================================================
  {
    id: "wallas-1926",
    authors: "Wallas, G.",
    year: 1926,
    title: "The Art of Thought",
    dimension: ["CF"],
    relevance: "Introduces the four-stage model (preparation, incubation, illumination, verification) — the foundational framework for understanding incubation as a facilitating condition.",
    doi: null
  },
  {
    id: "raichle-2001",
    authors: "Raichle, M. E., MacLeod, A. M., Snyder, A. Z., Powers, W. J., Gusnard, D. A. & Shulman, G. L.",
    year: 2001,
    title: "A default mode of brain function",
    dimension: ["CF"],
    relevance: "Discovers the Default Mode Network — active at rest and connected to creativity and insight — the neural substrate for incubation and mind-wandering.",
    doi: "10.1073/pnas.98.2.676"
  },
  {
    id: "wagner-2004",
    authors: "Wagner, U., Gais, S., Haider, H., Verleger, R. & Born, J.",
    year: 2004,
    title: "Sleep inspires insight",
    dimension: ["CF"],
    relevance: "Demonstrates that sleep facilitates insight by restructuring memory representations, providing evidence for incubation during sleep.",
    doi: "10.1038/nature02223"
  },
  {
    id: "walker-2017",
    authors: "Walker, M.",
    year: 2017,
    title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
    dimension: ["CF"],
    relevance: "Comprehensive overview of sleep's role in memory consolidation and cognitive performance, supporting sleep-based incubation.",
    doi: null
  },
  {
    id: "dijksterhuis-nordgren-2006",
    authors: "Dijksterhuis, A. & Nordgren, L. F.",
    year: 2006,
    title: "A theory of unconscious thought",
    dimension: ["CF"],
    relevance: "Proposes unconscious thought theory — for complex decisions, unconscious processing can outperform conscious deliberation — supporting incubation.",
    doi: "10.1111/j.1745-6916.2006.00007.x"
  },
  {
    id: "gollwitzer-1999",
    authors: "Gollwitzer, P. M.",
    year: 1999,
    title: "Implementation intentions: Strong effects of simple plans",
    dimension: ["CF"],
    relevance: "Shows implementation intentions ('if X, then Y') serve as powerful behavioral triggers, supporting rituals as pre-activation facilitating conditions.",
    doi: "10.1037/0003-066X.54.7.493"
  },
  {
    id: "cotterill-2010",
    authors: "Cotterill, S.",
    year: 2010,
    title: "Pre-performance routines in sport: Current understanding and future directions",
    dimension: ["CF"],
    relevance: "Reviews pre-performance routines in sport showing how rituals prepare cognitive and motor systems for optimal performance.",
    doi: "10.1080/1750984x.2010.488269"
  },
  {
    id: "brooks-2016",
    authors: "Brooks, A. W., Schroeder, J., Risen, J. L., Gino, F., Buehler, R., Norton, M. I. & Schweitzer, M. E.",
    year: 2016,
    title: "Don't stop believing: Rituals improve performance by decreasing anxiety",
    dimension: ["CF"],
    relevance: "Shows rituals reduce performance anxiety and improve outcomes, supporting ritualized processes as cognitive facilitating conditions.",
    doi: "10.1016/j.obhdp.2016.07.004"
  },
  {
    id: "yerkes-dodson-1908",
    authors: "Yerkes, R. M. & Dodson, J. D.",
    year: 1908,
    title: "The relation of strength of stimulus to rapidity of habit-formation",
    dimension: ["CF"],
    relevance: "Establishes the Yerkes-Dodson law — inverted-U relationship between arousal and performance — foundational for understanding time pressure as a facilitating condition.",
    doi: "10.1002/cne.920180503"
  },
  {
    id: "chu-choi-2005",
    authors: "Chu, A. H. C. & Choi, J. N.",
    year: 2005,
    title: "Rethinking procrastination: Positive effects of 'active' procrastination behavior on attitudes and performance",
    dimension: ["CF"],
    relevance: "Identifies active procrastination — some people perform better under deadline pressure — supporting time constraints as a facilitating condition.",
    doi: "10.3200/socp.145.3.245-264"
  },
  {
    id: "lutz-2008",
    authors: "Lutz, A., Slagter, H. A., Dunne, J. D. & Davidson, R. J.",
    year: 2008,
    title: "Attention regulation and monitoring in meditation",
    dimension: ["CF"],
    relevance: "Distinguishes open monitoring from focused attention meditation, showing how non-focused awareness facilitates cognitive receptivity.",
    doi: "10.1016/j.tics.2008.01.005"
  },
  {
    id: "brewer-2011",
    authors: "Brewer, J. A., Worhunsky, P. D., Gray, J. R., Tang, Y.-Y., Weber, J. & Kober, H.",
    year: 2011,
    title: "Meditation experience is associated with differences in default mode network activity and connectivity",
    dimension: ["CF"],
    relevance: "Shows meditation reduces self-referential DMN activity, supporting meditation as a facilitating condition that creates cognitive space.",
    doi: "10.1073/pnas.1112029108"
  },
  {
    id: "moore-malinowski-2009",
    authors: "Moore, A. & Malinowski, P.",
    year: 2009,
    title: "Meditation, mindfulness and cognitive flexibility",
    dimension: ["CF"],
    relevance: "Demonstrates mindfulness practice improves cognitive flexibility, supporting meditation as a facilitating condition for thinking.",
    doi: "10.1016/j.concog.2008.12.008"
  },
  {
    id: "smallwood-schooler-2006",
    authors: "Smallwood, J. & Schooler, J. W.",
    year: 2006,
    title: "The restless mind",
    dimension: ["CF"],
    relevance: "Foundational review of mind-wandering research, establishing semi-conscious mental wandering as a distinct cognitive state that facilitates insight.",
    doi: "10.1037/0033-2909.132.6.946"
  },
  {
    id: "martindale-1999",
    authors: "Martindale, C.",
    year: 1999,
    title: "Biological bases of creativity",
    dimension: ["CF"],
    relevance: "Shows diffuse attention (vs. focused) favors remote associations, supporting mind-wandering as a facilitating condition for creative connections.",
    doi: "10.1017/CBO9780511807916.009"
  },
  {
    id: "zajonc-1965",
    authors: "Zajonc, R. B.",
    year: 1965,
    title: "Social facilitation",
    dimension: ["CF"],
    relevance: "Establishes social facilitation — others' presence improves performance on simple tasks but impairs complex ones — foundational for social context as facilitating condition.",
    doi: "10.1126/science.149.3681.269"
  },
  {
    id: "coan-sbarra-2015",
    authors: "Coan, J. A. & Sbarra, D. A.",
    year: 2015,
    title: "Social baseline theory: The social regulation of human body and brain function",
    dimension: ["CF"],
    relevance: "Proposes the brain evolved expecting the presence of others, making social context a baseline facilitating condition for cognition.",
    doi: "10.1016/j.copsyc.2014.12.021"
  },
  {
    id: "oppezzo-schwartz-2014",
    authors: "Oppezzo, M. & Schwartz, D. L.",
    year: 2014,
    title: "Give your ideas some legs: The positive effect of walking on creative thinking",
    dimension: ["CF"],
    relevance: "Shows walking increases divergent creative thinking by 60%, providing direct experimental evidence for rhythmic movement as a facilitating condition.",
    doi: "10.1037/a0036577"
  },

  // ============================================================
  // ADDITIONAL REFERENCES (from thinking_patterns_catalog.md only)
  // ============================================================
  {
    id: "cacioppo-petty-1982",
    authors: "Cacioppo, J. T. & Petty, R. E.",
    year: 1982,
    title: "The need for cognition",
    dimension: ["D2"],
    relevance: "Identifies Need for Cognition as a personality trait — enjoyment of deep thinking — underlying the reflective withholding pattern.",
    doi: "10.1037/0022-3514.42.1.116"
  },
  {
    id: "stanovich-2011",
    authors: "Stanovich, K. E.",
    year: 2011,
    title: "Rationality and the Reflective Mind",
    dimension: ["D2"],
    relevance: "Proposes the tripartite mind model with a reflective mind layer, supporting metacognitive and reflective thinking strategies.",
    doi: "10.1093/acprof:oso/9780195341140.001.0001"
  },
  {
    id: "frost-1990",
    authors: "Frost, R. O., Marten, P., Lahart, C. & Rosenblate, R.",
    year: 1990,
    title: "The dimensions of perfectionism",
    dimension: ["D2"],
    relevance: "Characterizes cognitive perfectionism including its adaptive dimension, relevant to high-threshold reflective thinking patterns.",
    doi: "10.1007/bf01172967"
  },
  {
    id: "hutchins-1995",
    authors: "Hutchins, E.",
    year: 1995,
    title: "Cognition in the Wild",
    dimension: ["D2", "D4"],
    relevance: "Foundational text for distributed cognition — cognitive processes spread across individuals and artifacts, not contained in a single head.",
    doi: "10.7551/mitpress/1881.001.0001"
  },
  {
    id: "wegner-1987",
    authors: "Wegner, D. M.",
    year: 1987,
    title: "Transactive memory: A contemporary analysis of the group mind",
    dimension: ["D2"],
    relevance: "Introduces transactive memory systems — groups develop shared knowledge of 'who knows what' — supporting socially distributed thinking.",
    doi: "10.1007/978-1-4612-4634-3_9"
  },
  {
    id: "collins-loftus-1975",
    authors: "Collins, A. M. & Loftus, E. F.",
    year: 1975,
    title: "A spreading-activation theory of semantic processing",
    dimension: ["D2"],
    relevance: "Proposes spreading activation in semantic networks, providing the mechanism underlying free association as a cognitive strategy.",
    doi: "10.1037/0033-295X.82.6.407"
  },
  {
    id: "mednick-1962",
    authors: "Mednick, S. A.",
    year: 1962,
    title: "The associative basis of the creative process",
    dimension: ["D2"],
    relevance: "Defines creativity as connecting remote semantic nodes, foundational for understanding free association and divergent thinking.",
    doi: "10.1037/h0048850"
  },
  {
    id: "riding-rayner-1998",
    authors: "Riding, R. & Rayner, S.",
    year: 1998,
    title: "Cognitive Styles and Learning Strategies: Understanding Style Differences in Learning and Behaviour",
    dimension: ["D2"],
    relevance: "Characterizes analytic vs. holistic cognitive styles, relevant to understanding taxonomic/classificatory thinking patterns.",
    doi: "10.4324/9781315068015"
  },
  {
    id: "baron-cohen-2003",
    authors: "Baron-Cohen, S.",
    year: 2003,
    title: "The Essential Difference: Male And Female Brains And The Truth About Autism",
    dimension: ["D2"],
    relevance: "Introduces the systemizing-empathizing dimension, where high systemizing underlies the compulsive need to classify before reasoning.",
    doi: null
  }
];

// ============================================================
// Index by dimension
// ============================================================
export const papersByDimension = {
  D1: papers.filter(p => p.dimension.includes("D1")),
  D2: papers.filter(p => p.dimension.includes("D2")),
  D3: papers.filter(p => p.dimension.includes("D3")),
  D4: papers.filter(p => p.dimension.includes("D4")),
  D5: papers.filter(p => p.dimension.includes("D5")),
  CF: papers.filter(p => p.dimension.includes("CF")),
};
