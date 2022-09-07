import styled from 'styled-components';

export const NavigationLink = styled.a`
	padding: 0.5rem;
	border: 0.1rem solid;
	border-radius: 0.3rem;
	font-family: var(--font-sans);
	color: var(--color-primary-dark);
	&&:hover {
		background-color: #f5f5f5;
		cursor: pointer;
	}
`;
