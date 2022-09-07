import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import loadPodcastFeed from '../../utils/loadPodcastFeed';
import {Form, FormRow, FormButton} from '../Form/styled';
import {Notification, NotificationArea} from '../NotificationArea/styled';

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
				<Form onSubmit={handleSubmit}>
					<label htmlFor="feedUrl">
						Please enter the feed URL of a podcast you want to add:
					</label>
					<input
						type="text"
						name="feedUrl"
						id="feedUrl"
						placeholder="https//podcast.com/feed.rss"
					/>
					<FormRow>
						<FormButton type="submit">Submit</FormButton>
						<FormButton type="FormButton" onClick={() => router.push('/')}>
							Cancel
						</FormButton>
					</FormRow>
				</Form>
			) : (
				''
			)}
			{message === 'success' ? (
				<Notification>
					<p>Added new Podcast: {addedPodcastTitle}</p>
					<FormRow>
						<FormButton type="FormButton" onClick={() => router.push('/')}>
							Okay, cool!
						</FormButton>
					</FormRow>
				</Notification>
			) : (
				''
			)}
			{message === 'error' ? (
				<Notification>
					<p>This didn&lsquo;t work. Please provide the URL of a proper podcast feed.</p>
					<FormRow>
						<FormButton type="FormButton" onClick={() => setMessage('form')}>
							Okay
						</FormButton>
						<FormButton typge="FormButton" onClick={() => router.push('/')}>
							Cancel
						</FormButton>
					</FormRow>
				</Notification>
			) : (
				''
			)}
		</NotificationArea>
	);
}
