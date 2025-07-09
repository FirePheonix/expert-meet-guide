
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Consultलो</h1>
            <span className="ml-2 text-sm text-gray-300">COMING SOON</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">Sign In</Button>
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">Help Others</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
