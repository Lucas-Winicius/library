import { GearSixIcon } from "@/lib/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MoreDashboard() {
  return (
    <div className="fixed flex items-center justify-center p-2 right-7 bottom-5 bg-white rounded-full border border-zinc-800">
      <Popover>
        <PopoverTrigger>
          <button className="flex w-min h-min">
            <GearSixIcon color="black" />
          </button>
        </PopoverTrigger>
        <PopoverContent>More dashboard links</PopoverContent>
      </Popover>
    </div>
  );
}
