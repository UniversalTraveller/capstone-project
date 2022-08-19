import {EpisodeCard} from './styled';

export default function DisplayEpisodes({episodes}) {
	return (
		<>
			{episodes.map(episode => (
				<EpisodeCard key={episode.key}>
					<p>{episode.title}</p>
					<p>
						<span>{episode.length}</span> - <span>{episode.date}</span>
					</p>
				</EpisodeCard>
			))}
		</>
	);
}
