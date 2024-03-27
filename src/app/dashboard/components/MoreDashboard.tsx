import { Separator } from "@/components/ui/separator";
import { GearSixIcon } from "@/lib/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function MoreDashboard() {
  return (
    <div className="fixed flex items-center justify-center p-2 right-7 bottom-5 bg-white rounded-full border border-zinc-800">
      <Popover>
        <PopoverTrigger>
          <button className="flex w-min h-min">
            <GearSixIcon color="black" />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col space-y-2 text-lg font-semibold text-center">
            <Link href="/dashboard/books">Gerenciar Livros</Link>
            <Separator />
            <Link href="/dashboard/users">Gerenciar Usuarios</Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
