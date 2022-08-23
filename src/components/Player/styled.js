import styled from 'styled-components';

export const PlayerOverlay = styled.article`
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	flex-direction: column;
	width: 100%;
	height: 20%;
	min-height: 12rem;
	padding: 2rem;
	gap: 0.3rem;
	background-color: #777;
`;

export const PlayerTitle = styled.h2`
	display: inline;
	font-size: 1.4rem;
`;

export const PlayerDate = styled.p`
	display: inline;
	font-size: 1.4rem;
`;
