import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import CursorWrapper from "@/components/CursorWrapper";
import "./globals.css";
import { cn } from "@/lib/utils";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mahaveer Electronics & Furniture | Premium Living Solutions in HD Kote",
  description: "Showcasing 15 years of legacy. Experience premium furniture, state-of-the-art electronics, and complete interior space solutions. Visit our luxury showroom in HD Kote.",
  openGraph: {
    title: "Mahaveer Electronics & Furniture | Premium Living Solutions",
    description: "Experience premium furniture and electronics styling. Visit our luxury showroom in HD Kote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased selection:bg-walnut-brown selection:text-warm-ivory`}
      >
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}
