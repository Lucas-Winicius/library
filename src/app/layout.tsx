import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";
import { Suspense } from "react";
import Loading from "../components/loading";
import Footer from "@/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Bilioteca",
    default: "Biblioteca Antônino",
  },
  description:
    "Bem vindo(a), ao nosso catalogo de livros, acesse e veja se temos o livro que procura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-screen bg-gray-200"}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
