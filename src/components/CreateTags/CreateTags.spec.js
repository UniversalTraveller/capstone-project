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

		const selectedPodcast = store.result.current.podcasts[0];

		render(<CreateTags selectedPodcast={selectedPodcast} />);
		const submitButton = find('Submit');
		//const theForm = screen.getByTitle('newTags');
		const inputElement = screen.getByRole('textbox', {name: 'Create new tags:'});
		await userEvent.type(inputElement, 'tagalong');
		//await userEvent.submit(inputElement);
		submitButton.simulate('click');
		expect(addTagToPodcast).toHaveBeenCalled();
		//expect(inputElement).toHaveValue('tag3');
	});
});
