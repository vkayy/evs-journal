import "./globals.css";
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
config.autoAddCss = false;

const readexPro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ev's journal",
  description: "our experience with self-growth, stoicism, and relationships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { key: "home", path: "/", text: "home" },
    { key: "journal", path: "/journal", text: "journal" },
    { key: "requests", path: "/requests", text: "requests" },
    { key: "about us", path: "/about", text: "about us" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${readexPro.className} page page_landing`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AuthProvider>
            <Navbar navItems={navItems}></Navbar>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
