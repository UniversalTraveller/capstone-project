import styled from 'styled-components';

export const EpisodeCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	padding: 0.6rem;
	border-radius: 0.6rem;
	background-color: var(--color-primary-light);
	box-shadow: 0 0 40px -10px var(--color-primary-light);
	color: var(--color-blackish);
	font-family: var(--font-sans);
	font-size: 1rem;
	text-align: left;
	gap: 0.3rem;
	&&:hover {
		cursor: pointer;
	}
`;

export const EpisodeTitle = styled.h2`
	font-weight: 600;
`;
