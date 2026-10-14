import type { Metadata, Viewport } from "next";
import "./globals.css";
import IntroSplash from "./IntroSplash";

export const metadata: Metadata = {
  title: "Integral DataVerse — Learn Data. Build What's Next.",
  description: "Integral DataVerse is a student-led Data Science & Analytics club initiative at Integral University, Lucknow. Explore Python, real-world projects and AI with curious students.",
  applicationName: "Integral DataVerse",
  keywords: ["Integral DataVerse", "Integral University", "Data Science Club", "Data Analytics", "Python", "AI", "student-led"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Integral DataVerse",
    title: "Integral DataVerse — Learn Data. Build What's Next.",
    description: "A student-led Data Science & Analytics club initiative at Integral University, Lucknow. Explore. Build. Grow together."
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral DataVerse — Learn Data. Build What's Next.",
    description: "A place for curious students at Integral University to explore data science, Python and AI."
  },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080d0b"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><IntroSplash />{children}</body></html>;
}
