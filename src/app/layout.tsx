
import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
     <body className={`${inter.className} antialiased`}>
        <Header/>
        <main className="m-auto block max-w-[1336px]">{children}</main>
      </body>
   
    </html>
  );
}
