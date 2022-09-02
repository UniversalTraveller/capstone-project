/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';

import DisplayPodcasts from './';

describe('DisplayPodcast component', () => {
	it('should display the podcasts title and author', () => {
		const podcast = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			author: 'Wes Bos & Scott Tolinski',
			key: nanoid(),
			tags: ['tech', 'web developement'],
		};

		// The component expects an array as prop.
		const podcastProp = [podcast];
		render(<DisplayPodcasts podcasts={podcastProp} />);

		const podcastTitle = screen.getByText(podcast.title);
		expect(podcastTitle).toBeInTheDocument();
		const podcastAuthor = screen.getByText(podcast.author);
		expect(podcastAuthor).toBeInTheDocument();
	});
});

describe('DisplayPodcast component', () => {
	it('should display the podcasts tags', () => {
		const podcast = {
			title: 'CSS Proposals @when, CSS Masonry, Carets',
			author: 'Wes Bos & Scott Tolinski',
			key: nanoid(),
			tags: ['tech', 'web developement'],
		};

		// The component expects an array as prop.
		const podcastProp = [podcast];
		render(<DisplayPodcasts podcasts={podcastProp} />);

		const podcastTag01 = screen.getByText(podcast.tags[0]);
		expect(podcastTag01).toBeInTheDocument();
		const podcastTag02 = screen.getByText(podcast.tags[1]);
		expect(podcastTag02).toBeInTheDocument();
	});
});
