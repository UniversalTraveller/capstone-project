import DisplayEpisodes from '../components/DisplayEpisodes';
import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function Episodes() {
	const podcasts = useStore(state => state.podcasts);

	//hardcoded podcast selection, because there are none to choose from yet
	const selectedEpisodes = podcasts[0].episodes;

	return (
		<Layout>
			<DisplayEpisodes episodes={selectedEpisodes} />
		</Layout>
	);
}
