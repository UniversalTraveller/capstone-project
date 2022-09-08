import Link from 'next/link';
import {useRouter} from 'next/router';

import Icon from '../Icons';
import {NavigationLink} from '../NavigatonLink/styled';

import {HeaderNav} from './styled';

export default function Header() {
	const router = useRouter();
	return (
		<header>
			<HeaderNav>
				<Link href="/">
					<NavigationLink>
						<Icon
							variant="podcasts"
							size="2rem"
							color={
								router.pathname === '/'
									? 'var(--color-whiteish)'
									: 'var(--color-blackish)'
							}
						/>
					</NavigationLink>
				</Link>

				<Link href={router.pathname === '/add-podcast' ? '/' : '/add-podcast'}>
					<NavigationLink>
						<Icon
							variant="add_podcast"
							size="2rem"
							color={
								router.pathname === '/add-podcast'
									? 'var(--color-whiteish)'
									: 'var(--color-blackish)'
							}
						/>
					</NavigationLink>
				</Link>
			</HeaderNav>
		</header>
	);
}
