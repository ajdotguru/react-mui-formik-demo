import * as Yup from 'yup';
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

const validationSchema = Yup.object({
	projectName: Yup.string()
		.max(50, 'Project Name must be 50 characters or less')
		.required('Project Name is required'),
	projectDescription: Yup.string()
		.max(50, 'Project Description must be 50 characters or less')
		.required('Project Description is required'),
});

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
					<CreatePostFormFields />
				</Form>
			</Formik>
		</>
	);
};
