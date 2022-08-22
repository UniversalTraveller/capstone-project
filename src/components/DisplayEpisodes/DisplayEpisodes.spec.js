/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {nanoid} from 'nanoid';

import useStore from '../../hooks/useStore.js';

import DisplayEpisodes from './';

describe('DisplayEpisodes component', () => {
	it('should change the selected episode when the user clicks on an episode', async () => {
		const store = renderHook(() => useStore());
		const {setSelectedEpisode} = store.result.current;

		const episodes = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15.08.2022',
			length: '00:20:11',
			key: nanoid(),
		};

		// The component expects an array as prop.
		const episodesProp = [episodes];
		render(<DisplayEpisodes episodes={episodesProp} />);

		const selectEpisodeButton = screen.getByRole('button');
		await userEvent.click(selectEpisodeButton);

		expect(setSelectedEpisode).toHaveBeenCalledTimes(1);
		expect(setSelectedEpisode).toHaveBeenCalledWith(episodes);
	});
	it('should display the episodes title, date and length', () => {
		const episodes = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			url: 'https://traffic.libsyn.com/syntax/Syntax_-_497.mp3',
			date: '15.08.2022',
			length: '00:20:11',
			key: nanoid(),
		};

		// The component expects an array as prop.
		const episodesProp = [episodes];
		render(<DisplayEpisodes episodes={episodesProp} />);

		const episodeTitle = screen.getByText(episodes.title);
		expect(episodeTitle).toBeInTheDocument();
		const episodeDate = screen.getByText(episodes.date);
		expect(episodeDate).toBeInTheDocument();
		const episodeLength = screen.getByText(episodes.length);
		expect(episodeLength).toBeInTheDocument();
	});
});
