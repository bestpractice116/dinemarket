import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import "./globals.css";
import {  Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin"]});

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={font.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
