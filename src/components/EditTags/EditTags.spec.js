/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useStore from '../../hooks/useStore';

import EditTags from './index';

describe('EditTags', () => {
	it('should add and delete tags', async () => {
		const store = renderHook(() => useStore());
		const {addTagToPodcast} = store.result.current;
		const {removeTagFromPodcast} = store.result.current;
		const selectedPodcast = {
			title: 'Title',
			author: 'Author',
			key: 1,
			tags: ['tag2'],
		};
		const tags = ['tag1', 'tag2'];

		render(<EditTags selectedPodcast={selectedPodcast} tags={tags} />);

		const addButton = screen.getAllByRole('button', {name: '+'});
		await userEvent.click(addButton[0]);
		expect(addTagToPodcast).toHaveBeenCalledTimes(1);

		const removeButton = screen.getAllByRole('button', {name: '-'});
		await userEvent.click(removeButton[0]);
		expect(removeTagFromPodcast).toHaveBeenCalledTimes(1);
	});
});
