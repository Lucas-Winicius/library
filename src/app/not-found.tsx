import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center text-center">
      <div className="flex flex-col justify-center items-center w-9/12">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <h2 className="font-bold mb-6">
          Oops! Parece que você se perdeu nas estantes virtuais.
        </h2>
        <p className="text-lg mb-6">
          Parece que você se perdeu! A página que você procura está mais
          escondida do que um livro na seção de mistério. Vamos te ajudar a
          voltar para o caminho certo!
        </p>
        <Link
          href="/"
          className="bg-stone-950 text-white font-semibold px-4 py-2 rounded-sm"
        >
          Voltar para Casa
        </Link>
      </div>
    </main>
  );
}
