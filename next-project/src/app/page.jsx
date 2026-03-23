import Button from "@/components/Button";
import ButtonClient from "@/components/ButtonClient";

export const metadata = {
	title: "Current page metadata",
	description: "About all Next.js",
	keywords: "next, react",
};

export default function Home() {
	return (
		<section className="content">
			<h1>Все о Next.js</h1>
			<p>
				Next.js - это современный React-фреймворк, который позволяет создавать быстрые,
				масштабируемые и SEO-дружественные приложения.
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					maxWidth: "max-content",
					gap: "10px",
					alignItems: "center",
					margin: "0 auto",
				}}
			>
				<Button />
				<ButtonClient />
			</div>
		</section>
	);
}
