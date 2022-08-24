import Link from 'next/link';

import {NavigationLink} from './NavigatonLink/styled';

export default function Header() {
	return (
		<header>
			<nav>
				<Link href="/">
					<NavigationLink>Podcasts</NavigationLink>
				</Link>
				<Link href="/episodes">
					<NavigationLink>Episodes</NavigationLink>
				</Link>
				<Link href="/add-podcast">
					<NavigationLink>Add</NavigationLink>
				</Link>
			</nav>
		</header>
	);
}
