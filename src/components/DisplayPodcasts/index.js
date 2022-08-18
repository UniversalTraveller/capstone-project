import Link from 'next/link';

import {EpisodeCard} from './styled';

export default function DisplayPodcasts({podcasts}) {
	return (
		<>
			{podcasts.map(podcast => (
				<EpisodeCard key={podcast.key}>
					<Link href="/episodes">
						<a>{podcast.title}</a>
					</Link>{' '}
					- <span>{podcast.author}</span>
				</EpisodeCard>
			))}
		</>
	);
}
