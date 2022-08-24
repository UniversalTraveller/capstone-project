import styled from 'styled-components';

export const EpisodeCard = styled.button`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	margin: 1rem 0;
	padding: 0.3rem;
	border-width: 0 0 0.1rem 0;
	border-style: solid;
	border-color: #000;
	background-color: #fff;
	text-align: left;
	gap: 0.4rem;
	&&:hover {
		background-color: #f5f5f5;
		cursor: pointer;
	}
`;
