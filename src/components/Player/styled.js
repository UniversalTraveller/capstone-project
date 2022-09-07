import styled from 'styled-components';

export const PlayerOverlay = styled.article`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	flex-direction: column;
	width: 100%;
	height: 12rem;
	padding: 1rem;
	gap: 0.3rem;
	background-color: var(--color-secondary-light);
	color: var(--color-primary-dark);
	font-family: var(--font-sans);
	box-shadow: 0 0 80px -40px var(--color-primary-dark);
`;

export const PlayerTitle = styled.h2`
	display: inline;
	font-size: 1.4rem;
	font-weight: bold;
`;

export const PlayerDate = styled.p`
	display: inline;
	font-size: 1.4rem;
	font-weight: bold;
`;

export const AudioPlayerBox = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	right: 1rem;
`;
