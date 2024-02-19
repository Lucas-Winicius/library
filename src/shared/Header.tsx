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
                <div className="flex flex-col flex-grow justify-between h-screen">
                  <div className="flex flex-col space-y-3 items-center text-xl text-white font-semibold">
                    <p className="text-zinc-500">Pesquisar</p>
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
                  <div className="flex items-center space-x-2 justify-center font-bold text-white relative bottom-12">
                    <p className="text-zinc-500">Fazer Login</p>
                    <UserIcon color="#71717a" />
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
