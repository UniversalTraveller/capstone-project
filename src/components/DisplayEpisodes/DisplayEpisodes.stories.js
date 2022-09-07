import DisplayEpisodes from './';

function Template() {
	return <DisplayEpisodes />;
}

export const Default = Template.bind({});

const story = {
	title: 'DisplayEpisodes',
	component: DisplayEpisodes,
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
