import Head from 'next/head';

import AddPodcast from '../components/AddPodcast';
import DisplayPodcasts from '../components/DisplayPodcasts';
import Layout from '../components/Layout';
import useStore from '../hooks/useStore';

export default function AddPodcastPage() {
	const podcasts = useStore(state => state.podcasts);
	return (
		<Layout>
			<Head>
				<title key="title">Podcast Player - Add Podcast</title>
				<meta
					key="description"
					name="description"
					content="This app allows you to play podcasts."
				/>
			</Head>
			<AddPodcast></AddPodcast>
			<DisplayPodcasts podcasts={podcasts} />
		</Layout>
	);
}
