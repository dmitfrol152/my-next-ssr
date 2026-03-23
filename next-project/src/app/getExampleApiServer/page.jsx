// export const dynamic = "force-dynamic";

import { getHelloMessage } from "@/lib/hello";

// async function getMessageFromAPI() {
// 	const res = await fetch(`${process.env.NEXT_URL}/api/hello`);
// 	return res.json();
// }

export default function getExampleApiServer() {
	const { message } = getHelloMessage();
	return (
		<section className="content">
			<h2 className="section-title">Get request</h2>
			{message && <p>{message}</p>}
		</section>
	);
}
