export default function DisplayEpisodes({episodes}) {
	return (
		<>
			{episodes.map(episode => (
				<article key={episode.key}>
					<p>{episode.title}</p>
					<p>
						<span>{episode.length}</span>
						<span>{episode.date}</span>
					</p>
				</article>
			))}
		</>
	);
}
