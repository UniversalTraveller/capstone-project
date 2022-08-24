import {useRouter} from 'next/router';

import {AddPodcastForm, AddPodcastFormRow, NotificationArea} from './styled';

export default function AddPodcast() {
	const router = useRouter();

	function handleCancel() {
		router.push('/');
	}

	return (
		<NotificationArea background-color="red">
			<AddPodcastForm>
				<label htmlFor="feedURL">
					Please enter the feed URL of a podcast you want to add:
				</label>
				<input
					type="text"
					name="feedURL"
					id="feedURL"
					placeholder="https//podcast.com/feed.rss"
				></input>
				<AddPodcastFormRow>
					<button type="submit">Submit</button>
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
				</AddPodcastFormRow>
			</AddPodcastForm>
		</NotificationArea>
	);
}
