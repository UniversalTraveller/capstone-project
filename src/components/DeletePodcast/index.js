import {useRouter} from 'next/router';
import {useState} from 'react';

import {ButtonRow, Notification, NotificationArea} from '../NotificationArea/styled';

export default function DeletePodcast() {
	const router = useRouter();
	const [message, setMessage] = useState('form');

	return (
		<NotificationArea>
			{message === 'form' ? (
				<Notification>
					Do you really want to delete the podcast?
					<ButtonRow>
						<button onClick={() => setMessage('delete')}>Okay</button>
						<button onClick={() => router.push('/episodes')}>Cancel</button>
					</ButtonRow>
				</Notification>
			) : (
				''
			)}
		</NotificationArea>
	);
}
