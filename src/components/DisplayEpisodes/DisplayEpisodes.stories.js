import {nanoid} from 'nanoid';

import DisplayEpisodes from './';

function Template({episodes}) {
	return <DisplayEpisodes episodes={episodes} />;
}

export const Default = Template.bind({});

Default.args = {
	episodes: [
		{
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			author: 'Wes Bos & Scott Tolinski',
			date: 'Thu, 11 Aug 2022 18:25:43 +0000',
			length: '1217',
			key: nanoid(),
		},
	],
};

const story = {
	title: 'DisplayEpisodes',
	component: DisplayEpisodes,
};

export default story;
