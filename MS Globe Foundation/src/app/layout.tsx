import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MS Globe | Software for a more capable world",
  description: "MS Globe builds focused software for ambitious teams and practical everyday work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}