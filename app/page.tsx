import Footer from "./_components/Footer-component";
import Aside from "./_components/Aside-component";
import Main from "./_components/Main-component";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <Aside/>
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}
