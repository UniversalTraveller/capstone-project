import Link from 'next/link';

import {NavigationLink} from '../NavigatonLink/styled';

import {HeaderNav} from './styled';

export default function Header() {
	return (
		<header>
			<HeaderNav>
				<Link href="/">
					<NavigationLink>Podcasts</NavigationLink>
				</Link>

				<Link href="/add-podcast">
					<NavigationLink>Add Podcast</NavigationLink>
				</Link>
			</HeaderNav>
		</header>
	);
}
