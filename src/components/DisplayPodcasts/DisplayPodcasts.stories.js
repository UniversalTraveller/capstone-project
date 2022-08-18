import {nanoid} from 'nanoid';

import DisplayPodcasts from './';

function Template({podcasts}) {
	return <DisplayPodcasts podcasts={podcasts} />;
}

export const Default = Template.bind({});

Default.args = {
	podcasts: [
		{
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			author: 'Wes Bos & Scott Tolinski',
			key: nanoid(),
		},
	],
};

const story = {
	title: 'DisplayPodcasts',
	component: DisplayPodcasts,
};

export default story;
