import { Typography } from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import { CreatePostFormFields } from './CreatePostFormFields';

interface Values {
	projectName: string;
	projectDescription: string;
}

const initialValues = {
	projectName: '',
	projectDescription: '',
};

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

			<Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
				<Form>
					<CreatePostFormFields />
				</Form>
			</Formik>
		</>
	);
};
