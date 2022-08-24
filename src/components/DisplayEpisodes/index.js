import useStore from '../../hooks/useStore';

import {EpisodeCard} from './styled';

export default function DisplayEpisodes({episodes}) {
	const setSelectedPodcast = useStore(state => state.setSelectedPodcast);
	const setSelectedEpisode = useStore(state => state.setSelectedEpisode);
	const podcasts = useStore(state => state.podcasts);

	function handleClick(episode) {
		setSelectedEpisode(episode);
		setSelectedPodcast(podcasts[0]);
	}

	return (
		<>
			{episodes.map(episode => (
				<EpisodeCard
					key={episode.key}
					onClick={() => handleClick(episode)}
					name={episode.title}
					type="button"
				>
					<p>{episode.title}</p>
					<p>
						<span>{episode.length}</span> - <span>{episode.date}</span>
					</p>
				</EpisodeCard>
			))}
		</>
	);
}
