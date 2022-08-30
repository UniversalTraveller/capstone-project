import Link from 'next/link';
import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import {NavigationLink} from '../NavigatonLink/styled';

import {HeaderBar} from './styled';

export default function Header() {
	const router = useRouter();
	const path = router.asPath;
	const selectedEpisodes = useStore(state => state.selectedEpisodes);
	return (
		<HeaderBar>
			<nav>
				<Link href="/">
					<NavigationLink>Podcasts</NavigationLink>
				</Link>
				<Link href="/episodes">
					<NavigationLink>Episodes</NavigationLink>
				</Link>

				{/* show add podcast button only when relevant */}
				{path === '/' || path === '/add-podcast' ? (
					<Link href="/add-podcast">
						<NavigationLink>Add Podcast</NavigationLink>
					</Link>
				) : null}
				{(path === '/episodes' || path === '/delete-podcast') && selectedEpisodes.length ? (
					<Link href="/delete-podcast">
						<NavigationLink>Delete Podcast</NavigationLink>
					</Link>
				) : null}
			</nav>
		</HeaderBar>
	);
}
