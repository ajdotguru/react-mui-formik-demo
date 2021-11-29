import { Typography, Grid } from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import { CreatePostFormFields } from './CreatePostFormFields';
import { Values, initialValues, validationSchema } from './helpers';

export const CreatePostForm = () => {
	const onSubmitHandler = (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
			resetForm();
		}, 500);
	};

	return (
		<>
			<Typography variant="h1" fontWeight="400">
				Create Post Form
			</Typography>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmitHandler}
				enableReinitialize={true}
				validateOnBlur={false}
				validateOnChange={false}
			>
				<Form noValidate>
					<Grid container>
						<Grid item xs={12} md={8}>
							<CreatePostFormFields />
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</>
	);
};
