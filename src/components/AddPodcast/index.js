import {useRouter} from 'next/router';
import {useState} from 'react';

import {AddPodcastForm, AddPodcastFormRow, AddPodcastNotificaton, NotificationArea} from './styled';

export default function AddPodcast() {
	const router = useRouter();
	const [message, setMessage] = useState('form');

	function handleCancel() {
		router.push('/');
	}

	function handleSubmit() {
		setMessage('success');
	}

	function handleConfirmation() {
		router.push('/');
	}

	return (
		<NotificationArea>
			{message === 'form' ? (
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
						<button type="submit" onClick={handleSubmit}>
							Submit
						</button>
						<button type="button" onClick={handleCancel}>
							Cancel
						</button>
					</AddPodcastFormRow>
				</AddPodcastForm>
			) : (
				''
			)}
			{message === 'success' ? (
				<AddPodcastNotificaton>
					<p>Added new Podcast.</p>
					<p>
						<button type="button" onClick={handleConfirmation}>
							Okay, cool!
						</button>
					</p>
				</AddPodcastNotificaton>
			) : (
				''
			)}
		</NotificationArea>
	);
}
