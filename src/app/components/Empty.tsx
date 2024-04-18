export default function Empty() {
  return (
    <div className="flex text-center w-9/12 flex-col items-center justify-center text-gray-900">
      <h1 className="font-bold text-2xl">
        Parece que nossos livros estão de folga! Nada encontrado.
      </h1>
      <p className="font-medium text-sm">
        Provavelmente estão aproveitando umas férias nas prateleiras mais
        remotas. Mas não se preocupe, estamos aqui para encontrá-los! Tente
        refinar sua pesquisa ou peça ajuda a um de nossos bibliotecários
        especialistas em resgates literários.
      </p>
    </div>
  );
}
