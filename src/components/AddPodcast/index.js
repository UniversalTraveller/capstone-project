import {nanoid} from 'nanoid';
import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../../hooks/useStore';

import {AddPodcastForm, ButtonRow, AddPodcastNotificaton, NotificationArea} from './styled';

export default function AddPodcast() {
	const router = useRouter();
	const [message, setMessage] = useState('form');
	const {addPodcast} = useStore();

	function handleCancel(event) {
		event.preventDefault();
		router.push('/');
	}

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
		const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
		const {contents} = await res.json();
		const feed = new window.DOMParser().parseFromString(contents, 'text/xml');

		const channel = feed.querySelector('channel');

		const items = feed.querySelectorAll('item');
		const feedItems = [...items].map(episode => ({
			title: episode.querySelector('title') ? episode.querySelector('title').innerHTML : '',
			url: episode.querySelector('link') ? episode.querySelector('link').innerHTML : '',
			date: episode.querySelector('pubDate')
				? episode.querySelector('pubDate').innerHTML
				: '',
			length: episode.querySelector('itunes\\:duration')
				? episode.querySelector('itunes\\:duration').innerHTML
				: '',
		}));

		const feedChannel = {
			title: channel.querySelector('title') ? channel.querySelector('title').innerHTML : '',
			author: channel.querySelector('author')
				? channel.querySelector('author').innerHTML
				: '',
			feed: channel.querySelector('[rel="self"]').getAttribute('href')
				? channel.querySelector('[rel="self"]').getAttribute('href')
				: '',
			key: nanoid(),
			episodes: feedItems ? feedItems : [],
		};
		console.log(feedChannel);
		addPodcast(feedChannel);

		setMessage('success');

		console.log(rssUrl);
	}

	function handleConfirmation(event) {
		event.preventDefault();
		router.push('/');
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
					<p>This didn&lsquo;t work. Please provide a proper URL for a podcast feed.</p>
					<ButtonRow>
						<button type="button" onClick={() => setMessage('form')}>
							Okay
						</button>
						<button typge="button" onClick={handleCancel}>
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
