/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';

import DisplayEpisodes from './';

describe('DisplayEpisodes component', () => {
	it('should display the episodes title', () => {
		const episodes = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15.8.2022',
			length: '00:20:11',
			key: nanoid(),
		};

		// The component expects an array as prop.
		const episodesProp = [episodes];
		render(<DisplayEpisodes episodes={episodesProp} />);

		const episodeTitle = screen.getByText(episodes.title);
		expect(episodeTitle).toBeInTheDocument();
	});
});

describe('DisplayEpisodes component', () => {
	it('should convert the date to DD.MM.YYYY', () => {
		const episodes = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15. Aug 2022',
			length: '00:20:11',
			key: nanoid(),
		};

		// The component expects an array as prop.
		const episodesProp = [episodes];
		render(<DisplayEpisodes episodes={episodesProp} />);

		const episodeDate = screen.getByText('15.8.2022');
		expect(episodeDate).toBeInTheDocument();
	});
});

describe('DisplayEpisodes component', () => {
	it('should convert the episodes duration from seconds to hh:mm:ss', () => {
		const episodes = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15. Aug 2022',
			length: '1211',
			key: nanoid(),
		};

		// The component expects an array as prop.
		const episodesProp = [episodes];
		render(<DisplayEpisodes episodes={episodesProp} />);

		// 1211 seconds are 00:20:11.
		const episodeDate = screen.getByText('00:20:11');
		expect(episodeDate).toBeInTheDocument();
	});
});
