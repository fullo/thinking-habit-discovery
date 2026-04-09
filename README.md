# Thinking Habit Discovery

Discover how you think — not how well, but what shape your thinking takes.

A 5-dimension cognitive model backed by 137 peer-reviewed papers, with an interactive questionnaire, adaptive profiling, and Claude Code integration.

## What is this?

This project maps how people think across 5 independent dimensions:

| Dimension | Question it answers | Examples |
|-----------|-------------------|----------|
| **D1 Cognitive Channel** | What do you think *with*? | Verbal, visual, somatic, auditory, abstract |
| **D2 Strategy** | How do you *advance* your thinking? | Adversarial, Socratic, iterative, narrative, analogical... |
| **D3 Direction** | Where does your thinking *go*? | Divergent, convergent, lateral, subtractive, compressive |
| **D4 Medium** | How do you *externalize* thought? | Voice, writing, diagrams, prototypes, code |
| **D5 Logical Form** | How do you *reason*? | Deductive, inductive, abductive, analogical |

It also identifies **gap analysis** between your cognitive channel (D1) and your externalization medium (D4) — where you lose information when translating thought into communication.

## Live demo

**[fullo.github.io/thinking-habit-discovery](https://fullo.github.io/thinking-habit-discovery/)**

- 29 scenario-based questions + adaptive deepening
- Radar chart visualization
- Personalized LLM communication strategies
- Gap analysis with compensatory strategies
- 23 blog articles explaining the science
- 137 referenced papers with verified DOIs
- Bilingual IT/EN, dark mode, shareable profile URLs

## Claude Code Plugin

This model is also available as a Claude Code plugin with 3 skills:

| Skill | Command | What it does |
|-------|---------|-------------|
| **thinking-profile** | `/thinking-profile` | 15-question profiling + adaptive deepening. Saves to memory. |
| **thinking-translator** | `/thinking-translator` | Translates your natural prompts into LLM-optimized format. |
| **thinking-bridge** | `/thinking-bridge` | Reformulates messages for someone with a different cognitive profile. |

### Install

```bash
claude plugin marketplace add fullo/claude-plugins-marketplace
claude plugin install thinking-habit@fullo-plugins
```

Plugin repo: [github.com/fullo/claude-thinking-habit](https://github.com/fullo/claude-thinking-habit)
Plugin website: [fullo.github.io/claude-thinking-habit](https://fullo.github.io/claude-thinking-habit/)

## Project structure

```
thinking-habit-discovery/
├── discussioni/                    # Research documents (Italian)
│   ├── dimensioni_pensiero.md      # The 5-dimension model
│   ├── condizioni_facilitanti.md   # Facilitating conditions (not thinking, but influence it)
│   ├── thinking_patterns_catalog.md # Original 27 patterns + reclassification
│   ├── questionario_profilo_pensiero.md # Full questionnaire (30 questions)
│   ├── albero_decisionale.md       # Decision tree (quick profile)
│   ├── interpretazione_profili.md  # Profile interpretation guide
│   └── discussione_pattern_pensiero.md # Full discussion transcript
├── web/                            # SvelteKit web app
│   ├── src/
│   │   ├── lib/
│   │   │   ├── data/               # Questions, papers, articles, profiles, deepening
│   │   │   ├── i18n/               # IT + EN translations
│   │   │   ├── stores/             # Quiz state, scoring, locale, theme
│   │   │   └── components/         # Svelte components
│   │   └── routes/                 # Pages: quiz, results, about, blog, skills
│   ├── svelte.config.js
│   └── package.json
└── docs/                           # Static build output (GitHub Pages)
```

## Tech stack

- **SvelteKit** with static adapter (no backend)
- **Vanilla CSS** with custom properties (no framework)
- **System font stack** (no web fonts)
- **Brotli + Gzip** precompression
- **GitHub Pages** hosting

## The science

The model is grounded in peer-reviewed research from neuroscience, cognitive psychology, and philosophy of mind. Key references include:

- Fernyhough (2016) — Inner speech
- Kosslyn (1994) — Mental imagery
- Damasio (1994) — Somatic markers
- Kahneman (2011) — System 1/System 2
- De Bono (1967) — Lateral thinking
- Peirce (1903) — Abductive reasoning
- Clark & Chalmers (1998) — Extended cognition
- Adams et al. (2021) — Subtractive thinking bias

Full list of 137 papers with verified DOIs: [About page](https://fullo.github.io/thinking-habit-discovery/about)

## Development

```bash
cd web
npm install
npm run dev
```

Build for production:
```bash
BASE_PATH="/thinking-habit-discovery" npm run build
```

## License

MIT

## Author

Francesco Fullone — [Daruma Consulting](https://darumahq.it)
