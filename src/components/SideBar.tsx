import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowSquareOutIcon, ListIcon, UserIcon } from "@/lib/icons";
import Link from "next/link";
import User from "./User";
import DashboardLink from "./DashboardLink";

export default function SideBar() {
  return (
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
                <DashboardLink />
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
              <div className="flex justify-center font-bold text-white relative top-2/4">
                <User />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
