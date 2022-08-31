import {nanoid} from 'nanoid';

import {Tag, TagList} from './styled';

export default function EditTags({selectedPodcast, tags}) {
	function handleAddTag(tag) {
		console.log('handleAddTag', tag);
	}

	function handleRemoveTag(tag) {
		console.log('handleRemoveTag', tag);
	}

	return (
		<>
			<TagList>
				{selectedPodcast.tags.map(tag => (
					<Tag key={nanoid()}>
						{tag}
						<button onClick={() => handleRemoveTag(tag)}>-</button>
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
								<button onClick={() => handleAddTag(tag)}>+</button>
							</Tag>
						)
					)}
				</TagList>
			</p>
		</>
	);
}
