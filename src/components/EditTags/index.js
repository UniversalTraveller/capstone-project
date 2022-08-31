import {nanoid} from 'nanoid';

import {Tag, TagList} from './styled';

export default function EditTags({selectedPodcast, tags}) {
	return (
		<>
			<TagList>
				{selectedPodcast.tags.map(tag => (
					<Tag key={nanoid()}>
						{tag}
						<button>-</button>
					</Tag>
				))}
			</TagList>
			<p>
				Unused Tags:
				<TagList>
					{tags.map(tag =>
						selectedPodcast.tags.find(podcastTag => tag === podcastTag) ? null : (
							<Tag key={nanoid()}>
								{tag}
								<button>+</button>
							</Tag>
						)
					)}
				</TagList>
			</p>
		</>
	);
}
