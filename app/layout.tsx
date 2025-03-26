import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./Starsbackground";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razvan Portfolio",
  description: "GenAI Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StarsCanvas /> */}
        {/* <StarsCanvas /> */}
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        
      </body>
    </html>
  );
}

