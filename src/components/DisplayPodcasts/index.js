import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';

import {PodcastCard} from './styled';

export default function DisplayPodcasts({podcasts}) {
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);
	const router = useRouter();

	function handleClick(podcast) {
		console.log(podcast);
		setSelectedEpisodes(podcast.episodes);
		router.push('/episodes');
	}
	return (
		<>
			{podcasts.map(podcast => (
				<PodcastCard key={podcast.key} onClick={() => handleClick(podcast)}>
					<p>
						<a>{podcast.title}</a>
					</p>
					<p>{podcast.author}</p>
				</PodcastCard>
			))}
		</>
	);
}
