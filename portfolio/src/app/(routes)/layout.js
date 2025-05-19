import localFont from "next/font/local";
import AOSInitializer from "@dependencies/AOSInitializer";
import "@css/globals.css";
import "@css/aos.css"
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin", "latin-ext", "vietnamese"], // Only the subsets you need
  weight: ["300", "400", "700"], // Adjust based on actual use
  display: "swap", // Recommended for LCP
  variable: "--font-jura", // Optional, for Tailwind or global use
});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Don D. Le",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icons/favicon.png' type="image/png"/>
      </head>
      <body
        className={`${geistSans.variable} ${jura.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
