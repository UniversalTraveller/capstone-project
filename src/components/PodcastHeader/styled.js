import styled from 'styled-components';

export const PodcastHeaderText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	color: var(--color-blackish);
	font-family: var(--font-sans);
`;

export const PodcastHeaderTitle = styled.h2`
	font-size: 1.4rem;
	font-weight: 600;
`;

export const PodcastHeaderParagraph = styled.p`
	display: flex;
	font-size: 1rem;
	gap: 0.6rem;
`;

export const PodcastHeaderArea = styled.article`
	display: flex;
	flex-direction: row;
	gap: 0.8rem;
	margin-top: 0.2rem;
`;
