import { InputLabel, TextField as MUITextField, TextFieldProps, Box } from '@mui/material';
import { useField } from 'formik';

interface ITextFieldProps {
	maxLength: number;
}

export const TextField: React.FC<ITextFieldProps & TextFieldProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props.name!);

	return (
		<>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<InputLabel
					htmlFor={props.id}
					required={props.required}
					sx={{ paddingY: 1 }}
					error={(meta.error ?? '').length > 0}
				>
					{label}
				</InputLabel>
				<InputLabel>
					{field.value.length} / {props.maxLength}
				</InputLabel>
			</Box>
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
