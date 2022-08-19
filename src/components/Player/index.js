import {PlayerOverlay, AudioPlayer} from './styled';

export default function Player() {
	return (
		<PlayerOverlay>
			<h2>CSS Proposals @when, CSS Masonry, Carets</h2>
			<p>5.08.2022</p>
			<p>Syntax - Tasty Web Development Treats </p>
			<p>Wes Bos & Scott Tolinski</p>
			<AudioPlayer controls>
				<source src="https://traffic.libsyn.com/syntax/Syntax_-_497.mp3" />
				Your browser does not support the <code>audio</code> element.
			</AudioPlayer>
		</PlayerOverlay>
	);
}
