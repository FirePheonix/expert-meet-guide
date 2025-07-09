
import { Shield, Star, Video } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Why StudyBuddy?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2 text-white">Real Students</h3>
            <p className="text-sm text-gray-400">All helpers are verified college students and recent grads</p>
          </div>
          <div className="text-center p-4">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2 text-white">Affordable Help</h3>
            <p className="text-sm text-gray-400">Student-friendly prices starting at just $20 per session</p>
          </div>
          <div className="text-center p-4">
            <Video className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2 text-white">Easy Sessions</h3>
            <p className="text-sm text-gray-400">Simple booking with automatic Google Meet links</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
