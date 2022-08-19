import Head from 'next/head';

import DisplayPodcasts from '../components/DisplayPodcasts';
import Layout from '../components/Layout';
import Player from '../components/Player';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const podcasts = useStore(state => state.podcasts);
	return (
		<Layout>
			<Head>
				<title key="title">Podcast Player</title>
				<meta
					key="description"
					name="description"
					content="This app allows you to play podcasts."
				/>
			</Head>
			<DisplayPodcasts podcasts={podcasts} />
			<Player />
		</Layout>
	);
}
