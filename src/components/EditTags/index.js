import useStore from '../../hooks/useStore';
import {InfoText} from '../InfoText';

import {Tag, TagList, MiniButton} from './styled';

export default function EditTags({selectedPodcast}) {
	const addTagToPodcast = useStore(state => state.addTagToPodcast);
	const removeTagFromPodcast = useStore(state => state.removeTagFromPodcast);
	const podcasts = useStore(state => state.podcasts);
	const tags = useStore(state => state.tags);

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
			<TagList role="list">
				{thePodcast.tags.length ? (
					thePodcast.tags.map(tag => (
						<Tag key={tag}>
							{tag}
							<MiniButton onClick={() => handleRemoveTag(tag)}>-</MiniButton>
						</Tag>
					))
				) : (
					<InfoText>This podcast has no tags yet.</InfoText>
				)}
			</TagList>
			<InfoText>Unused tags:</InfoText>
			<TagList role="list">
				{tags
					.filter(tag => !thePodcast.tags.includes(tag))
					.map(tag => (
						<Tag key={tag}>
							{tag}
							<MiniButton onClick={() => handleAddTag(tag)}>+</MiniButton>
						</Tag>
					))}
			</TagList>
		</>
	);
}
