import styled from 'styled-components';

export const PodcastLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	border: none;
	background: transparent;
	text-align: left;
	gap: 0.5rem;
	&&:hover {
		cursor: pointer;
	}
`;

export const PodcastCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	max-width: 640px;
	margin: 1rem 0;
	padding: 0.5rem;
	border: 0.1rem solid;
	border-radius: 0.3rem;
	background-color: #fff;
	text-align: left;
	gap: 0.4rem;
`;
