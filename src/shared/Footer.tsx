import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 flex justify-center items-center py-3 px-5 text-white text-sm font-semibold">
      <p className="text-center">
        Criado e mantido por <Link href="https://www.instagram.com/sr_pumpkin_/">Lucas</Link> - &copy; {new Date().getFullYear()} todos os
        direitos reservados
      </p>
    </footer>
  );
}
