
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">StudyBuddy</h1>
            <span className="ml-2 text-sm text-gray-500">Get help from seniors</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Help Others</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
