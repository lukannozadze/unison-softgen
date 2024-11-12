
import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileFooter from "@/components/footer/MobileFooter";

const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
     <body className={`${inter.className} antialiased min-h-screen h-full`}>
        <Header/>
        <main className="m-auto max-w-[1336px]">{children}</main>
        <MobileFooter/>
      </body>
   
    </html>
  );
}
