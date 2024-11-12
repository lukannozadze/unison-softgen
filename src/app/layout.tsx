import Header from "@/components/header/Header";
import "./globals.css";

import { Inter } from "next/font/google";

import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
