import Header from './Header';
import {MainArea} from './MainArea/styled';

export default function Layout({children}) {
	return (
		<MainArea>
			<Header />
			<main>{children}</main>
		</MainArea>
	);
}
