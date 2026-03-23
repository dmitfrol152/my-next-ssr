import Image from "next/image";

export default function AboutPage() {
	return (
		<section className="content">
			<h2 className="section-title">About</h2>
			<p>
				Next.js - это мощноый фреймворк поверх React, используемый ведущими компаниями для
				разработки производтельных и масштабируемых приложений.
			</p>
			<Image src="/next.webp" alt="next" width="840" height="420" priority />
			<Image
				src="https://habrastorage.org/r/w1560/webt/by/f9/qu/byf9qu-qkjvc3cpega2osikmrcq.png"
				alt="next"
				width="855"
				height="392"
				priority
			/>
		</section>
	);
}
