
import { Button } from "@/components/ui/button";
import { Calendar, Users, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-2xl font-bold text-blue-600">
              TechConsult
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#experts" className="text-gray-500 hover:text-gray-900 transition-colors">
              Find Experts
            </a>
            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Join as Expert</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
