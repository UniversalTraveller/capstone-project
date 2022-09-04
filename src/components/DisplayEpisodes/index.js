import useStore from '../../hooks/useStore';
import convertSeconds from '../../utils/convertSeconds';
import decodeHtml from '../../utils/decodeHtml';
import renderDate from '../../utils/renderDate';

import {EpisodeCard} from './styled';

export default function DisplayEpisodes() {
	const setEpisodePlaying = useStore(state => state.setEpisodePlaying);
	const setPodcastPlaying = useStore(state => state.setPodcastPlaying);
	const podcasts = useStore(state => state.podcasts);
	const selectedPodcast = useStore(state => state.selectedPodcast);

	function handleClick(episode) {
		setEpisodePlaying(episode);
		setPodcastPlaying(podcasts.find(podcast => podcast.episodes.includes(episode)));
	}

	return (
		<>
			{selectedPodcast.episodes.map(episode => (
				<EpisodeCard
					key={episode.key}
					onClick={() => handleClick(episode)}
					name={decodeHtml(episode.title)}
					type="button"
				>
					<p>{decodeHtml(episode.title)}</p>
					<p>
						<span>{convertSeconds(episode.length)}</span> -{' '}
						<span>{renderDate(episode.date)}</span>
					</p>
				</EpisodeCard>
			))}
		</>
	);
}
