import {useEffect} from 'react';

import DisplayEpisodes from '../components/DisplayEpisodes';
import useStore from '../hooks/useStore';

export default function Episodes() {
	const selectedEpisodes = useStore(state => state.selectedEpisodes);
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);

	useEffect(() => {
		setSelectedEpisodes();
	}, []);

	return (
		<>
			<DisplayEpisodes episodes={selectedEpisodes} />
		</>
	);
}
