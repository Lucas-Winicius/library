export default function Footer() {
  return (
    <footer className="bg-stone-950 flex justify-center items-center py-3 px-5 text-white text-sm font-semibold">
      <p>
        Criado e mantido por Lucas - &copy; {new Date().getFullYear()} todos os
        direitos reservados
      </p>
    </footer>
  );
}
