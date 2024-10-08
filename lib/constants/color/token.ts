export const token = {
	tint: {
		main: {
			buzzle005: '#ECEEFF',
			buzzle010: '#D9DDFF',
			buzzle020: '#B3BBFF',
			buzzle030: '#8C99FF',
			buzzle040: '#6677FF',
			buzzle050: '#3A4FFF',
			buzzle060: '#2E3FCC',
			buzzle070: '#232F99',
			buzzle080: '#172066',
			coral005: '#fff7ed',
			coral010: '#ffedd5',
			coral020: '#fed7aa',
			coral030: '#fdba74',
			coral040: '#fbbf24',
			coral050: '#f59e0b',
			coral060: '#e17a19',
			coral070: '#c2410c',
			coral080: '#9a3412',
		},
		sub: {},
		service: {
			buzzle: '#3A4FFF',
		},
	},
	gray: {
		gray005: '#fafafa',
		gray010: '#f5f5f5',
		gray020: '#e5e5e5',
		gray030: '#d4d4d4',
		gray040: '#a3a3a3',
		gray050: '#737373',
		gray060: '#525252',
		gray070: '#404040',
		gray080: '#262626',
		gray090: '#191919',
	},
	black: '#000000',
	white: '#ffffff',
} as const;

export type Token = typeof token;
