import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Earl Jhon Malatag — Full-Stack Developer",
  description: "Full-Stack Developer | Backend Security | AI Engineering. Building scalable web applications with Next.js, Node.js, PostgreSQL, and AI.",
  openGraph: {
    title: "Earl Jhon Malatag — Full-Stack Developer",
    description: "Full-Stack Developer | Backend Security | AI Engineering",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full bg-background text-text-primary flex">
        <Sidebar />
        <main className="flex-1 lg:ml-72 min-w-0">
          {children}
        </main>
      </body>
    </html>
  );
}