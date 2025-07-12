import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import NavBar from "@/components/NavBar";
import 'dotenv/config'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photography",
  description: "A still moment in time",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="min-h-screen flex flex-col text-black">
        <PageWrapper>
            <NavBar />
          <main className="pl-10 pr-10 grow">{children}</main>
          <footer className="p-4 text-center mt-12 text-sm text-gray">
            &copy; {new Date().getFullYear()} Rhoda Lam | All rights reserved.
          </footer>
        </PageWrapper>
      </body>
    </html>
  );
}

export default RootLayout;