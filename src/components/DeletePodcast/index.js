import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import {FormRow} from '../Form/styled';
import {Notification, NotificationArea} from '../NotificationArea/styled';

export default function DeletePodcast() {
	const router = useRouter();
	//const selectedPodcast = useStore(state => state.selectedPodcast);
	const podcasts = useStore(state => state.podcasts);
	const podcast = podcasts.find(podcast => podcast.key === router.query.id);
	const deletePodcast = useStore(state => state.deletePodcast);
	const setSelectedEpisodes = useStore(state => state.setSelectedEpisodes);

	function handleDelete() {
		deletePodcast(podcast.key);
		setSelectedEpisodes([]);
		router.push('/');
	}

	return (
		<NotificationArea>
			<Notification>
				Do you really want to delete &quot;{podcast ? podcast.title : null}&quot;?
				<FormRow>
					<button onClick={() => handleDelete()} name="okay">
						Okay
					</button>
					<button
						onClick={() => router.push(`/podcast/${podcast.title}?id=${podcast.key}`)}
					>
						Cancel
					</button>
				</FormRow>
			</Notification>
		</NotificationArea>
	);
}
