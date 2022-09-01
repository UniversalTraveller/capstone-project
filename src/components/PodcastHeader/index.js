import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';

import {PodcastHeaderTitle, PodcastHeaderAuthor, PodcastHeaderArea} from './styled';

export default function PodcastHeader() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	return (
		<PodcastHeaderArea>
			<PodcastHeaderTitle>{decodeHtml(selectedPodcast.title)}</PodcastHeaderTitle>
			<PodcastHeaderAuthor>{decodeHtml(selectedPodcast.author)}</PodcastHeaderAuthor>
		</PodcastHeaderArea>
	);
}
