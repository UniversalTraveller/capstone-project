import DisplayEpisodes from '../components/DisplayEpisodes';
import {TagList, Tag} from '../components/EditTags/styled';
import Layout from '../components/Layout';
import PodcastHeader from '../components/PodcastHeader';
import useStore from '../hooks/useStore';

export default function Episodes() {
	const {selectedPodcast} = useStore(state => state);
	return (
		<Layout>
			<PodcastHeader />

			<TagList>
				{selectedPodcast.tags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</TagList>
			<DisplayEpisodes />
		</Layout>
	);
}
