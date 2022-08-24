import ReactAudioPlayer from 'react-audio-player';

import useStore from '../../hooks/useStore';

import {PlayerOverlay, PlayerTitle, PlayerDate} from './styled';

export default function Player() {
	const podcasts = useStore(state => state.podcasts);
	const selectedEpisode = useStore(state => state.selectedEpisode);
	const selectedPodcast = podcasts.find(podcast => podcast.episodes.includes(selectedEpisode));

	return (
		<PlayerOverlay>
			<div>
				<PlayerTitle>
					{selectedEpisode.title ? selectedEpisode.title : 'Click on an episode to play!'}
				</PlayerTitle>
				<span> - </span>
				<PlayerDate>
					{selectedEpisode.date ? selectedEpisode.date : '00.00.0000'}
				</PlayerDate>
			</div>
			<p>{selectedPodcast.title ? selectedPodcast.title : 'No title'}</p>
			<p>{selectedPodcast.author ? selectedPodcast.author : 'No author'}</p>
			<ReactAudioPlayer controls src={selectedEpisode.url ? selectedEpisode.url : ''} />
		</PlayerOverlay>
	);
}
