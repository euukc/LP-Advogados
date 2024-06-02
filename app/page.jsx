import Image from "next/image";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Areas from "./components/Areas";
import Contato from "./components/Contato";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="w-full h-full flex justify-center flex-col">
      <Header />
      <Introduction />
      <About />
      <Areas/>
      <Contato />
      <Footer/>

    </main>
  );
}
