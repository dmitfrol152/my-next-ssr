// export const dynamic = "force-dynamic";

import { createHelloMessage } from "@/lib/hello";

// async function makePostRequest(name = "Dmitry") {
// 	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ name }),
// 	});

// 	const data = await res.json();
// 	return data;
// }

export default function postExampleApiServer() {
	const { message } = createHelloMessage("Dmitry");

	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>
			{message && <p>{message}</p>}
		</section>
	);
}
