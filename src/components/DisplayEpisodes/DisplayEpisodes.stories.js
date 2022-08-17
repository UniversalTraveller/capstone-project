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
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15.08.2022',
			length: '00:20:11',
			key: nanoid(),
		},
	],
};

const story = {
	title: 'DisplayEpisodes',
	component: DisplayEpisodes,
};

export default story;
