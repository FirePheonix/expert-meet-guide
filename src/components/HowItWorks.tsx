
import { Calendar, Video, Star } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            How It Works
          </h2>
          <p className="text-gray-300">
            Get help from fellow students in 3 simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2 text-white">1. Pick a Helper</h3>
            <p className="text-sm text-gray-400">Browse seniors who can help with your topic</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Video className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="font-semibold mb-2 text-white">2. Book a Time</h3>
            <p className="text-sm text-gray-400">Schedule when works for both of you</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="font-semibold mb-2 text-white">3. Get Help</h3>
            <p className="text-sm text-gray-400">Video chat and get the help you need</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
