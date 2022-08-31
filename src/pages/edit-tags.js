import EditTags from '../components/EditTags';
import Layout from '../components/Layout';
import PodcastHeader from '../components/PodcastHeader';
import useStore from '../hooks/useStore';
export default function EditTagsPage() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const tags = useStore(state => state.tags);
	return (
		<Layout>
			<PodcastHeader />
			<EditTags selectedPodcast={selectedPodcast} tags={tags} />
		</Layout>
	);
}
