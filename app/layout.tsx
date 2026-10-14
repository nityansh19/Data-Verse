import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integral DataVerse — Curious Minds. Limitless Ideas.",
  description: "Integral DataVerse is a new student-led Data Science & Analytics initiative at Integral University, Lucknow, bringing curious students together to learn, build and grow.",
  applicationName: "Integral DataVerse",
  keywords: ["Integral DataVerse", "Integral University Lucknow", "DataVerse", "student club", "data science", "data analytics", "Python", "AI", "student community"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Integral DataVerse",
    title: "Integral DataVerse — Curious Minds. Limitless Ideas.",
    description: "A new student-led Data Science & Analytics initiative at Integral University, Lucknow."
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral DataVerse — Curious Minds. Limitless Ideas.",
    description: "A student-led Data Science & Analytics initiative at Integral University, Lucknow."
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
