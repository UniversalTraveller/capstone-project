import styled from 'styled-components';

export const PodcastCard = styled.article`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	padding: 0.6rem;
	border-radius: 0.6rem;
	background-color: var(--color-secondary-light);
	color: var(--color-primary-dark);
	box-shadow: 0 0 3rem -2rem var(--color-secondary-dark);
	font-family: var(--font-sans);
	font-size: 1rem;
	text-align: left;
	gap: 0.8rem;
	&&:hover {
		cursor: pointer;
	}
`;

export const PodcastTitle = styled.h2`
	font-weight: bold;
`;

export const PodcastImage = styled.img`
	border-radius: 0.4rem;
`;

export const PodcastTextBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;
export const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1.2rem 0;
	gap: 1rem;
`;
