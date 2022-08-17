/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';

import DisplayEpisodes from './';

describe('DisplayEpisodes component', () => {
	it('should display the episodes name', () => {
		const episodes = [
			{
				title: 'CSS Proposals @when, CSS Masonry, Carets',
				url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
				date: '15.08.2022',
				length: '00:20:11',
				key: nanoid(),
			},
		];
		render(<DisplayEpisodes episodes={episodes} />);

		episodes.forEach(episode => {
			const episodeTitle = screen.getByText(episode.title);
			expect(episodeTitle).toBeInTheDocument();
			const episodeDate = screen.getByText(episode.date);
			expect(episodeDate).toBeInTheDocument();
			const episodeLength = screen.getByText(episode.length);
			expect(episodeLength).toBeInTheDocument();
		});
	});
});
