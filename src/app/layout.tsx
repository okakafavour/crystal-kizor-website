import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystal Kizor — Architecture, Design & Ideas",
  description:
    "Explore the work and ideas of Crystal Kizor across architecture, product design, education, research, speaking and human development.",
  applicationName: "Crystal Kizor",
  openGraph: {
    title: "Crystal Kizor — Architecture, Design & Ideas",
    description:
      "One vision. Many expressions. Discover Crystal Kizor’s connected work across design, knowledge and impact.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f1ea",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
