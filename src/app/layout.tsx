/*
      Google Home Page Clone
      Time : Learning Completed - Internship
      This is just a frontend UI clone of Google Home Page.
      Here I've also created the sign in page.

      Started : 30-3-24 - 11:30 am
      Competed : 30-3-24 - 2:00 pm

 */


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google",
  description: "Home page cloned by @PranavShilavane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
