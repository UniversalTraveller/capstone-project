import Image from 'next/image';
import Router from 'next/router';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import {NavigationLink} from '../NavigatonLink/styled';

import {
	PodcastHeaderTitle,
	PodcastHeaderParagraph,
	PodcastHeaderArea,
	PodcastHeaderText,
} from './styled';

export default function PodcastHeader() {
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const imageUrl = `https://res.cloudinary.com/demo/image/fetch/${selectedPodcast.image}`;
	const router = Router;

	return (
		<PodcastHeaderArea>
			{/* insert podcast image */}
			<div>
				<Image src={imageUrl} alt={selectedPodcast.title} height="240px" width="240px" />
			</div>
			<div>
				<PodcastHeaderText>
					<PodcastHeaderTitle>{decodeHtml(selectedPodcast.title)}</PodcastHeaderTitle>
					<PodcastHeaderParagraph>
						{decodeHtml(selectedPodcast.author)}
					</PodcastHeaderParagraph>
					<PodcastHeaderParagraph>
						<NavigationLink onClick={() => router.push('/edit-tags')}>
							Edit Tags
						</NavigationLink>
						<NavigationLink onClick={() => router.push('/delete-podcast')}>
							Delete Podcast
						</NavigationLink>
					</PodcastHeaderParagraph>
				</PodcastHeaderText>
			</div>
		</PodcastHeaderArea>
	);
}
