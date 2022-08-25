import styled from 'styled-components';

export const PodcastCard = styled.button`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	margin: 1rem 0;
	padding: 0.3rem;
	border: 0.1rem solid;
	border-radius: 0.3rem;
	background-color: #fff;
	text-align: left;
	gap: 0.4rem;
	&&:hover {
		background-color: #f5f5f5;
		cursor: pointer;
	}
`;
