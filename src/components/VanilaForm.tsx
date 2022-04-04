import { ChangeEvent, useState } from 'react';
import { Checkbox, CheckboxGroup, Container, ErrorValidation, Input, InputGroup, Label } from './base-ui';

const VanilaForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		approveLoveOfDogs: false,
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

	return (
		<Container>
			<form>
				<fieldset>
					<legend>Vanila Form</legend>

					<InputGroup>
						<Label>Email:</Label>

						<Input type='email' value={formData.email} onChange={onEmailChanged} />

						<ErrorValidation></ErrorValidation>
					</InputGroup>

					<InputGroup>
						<Label>First Name:</Label>

						<Input type='text' value={formData.firstName} onChange={onFirstNameChanged} />

						<ErrorValidation></ErrorValidation>
					</InputGroup>

					<InputGroup>
						<Label> Last Name:</Label>

						<Input type='text' value={formData.lastName} onChange={onLastNameChanged} />

						<ErrorValidation></ErrorValidation>
					</InputGroup>

					<CheckboxGroup>
						<label>I ❤️ doggos.</label>

						<Checkbox checked={formData.approveLoveOfDogs} onChange={onLoveOfDogsChanged} />
					</CheckboxGroup>
				</fieldset>
			</form>
		</Container>
	);
};

export default VanilaForm;
