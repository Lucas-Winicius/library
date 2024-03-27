import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerenciamento de usuarios",
  description:
    "Bem vindo(a), ao nosso catalogo de livros, acesse e veja se temos o livro que procura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-grow flex justify-center">{children}</div>;
}
