import Image from 'next/image';
import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import {FormButton} from '../Form/styled';
import Icon from '../Icons';

import {
	PodcastHeaderTitle,
	PodcastHeaderParagraph,
	PodcastHeaderArea,
	PodcastHeaderText,
} from './styled';

export default function PodcastHeader() {
	const podcasts = useStore(state => state.podcasts);
	const router = useRouter();
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
								<FormButton
									onClick={() =>
										router.push(
											`/edit-tags/${selectedPodcast.title}?id=${selectedPodcast.key}`
										)
									}
								>
									Edit Tags <Icon variant="edit_tags" size="20px" />
								</FormButton>
								<FormButton
									onClick={() =>
										router.push(
											`/delete-podcast/${selectedPodcast.title}?id=${selectedPodcast.key}`
										)
									}
								>
									Delete <Icon variant="delete" size="20px" />
								</FormButton>
							</PodcastHeaderParagraph>
						</PodcastHeaderText>
					</div>
				</PodcastHeaderArea>
			) : null}
		</>
	);
}
