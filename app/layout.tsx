import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/NavBar";

export const metadata: Metadata = {
  title: "IShop",
  description: "Get your favourite now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
