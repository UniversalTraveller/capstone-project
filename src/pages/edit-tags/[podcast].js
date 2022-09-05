import Link from 'next/link';
import {useRouter} from 'next/router';

import CreateTags from '../../components/CreateTags';
import EditTags from '../../components/EditTags';
import Layout from '../../components/Layout';
import {NavigationLink} from '../../components/NavigatonLink/styled';
import PodcastHeader from '../../components/PodcastHeader';
import useStore from '../../hooks/useStore';
export default function EditTagsPage() {
	const router = useRouter();
	const {id} = router.query;
	const podcast = useStore(state => state.podcasts.find(podcast => podcast.key === id));
	const podcastLink = `/podcast/${podcast.title}?id=${podcast.key}`;

	return (
		<Layout>
			<PodcastHeader />
			<EditTags selectedPodcast={podcast} />
			<CreateTags selectedPodcast={podcast} />
			<Link href={podcastLink}>
				<NavigationLink>Return</NavigationLink>
			</Link>
		</Layout>
	);
}
