/**
 * Domande di approfondimento adattive.
 * Mostrate dopo una sezione base se il punteggio parziale rivela un pattern dominante.
 *
 * Ogni regola ha:
 * - afterSection: dopo quale sezione viene valutata
 * - condition(scores): funzione che valuta se la regola si attiva
 * - questions: array di domande aggiuntive (stesso formato di questions.js)
 */

export const deepeningRules = [
	// ========================================
	// Dopo Sezione A (Canale cognitivo)
	// ========================================
	{
		afterSection: 'A',
		id: 'deep-A-verbal',
		condition: (scores) => {
			const v = scores.D1?.['1.1'] || 0;
			return v >= 3;
		},
		questions: [
			{
				id: 'DA1', section: 'DA', textKey: 'deepening.DA1.text',
				options: [
					{ labelKey: 'deepening.DA1.a', mapping: [{ dim: 'D1', value: '1.1' }, { dim: 'D2', value: '2.9' }] },
					{ labelKey: 'deepening.DA1.b', mapping: [{ dim: 'D1', value: '1.1' }, { dim: 'D2', value: '2.12' }] },
					{ labelKey: 'deepening.DA1.c', mapping: [{ dim: 'D1', value: '1.1' }, { dim: 'D2', value: '2.4' }] },
					{ labelKey: 'deepening.DA1.d', mapping: [{ dim: 'D1', value: '1.1' }, { dim: 'D4', value: '4.1' }] }
				]
			}
		]
	},
	{
		afterSection: 'A',
		id: 'deep-A-visual',
		condition: (scores) => {
			const v = scores.D1?.['1.2'] || 0;
			return v >= 3;
		},
		questions: [
			{
				id: 'DA2', section: 'DA', textKey: 'deepening.DA2.text',
				options: [
					{ labelKey: 'deepening.DA2.a', mapping: [{ dim: 'D1', value: '1.2' }, { dim: 'D4', value: '4.3' }] },
					{ labelKey: 'deepening.DA2.b', mapping: [{ dim: 'D1', value: '1.2' }, { dim: 'D3', value: '3.4' }] },
					{ labelKey: 'deepening.DA2.c', mapping: [{ dim: 'D1', value: '1.2' }, { dim: 'D3', value: '3.5' }] },
					{ labelKey: 'deepening.DA2.d', mapping: [{ dim: 'D1', value: '1.2' }, { dim: 'D2', value: '2.5' }] }
				]
			}
		]
	},
	{
		afterSection: 'A',
		id: 'deep-A-somatic',
		condition: (scores) => {
			const v = scores.D1?.['1.3'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DA3', section: 'DA', textKey: 'deepening.DA3.text',
				options: [
					{ labelKey: 'deepening.DA3.a', mapping: [{ dim: 'D1', value: '1.3' }, { dim: 'D2', value: '2.14' }] },
					{ labelKey: 'deepening.DA3.b', mapping: [{ dim: 'D1', value: '1.3' }, { dim: 'D5', value: '5.3' }] },
					{ labelKey: 'deepening.DA3.c', mapping: [{ dim: 'D1', value: '1.3' }, { dim: 'D2', value: '2.3' }] },
					{ labelKey: 'deepening.DA3.d', mapping: [{ dim: 'D1', value: '1.3' }, { dim: 'D4', value: '4.4' }] }
				]
			}
		]
	},

	// ========================================
	// Dopo Sezione B (Strategia)
	// ========================================
	{
		afterSection: 'B',
		id: 'deep-B-adversarial',
		condition: (scores) => {
			const v = scores.D2?.['2.1'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DB1', section: 'DB', textKey: 'deepening.DB1.text',
				options: [
					{ labelKey: 'deepening.DB1.a', mapping: [{ dim: 'D2', value: '2.1' }, { dim: 'D3', value: '3.2' }] },
					{ labelKey: 'deepening.DB1.b', mapping: [{ dim: 'D2', value: '2.1' }, { dim: 'D3', value: '3.1' }] },
					{ labelKey: 'deepening.DB1.c', mapping: [{ dim: 'D2', value: '2.9' }] },
					{ labelKey: 'deepening.DB1.d', mapping: [{ dim: 'D2', value: '2.17' }] }
				]
			}
		]
	},
	{
		afterSection: 'B',
		id: 'deep-B-accumulative',
		condition: (scores) => {
			const a = scores.D2?.['2.6'] || 0;
			const p = scores.D2?.['2.14'] || 0;
			return (a + p) >= 3;
		},
		questions: [
			{
				id: 'DB2', section: 'DB', textKey: 'deepening.DB2.text',
				options: [
					{ labelKey: 'deepening.DB2.a', mapping: [{ dim: 'D2', value: '2.6' }, { dim: 'D3', value: '3.1' }] },
					{ labelKey: 'deepening.DB2.b', mapping: [{ dim: 'D2', value: '2.14' }, { dim: 'D5', value: '5.2' }] },
					{ labelKey: 'deepening.DB2.c', mapping: [{ dim: 'D2', value: '2.6' }, { dim: 'D5', value: '5.3' }] },
					{ labelKey: 'deepening.DB2.d', mapping: [{ dim: 'D2', value: '2.14' }, { dim: 'D3', value: '3.2' }] }
				]
			}
		]
	},
	{
		afterSection: 'B',
		id: 'deep-B-iterative',
		condition: (scores) => {
			const v = scores.D2?.['2.3'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DB3', section: 'DB', textKey: 'deepening.DB3.text',
				options: [
					{ labelKey: 'deepening.DB3.a', mapping: [{ dim: 'D2', value: '2.3' }, { dim: 'D3', value: '3.6' }] },
					{ labelKey: 'deepening.DB3.b', mapping: [{ dim: 'D2', value: '2.3' }, { dim: 'D3', value: '3.7' }] },
					{ labelKey: 'deepening.DB3.c', mapping: [{ dim: 'D2', value: '2.3' }, { dim: 'D4', value: '4.4' }] },
					{ labelKey: 'deepening.DB3.d', mapping: [{ dim: 'D2', value: '2.3' }, { dim: 'D4', value: '4.2' }] }
				]
			}
		]
	},

	// ========================================
	// Dopo Sezione C (Direzione)
	// ========================================
	{
		afterSection: 'C',
		id: 'deep-C-divergent',
		condition: (scores) => {
			const v = scores.D3?.['3.1'] || 0;
			return v >= 3;
		},
		questions: [
			{
				id: 'DC1', section: 'DC', textKey: 'deepening.DC1.text',
				options: [
					{ labelKey: 'deepening.DC1.a', mapping: [{ dim: 'D3', value: '3.1' }, { dim: 'D2', value: '2.10' }] },
					{ labelKey: 'deepening.DC1.b', mapping: [{ dim: 'D3', value: '3.3' }] },
					{ labelKey: 'deepening.DC1.c', mapping: [{ dim: 'D3', value: '3.1' }, { dim: 'D2', value: '2.8' }] },
					{ labelKey: 'deepening.DC1.d', mapping: [{ dim: 'D3', value: '3.1' }, { dim: 'D3', value: '3.2' }] }
				]
			}
		]
	},
	{
		afterSection: 'C',
		id: 'deep-C-subtractive',
		condition: (scores) => {
			const s = scores.D3?.['3.6'] || 0;
			const c = scores.D3?.['3.7'] || 0;
			return (s + c) >= 2;
		},
		questions: [
			{
				id: 'DC2', section: 'DC', textKey: 'deepening.DC2.text',
				options: [
					{ labelKey: 'deepening.DC2.a', mapping: [{ dim: 'D3', value: '3.6' }] },
					{ labelKey: 'deepening.DC2.b', mapping: [{ dim: 'D3', value: '3.7' }] },
					{ labelKey: 'deepening.DC2.c', mapping: [{ dim: 'D3', value: '3.6' }, { dim: 'D2', value: '2.5' }] },
					{ labelKey: 'deepening.DC2.d', mapping: [{ dim: 'D3', value: '3.7' }, { dim: 'D2', value: '2.7' }] }
				]
			}
		]
	},

	// ========================================
	// Dopo Sezione D (Medium)
	// ========================================
	{
		afterSection: 'D',
		id: 'deep-D-voice-dominant',
		condition: (scores) => {
			const v = scores.D4?.['4.1'] || 0;
			return v >= 3;
		},
		questions: [
			{
				id: 'DD1', section: 'DD', textKey: 'deepening.DD1.text',
				options: [
					{ labelKey: 'deepening.DD1.a', mapping: [{ dim: 'D4', value: '4.1' }, { dim: 'D4_dest', value: 'self' }] },
					{ labelKey: 'deepening.DD1.b', mapping: [{ dim: 'D4', value: '4.1' }, { dim: 'D4_dest', value: 'other' }] },
					{ labelKey: 'deepening.DD1.c', mapping: [{ dim: 'D4', value: '4.1' }, { dim: 'D2', value: '2.4' }] },
					{ labelKey: 'deepening.DD1.d', mapping: [{ dim: 'GAP', value: 'voice_to_writing' }] }
				]
			}
		]
	},
	{
		afterSection: 'D',
		id: 'deep-D-diagram-dominant',
		condition: (scores) => {
			const v = scores.D4?.['4.3'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DD2', section: 'DD', textKey: 'deepening.DD2.text',
				options: [
					{ labelKey: 'deepening.DD2.a', mapping: [{ dim: 'D4', value: '4.3' }, { dim: 'D3', value: '3.4' }] },
					{ labelKey: 'deepening.DD2.b', mapping: [{ dim: 'D4', value: '4.3' }, { dim: 'D2', value: '2.5' }] },
					{ labelKey: 'deepening.DD2.c', mapping: [{ dim: 'D4', value: '4.3' }, { dim: 'D2', value: '2.12' }] },
					{ labelKey: 'deepening.DD2.d', mapping: [{ dim: 'GAP', value: 'visual_to_verbal' }] }
				]
			}
		]
	},

	// ========================================
	// Dopo Sezione E (Forma logica)
	// ========================================
	{
		afterSection: 'E',
		id: 'deep-E-abductive',
		condition: (scores) => {
			const v = scores.D5?.['5.3'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DE1', section: 'DE', textKey: 'deepening.DE1.text',
				options: [
					{ labelKey: 'deepening.DE1.a', mapping: [{ dim: 'D5', value: '5.3' }, { dim: 'D2', value: '2.13' }] },
					{ labelKey: 'deepening.DE1.b', mapping: [{ dim: 'D5', value: '5.3' }, { dim: 'D2', value: '2.8' }] },
					{ labelKey: 'deepening.DE1.c', mapping: [{ dim: 'D5', value: '5.3' }, { dim: 'D2', value: '2.14' }] },
					{ labelKey: 'deepening.DE1.d', mapping: [{ dim: 'D5', value: '5.3' }, { dim: 'D2', value: '2.7' }] }
				]
			}
		]
	},
	{
		afterSection: 'E',
		id: 'deep-E-deductive',
		condition: (scores) => {
			const v = scores.D5?.['5.1'] || 0;
			return v >= 2;
		},
		questions: [
			{
				id: 'DE2', section: 'DE', textKey: 'deepening.DE2.text',
				options: [
					{ labelKey: 'deepening.DE2.a', mapping: [{ dim: 'D5', value: '5.1' }, { dim: 'D3', value: '3.4' }] },
					{ labelKey: 'deepening.DE2.b', mapping: [{ dim: 'D5', value: '5.1' }, { dim: 'D2', value: '2.5' }] },
					{ labelKey: 'deepening.DE2.c', mapping: [{ dim: 'D5', value: '5.1' }, { dim: 'D2', value: '2.9' }] },
					{ labelKey: 'deepening.DE2.d', mapping: [{ dim: 'D5', value: '5.2' }] }
				]
			}
		]
	}
];

/**
 * Dato lo stato attuale dei punteggi e la sezione appena completata,
 * restituisce le domande di approfondimento da mostrare.
 */
export function getDeepeningQuestions(afterSection, scores) {
	const applicable = deepeningRules.filter(
		(r) => r.afterSection === afterSection && r.condition(scores)
	);
	// Max 2 approfondimenti per sezione per non allungare troppo
	return applicable.slice(0, 2).flatMap((r) => r.questions);
}
