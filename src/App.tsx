import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CreatePostForm } from 'components/sections';
import { theme } from 'utils/mui';

export const App = () => (
	<ThemeProvider theme={theme}>
		<Container maxWidth="xl">
			<CreatePostForm />
		</Container>
	</ThemeProvider>
);
