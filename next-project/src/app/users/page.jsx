import Link from "next/link";

async function getUser() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});

	if (!res.ok) throw new Error("Failed to fetch users");

	return res.json();
}

function UserItem({ user }) {
	return (
		<div className="item">
			<div>
				<div className="item-title">{`${user.id}. ${user.name}`}</div>
				<div className="item-sub">{user.email}</div>
			</div>
			<span aria-hidden>{">"}</span>
		</div>
	);
}

export default async function PageUsers() {
	const users = await getUser();

	return (
		<section className="content">
			<h2 className="section-title">Users</h2>
			<div className="users-list">
				{users.map((user) => {
					return (
						<Link key={user.id} href={`/users/${user.id}`}>
							<UserItem user={user} />
						</Link>
					);
				})}
			</div>
		</section>
	);
}
