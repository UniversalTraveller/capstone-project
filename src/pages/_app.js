import Player from '../components/Player';
import {GlobalStyle} from '../styles';

export default function App({Component, pageProps}) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
			<Player />
		</>
	);
}
