import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const _theme = createTheme({
	palette: {
		text: { primary: grey[800] },
		primary: {
			main: grey[900],
		},
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(','),
	},
});

export const theme = responsiveFontSizes(_theme);
