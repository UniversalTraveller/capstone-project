import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav>
				<Link href="/">
					<a>Podcasts</a>
				</Link>{' '}
				-
				<Link href="/episodes">
					<a> Episodes</a>
				</Link>
			</nav>
		</header>
	);
}
