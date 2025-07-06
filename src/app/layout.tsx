import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai&apos;s Resume & Blog",
  description:
    "Portfolio, resume, and blog of Sainadh. Projects, contact, and more.",
};

const bodyClass = `${geistSans.variable} ${geistMono.variable} antialiased`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sai&apos;s Resume &amp; Blog</title>
        <meta
          name="description"
          content="Portfolio, resume, and blog of Sainadh. Projects, contact, and more."
        />
        <meta property="og:title" content="Sai's Resume &amp; Blog" />
        <meta
          property="og:description"
          content="Portfolio, resume, and blog of Sainadh. Projects, contact, and more."
        />
        <meta property="og:image" content="https://i.pravatar.cc/300?img=3" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sai's Resume &amp; Blog" />
        <meta
          name="twitter:description"
          content="Portfolio, resume, and blog of Sainadh. Projects, contact, and more."
        />
        <meta name="twitter:image" content="https://i.pravatar.cc/300?img=3" />
      </Head>
      <body className={`${bodyClass} bg-main-gradient`}>{children}</body>
      <Analytics />
    </html>
  );
}
