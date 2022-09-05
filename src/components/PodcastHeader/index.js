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
	const podcasts = useStore(state => state.podcasts);
	const router = Router;
	const {id} = router.query;
	const selectedPodcast = podcasts.find(podcast => podcast.key === id);
	const imageUrl = selectedPodcast
		? `https://res.cloudinary.com/demo/image/fetch/${selectedPodcast.image}`
		: null;

	return (
		<>
			{selectedPodcast ? (
				<PodcastHeaderArea>
					<div>
						<Image
							src={imageUrl}
							alt={selectedPodcast.title}
							height="240px"
							width="240px"
						/>
					</div>
					<div>
						<PodcastHeaderText>
							<PodcastHeaderTitle>
								{decodeHtml(selectedPodcast.title)}
							</PodcastHeaderTitle>
							<PodcastHeaderParagraph>
								{decodeHtml(selectedPodcast.author)}
							</PodcastHeaderParagraph>
							<PodcastHeaderParagraph>
								<NavigationLink
									onClick={() =>
										router.push(
											`/edit-tags/${selectedPodcast.title}?id=${selectedPodcast.key}`
										)
									}
								>
									Edit Tags
								</NavigationLink>
								<NavigationLink
									onClick={() =>
										router.push(
											`/delete-podcast/${selectedPodcast.title}?id=${selectedPodcast.key}`
										)
									}
								>
									Delete
								</NavigationLink>
							</PodcastHeaderParagraph>
						</PodcastHeaderText>
					</div>
				</PodcastHeaderArea>
			) : null}
		</>
	);
}
