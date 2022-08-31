import DisplayEpisodes from '../components/DisplayEpisodes';
import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function EditTags() {
	const selectedEpisodes = useStore(state => state.selectedEpisodes);

	return (
		<Layout>
			<DisplayEpisodes episodes={selectedEpisodes} />
		</Layout>
	);
}
