import SearchBar from "@/components/SearchBar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowSquareOutIcon, ListIcon, UserIcon } from "@/lib/icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-stone-950 flex justify-between items-center py-3 px-5">
      <div>
        <Sheet>
          <SheetTrigger className="flex items-center">
            <ListIcon />
          </SheetTrigger>
          <SheetContent side="left" className="dark">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col flex-grow h-screen">
                  <div className="flex flex-col space-y-3 items-center text-xl text-white font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/search">Pesquisar</Link>
                    <p className="text-zinc-500">Painel</p>
                    <p className="text-zinc-500">Salvos</p>
                    <span>
                      <Link
                        className="flex space-x-3"
                        href="https://coracoralinasaladeleituraantonino.blogspot.com/"
                        target="_blank"
                      >
                        <p>Blog</p>
                        <ArrowSquareOutIcon />
                      </Link>
                    </span>
                  </div>
                  <div className="font-bold text-white relative top-2/4">
                    <Link
                      href="/account"
                      className="flex items-center space-x-2 justify-center"
                    >
                      <p className="text-zinc-500">Fazer Login</p>
                      <UserIcon color="#71717a" />
                    </Link>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}
