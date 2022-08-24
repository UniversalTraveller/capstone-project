import {AddPodcastForm, AddPodcastFormRow, NotificationArea} from './styled';
export default function AddPodcast() {
	return (
		<NotificationArea background-color="red">
			<AddPodcastForm>
				<label htmlFor="feedURL">
					Please enter the feed URL of a podcast you want to add:
				</label>
				<input
					type="text"
					name="feedURL"
					id="feedURL"
					placeholder="https//podcast.com/feed.rss"
				></input>
				<AddPodcastFormRow>
					<button type="submit">Submit</button>
					<button type="button">Cancel</button>
				</AddPodcastFormRow>
			</AddPodcastForm>
		</NotificationArea>
	);
}
