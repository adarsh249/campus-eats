import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/landing/Search";
import Features from "./components/landing/Features";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative h-96 bg-no-repeat bg-center bg-cover bg-landing-page-image">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <Search />
        </div>
      </div>
      <Features />
    </div>
  );
}

