import type { Metadata } from "next";
import { Platypi } from "next/font/google";
import "./globals.css";

const platypi = Platypi({
  variable: "--font-platypi",
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights you need (default: all)
});

export const metadata: Metadata = {
  title: "Ash Katta",
  description: "Ash is a developer building for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${platypi.variable} antialiased bg-gray-50 text-gray-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
