import PodcastHeader from '.';

// test linux config

function Template({podcasts}) {
	return <PodcastHeader podcasts={podcasts} />;
}

export const Default = Template.bind({});

const story = {
	title: 'PodcastHeader',
	component: PodcastHeader,
	parameters: {
		nextRouter: {
			path: '/podcast/[podcast]',
			asPath: '/podcast/podcast',
			query: {
				id: '1',
			},
		},
	},
};

export default story;
