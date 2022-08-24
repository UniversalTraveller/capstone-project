import ReactAudioPlayer from 'react-audio-player';

import useStore from '../../hooks/useStore';

import {PlayerOverlay, PlayerTitle, PlayerDate} from './styled';

export default function Player() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const selectedEpisode = useStore(state => state.selectedEpisode);
	const playerVolume = useStore(state => state.playerVolume);
	const setPlayerVolume = useStore(state => state.setPlayerVolume);

	function handleVolumeChange(event) {
		const volume = event.srcElement.volume;
		setPlayerVolume(volume);
	}

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
			<ReactAudioPlayer
				controls
				src={selectedEpisode.url ? selectedEpisode.url : ''}
				onVolumeChanged={handleVolumeChange}
				volume={playerVolume}
			/>
		</PlayerOverlay>
	);
}
