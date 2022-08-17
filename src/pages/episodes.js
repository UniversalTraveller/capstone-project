import {useEffect} from 'react';
import {useState} from 'react';

import DisplayEpisodes from '../components/DisplayEpisodes';
import useStore from '../hooks/useStore';

export default function Episodes() {
	const podcasts = useStore(state => state.podcasts);
	const [selectedEpisodes, setSelectedEpisodes] = useState([]);

	function getEpisodes() {
		const episodes = podcasts.map(podcast => podcast.episodes).flat();
		return episodes;
	}

	useEffect(() => {
		setSelectedEpisodes(getEpisodes());
	}, []);

	return (
		<>
			<DisplayEpisodes episodes={selectedEpisodes} />
		</>
	);
}
