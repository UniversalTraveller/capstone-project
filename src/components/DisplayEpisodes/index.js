import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import convertSeconds from '../../utils/convertSeconds';
import decodeHtml from '../../utils/decodeHtml';
import renderDate from '../../utils/renderDate';

import {EpisodeCard, EpisodeTitle} from './styled';

export default function DisplayEpisodes() {
	const setEpisodePlaying = useStore(state => state.setEpisodePlaying);
	const setPodcastPlaying = useStore(state => state.setPodcastPlaying);
	const podcasts = useStore(state => state.podcasts);
	const router = useRouter();
	const {id} = router.query;
	const selectedPodcast = podcasts.find(podcast => podcast.key === id);

	function handleClick(episode) {
		setEpisodePlaying(episode);
		setPodcastPlaying(podcasts.find(podcast => podcast.episodes.includes(episode)));
	}

	return (
		<>
			{selectedPodcast
				? selectedPodcast.episodes.map(episode => (
						<EpisodeCard
							key={episode.key}
							onClick={() => handleClick(episode)}
							name={decodeHtml(episode.title)}
							type="button"
						>
							<EpisodeTitle>{decodeHtml(episode.title)}</EpisodeTitle>
							<p>
								<span>{renderDate(episode.date)}</span>
								<span> - </span>
								<span>{convertSeconds(episode.length)}</span>
							</p>
						</EpisodeCard>
				  ))
				: null}
		</>
	);
}
