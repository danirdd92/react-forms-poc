import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup.string().email().required('Email is required').email('Please enter a valid email address'),

	firstName: yup.string().required('First name is required'),

	lastName: yup.string().required('Last name is required'),

	approveLoveOfDogs: yup.boolean().required().isTrue('You must approve love of dogs'),
});
