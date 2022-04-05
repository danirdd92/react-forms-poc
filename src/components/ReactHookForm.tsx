import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../schema/schema';
import { Container, InputGroup, Label, Input, CheckboxGroup, Checkbox, Button, ErrorValidation } from './base-ui';
const ReactHookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		const output = JSON.stringify(data, null, 4);
		alert(output);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<legend>RHF Form</legend>

					<InputGroup>
						<Label>Email:</Label>

						<Input type='email' {...register('email')} />

						{errors.email && <ErrorValidation>{errors.email.message}</ErrorValidation>}
					</InputGroup>

					<InputGroup>
						<Label>First Name:</Label>

						<Input type='text' {...register('firstName')} />

						{errors.firstName && <ErrorValidation>{errors.firstName.message}</ErrorValidation>}
					</InputGroup>

					<InputGroup>
						<Label>Last Name:</Label>

						<Input type='text' {...register('lastName')} />

						{errors.lastName && <ErrorValidation>{errors.lastName.message}</ErrorValidation>}
					</InputGroup>

					<CheckboxGroup>
						<label>I ❤️ doggos.</label>

						<Checkbox {...register('approveLoveOfDogs')} />
					</CheckboxGroup>

					{errors.approveLoveOfDogs && (
						<div>
							<ErrorValidation>{errors.approveLoveOfDogs.message}</ErrorValidation>
						</div>
					)}
					<Button>Submit</Button>
				</fieldset>
			</form>
		</Container>
	);
};

export default ReactHookForm;
