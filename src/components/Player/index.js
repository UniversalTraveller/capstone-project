import ReactAudioPlayer from 'react-audio-player';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import renderDate from '../../utils/renderDate';

import {PlayerOverlay, PlayerTitle, PlayerDate, AudioPlayerBox} from './styled';

export default function Player() {
	const episodePlaying = useStore(state => state.episodePlaying);
	const podcastPlaying = useStore(state => state.podcastPlaying);

	//prepare output
	const podcastTitle = trimString(decodeHtml(podcastPlaying.title), 60);
	const podcastAuthor = trimString(decodeHtml(podcastPlaying.author), 60);
	const episodeTitle = trimString(decodeHtml(episodePlaying.title), 52);
	const date = renderDate(episodePlaying.date);

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
				<PlayerDate> - </PlayerDate>
				<PlayerDate>{episodePlaying.date ? date : '00.00.0000'}</PlayerDate>
			</div>
			<p>{podcastTitle ? podcastTitle : 'No title'}</p>
			<p>{podcastAuthor ? podcastAuthor : 'No author'}</p>
			<AudioPlayerBox>
				<ReactAudioPlayer
					controls
					src={episodePlaying.url ? episodePlaying.url : ''}
					onVolumeChanged={handleVolumeChange}
					volume={playerVolume}
					style={{display: 'block', width: '100%'}}
				/>
			</AudioPlayerBox>
		</PlayerOverlay>
	);
}
