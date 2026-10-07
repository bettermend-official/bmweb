import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "BetterMend | Hyper-Local Shopping, Better Mended",
  description:
    "BetterMend - Hyper-local multi-vendor shopping and delivery platform. Order from up to 3 local shops in one cart with real-time tracking.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-background text-text-main min-h-screen antialiased selection:bg-[#030C54] selection:text-white">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
