import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/header/Header";
import { Footer } from "@/ui/footer/Footer";
import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuickCart",
  description: "An E-Commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${outfit.className}`}>
        <Toaster />
        <ClerkProvider>
          <AppContextProvider>
            <div className="bg-white text-black min-h-svh flex flex-col">
              <Header />
              {children} 
              <Footer />
            </div>
          </AppContextProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
