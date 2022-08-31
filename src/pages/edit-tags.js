import {nanoid} from 'nanoid';

import Layout from '../components/Layout';
import PodcastHeader from '../components/PodcastHeader';
import useStore from '../hooks/useStore';
export default function EditTags() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const tags = useStore(state => state.tags);
	return (
		<Layout>
			<PodcastHeader />
			<ul>
				{selectedPodcast.tags.map(tag => (
					<li key={nanoid()}>{tag}</li>
				))}
			</ul>
			<p>
				Unused Tags:{' '}
				<ul>
					{tags.map(tag =>
						selectedPodcast.tags.find(podcastTag => tag === podcastTag) ? null : (
							<li key={nanoid()}>{tag}</li>
						)
					)}
				</ul>
			</p>
		</Layout>
	);
}
