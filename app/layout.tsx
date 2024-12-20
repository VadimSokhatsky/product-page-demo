import type { Metadata } from "next";
import localFont from "next/font/local";

import Layout from "@/app/components/layout/Layout";

import "@radix-ui/themes/styles.css";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    title: "FIRnest",
    description: "FIRnest Product Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-dvh md:h-screen max-h-screen overflow-hidden bg-gold2`}>
            <Layout>{children}</Layout>
        </body>
        </html>
  );
}
