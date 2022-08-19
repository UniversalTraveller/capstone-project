import {PlayerOverlay} from './styled';

export default function Player() {
	return (
		<PlayerOverlay>
			<audio controls>
				<source src="https://traffic.libsyn.com/syntax/Syntax_-_497.mp3" />
				Your browser does not support the <code>audio</code> element.
			</audio>
		</PlayerOverlay>
	);
}
