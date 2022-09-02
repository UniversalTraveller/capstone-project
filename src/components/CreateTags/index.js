import useStore from '../../hooks/useStore';
import {Form, ButtonRow} from '../NotificationArea/styled';

export default function CreateTags({selectedPodcast}) {
	const addTagToPodcast = useStore(state => state.addTagToPodcast);
	const addTag = useStore(state => state.addTag);
	function handleSubmit(event) {
		event.preventDefault();
		const input = event.target.tags.value;
		const tags = input.split(',').map(tag => tag.trim());
		// add tags to podcast and to tags array
		tags.forEach(tag => {
			addTagToPodcast(tag, selectedPodcast);
			addTag(tag);
		});

		console.log('input', tags);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<ButtonRow>
				<label htmlFor="tags">Create new tags:</label>
			</ButtonRow>
			<ButtonRow>
				<input
					type="text"
					name="tags"
					id="tags"
					placeholder="tag, another tag, another awesome tag"
				/>

				<button type="submit">Submit</button>
			</ButtonRow>
		</Form>
	);
}
