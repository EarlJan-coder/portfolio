import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Earl Jhon Malatag — Full-Stack Developer, Backend Security & AI Engineering",
  description:
    "Portfolio of Earl Jhon Malatag — a full-stack developer specializing in secure REST API development, backend security, and AI-assisted application engineering with Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Earl Jhon Malatag",
    "Full-Stack Developer",
    "Backend Security",
    "AI Engineering",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "RAG",
    "LLM",
  ],
  authors: [{ name: "Earl Jhon Malatag" }],
  openGraph: {
    title: "Earl Jhon Malatag — Full-Stack Developer",
    description:
      "Full-Stack Developer • Backend Security • AI Engineering. Building secure systems, intelligent software, and scalable experiences.",
    type: "website",
    url: "https://earljan-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earl Jhon Malatag — Full-Stack Developer",
    description: "Full-Stack Developer • Backend Security • AI Engineering",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
    >
      <body className="min-h-screen bg-background text-text-primary">
        <SmoothScroll>
          <ScrollProgress />
          <CursorGlow />
          <div className="noise" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
