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
	decorators: [
		Story => (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.6rem',
				}}
			>
				<Story />
			</div>
		),
	],
};

export default story;
