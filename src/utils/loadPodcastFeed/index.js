import {nanoid} from 'nanoid';

export default async function loadPodcastFeed(rssUrl) {
	const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
	const {contents} = await res.json();
	const feed = new window.DOMParser().parseFromString(contents, 'text/xml');

	//get channel info
	const channel = feed.querySelector('channel');

	//get all podcast episodes
	const items = feed.querySelectorAll('item');

	//check if proper podcast feed
	if (!items || !channel) {
		return {};
	}

	//map the podcast episodes to an array of objects
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
		image: channel.querySelector('image')
			? channel.querySelector('image').querySelector('url').innerHTML
			: '',
		key: nanoid(),
		episodes: feedItems ? feedItems : [],
		tags: [],
	};

	return feedChannel;
}
