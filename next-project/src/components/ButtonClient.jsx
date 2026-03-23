"use client";

async function getMessageFromAPI() {
	const res = await fetch(`/api/hello`);
	return res.json();
}

export default function ButtonClient() {
	const handleClick = async () => {
		await getMessageFromAPI();
		alert("Hello client");
	};

	return (
		<button className="btn btn-ghost" onClick={handleClick}>
			Click me (client side / api client)
		</button>
	);
}
