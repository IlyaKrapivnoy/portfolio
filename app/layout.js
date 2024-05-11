import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>header</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
