import { InputLabel, TextField as MUITextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

// type ITextFieldProps = TextFieldProps & FieldHookConfig<string>;

export const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props.name!);

	console.log('props :: ', { field, meta, props });

	return (
		<>
			<InputLabel
				htmlFor={props.id}
				required={props.required}
				sx={{ paddingY: 1 }}
				error={(meta.error ?? '').length > 0}
			>
				{label}
			</InputLabel>
			<MUITextField
				fullWidth
				{...field}
				{...props}
				error={(meta.error ?? '').length > 0}
				helperText={meta.touched && meta.error ? meta.error : null}
			/>
		</>
	);
};
