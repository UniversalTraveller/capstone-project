import styled from 'styled-components';

export const PodcastHeaderText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	font-family: var(--font-sans);
	color: var(--color-primary-dark);
`;

export const PodcastHeaderTitle = styled.h2`
	font-size: 1.4rem;
	font-weight: bold;
`;

export const PodcastHeaderParagraph = styled.p`
	display: flex;
	font-size: 1rem;
	gap: 0.6rem;
`;

export const PodcastHeaderArea = styled.article`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	margin-top: 1.4rem;
`;
