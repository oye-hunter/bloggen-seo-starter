import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackgroundGrid from "@/components/layout/BackgroundGrid";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import { Manrope } from "next/font/google";

// export const dynamic = "force-dynamic";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(baseUrl),
//   title: {
//     default: "Silverthread Labs",
//     template: "%s | Silverthread Labs",
//   },
//   description: "We design AI that feels personal and empowers everyday innovation. Join our community of creators building open-source AI tools that simplify daily life. From custom automation to collaborative projects, Silverthread Labs transforms ideas into accessible solutions that make technology work for you, not the other way around. Start building, automating, and simplifying with us today.",
//   icons: {
//     icon: [{ url: '/favicon/favicon.ico', sizes: 'any' }],
//     apple: [{ url: '/favicon/apple-touch-icon.png' }],
//   },

//   openGraph: {
//     title: "Silverthread Labs",
//     description: "We design AI that feels personal and empowers everyday innovation. Join our community of creators building open-source AI tools that simplify daily life. From custom automation to collaborative projects, Silverthread Labs transforms ideas into accessible solutions that make technology work for you, not the other way around. Start building, automating, and simplifying with us today.",
//     url: baseUrl,
//     siteName: "Silverthread Labs",
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="antialiased lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <Header />
          {children}
          <BackgroundGrid />
          <Footer />
          {/* <Analytics /> */}

          {/* <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
