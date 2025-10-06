import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/page.jsx";
import Footer from "../components/footer/page.jsx";


const media = {
  "@bp1": "(min-width: 520px)",
  "@bp2": "(min-width: 900px)",
  "@bp3": "(min-width: 1200px)",
  "@bp4": "(min-width: 1800px)",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProcureHub",
  description: "A transparent and fair Bid Management Company for IT maintenances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
