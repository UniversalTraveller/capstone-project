import {useRouter} from 'next/router';

import DeletePodcast from '../../components/DeletePodcast';
import DisplayEpisodes from '../../components/DisplayEpisodes';
import {TagList, Tag} from '../../components/EditTags/styled';
import Layout from '../../components/Layout';
import PodcastHeader from '../../components/PodcastHeader';
import useStore from '../../hooks/useStore';

export default function DeletePodcastPage() {
	const router = useRouter();
	const {id} = router.query;
	const podcast = useStore(state => state.podcasts.find(podcast => podcast.key === id));
	return (
		<>
			<DeletePodcast />
			<Layout>
				<PodcastHeader />
				<TagList>
					{podcast ? podcast.tags.map(tag => <Tag key={tag}>{tag}</Tag>) : null}
				</TagList>
				<DisplayEpisodes />
			</Layout>
		</>
	);
}
