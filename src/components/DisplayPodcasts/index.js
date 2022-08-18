import Link from 'next/link';

export default function DisplayPodcasts({podcasts}) {
	return (
		<>
			{podcasts.map(podcast => (
				<article key={podcast.key}>
					<p>
						<Link href="/episodes">
							<a>{podcast.title}</a>
						</Link>{' '}
						- <span>{podcast.author}</span>
					</p>
				</article>
			))}
		</>
	);
}
