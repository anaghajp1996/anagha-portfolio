import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anagha Jayaprakash",
  description: "Anagha's Portfolio",
  openGraph: {
    description: "Check out my projects and skills as a mobile app developer.",
    images: [
      {
        url: "/Memoji.png",
        width: 1200,
        height: 630,
        alt: "Banner Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
