import ReactAudioPlayer from 'react-audio-player';

import useStore from '../../hooks/useStore';

import {PlayerOverlay, PlayerTitle, PlayerDate} from './styled';

export default function Player() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const selectedEpisode = useStore(state => state.selectedEpisode);

	return (
		<PlayerOverlay>
			<div>
				<PlayerTitle>{selectedEpisode.title ? selectedEpisode.title : 'empty'}</PlayerTitle>{' '}
				- <PlayerDate>{selectedEpisode.date ? selectedEpisode.date : 'empty'}</PlayerDate>
			</div>
			<p>{selectedPodcast.title ? selectedPodcast.title : 'empty'}</p>
			<p>{selectedPodcast.author ? selectedPodcast.author : 'empty'}</p>
			<ReactAudioPlayer controls src={selectedEpisode.url ? selectedEpisode.url : ''} />
		</PlayerOverlay>
	);
}
