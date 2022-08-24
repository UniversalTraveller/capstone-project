import {useRouter} from 'next/router';
import {useState} from 'react';

import {AddPodcastForm, ButtonRow, AddPodcastNotificaton, NotificationArea} from './styled';

export default function AddPodcast() {
	const router = useRouter();
	const [message, setMessage] = useState('form');

	function handleCancel(event) {
		event.preventDefault();
		router.push('/');
	}

	function handleSubmit(event) {
		event.preventDefault();
		const rssUrl = event.target.feedUrl.value;
		//check whether input is valid
		const urlRegex =
			/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/;
		if (!urlRegex.test(rssUrl)) {
			handleError();
			return;
		}

		setMessage('success');

		console.log(rssUrl);
	}

	function handleConfirmation(event) {
		event.preventDefault();
		router.push('/');
	}

	function handleError() {
		setMessage('error');
	}

	return (
		<NotificationArea>
			{message === 'form' ? (
				<AddPodcastForm onSubmit={handleSubmit}>
					<label htmlFor="feedUrl">
						Please enter the feed URL of a podcast you want to add:
					</label>
					<input
						type="text"
						name="feedUrl"
						id="feedUrl"
						placeholder="https//podcast.com/feed.rss"
					></input>
					<ButtonRow>
						<button type="submit">Submit</button>
						<button type="button" onClick={handleCancel}>
							Cancel
						</button>
					</ButtonRow>
				</AddPodcastForm>
			) : (
				''
			)}
			{message === 'success' ? (
				<AddPodcastNotificaton>
					<p>Added new Podcast.</p>
					<ButtonRow>
						<button type="button" onClick={handleConfirmation}>
							Okay, cool!
						</button>
					</ButtonRow>
				</AddPodcastNotificaton>
			) : (
				''
			)}
			{message === 'error' ? (
				<AddPodcastNotificaton>
					<p>Oh no!</p>
					<ButtonRow>
						<button type="button" onClick={() => setMessage('form')}>
							Okay
						</button>
						<button type="button" onClick={handleCancel}>
							Cancel
						</button>
					</ButtonRow>
				</AddPodcastNotificaton>
			) : (
				''
			)}
		</NotificationArea>
	);
}
