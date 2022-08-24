import {nanoid} from 'nanoid';
import create from 'zustand';

const defaultPodcast = {
	title: 'Syntax - Tasty Web Development Treats',
	author: 'Wes Bos & Scott Tolinski',
	feed: 'https://feed.syntax.fm/rss',
	key: nanoid(),
	episodes: [
		{
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15.08.2022',
			length: '00:20:11',
			key: nanoid(),
		},
		{
			title: 'Supper Club × Headless Ecommerce with Shopify’s Josh Larson',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_496.mp3',
			date: '12.08.2022',
			length: '00:51:43',
			key: nanoid(),
			selected: false,
		},
		{
			title: 'Potluck - API Fetching × PDF Creation × tRPC × Stripe vs PayPal',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_495.mp3',
			date: '10.08.2022',
			length: '01:02:16',
			key: nanoid(),
		},
		{
			title: 'Browsers, Engines, Support and the Other Guys',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_494.mp3',
			date: '08.08.2022',
			length: '00:30:35',
			key: nanoid(),
		},
		{
			title: 'Supper Club × Lee Robinson on React Suspense, Server Components',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_493.mp3',
			date: '05.08.2022',
			length: '01:02:34',
			key: nanoid(),
		},
		{
			title: 'Our Web Dev Wish List',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_492.mp3',
			date: '03.08.2022',
			length: '00:54:07',
			key: nanoid(),
		},
		{
			title: 'How to Spark your Imagination and Get Excited about Coding',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_491.mp3',
			date: '01.08.2022',
			length: '00:18:29',
			key: nanoid(),
		},
	],
};

const useStore = create(set => ({
	selectedPodcast: defaultPodcast,
	selectedEpisode: defaultPodcast.episodes[0],
	setSelectedPodcast: podcast => set({selectedPodcast: podcast}),
	setSelectedEpisode: episode => set({selectedEpisode: episode}),
	playerVolume: 0.5,
	setPlayerVolume: volume => set({playerVolume: volume}),
	podcasts: [defaultPodcast],
}));

export default useStore;
