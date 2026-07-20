import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "@/app/globals.css";
import { BackToTop, Footer, Navbar } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidurasanskritisangeetalayam.com"),
  title: {
    default:
      "Vidura Sanskriti Sangeetalayam | Indian Classical Music Academy Hyderabad",
    template: "%s | Vidura Sanskriti Sangeetalayam",
  },
  description:
    "Learn Carnatic Vocal, Violin, Keyboard, Bharatanatyam and more from experienced teachers at Vidura Sanskriti Sangeetalayam, Hyderabad.",
  applicationName: "Vidura Sanskriti Sangeetalayam",
  authors: [{ name: "Vidura Sanskriti Sangeetalayam" }],
  creator: "Vidura Sanskriti Sangeetalayam",
  publisher: "Vidura Sanskriti Sangeetalayam",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Vidura Sanskriti Sangeetalayam",
    title:
      "Vidura Sanskriti Sangeetalayam | Indian Classical Music Academy Hyderabad",
    description:
      "Learn Carnatic Vocal, Violin, Keyboard, Bharatanatyam and more from experienced teachers at Vidura Sanskriti Sangeetalayam, Hyderabad.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vidura Sanskriti Sangeetalayam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vidura Sanskriti Sangeetalayam | Indian Classical Music Academy Hyderabad",
    description:
      "Learn Carnatic Vocal, Violin, Keyboard, Bharatanatyam and more from experienced teachers at Vidura Sanskriti Sangeetalayam, Hyderabad.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
