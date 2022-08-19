import styled from 'styled-components';

export const PlayerOverlay = styled.article`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 20%;
	min-height: 12rem;
	background-color: #777;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

export const PlayerTitle = styled.h2`
	display: inline;
	font-size: 1.4rem;
`;

export const PlayerDate = styled.p`
	display: inline;
	font-size: 1.4rem;
`;
