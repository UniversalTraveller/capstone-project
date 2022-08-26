import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import loadPodcastFeed from '../../utils/loadPodcastFeed';

import {AddPodcastForm, ButtonRow, AddPodcastNotificaton, NotificationArea} from './styled';

export default function AddPodcast() {
	const router = useRouter();
	const [message, setMessage] = useState('form');
	const [addedPodcastTitle, setAddedPodcastTitle] = useState('');
	const {addPodcast} = useStore();

	async function handleSubmit(event) {
		event.preventDefault();
		const rssUrl = event.target.feedUrl.value;

		//check whether input is valid
		const urlRegex =
			/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/;
		if (!urlRegex.test(rssUrl)) {
			setMessage('error');
			return;
		}

		const feedChannel = await loadPodcastFeed(rssUrl); //load podcast feed from provided url
		if (!feedChannel.title) {
			setMessage('error');
			return;
		}

		addPodcast(feedChannel); //add podcast to store
		setAddedPodcastTitle(feedChannel.title); //set added podcast title for notification
		setMessage('success');
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
					/>
					<ButtonRow>
						<button type="submit">Submit</button>
						<button type="button" onClick={() => router.push('/')}>
							Cancel
						</button>
					</ButtonRow>
				</AddPodcastForm>
			) : (
				''
			)}
			{message === 'success' ? (
				<AddPodcastNotificaton>
					<p>Added new Podcast: {addedPodcastTitle}</p>
					<ButtonRow>
						<button type="button" onClick={() => router.push('/')}>
							Okay, cool!
						</button>
					</ButtonRow>
				</AddPodcastNotificaton>
			) : (
				''
			)}
			{message === 'error' ? (
				<AddPodcastNotificaton>
					<p>This didn&lsquo;t work. Please provide the URL of a proper podcast feed.</p>
					<ButtonRow>
						<button type="button" onClick={() => setMessage('form')}>
							Okay
						</button>
						<button typge="button" onClick={() => router.push('/')}>
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
