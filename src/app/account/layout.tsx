import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conta",
  description:
    "Bem vindo(a), ao nosso catalogo de livros, acesse e veja se temos o livro que procura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex items-center justify-center">{children}</div>
  );
}
