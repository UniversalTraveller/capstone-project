import useStore from '../../hooks/useStore';
import convertSeconds from '../../utils/convertSeconds';
import decodeHtml from '../../utils/decodeHtml';
import renderDate from '../../utils/renderDate';

import {EpisodeCard} from './styled';

export default function DisplayEpisodes({episodes}) {
	const setSelectedEpisode = useStore(state => state.setSelectedEpisode);

	function handleClick(episode) {
		setSelectedEpisode(episode);
	}

	return (
		<>
			{episodes.map(episode => (
				<EpisodeCard
					key={episode.key}
					onClick={() => handleClick(episode)}
					name={decodeHtml(episode.title)}
					type="button"
				>
					<p>{episode.title}</p>
					<p>
						<span>{convertSeconds(episode.length)}</span> -{' '}
						<span>{renderDate(episode.date)}</span>
					</p>
				</EpisodeCard>
			))}
		</>
	);
}
