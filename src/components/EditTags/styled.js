import styled from 'styled-components';

export const Tag = styled.li`
	padding: 0.3rem;
	border: 1px solid;
	font-size: 0.9rem;
`;

export const TagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	gap: 0.4rem;
	color: var(--color-blackish);
	font-family: var(--font-serif);
`;

export const MiniButton = styled.button`
	margin-left: 0.1rem;
	padding: 0 4px;
	border: none;
	background: transparent;
`;
