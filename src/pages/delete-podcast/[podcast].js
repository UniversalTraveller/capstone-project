import DeletePodcast from '../../components/DeletePodcast';
import DisplayEpisodes from '../../components/DisplayEpisodes';
import Layout from '../../components/Layout';
import PodcastHeader from '../../components/PodcastHeader';

export default function DeletePodcastPage() {
	return (
		<>
			<DeletePodcast />
			<Layout>
				<PodcastHeader />
				<DisplayEpisodes />
			</Layout>
		</>
	);
}
