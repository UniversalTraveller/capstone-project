/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';

import useStore from '../../hooks/useStore';

import PodcastHeader from './';

describe('PodcastHeader component', () => {
	it('should display the title of a podcast', () => {
		const store = renderHook(() => useStore());
		const {selectedPodcast} = store.result.current;

		render(<PodcastHeader />);

		const podcastTitle = screen.getByText(selectedPodcast.title);
		expect(podcastTitle).toBeInTheDocument();
	});
});

describe('PodcastHeader component', () => {
	it('should display the author of a podcast', () => {
		const store = renderHook(() => useStore());
		const {selectedPodcast} = store.result.current;

		render(<PodcastHeader />);

		const podcastAuthor = screen.getByText(selectedPodcast.author);
		expect(podcastAuthor).toBeInTheDocument();
	});
});
