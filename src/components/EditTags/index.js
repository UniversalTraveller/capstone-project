import {nanoid} from 'nanoid';

import useStore from '../../hooks/useStore';

import {Tag, TagList} from './styled';

export default function EditTags({selectedPodcast, tags}) {
	const addTagToPodcast = useStore(state => state.addTagToPodcast);
	const podcasts = useStore(state => state.podcasts);

	// necessery to refresh the page after adding a tag
	const thePodcast = podcasts.find(podcast => podcast.key === selectedPodcast.key);
	function handleAddTag(tag) {
		addTagToPodcast(tag, selectedPodcast);
	}

	function handleRemoveTag(tag) {
		console.log('handleRemoveTag', tag, selectedPodcast.title);
	}

	return (
		<>
			<TagList>
				{thePodcast.tags
					? thePodcast.tags.map(tag => (
							<Tag key={nanoid()}>
								{tag}
								<button onClick={() => handleRemoveTag(tag)}>-</button>
							</Tag>
					  ))
					: (thePodcast.tags = [])}
			</TagList>
			<p>
				Unused Tags:
				<TagList>
					{tags.map(tag =>
						thePodcast.tags.find(podcastTag => tag === podcastTag) ? null : (
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
