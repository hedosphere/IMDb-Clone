import { Header } from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import MyThemeProvider from "./MyThemeProvider";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb CLONE",
  description: "Copy of IMDb website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <MyThemeProvider>
          <Header />
          {/*  header nav*/}

          <Navbar />
          {/* nav bar */}

          <Search />
          {/*search  */}

          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
