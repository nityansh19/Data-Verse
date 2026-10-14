import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataVerse — Curious Minds. Limitless Ideas.",
  description: "DataVerse is a new student-led Data Science & Analytics initiative. Discover our purpose, learning areas and simple plan for a community where students learn, build and grow together.",
  applicationName: "DataVerse",
  keywords: ["DataVerse", "student club", "data science", "data analytics", "Python", "AI", "student community"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DataVerse",
    title: "DataVerse — Curious Minds. Limitless Ideas.",
    description: "A student-led space to learn, build and grow through data, technology and shared curiosity."
  },
  twitter: {
    card: "summary_large_image",
    title: "DataVerse — Curious Minds. Limitless Ideas.",
    description: "A student-led Data Science & Analytics initiative, just getting started."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b100d"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
