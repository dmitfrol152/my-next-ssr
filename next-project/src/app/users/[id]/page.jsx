import { notFound } from "next/navigation";
import NotFound from "./not-found";

async function getUser(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		cache: "no-store",
	});

	if (res.status === 404) notFound();
	if (!res.ok) throw new Error("Failed to fetch user.id");

	return res.json();
}

export default async function UserPage({ params }) {
	const { id } = await params;
	const user = await getUser(id);

	if (!user) notFound();

	return (
		<section>
			<h2 className="section-title">User #{user.id}</h2>
			<div className="card card--user-details">
				<span className="muted">Name</span>
				<span>{user.name}</span>
				<span className="muted">Username</span>
				<span>{user.username}</span>
				<span className="muted">Email</span>
				<span>{user.email}</span>
				<span className="muted">Phone</span>
				<span>{user.phone}</span>
				<span className="muted">Website</span>
				<span>{user.website}</span>
				<span className="muted">Company</span>
				<span>{user.company?.name}</span>
				<span className="muted">Adress</span>
				<span>{user.address?.city}</span>
			</div>
		</section>
	);
}
