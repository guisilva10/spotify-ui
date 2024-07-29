import { HomeIcon, Library, Search } from "lucide-react";

const Aside = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-600" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center text-xs font-semibold text-zinc/200 gap-3"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center text-xs font-semibold text-zinc-200 gap-3"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center text-xs font-semibold text-zinc-200 gap-3"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Músicas Curtidas
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Mc Kevin -As Melhores
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Músicas Ambiente de Trabalho
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          BRAZILIAN PHONK 2024
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          MC Hariel
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          House 2024
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          TrapLaudo
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          MC IG
        </a>
      </nav>
    </aside>
  );
};

export default Aside;
