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
		const {selectedPodcast, selectedEpisode} = store.result.current;

		render(<Player />);

		const episodeTitle = screen.getByText(selectedEpisode.title);
		expect(episodeTitle).toBeInTheDocument();
		const podcastTitle = screen.getByText(selectedPodcast.title);
		expect(podcastTitle).toBeInTheDocument();
		const podcastAuthor = screen.getByText(selectedPodcast.author);
		expect(podcastAuthor).toBeInTheDocument();
	});
});
