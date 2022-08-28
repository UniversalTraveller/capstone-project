import ReactAudioPlayer from 'react-audio-player';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import renderDate from '../../utils/renderDate';

import {PlayerOverlay, PlayerTitle, PlayerDate} from './styled';

export default function Player() {
	const podcasts = useStore(state => state.podcasts);
	const selectedEpisode = useStore(state => state.selectedEpisode);
	const selectedPodcast = podcasts.find(podcast => podcast.episodes.includes(selectedEpisode));

	//prepare output
	const podcastTitle = selectedPodcast ? trimString(decodeHtml(selectedPodcast.title), 60) : '';
	const podcastAuthor = selectedPodcast ? trimString(decodeHtml(selectedPodcast.author), 60) : '';
	const episodeTitle = selectedEpisode ? trimString(decodeHtml(selectedEpisode.title), 72) : '';
	const date = selectedEpisode ? renderDate(selectedEpisode.date) : '';

	function trimString(string, length) {
		return string.length > length ? string.substring(0, length) + '...' : string;
	}

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
					{episodeTitle ? episodeTitle : 'Click on an episode to play!'}
				</PlayerTitle>
				<span> - </span>
				<PlayerDate>{selectedEpisode.date ? date : '00.00.0000'}</PlayerDate>
			</div>
			<p>{podcastTitle ? podcastTitle : 'No title'}</p>
			<p>{podcastAuthor ? podcastAuthor : 'No author'}</p>
			<ReactAudioPlayer
				controls
				src={selectedEpisode.url ? selectedEpisode.url : ''}
				onVolumeChanged={handleVolumeChange}
				volume={playerVolume}
			/>
		</PlayerOverlay>
	);
}
