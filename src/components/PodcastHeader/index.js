import Image from 'next/image';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';

import {
	PodcastHeaderTitle,
	PodcastHeaderAuthor,
	PodcastHeaderArea,
	PodcastHeaderText,
} from './styled';

export default function PodcastHeader() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const imageUrl = `https://res.cloudinary.com/demo/image/fetch/${selectedPodcast.image}`;
	return (
		<PodcastHeaderArea>
			{/* insert podcast image */}
			<div>
				<Image src={imageUrl} alt={selectedPodcast.title} height="240px" width="240px" />
			</div>
			<div>
				<PodcastHeaderText>
					<PodcastHeaderTitle>{decodeHtml(selectedPodcast.title)}</PodcastHeaderTitle>
					<PodcastHeaderAuthor>{decodeHtml(selectedPodcast.author)}</PodcastHeaderAuthor>
				</PodcastHeaderText>
			</div>
		</PodcastHeaderArea>
	);
}
