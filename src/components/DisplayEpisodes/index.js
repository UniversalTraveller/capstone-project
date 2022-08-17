export default function DisplayEpisodes({episodes}) {
	return (
		<>
			{episodes.map(episode => (
				<article key={episode.key}>
					<p>{episode.title}</p>
					<p>
						{episode.length} - {episode.date}
					</p>
					<hr />
				</article>
			))}
		</>
	);
}
