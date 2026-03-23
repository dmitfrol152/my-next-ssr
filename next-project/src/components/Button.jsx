"use client";

export default function Button() {
	return (
		<button className="btn btn-ghost" onClick={() => alert("Here we go!")}>
			Click me (client side / api server)
		</button>
	);
}
