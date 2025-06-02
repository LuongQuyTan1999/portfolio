import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jackson - Full-Stack Developer",
  description:
    "I build scalable, user-friendly web applications using React.js, Next.js, NestJS, and PostgreSQL. Specializing in responsive frontends with TailwindCSS and robust backends with Mikro-ORM/TypeORM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <div className="flex flex-col items-center w-full">
          <Header />
          <div className="flex flex-col mt-[72px] size-full container">
            {children}
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
