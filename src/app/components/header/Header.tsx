import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

export default function Header() {
  return (
    <header className="bg-stone-950 flex justify-between items-center py-3 px-5">
      <div>
        <SideBar />
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}
