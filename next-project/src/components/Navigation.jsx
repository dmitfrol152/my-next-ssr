import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="navigation">
			<Link className="nav-link" href="/">
				Main
			</Link>
			<Link className="nav-link" href="/about">
				About
			</Link>
			<Link className="nav-link" href="/users">
				Users
			</Link>
			<Link className="nav-link" href="/getExampleApiServer">
				Get
			</Link>
			<Link className="nav-link" href="/postExampleApiServer">
				Post
			</Link>
			<Link className="nav-link" href="/contacts">
				Contacts
			</Link>
		</nav>
	);
}
