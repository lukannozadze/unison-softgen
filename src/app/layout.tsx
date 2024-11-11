
import Header from "@/components/header/Header";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header/>
        <main className="m-auto block max-w-[1336px]">{children}</main>
      </body>
   
    </html>
  );
}
