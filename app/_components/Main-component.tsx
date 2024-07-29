import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const Main = () => {
  return (
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

      <h2 className="font-semibold text-3xl mt-10">
        Playlist de Guilherme Silva
      </h2>

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
          <span className="text-xs text-zinc-500">
            Mc Kevin (Prod.DJ Glenner e DJ Negret)
          </span>
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
          <span className="text-xs text-zinc-500">
            Mc Kevin, Mc Hariel (Prod.DJ Luan Beat 7 DJ Murillo e LT No Beat)
          </span>
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
          <span className="text-xs text-zinc-500">
            Mc Kevin Feat.Eobronks, Vulgo FK e MC Magal (Prod.DJ Wall)
          </span>
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
          <span className="text-xs text-zinc-500">
            Mc Kevin (Prod. DJ Wall)
          </span>
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
  );
};

export default Main;
