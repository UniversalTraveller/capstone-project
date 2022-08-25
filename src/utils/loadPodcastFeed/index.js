import {nanoid} from 'nanoid';

export default async function loadPodcastFeed(rssUrl) {
	const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
	const {contents} = await res.json();
	const feed = new window.DOMParser().parseFromString(contents, 'text/xml');
	const channel = feed.querySelector('channel');

	//iterate over all episodes
	const items = feed.querySelectorAll('item');
	const feedItems = [...items].map(episode => ({
		title: episode.querySelector('title') ? episode.querySelector('title').innerHTML : '',
		url: episode.querySelector('enclosure')
			? episode.querySelector('enclosure').getAttribute('url')
			: '',
		date: episode.querySelector('pubDate') ? episode.querySelector('pubDate').innerHTML : '',
		key: nanoid(),
		length: episode.querySelector('duration')
			? episode.querySelector('duration').innerHTML
			: '',
	}));

	//get channel info and add episodes to channel
	const feedChannel = {
		title: channel.querySelector('title') ? channel.querySelector('title').innerHTML : '',
		author: channel.querySelector('author') ? channel.querySelector('author').innerHTML : '',
		feed: channel.querySelector('[rel="self"]').getAttribute('href')
			? channel.querySelector('[rel="self"]').getAttribute('href')
			: '',
		key: nanoid(),
		episodes: feedItems ? feedItems : [],
	};

	return feedChannel;
}
