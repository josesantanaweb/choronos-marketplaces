import "@/styles/globals.css";
import "swiper/css/navigation";
import "swiper/css";
import type { Metadata } from "next";

import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "Chronos Marketplaces",
  description: "Chronos Marketplaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
