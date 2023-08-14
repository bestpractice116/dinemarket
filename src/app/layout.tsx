import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import "./globals.css";
import { Sora } from "next/font/google";

const font = Sora({ subsets: ["latin"] });

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
    <html lang="en" className={font.className}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
