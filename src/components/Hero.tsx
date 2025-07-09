
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get Help From
          <span className="text-blue-400 block">College Seniors</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Stuck on coding? Need career advice? Chat 1-on-1 with students who've been there.
          Get real help from real people.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button size="lg" className="px-6 py-3 bg-white text-black hover:bg-gray-200">
            Find Help Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-6 py-3 text-white border-white hover:bg-white hover:text-black">
            Start Helping
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-800">
            <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">200+</div>
            <div className="text-sm text-gray-400">Helpful Seniors</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-800">
            <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">4.8/5</div>
            <div className="text-sm text-gray-400">Student Rating</div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-800">
            <Clock className="h-6 w-6 text-green-400 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">2k+</div>
            <div className="text-sm text-gray-400">Help Sessions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
