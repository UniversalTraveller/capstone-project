/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useStore from '../../hooks/useStore';

import CreateTags from './index';

describe('CreateTags', () => {
	it('should create a new tag', async () => {
		const store = renderHook(() => useStore());
		const {addTagToPodcast} = store.result.current;
		const {addTag} = store.result.current;

		const selectedPodcast = store.result.current.podcasts[0];

		render(<CreateTags selectedPodcast={selectedPodcast} />);

		const submitButton = screen.getByRole('button', {name: /Submit/i});
		const tagsInput = screen.getByLabelText(/Create new tags:/i);

		await userEvent.type(tagsInput, 'new tag');
		await userEvent.click(submitButton);

		expect(addTagToPodcast).toHaveBeenCalledTimes(1);
		expect(addTagToPodcast).toHaveBeenCalledWith('new tag', selectedPodcast);
		expect(addTag).toHaveBeenCalledTimes(1);
		expect(addTag).toHaveBeenCalledWith('new tag');
	});
});

describe('CreateTags', () => {
	it('should not create a new tag when calld with an already existing tag', async () => {
		const store = renderHook(() => useStore());
		const {addTagToPodcast} = store.result.current;
		const {addTag} = store.result.current;

		const selectedPodcast = store.result.current.podcasts[0];

		render(<CreateTags selectedPodcast={selectedPodcast} />);

		const submitButton = screen.getByRole('button', {name: /Submit/i});
		const tagsInput = screen.getByLabelText(/Create new tags:/i);

		await userEvent.type(tagsInput, 'tech');
		await userEvent.click(submitButton);

		expect(addTagToPodcast).toHaveBeenCalledTimes(0);
		expect(addTag).toHaveBeenCalledTimes(0);
	});
});
