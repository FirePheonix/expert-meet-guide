
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to get unstuck?
        </h2>
        <p className="text-gray-300 mb-6">
          Join hundreds of students getting help from their peers
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Find a Helper
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Become a Helper
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
