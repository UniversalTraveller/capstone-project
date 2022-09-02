import useStore from '../../hooks/useStore';
import {Form, ButtonRow} from '../NotificationArea/styled';

export default function CreateTags({selectedPodcast}) {
	const addTagToPodcast = useStore(state => state.addTagToPodcast);
	const addTag = useStore(state => state.addTag);
	const tags = useStore(state => state.tags);
	function handleSubmit(event) {
		event.preventDefault();
		const input = event.target.tags.value;

		// avoid creation of empty tags
		if (input.length === 0) {
			return;
		}

		const newTags = input.split(',').map(tag => tag.trim());

		newTags.forEach(tag => {
			// check if the tag already exists
			if (!selectedPodcast.tags.includes(tag) && !tags.includes(tag)) {
				addTagToPodcast(tag, selectedPodcast);
				addTag(tag);
			}
		});
	}

	return (
		<Form onSubmit={handleSubmit}>
			<ButtonRow>
				<label htmlFor="tags">Create new tags:</label>
			</ButtonRow>
			<ButtonRow>
				<input type="text" name="tags" id="tags" placeholder="tag, tag, tag, ..." />

				<button type="submit">Submit</button>
			</ButtonRow>
		</Form>
	);
}
