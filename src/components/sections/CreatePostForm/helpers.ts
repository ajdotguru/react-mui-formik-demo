import * as Yup from 'yup';

export enum EnumCreatePostFormFields {
	PROJECT_NAME = 'projectName',
	PROJECT_DESCRIPTION = 'projectDescription',
}

export interface Values {
	[EnumCreatePostFormFields.PROJECT_NAME]: string;
	[EnumCreatePostFormFields.PROJECT_DESCRIPTION]: string;
}

export const initialValues = {
	[EnumCreatePostFormFields.PROJECT_NAME]: '',
	[EnumCreatePostFormFields.PROJECT_DESCRIPTION]: '',
};

export const validationSchema = Yup.object({
	[EnumCreatePostFormFields.PROJECT_NAME]: Yup.string()
		.max(50, 'Project Name must be 50 characters or less')
		.required('Project Name is required'),
	[EnumCreatePostFormFields.PROJECT_DESCRIPTION]: Yup.string()
		.max(50, 'Project Description must be 50 characters or less')
		.required('Project Description is required'),
});
