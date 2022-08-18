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
