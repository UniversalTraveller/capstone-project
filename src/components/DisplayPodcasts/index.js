import {useRouter} from 'next/router';

import decodeHtml from '../../utils/decodeHtml';
import {Tag, TagList} from '../EditTags/styled';

import {PodcastCard, PodcastTitle, PodcastTextBox, ContentBox, PodcastImage} from './styled';

export default function DisplayPodcasts({podcasts}) {
	const router = useRouter();

	return (
		<ContentBox>
			{podcasts.map(podcast => (
				<PodcastCard
					key={podcast.key}
					onClick={() => router.push(`/podcast/${podcast.title}?id=${podcast.key}`)}
				>
					<PodcastImage
						src={`https://res.cloudinary.com/demo/image/fetch/${podcast.image}`}
						alt={podcast.title}
						width={120}
						height={120}
					/>

					<PodcastTextBox>
						<PodcastTitle>{decodeHtml(podcast.title)}</PodcastTitle>
						<span>{decodeHtml(podcast.author)}</span>
						<TagList role="list">
							{podcast.tags.length
								? podcast.tags.map(tag => <Tag key={tag}>{tag}</Tag>)
								: ''}
						</TagList>
					</PodcastTextBox>
				</PodcastCard>
			))}
		</ContentBox>
	);
}
