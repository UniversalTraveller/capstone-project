/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';

import useStore from '../../hooks/useStore';

import Player from './';

describe('Player component', () => {
	it('should display the episode title and the podcast title and author', () => {
		const store = renderHook(() => useStore());
		const {podcastPlaying, episodePlaying} = store.result.current;

		render(<Player />);

		const episodeTitle = screen.getByText(episodePlaying.title);
		expect(episodeTitle).toBeInTheDocument();
		const podcastTitle = screen.getByText(episodePlaying.title);
		expect(podcastTitle).toBeInTheDocument();
		const podcastAuthor = screen.getByText(podcastPlaying.author);
		expect(podcastAuthor).toBeInTheDocument();
	});
});
