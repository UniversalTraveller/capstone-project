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
			tags: ['tech', 'web developement'],
			image: 'https://ssl-static.libsyn.com/p/assets/7/9/0/7/790703531a3c8eca/iTunes_Artwork.png',
		},
	],
};

const story = {
	title: 'DisplayPodcasts',
	component: DisplayPodcasts,
};

export default story;
