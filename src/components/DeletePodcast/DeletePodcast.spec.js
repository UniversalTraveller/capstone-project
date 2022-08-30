/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';

import DeletePodcast from './index';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('deletePodcast (WithGlobalState)', () => {
	it('should delete a podcast', async () => {
		const push = jest.fn();
		useRouter.mockImplementation(() => ({
			push,
		}));
		const store = renderHook(() => useStore());
		const {deletePodcast} = store.result.current;

		render(<DeletePodcast />);

		const deleteButton = screen.getByRole('button', {name: /okay/i});

		await userEvent.click(deleteButton);

		expect(deletePodcast).toHaveBeenCalledTimes(1);
	});
});
