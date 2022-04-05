import { ChangeEvent, useRef, useState } from 'react';
import { Button, Checkbox, CheckboxGroup, Container, ErrorValidation, Input, InputGroup, Label } from './base-ui';

const VanilaForm = () => {
	const renderCouter = useRef(0);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		approveLoveOfDogs: false,
	});
	const [errors, setErrors] = useState({
		email: {},
		firstName: {},
		lastName: {},
		approveLoveOfDogs: {},
	});

	const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData({ ...formData, email: value });
	};

	const onFirstNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData({ ...formData, firstName: value });
	};

	const onLastNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData({ ...formData, lastName: value });
	};

	const onLoveOfDogsChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		setFormData({ ...formData, approveLoveOfDogs: checked });
	};
	const validateForm = () => {
		const _errors: any = {};
		if (!formData.email) {
			_errors.email = {
				required: 'Email is required',
			};
		}
		if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
			_errors.email = { ..._errors.email, notValid: 'Email is invalid' };
		}
		if (!formData.firstName) {
			_errors.firstName = {
				required: 'First name is required',
			};
		}
		if (!formData.lastName) {
			_errors.lastName = {
				required: 'Last name is required',
			};
		}
		if (!formData.approveLoveOfDogs) {
			_errors.approveLoveOfDogs = {
				required: 'You must approve love of dogs',
			};
		}
		setErrors(_errors);

		return Object.keys(_errors).length === 0 ? true : false;
	};

	const printErrors = (error: any) => {
		if (error && Object.keys(error).length > 0) {
			const messages = [];
			for (const key in error) {
				messages.push(error[key]);
			}

			return (
				<>
					{messages.map((message: string, index: number) => (
						<ErrorValidation key={index}>{message}</ErrorValidation>
					))}
				</>
			);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isValid = validateForm();
		if (isValid) {
			const output = JSON.stringify(formData, null, 4);
			alert(output);
		}
	};

	console.log('Valila Form render counter: ', renderCouter.current++);

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Vanila Form</legend>

					<InputGroup>
						<Label>Email:</Label>

						<Input type='email' value={formData.email} onChange={onEmailChanged} />
						{printErrors(errors.email)}
					</InputGroup>

					<InputGroup>
						<Label>First Name:</Label>

						<Input type='text' value={formData.firstName} onChange={onFirstNameChanged} />

						{printErrors(errors.firstName)}
					</InputGroup>

					<InputGroup>
						<Label> Last Name:</Label>

						<Input type='text' value={formData.lastName} onChange={onLastNameChanged} />

						{printErrors(errors.lastName)}
					</InputGroup>

					<CheckboxGroup>
						<label>I ❤️ doggos.</label>

						<Checkbox checked={formData.approveLoveOfDogs} onChange={onLoveOfDogsChanged} />
					</CheckboxGroup>
					<div>{printErrors(errors.approveLoveOfDogs)}</div>
					<Button>Submit</Button>
				</fieldset>
			</form>
		</Container>
	);
};

export default VanilaForm;
