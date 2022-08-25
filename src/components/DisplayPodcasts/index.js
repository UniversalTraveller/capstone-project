import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';

import {PodcastCard} from './styled';

export default function DisplayPodcasts({podcasts}) {
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);
	const router = useRouter();

	function handleClick(podcast) {
		setSelectedEpisodes(podcast.episodes);
		router.push('/episodes');
	}
	return (
		<>
			{podcasts.map(podcast => (
				<PodcastCard key={podcast.key} onClick={() => handleClick(podcast)}>
					<p>
						<a>{decodeHtml(podcast.title)}</a>
					</p>
					<p>{decodeHtml(podcast.author)}</p>
				</PodcastCard>
			))}
		</>
	);
}
