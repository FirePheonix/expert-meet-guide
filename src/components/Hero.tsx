
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Expert Tech Guidance
            <span className="text-blue-600 block">One-on-One</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with seasoned tech professionals for personalized consultations. 
            Get the guidance you need to advance your career, solve complex problems, or learn new technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              Find Your Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Become an Expert
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Tech Experts</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-yellow-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">10k+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
