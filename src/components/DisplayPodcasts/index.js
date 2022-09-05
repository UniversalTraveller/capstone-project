import {useRouter} from 'next/router';

import decodeHtml from '../../utils/decodeHtml';
import {Tag, TagList} from '../EditTags/styled';

import {PodcastCard, PodcastLink} from './styled';

export default function DisplayPodcasts({podcasts}) {
	const router = useRouter();

	return (
		<>
			{podcasts.map(podcast => (
				<PodcastCard key={podcast.key}>
					<PodcastLink
						onClick={() => router.push(`/podcast/${podcast.title}?id=${podcast.key}`)}
					>
						<span>{decodeHtml(podcast.title)}</span>
						<span>{decodeHtml(podcast.author)}</span>
					</PodcastLink>
					<TagList role="list">
						{podcast.tags.length
							? podcast.tags.map(tag => <Tag key={tag}>{tag}</Tag>)
							: ''}
					</TagList>
				</PodcastCard>
			))}
		</>
	);
}
