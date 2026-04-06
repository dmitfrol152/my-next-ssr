import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Next.js",
  title: {
    default: "Next.js",
    template: "%s | test",
  },
  description: "Genereted by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <p>Header</p>
      </header>
      <body>{children}</body>
      <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
        <p>Footer</p>
      </footer>
    </html>
  );
}
