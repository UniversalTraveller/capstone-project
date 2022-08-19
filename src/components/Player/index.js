import useStore from '../../hooks/useStore';

import {PlayerOverlay, AudioPlayer, PlayerTitle, PlayerDate} from './styled';

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
			<AudioPlayer controls>
				<source src={selectedEpisode.url ? selectedEpisode.url : ''} />
				Your browser does not support the <code>audio</code> element.
			</AudioPlayer>
		</PlayerOverlay>
	);
}
