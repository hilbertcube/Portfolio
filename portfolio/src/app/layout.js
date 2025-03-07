import localFont from "next/font/local";
import AOSInitializer from "./dependencies/AOSInitializer";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Don Le",
  description: "My portfolio website made with next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add AOS CSS */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link rel='icon' href='/icons/favicon.jpg' type="image/jpg"/>
        {/* <script
          type="text/javascript"
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AOSInitializer />
        {children}
        
      </body>
    </html>
  );
}
