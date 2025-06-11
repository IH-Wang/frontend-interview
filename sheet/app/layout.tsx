import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Avatar from "@/components/Avatar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invoice Management",
  description: "Invoice Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100 px-6 pb-6`}
      >
        <header className="flex justify-end py-3">
          {/* User Avatar */}
          <div className="relative">
            <Avatar index={1} width={36} height={36} />
            <span className="absolute right-0 bottom-0 w-2 h-2 rounded-full ring-2 ring-white bg-green-500" />
          </div>
        </header>
        {children}
        <footer className="flex justify-between items-center text-gray-400 text-base pt-10">
          <div>
            © 2022, Made by{" "}
            <a href="#" className="text-[var(--color-purple)] font-medium hover:underline">
              ABC
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-[var(--color-purple)] hover:underline">
              License
            </a>
            <a href="#" className="text-[var(--color-purple)] hover:underline">
              More Themes
            </a>
            <a href="#" className="text-[var(--color-purple)] hover:underline">
              Documentation
            </a>
            <a href="#" className="text-[var(--color-purple)] hover:underline">
              Support
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
