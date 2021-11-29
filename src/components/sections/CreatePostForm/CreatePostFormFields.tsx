import { Grid, Button } from '@mui/material';
import { TextField } from 'components/lib';
import { EnumCreatePostFormFields } from './helpers';

export const CreatePostFormFields = () => (
	<Grid container spacing={2}>
		<Grid item xs={12}>
			<TextField
				name={EnumCreatePostFormFields.PROJECT_NAME}
				id={EnumCreatePostFormFields.PROJECT_NAME}
				label="Project Name"
				required={true}
				maxLength={50}
				placeholder="50 characters max"
			/>
		</Grid>
		<Grid item xs={12}>
			<TextField
				name={EnumCreatePostFormFields.PROJECT_DESCRIPTION}
				id={EnumCreatePostFormFields.PROJECT_DESCRIPTION}
				label="Project Description"
				multiline={true}
				minRows={4}
				maxRows={4}
				required={true}
				maxLength={50}
				placeholder="50 characters max"
			/>
		</Grid>
		<Grid item xs={12}>
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</Grid>
	</Grid>
);
