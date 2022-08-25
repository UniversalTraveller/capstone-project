import Header from './Header';

import {MainContentArea} from './MainContentArea/styled';

export default function Layout({children}) {
	return (
		<MainContentArea>
			<Header />
			<main>{children}</main>
		</MainContentArea>

	);
}
