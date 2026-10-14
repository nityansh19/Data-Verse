import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DataVerse — For the Curious",
    template: "%s | DataVerse"
  },
  description: "DataVerse is a student-led Data Science & Analytics community where curious minds explore Python, data analytics, statistics, AI, and meaningful projects. Learn together. Build together. Grow together.",
  applicationName: "DataVerse",
  keywords: [
    "DataVerse", "Data Science Club", "Data Analytics", "Python", "SQL",
    "Machine Learning", "Student Community", "Beginner Data Science", "Data Visualization"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DataVerse",
    title: "DataVerse — Curiosity, meet possibility.",
    description: "A space for student builders, data thinkers and changemakers. Learn together. Build together. Grow together."
  },
  twitter: {
    card: "summary_large_image",
    title: "DataVerse — For the Curious",
    description: "A student-led Data Science & Analytics Club. Come curious. Leave capable."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090c0b"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
