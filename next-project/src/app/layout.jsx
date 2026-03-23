import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Inter({
	subsets: ["cyrillic", "latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata = {
	title: "Next",
	description: "About all Next.js",
	keywords: "next, react",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru" className={inter.variable}>
			<body>
				<div className="bg-grid"></div>
				<Navigation />
				<main className="container page">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
