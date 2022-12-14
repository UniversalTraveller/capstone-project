import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	font-family: var(--font-sans);
`;

export const FormRow = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const FormButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.2rem 0.3rem;
	border: 0;
	border-radius: 0.2rem;
	background: var(--color-contrast);
	color: var(--color-whiteish);
	font-family: var(--font-sans);
	font-size: 1rem;
	text-align: left;
	gap: 0.3rem;
	:hover {
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 50, 0.1);
	}
`;
