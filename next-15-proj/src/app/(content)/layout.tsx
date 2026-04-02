export const metadata = {
  title: "Next.js",
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
