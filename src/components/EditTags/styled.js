import styled from 'styled-components';

export const Tag = styled.li`
	padding: 0.4rem 0.4rem 0.4rem 0.4rem;
	font-size: 0.9rem;

	background-color: var(--color-secondary-dark);
	color: var(--color-primary-light);
	border-radius: 0.4rem;
`;

export const TagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	gap: 0.4rem;
	color: var(--color-secondary-dark);
	font-family: var(--font-serif);
`;

export const MiniButton = styled.button`
	margin-left: 0.4rem;
	padding: 0 4px;
	border: none;
	border-radius: 0.2rem;
	background-color: var(--color-primary-light);
`;
