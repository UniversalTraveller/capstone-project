import Link from 'next/link';

import CreateTags from '../components/CreateTags';
import EditTags from '../components/EditTags';
import Layout from '../components/Layout';
import {NavigationLink} from '../components/NavigatonLink/styled';
import PodcastHeader from '../components/PodcastHeader';
import useStore from '../hooks/useStore';
export default function EditTagsPage() {
	const selectedPodcast = useStore(state => state.selectedPodcast);

	return (
		<Layout>
			<PodcastHeader />
			<EditTags selectedPodcast={selectedPodcast} />
			<CreateTags selectedPodcast={selectedPodcast} />
			<Link href="/episodes">
				<NavigationLink>Return</NavigationLink>
			</Link>
		</Layout>
	);
}
