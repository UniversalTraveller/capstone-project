import Link from 'next/link';
import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import {NavigationLink} from '../NavigatonLink/styled';

import {HeaderNav} from './styled';

export default function Header() {
	const router = useRouter();
	const path = router.asPath;
	const selectedEpisodes = useStore(state => state.selectedEpisodes);
	return (
		<header>
			<HeaderNav>
				<Link href="/">
					<NavigationLink>Podcasts</NavigationLink>
				</Link>

				<Link href="/add-podcast">
					<NavigationLink>Add Podcast</NavigationLink>
				</Link>

				{(path === '/episodes' || path === '/delete-podcast') && selectedEpisodes.length ? (
					<Link href="/delete-podcast">
						<NavigationLink>Delete Podcast</NavigationLink>
					</Link>
				) : null}
			</HeaderNav>
		</header>
	);
}
