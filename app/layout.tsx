import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/header/Header";
import { Footer } from "@/ui/footer/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickCart",
  description: "An E-Commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`} >
        <div className="bg-white min-h-svh" >
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
