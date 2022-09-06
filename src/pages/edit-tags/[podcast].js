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
	const podcasts = useStore(state => state.podcasts);
	const podcast = podcasts.length ? podcasts.find(podcast => podcast.key === id) : null;
	const podcastLink = podcast ? `/podcast/${podcast.title}?id=${podcast.key}` : null;

	return (
		<Layout>
			{podcast ? (
				<>
					<PodcastHeader />
					<EditTags selectedPodcast={podcast} />
					<CreateTags selectedPodcast={podcast} />
					<Link href={podcastLink}>
						<NavigationLink>Return</NavigationLink>
					</Link>
				</>
			) : null}
		</Layout>
	);
}
