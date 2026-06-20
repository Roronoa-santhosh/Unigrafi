import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local"
import { Inter } from "next/font/google"

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: 'swap',
})

const shareTech =   Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-shareTech',
    weight: '400',
});
export const metadata: Metadata = {
title: "Unigrafi — Buy & Sell Original Posters | Independent Creator Marketplace",
description: "Buy unique original posters from verified independent designers. Or sell your own poster designs and earn money. Browse anime, movies, motivational, Tamil culture posters. Preview on your wall before buying.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${shareTech.variable} ${clashDisplay.variable } h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
