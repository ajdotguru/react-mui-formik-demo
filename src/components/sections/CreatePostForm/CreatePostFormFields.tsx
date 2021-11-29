import { Grid, Button } from '@mui/material';
import { TextField } from 'components/lib';

export const CreatePostFormFields = () => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<TextField name="projectName" id="projectName" label="Project Name" required={true} />
		</Grid>
		<Grid item xs={12}>
			<TextField
				name="projectDescription"
				id="projectDescription"
				label="Project Description"
				multiline={true}
				minRows={4}
				maxRows={4}
				required={true}
			/>
		</Grid>
		<Grid item xs={12}>
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</Grid>
	</Grid>
);
