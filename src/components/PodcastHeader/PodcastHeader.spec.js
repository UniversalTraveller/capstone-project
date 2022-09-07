/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';

import useStore from '../../hooks/useStore';

import PodcastHeader from './';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			path: '/podcast/[podcast]',
			asPath: '/podcast/podcast',
			query: {
				id: '1',
			},
		};
	},
}));

describe('PodcastHeader component', () => {
	it.skip('should display the title of a podcast', () => {
		const store = renderHook(() => useStore());
		const podcast = store.result.current.podcasts[0];

		render(<PodcastHeader />);

		const podcastTitle = screen.getByText(podcast.title);
		expect(podcastTitle).toBeInTheDocument();
	});
});

describe('PodcastHeader component', () => {
	it.skip('should display the author of a podcast', () => {
		const store = renderHook(() => useStore());
		const podcast = store.result.current.podcasts[0];

		render(<PodcastHeader />);

		const podcastAuthor = screen.getByText(podcast.author);
		expect(podcastAuthor).toBeInTheDocument();
	});
});
