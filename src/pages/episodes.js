import {useEffect} from 'react';

import DisplayEpisodes from '../components/DisplayEpisodes';
import useStore from '../hooks/useStore';

export default function Episodes() {
	const podcasts = useStore(state => state.podcasts);
	const selectedEpisodes = useStore(state => state.selectedEpisodes);
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);

	//hardcoded podcast selection, because there are none to choose from yet
	const selectedPodcast = podcasts.find(
		podcast => podcast.name === 'Syntax - Tasty Web Development Treats'
	);

	useEffect(() => {
		setSelectedEpisodes(selectedPodcast.key);
	}, []);

	return <DisplayEpisodes episodes={selectedEpisodes} />;
}
