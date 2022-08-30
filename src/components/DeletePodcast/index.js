import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import {ButtonRow, Notification, NotificationArea} from '../NotificationArea/styled';

export default function DeletePodcast() {
	const router = useRouter();
	const selectedPodcast = useStore(state => state.selectedPodcast);
	const deletePodcast = useStore(state => state.deletePodcast);
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);

	function handleDelete() {
		deletePodcast();
		setSelectedEpisodes([]);
		router.push('/');
	}

	return (
		<NotificationArea>
			<Notification>
				Do you really want to delete &quot;{selectedPodcast.title}&quot;?
				<ButtonRow>
					<button onClick={() => handleDelete()} name="okay">
						Okay
					</button>
					<button onClick={() => router.push('/episodes')}>Cancel</button>
				</ButtonRow>
			</Notification>
		</NotificationArea>
	);
}
