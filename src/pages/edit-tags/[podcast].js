import Link from 'next/link';
import {useRouter} from 'next/router';

import CreateTags from '../../components/CreateTags';
import EditTags from '../../components/EditTags';
import {FormButton} from '../../components/Form/styled';
import Icon from '../../components/Icons';
import Layout from '../../components/Layout';
import PodcastHeader from '../../components/PodcastHeader';
import useStore from '../../hooks/useStore';
export default function EditTagsPage() {
	const router = useRouter();
	const {id} = router.query;
	const podcasts = useStore(state => state.podcasts);
	const podcast = podcasts.find(podcast => podcast.key === id);
	const podcastLink = podcast ? `/podcast/${podcast.title}?id=${podcast.key}` : null;

	return (
		<Layout>
			{podcast ? (
				<>
					<PodcastHeader />
					<EditTags selectedPodcast={podcast} />
					<CreateTags selectedPodcast={podcast} />
					<Link href={podcastLink}>
						<FormButton>
							Return <Icon variant="return" size="20px" />
						</FormButton>
					</Link>
				</>
			) : null}
		</Layout>
	);
}
