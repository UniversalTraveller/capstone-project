import styled from 'styled-components';

export const EpisodeCard = styled.button`
	max-width: 640px;
	width: 100%;
	margin: 1rem 0 1rem 0;
	padding: 0.3rem;
	border-width: 0 0 0.1rem 0;
	background-color: #fff;
	border-style: solid;
	border-color: #000;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.4rem;
	&&:hover {
		cursor: pointer;
		background-color: #f5f5f5;
	}
`;
