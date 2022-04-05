import { useFormik } from 'formik';
import { schema } from '../schema/schema';
import { Container, InputGroup, Label, Input, CheckboxGroup, Checkbox, Button, ErrorValidation } from './base-ui';
const FormikForm = () => {
	const { errors, touched, values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			firstName: '',
			lastName: '',
			approveLoveOfDogs: false,
		},
		validationSchema: schema,
		onSubmit: (values) => {
			const output = JSON.stringify(values, null, 4);
			alert(output);
		},
	});

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Formik Form</legend>

					<InputGroup>
						<Label htmlFor='email'>Email:</Label>

						<Input type='email' id='email' name='email' value={values.email} onChange={handleChange} />

						{errors.email && touched.email && <ErrorValidation>{errors.email}</ErrorValidation>}
					</InputGroup>

					<InputGroup>
						<Label htmlFor='firstName'>First Name:</Label>

						<Input type='text' id='firstName' name='firstName' value={values.firstName} onChange={handleChange} />

						{errors.firstName && touched.firstName && <ErrorValidation>{errors.firstName}</ErrorValidation>}
					</InputGroup>

					<InputGroup>
						<Label htmlFor='lastName'> Last Name:</Label>

						<Input type='text' id='lastName' name='lastName' value={values.lastName} onChange={handleChange} />

						{errors.lastName && touched.lastName && <ErrorValidation>{errors.lastName}</ErrorValidation>}
					</InputGroup>

					<CheckboxGroup>
						<label htmlFor='approveLoveOfDogs'>I ❤️ doggos.</label>

						<Checkbox id='approveLoveOfDogs' name='approveLoveOfDogs' checked={values.approveLoveOfDogs} onChange={handleChange} />
					</CheckboxGroup>

					{errors.approveLoveOfDogs && touched.approveLoveOfDogs && (
						<div>
							<ErrorValidation>{errors.approveLoveOfDogs}</ErrorValidation>
						</div>
					)}
					<Button>Submit</Button>
				</fieldset>
			</form>
		</Container>
	);
};

export default FormikForm;
