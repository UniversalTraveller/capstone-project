import Link from 'next/link';

import Icon from '../Icons';
import {NavigationLink} from '../NavigatonLink/styled';

import {HeaderNav} from './styled';

export default function Header() {
	return (
		<header>
			<HeaderNav>
				<Link href="/">
					<NavigationLink>
						<Icon variant="podcasts" size="2.4rem" color="var(--color-primary-dark)" />
					</NavigationLink>
				</Link>

				<Link href="/add-podcast">
					<NavigationLink>
						<Icon
							variant="add_podcast"
							size="2.4rem"
							color="var(--color-primary-dark)"
						/>
					</NavigationLink>
				</Link>
			</HeaderNav>
		</header>
	);
}
