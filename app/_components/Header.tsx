import { Scissors, Sparkles } from "lucide-react";

const Header = () => (
  <header>
    <h1 className="text-4xl font-bold flex gap-1 px-6 animate-text bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
      Charm Url
    </h1>
    <div className="flex items-center">
      <Scissors className="opacity-60" />
      <hr className="border-t-4 border-dashed w-full" />
    </div>
  </header>
);

export default Header;
