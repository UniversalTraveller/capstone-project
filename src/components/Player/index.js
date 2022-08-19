import {PlayerOverlay, AudioPlayer, PlayerTitle, PlayerDate} from './styled';

export default function Player() {
	return (
		<PlayerOverlay>
			<div>
				<PlayerTitle>CSS Proposals @when, CSS Masonry, Carets</PlayerTitle> -
				<PlayerDate> 05.08.2022</PlayerDate>
			</div>
			<p>Syntax - Tasty Web Development Treats </p>
			<p>Wes Bos & Scott Tolinski</p>
			<AudioPlayer controls>
				<source src="https://traffic.libsyn.com/syntax/Syntax_-_497.mp3" />
				Your browser does not support the <code>audio</code> element.
			</AudioPlayer>
		</PlayerOverlay>
	);
}
