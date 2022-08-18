import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/episodes">Episodes</Link>
			</nav>
		</header>
	);
}
