import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import {NavigationLink} from '../NavigatonLink/styled';

import {PodcastCard, PodcastButton} from './styled';

export default function DisplayPodcasts({podcasts}) {
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);
	const setSelectedPodcast = useStore(state => state.setSelectedPodcast);
	const router = useRouter();

	function handleSelectedPodcast(podcast) {
		setSelectedEpisodes(podcast.episodes);
		setSelectedPodcast(podcast);
		router.push('/episodes');
	}

	function handleEditTags(podcast) {
		setSelectedPodcast(podcast);
		router.push('/edit-tags');
	}

	return (
		<>
			{podcasts.map(podcast => (
				<PodcastCard key={podcast.key}>
					<PodcastButton onClick={() => handleSelectedPodcast(podcast)}>
						<span>{decodeHtml(podcast.title)}</span>
						<span>{decodeHtml(podcast.author)}</span>
					</PodcastButton>
					<NavigationLink onClick={() => handleEditTags(podcast)}>
						Edit Tags
					</NavigationLink>
				</PodcastCard>
			))}
		</>
	);
}
