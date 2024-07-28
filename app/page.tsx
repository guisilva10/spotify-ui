import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
  Volume2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-5">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Melhores Albuns</h1>

          <div className="grid grid-cols-3 gap-6">
            <a className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc Kevin"
              />
              <strong>Passado e Presente</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group   rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin2.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc Kevin"
              />
              <strong>Fenix</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin3.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc Kevin"
              />
              <strong>O menino encantou a quebrada</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin4.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc Kevin"
              />
              <strong>Isolado no quarto</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin5.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc /Kevin"
              />
              <strong>Isolado no quarto 2.0</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/kevin77.jpg"
                width={104}
                height={104}
                alt="imagem do album do Mc Kevin"
              />
              <strong>Solidão</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 invisible rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">Playlist de Guilherme Silva</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex gap-2 flex-col hover:bg-white/10">
            <Image
                className="w-full"
                src="/kevin.jpg"
                width={120}
                height={120}
                alt="imagem do album do Mc Kevin"
              />
              <strong className="font-semibold">Palhaço</strong>
              <span className="text-xs text-zinc-500">Mc Kevin (Prod.DJ Glenner e DJ Negret)</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex gap-2 flex-col hover:bg-white/10">
            <Image
                className="w-full"
                src="/kevin.jpg"
                width={120}
                height={120}
                alt="imagem do album do Mc Kevin"
              />
              <strong className="font-semibold">Junção Venenosa</strong>
              <span className="text-xs text-zinc-500">Mc Kevin, Mc Hariel (Prod.DJ Luan Beat 7 DJ Murillo e LT No Beat)</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex gap-2 flex-col hover:bg-white/10">
            <Image
                className="w-full"
                src="/kevin.jpg"
                width={120}
                height={120}
                alt="imagem do album do Mc Kevin"
              />
              <strong className="font-semibold">Alma Pura</strong>
              <span className="text-xs text-zinc-500">Mc Kevin Feat.Eobronks, Vulgo FK e MC Magal  (Prod.DJ Wall)</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex gap-2 flex-col hover:bg-white/10">
            <Image
                className="w-full"
                src="/kevin.jpg"
                width={120}
                height={120}
                alt="imagem do album do Mc Kevin"
              />
              <strong className="font-semibold">Grana</strong>
              <span className="text-xs text-zinc-500">Mc Kevin (Prod. DJ Wall)</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex gap-2 flex-col hover:bg-white/10">
            <Image
                className="w-full"
                src="/kevin.jpg"
                width={120}
                height={120}
                alt="imagem do album do Mc Kevin"
              />
              <strong className="font-semibold">Trilha</strong>
              <span className="text-xs text-zinc-500">Mc Kevin (Prod.DJ Wall)</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
                  className="w-full"
                  src="/kevin2.jpg"
                  width={56}
                  height={56}
                  alt="imagem do album do Mc Kevin"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Pandemia</strong>
            <span className="text-xs text-zinc-400">Mc Kevin - Perera DJ</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">2:19</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20}/> 
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume2 size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-12 bg-zinc-200"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  );
}
