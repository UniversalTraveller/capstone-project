import Head from 'next/head';

import Layout from '../components/Layout';

export default function HomePage() {
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
		</Layout>
	);
}
