"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-amber-600 border-2"
        />
        {navLinks.map((link, index) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              key={index}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
