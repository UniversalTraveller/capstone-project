import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import decodeHtml from '../../utils/decodeHtml';
import {PodcastImage} from '../DisplayPodcasts/styled';
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
					<PodcastImage
						src={imageUrl}
						alt={selectedPodcast.title}
						height="140px"
						width="140px"
					/>

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
											router.pathname.includes('edit-tags')
												? `/podcast/${selectedPodcast.title}?id=${selectedPodcast.key}`
												: `/edit-tags/${selectedPodcast.title}?id=${selectedPodcast.key}`
										)
									}
								>
									Edit Tags <Icon variant="edit_tags" size="20px" />
								</FormButton>
								<FormButton
									onClick={() =>
										router.push(
											router.pathname.includes('delete-podcast')
												? `/podcast/${selectedPodcast.title}?id=${selectedPodcast.key}`
												: `/delete-podcast/${selectedPodcast.title}?id=${selectedPodcast.key}`
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
