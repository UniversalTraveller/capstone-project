import {nanoid} from 'nanoid';

import useStore from '../../hooks/useStore';

import {Tag, TagList, MiniButton} from './styled';

export default function EditTags({selectedPodcast, tags}) {
	const addTagToPodcast = useStore(state => state.addTagToPodcast);
	const removeTagFromPodcast = useStore(state => state.removeTagFromPodcast);
	const podcasts = useStore(state => state.podcasts);

	// necessery to refresh the page after adding a tag
	const thePodcast = podcasts.find(podcast => podcast.key === selectedPodcast.key);
	function handleAddTag(tag) {
		addTagToPodcast(tag, selectedPodcast);
	}

	function handleRemoveTag(tag) {
		removeTagFromPodcast(tag, selectedPodcast);
	}

	return (
		<>
			<TagList>
				{thePodcast.tags.length
					? thePodcast.tags.map(tag => (
							<Tag key={nanoid()}>
								{tag}
								<MiniButton onClick={() => handleRemoveTag(tag)}>-</MiniButton>
							</Tag>
					  ))
					: <span>This podcast has no tags yet.</span>}
			</TagList>
			<p>Unused Tags:</p>
			<TagList>
				{tags.map(tag =>
					thePodcast.tags.find(podcastTag => tag === podcastTag) ? null : (
						<Tag key={nanoid()}>
							{tag}
							<MiniButton onClick={() => handleAddTag(tag)}>+</MiniButton>
						</Tag>
					)
				)}
			</TagList>
		</>
	);
}
