/**
 * Metadata per ogni valore dimensionale.
 * Usato nella pagina risultati per mostrare nomi, descrizioni, forze, rischi.
 * I testi sono chiavi i18n.
 */
export const dimensionLabels = {
	D1: { nameKey: 'dims.D1.name', descKey: 'dims.D1.desc' },
	D2: { nameKey: 'dims.D2.name', descKey: 'dims.D2.desc' },
	D3: { nameKey: 'dims.D3.name', descKey: 'dims.D3.desc' },
	D4: { nameKey: 'dims.D4.name', descKey: 'dims.D4.desc' },
	D5: { nameKey: 'dims.D5.name', descKey: 'dims.D5.desc' }
};

export const dimensionColors = {
	D1: '#6366f1',
	D2: '#f59e0b',
	D3: '#10b981',
	D4: '#ef4444',
	D5: '#8b5cf6'
};

/**
 * Per ogni valore di ogni dimensione: chiave nome, forza, rischio, consiglio LLM
 */
export const valueMetadata = {
	// D1 — Canale
	'1.1': { nameKey: 'values.1_1.name', strengthKey: 'values.1_1.strength', riskKey: 'values.1_1.risk', llmKey: 'values.1_1.llm', exampleKey: 'values.1_1.example' },
	'1.2': { nameKey: 'values.1_2.name', strengthKey: 'values.1_2.strength', riskKey: 'values.1_2.risk', llmKey: 'values.1_2.llm', exampleKey: 'values.1_2.example' },
	'1.3': { nameKey: 'values.1_3.name', strengthKey: 'values.1_3.strength', riskKey: 'values.1_3.risk', llmKey: 'values.1_3.llm', exampleKey: 'values.1_3.example' },
	'1.4': { nameKey: 'values.1_4.name', strengthKey: 'values.1_4.strength', riskKey: 'values.1_4.risk', llmKey: 'values.1_4.llm', exampleKey: 'values.1_4.example' },
	'1.5': { nameKey: 'values.1_5.name', strengthKey: 'values.1_5.strength', riskKey: 'values.1_5.risk', llmKey: 'values.1_5.llm', exampleKey: 'values.1_5.example' },
	// D2 — Strategia
	'2.1': { nameKey: 'values.2_1.name', strengthKey: 'values.2_1.strength', riskKey: 'values.2_1.risk', llmKey: 'values.2_1.llm', exampleKey: 'values.2_1.example' },
	'2.2': { nameKey: 'values.2_2.name', strengthKey: 'values.2_2.strength', riskKey: 'values.2_2.risk', llmKey: 'values.2_2.llm', exampleKey: 'values.2_2.example' },
	'2.3': { nameKey: 'values.2_3.name', strengthKey: 'values.2_3.strength', riskKey: 'values.2_3.risk', llmKey: 'values.2_3.llm', exampleKey: 'values.2_3.example' },
	'2.4': { nameKey: 'values.2_4.name', strengthKey: 'values.2_4.strength', riskKey: 'values.2_4.risk', llmKey: 'values.2_4.llm', exampleKey: 'values.2_4.example' },
	'2.5': { nameKey: 'values.2_5.name', strengthKey: 'values.2_5.strength', riskKey: 'values.2_5.risk', llmKey: 'values.2_5.llm', exampleKey: 'values.2_5.example' },
	'2.6': { nameKey: 'values.2_6.name', strengthKey: 'values.2_6.strength', riskKey: 'values.2_6.risk', llmKey: 'values.2_6.llm', exampleKey: 'values.2_6.example' },
	'2.7': { nameKey: 'values.2_7.name', strengthKey: 'values.2_7.strength', riskKey: 'values.2_7.risk', llmKey: 'values.2_7.llm', exampleKey: 'values.2_7.example' },
	'2.8': { nameKey: 'values.2_8.name', strengthKey: 'values.2_8.strength', riskKey: 'values.2_8.risk', llmKey: 'values.2_8.llm', exampleKey: 'values.2_8.example' },
	'2.9': { nameKey: 'values.2_9.name', strengthKey: 'values.2_9.strength', riskKey: 'values.2_9.risk', llmKey: 'values.2_9.llm', exampleKey: 'values.2_9.example' },
	'2.10': { nameKey: 'values.2_10.name', strengthKey: 'values.2_10.strength', riskKey: 'values.2_10.risk', llmKey: 'values.2_10.llm', exampleKey: 'values.2_10.example' },
	'2.11': { nameKey: 'values.2_11.name', strengthKey: 'values.2_11.strength', riskKey: 'values.2_11.risk', llmKey: 'values.2_11.llm', exampleKey: 'values.2_11.example' },
	'2.12': { nameKey: 'values.2_12.name', strengthKey: 'values.2_12.strength', riskKey: 'values.2_12.risk', llmKey: 'values.2_12.llm', exampleKey: 'values.2_12.example' },
	'2.13': { nameKey: 'values.2_13.name', strengthKey: 'values.2_13.strength', riskKey: 'values.2_13.risk', llmKey: 'values.2_13.llm', exampleKey: 'values.2_13.example' },
	'2.14': { nameKey: 'values.2_14.name', strengthKey: 'values.2_14.strength', riskKey: 'values.2_14.risk', llmKey: 'values.2_14.llm', exampleKey: 'values.2_14.example' },
	'2.15': { nameKey: 'values.2_15.name', strengthKey: 'values.2_15.strength', riskKey: 'values.2_15.risk', llmKey: 'values.2_15.llm', exampleKey: 'values.2_15.example' },
	'2.16': { nameKey: 'values.2_16.name', strengthKey: 'values.2_16.strength', riskKey: 'values.2_16.risk', llmKey: 'values.2_16.llm', exampleKey: 'values.2_16.example' },
	'2.17': { nameKey: 'values.2_17.name', strengthKey: 'values.2_17.strength', riskKey: 'values.2_17.risk', llmKey: 'values.2_17.llm', exampleKey: 'values.2_17.example' },
	// D3 — Direzione
	'3.1': { nameKey: 'values.3_1.name', strengthKey: 'values.3_1.strength', riskKey: 'values.3_1.risk', llmKey: 'values.3_1.llm', exampleKey: 'values.3_1.example' },
	'3.2': { nameKey: 'values.3_2.name', strengthKey: 'values.3_2.strength', riskKey: 'values.3_2.risk', llmKey: 'values.3_2.llm', exampleKey: 'values.3_2.example' },
	'3.3': { nameKey: 'values.3_3.name', strengthKey: 'values.3_3.strength', riskKey: 'values.3_3.risk', llmKey: 'values.3_3.llm', exampleKey: 'values.3_3.example' },
	'3.4': { nameKey: 'values.3_4.name', strengthKey: 'values.3_4.strength', riskKey: 'values.3_4.risk', llmKey: 'values.3_4.llm', exampleKey: 'values.3_4.example' },
	'3.5': { nameKey: 'values.3_5.name', strengthKey: 'values.3_5.strength', riskKey: 'values.3_5.risk', llmKey: 'values.3_5.llm', exampleKey: 'values.3_5.example' },
	'3.6': { nameKey: 'values.3_6.name', strengthKey: 'values.3_6.strength', riskKey: 'values.3_6.risk', llmKey: 'values.3_6.llm', exampleKey: 'values.3_6.example' },
	'3.7': { nameKey: 'values.3_7.name', strengthKey: 'values.3_7.strength', riskKey: 'values.3_7.risk', llmKey: 'values.3_7.llm', exampleKey: 'values.3_7.example' },
	'3.8': { nameKey: 'values.3_8.name', strengthKey: 'values.3_8.strength', riskKey: 'values.3_8.risk', llmKey: 'values.3_8.llm', exampleKey: 'values.3_8.example' },
	// D4 — Medium
	'4.1': { nameKey: 'values.4_1.name', strengthKey: 'values.4_1.strength', riskKey: 'values.4_1.risk', llmKey: 'values.4_1.llm', exampleKey: 'values.4_1.example' },
	'4.2': { nameKey: 'values.4_2.name', strengthKey: 'values.4_2.strength', riskKey: 'values.4_2.risk', llmKey: 'values.4_2.llm', exampleKey: 'values.4_2.example' },
	'4.3': { nameKey: 'values.4_3.name', strengthKey: 'values.4_3.strength', riskKey: 'values.4_3.risk', llmKey: 'values.4_3.llm', exampleKey: 'values.4_3.example' },
	'4.4': { nameKey: 'values.4_4.name', strengthKey: 'values.4_4.strength', riskKey: 'values.4_4.risk', llmKey: 'values.4_4.llm', exampleKey: 'values.4_4.example' },
	'4.5': { nameKey: 'values.4_5.name', strengthKey: 'values.4_5.strength', riskKey: 'values.4_5.risk', llmKey: 'values.4_5.llm', exampleKey: 'values.4_5.example' },
	// D5 — Logica
	'5.1': { nameKey: 'values.5_1.name', strengthKey: 'values.5_1.strength', riskKey: 'values.5_1.risk', llmKey: 'values.5_1.llm', exampleKey: 'values.5_1.example' },
	'5.2': { nameKey: 'values.5_2.name', strengthKey: 'values.5_2.strength', riskKey: 'values.5_2.risk', llmKey: 'values.5_2.llm', exampleKey: 'values.5_2.example' },
	'5.3': { nameKey: 'values.5_3.name', strengthKey: 'values.5_3.strength', riskKey: 'values.5_3.risk', llmKey: 'values.5_3.llm', exampleKey: 'values.5_3.example' },
	'5.4': { nameKey: 'values.5_4.name', strengthKey: 'values.5_4.strength', riskKey: 'values.5_4.risk', llmKey: 'values.5_4.llm', exampleKey: 'values.5_4.example' }
};

/**
 * Gap descriptions and compensative strategies
 */
export const gapStrategies = {
	visual_to_verbal: { descKey: 'gaps.visual_to_verbal.desc', strategyKey: 'gaps.visual_to_verbal.strategy' },
	somatic_to_verbal: { descKey: 'gaps.somatic_to_verbal.desc', strategyKey: 'gaps.somatic_to_verbal.strategy' },
	verbal_to_diagram: { descKey: 'gaps.verbal_to_diagram.desc', strategyKey: 'gaps.verbal_to_diagram.strategy' },
	diagram_to_text: { descKey: 'gaps.diagram_to_text.desc', strategyKey: 'gaps.diagram_to_text.strategy' },
	voice_to_text: { descKey: 'gaps.voice_to_text.desc', strategyKey: 'gaps.voice_to_text.strategy' },
	somatic_to_text: { descKey: 'gaps.somatic_to_text.desc', strategyKey: 'gaps.somatic_to_text.strategy' },
	voice_to_writing: { descKey: 'gaps.voice_to_writing.desc', strategyKey: 'gaps.voice_to_writing.strategy' },
	writing_to_voice: { descKey: 'gaps.writing_to_voice.desc', strategyKey: 'gaps.writing_to_voice.strategy' },
	somatic_to_formal: { descKey: 'gaps.somatic_to_formal.desc', strategyKey: 'gaps.somatic_to_formal.strategy' },
	physical_to_verbal: { descKey: 'gaps.physical_to_verbal.desc', strategyKey: 'gaps.physical_to_verbal.strategy' },
	none: { descKey: 'gaps.none.desc', strategyKey: 'gaps.none.strategy' }
};
