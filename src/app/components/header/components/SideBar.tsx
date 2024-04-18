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
import { Separator } from "@/components/ui/separator";
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
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-3 items-center text-xl text-white font-semibold">
                <Link href="/">Home</Link>
                <p className="text-zinc-500">Perfil</p>
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
              <Separator />
              <User />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
