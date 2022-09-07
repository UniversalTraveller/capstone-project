import styled from 'styled-components';

export const EpisodeCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	padding: 0.6rem;
	border-radius: 0.6rem;
	background-color: var(--color-secondary-light);
	color: var(--color-primary-dark);
	font-family: var(--font-sans);
	font-size: 1rem;
	text-align: left;
	gap: 0.3rem;
	&&:hover {
		cursor: pointer;
	}
	box-shadow: 0 0 3rem -1.8rem var(--color-secondary-dark);
`;

export const EpisodeTitle = styled.h2`
	font-weight: bold;
`;
