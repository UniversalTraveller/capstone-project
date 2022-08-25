/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';

import DisplayEpisodes from './';

describe('DisplayEpisodes component', () => {
	it('should display the episodes title, date and length', () => {
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

		const episodeTitle = screen.getByText(episodes.title);
		expect(episodeTitle).toBeInTheDocument();
		const episodeDate = screen.getByText('15.8.2022');
		expect(episodeDate).toBeInTheDocument();
		const episodeLength = screen.getByText(episodes.length);
		expect(episodeLength).toBeInTheDocument();
	});
});
