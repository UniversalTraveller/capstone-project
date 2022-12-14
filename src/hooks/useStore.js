import {nanoid} from 'nanoid';
import create from 'zustand';

const defaultPodcast = {
	title: 'Syntax - Tasty Web Development Treats',
	author: 'Wes Bos & Scott Tolinski',
	feed: 'https://feed.syntax.fm/rss',
	key: '1',
	tags: ['web development', 'news', 'tech'],
	image: 'https://ssl-static.libsyn.com/p/assets/7/9/0/7/790703531a3c8eca/iTunes_Artwork.png',
	episodes: [
		{
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15 Aug 2022',
			length: '00:20:11',
			key: nanoid(),
		},
		{
			title: 'Supper Club × Headless Ecommerce with Shopify’s Josh Larson',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_496.mp3',
			date: '12 Aug 2022',
			length: '00:51:43',
			key: nanoid(),
			selected: false,
		},
		{
			title: 'Potluck - API Fetching × PDF Creation × tRPC × Stripe vs PayPal',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_495.mp3',
			date: '10 Aug 2022',
			length: '01:02:16',
			key: nanoid(),
		},
		{
			title: 'Browsers, Engines, Support and the Other Guys',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_494.mp3',
			date: '08 Aug 2022',
			length: '00:30:35',
			key: nanoid(),
		},
		{
			title: 'Supper Club × Lee Robinson on React Suspense, Server Components',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_493.mp3',
			date: '05 Aug 2022',
			length: '01:02:34',
			key: nanoid(),
		},
		{
			title: 'Our Web Dev Wish List',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_492.mp3',
			date: '03 Aug 2022',
			length: '00:54:07',
			key: nanoid(),
		},
		{
			title: 'How to Spark your Imagination and Get Excited about Coding',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_491.mp3',
			date: '01 Aug 2022',
			length: '00:18:29',
			key: nanoid(),
		},
	],
};

const defaultTags = [
	'news',
	'web development',
	'art',
	'tech',
	'history',
	'comedy',
	'politics',
	'science',
	'sports',
	'health',
];

const useStore = create(set => ({
	episodePlaying: defaultPodcast.episodes[0],
	selectedEpisodes: defaultPodcast.episodes,
	podcastPlaying: defaultPodcast,
	setEpisodePlaying: episode => set({episodePlaying: episode}),
	setSelectedEpisodes: episodes => set({selectedEpisodes: episodes}),
	setPodcastPlaying: podcast => set({podcastPlaying: podcast}),
	playerVolume: 0.5,
	setPlayerVolume: volume => set({playerVolume: volume}),
	podcasts: [defaultPodcast],
	addPodcast: podcast => {
		set(state => ({podcasts: [...state.podcasts, podcast]}));
	},
	deletePodcast: key => {
		set(state => ({
			podcasts: state.podcasts.filter(podcast => podcast.key !== key),
		}));
	},
	tags: defaultTags,
	addTag: tag => {
		set(state => ({tags: [...state.tags, tag]}));
	},
	addTagToPodcast: (tag, podcastToTag) => {
		set(state => ({
			podcasts: state.podcasts.map(podcast => {
				if (podcast.key === podcastToTag.key) {
					return {...podcast, tags: [...podcast.tags, tag]};
				}
				return podcast;
			}),
		}));
	},
	removeTagFromPodcast: (selectedTag, podcastToUntag) => {
		set(state => ({
			podcasts: state.podcasts.map(podcast => {
				if (podcast.key === podcastToUntag.key) {
					return {...podcast, tags: podcast.tags.filter(tag => tag !== selectedTag)};
				}
				return podcast;
			}),
		}));
	},
}));

export default useStore;
