import Link from 'next/link';

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
			<Link href="/">
				<NavigationLink>Return</NavigationLink>
			</Link>
		</Layout>
	);
}
