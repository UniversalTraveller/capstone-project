import DisplayEpisodes from '../components/DisplayEpisodes';
import Layout from '../components/Layout';
import PodcastHeader from '../components/PodcastHeader';

export default function Episodes() {
	return (
		<Layout>
			<PodcastHeader />
			<DisplayEpisodes />
		</Layout>
	);
}
