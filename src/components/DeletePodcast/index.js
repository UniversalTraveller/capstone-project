import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import {FormRow, FormButton} from '../Form/styled';
import Icon from '../Icons';
import {Notification, NotificationArea} from '../NotificationArea/styled';

export default function DeletePodcast() {
	const router = useRouter();
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
					<FormButton onClick={() => handleDelete()} name="okay">
						Okay
						<Icon variant="submit" size="20px" />
					</FormButton>
					<FormButton
						onClick={() => router.push(`/podcast/${podcast.title}?id=${podcast.key}`)}
					>
						Cancel
						<Icon variant="cancel" size="20px" />
					</FormButton>
				</FormRow>
			</Notification>
		</NotificationArea>
	);
}
