import styled from 'styled-components';

export const FormsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 2rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.75rem;
	marginleft: auto;
	marginright: auto;
	background-color: #fcfcfc;
	border-radius: 0.25rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
	fontfamily: 'Roboto', sans-serif;
	display: flex;
	gap: 10px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 2.5rem 0.5rem;
`;

export const CheckboxGroup = styled(InputGroup)`
	flex-direction: row-reverse;
	justify-content: flex-end;
`;

export const Input = styled.input`
	fontfamily: 'Roboto', sans-serif;
	padding: 0.5rem;
	border: 1px solid #0e0e0e0e;
	border-radius: 0.25rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
	&:hover {
		outline: 1px solid blue;
	}
	&:focus-visible {
		outline-color: #386ec5;
	}
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	width: 1.125rem;
	height: 1.125rem;
	background: white;
	border-radius: 5px;
	border: 2px solid #5a5a5a;
`;

export const Label = styled.label`
	text-transform: uppercase;
	font-size: 0.75rem;
	font-weight: 500;
	color: #5a5a5a;
`;

export const ErrorValidation = styled.span`
	color: #811919;
	background-color: #d978784b;
	font-size: 0.75rem;
	font-weight: 600;
	border-radius: 0.25rem;
	padding: 0.5rem;
	margin-top: 0.0125rem;
`;

export const Button = styled.button`
	margin-inline: auto;
	background: #0066a2;
	color: white;
	border-style: outset;
	border-color: #0066a2;
	height: 40px;
	width: auto;
	margin-top: 0.75rem;
	font: bold15px arial, sans-serif;
	text-shadow: none;
`;
