import Link from 'next/link';

import {PodcastCard} from './styled';

export default function DisplayPodcasts({podcasts}) {
	return (
		<>
			{podcasts.map(podcast => (
				<PodcastCard key={podcast.key}>
					<Link href="/episodes">
						<a>{podcast.title}</a>
					</Link>{' '}
					- <span>{podcast.author}</span>
				</PodcastCard>
			))}
		</>
	);
}
