
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertCard from "@/components/ExpertCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Calendar, Video, CreditCard } from "lucide-react";

// Mock data for experts
const experts = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Software Engineer",
    company: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b6d2a03e?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 150,
    specializations: ["React", "System Design", "Career Growth", "Tech Leadership"],
    experience: "8+ years",
    bio: "Former tech lead at Google with expertise in scalable web applications and mentoring engineers.",
    availability: "Available today"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "DevOps Architect",
    company: "AWS",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 180,
    specializations: ["AWS", "Kubernetes", "CI/CD", "Infrastructure"],
    experience: "10+ years",
    bio: "DevOps expert specializing in cloud architecture and helping teams scale their infrastructure.",
    availability: "Available tomorrow"
  },
  {
    id: "3",
    name: "Emily Johnson",
    title: "Product Designer",
    company: "Airbnb",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 120,
    specializations: ["UX Design", "Product Strategy", "Design Systems", "User Research"],
    experience: "6+ years",
    bio: "Product designer passionate about creating user-centered experiences and design strategy.",
    availability: "Available today"
  },
  {
    id: "4",
    name: "David Kim",
    title: "Machine Learning Engineer",
    company: "Tesla",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviews: 73,
    hourlyRate: 200,
    specializations: ["Python", "TensorFlow", "Computer Vision", "AI Strategy"],
    experience: "7+ years",
    bio: "ML engineer focused on computer vision and autonomous systems, passionate about AI education.",
    availability: "Available this week"
  },
  {
    id: "5",
    name: "Jessica Park",
    title: "Tech Startup Founder",
    company: "ExitCorp (Acquired)",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    rating: 5.0,
    reviews: 94,
    hourlyRate: 250,
    specializations: ["Entrepreneurship", "Fundraising", "Product Management", "Growth Strategy"],
    experience: "12+ years",
    bio: "Serial entrepreneur with 2 successful exits, now helping founders navigate the startup journey.",
    availability: "Available next week"
  },
  {
    id: "6",
    name: "Alex Thompson",
    title: "Cybersecurity Specialist",
    company: "Microsoft",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 61,
    hourlyRate: 170,
    specializations: ["Security Auditing", "Penetration Testing", "Cloud Security", "Compliance"],
    experience: "9+ years",
    bio: "Cybersecurity expert helping organizations secure their digital infrastructure and processes.",
    availability: "Available today"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Choose Expert</h3>
              <p className="text-gray-600">Browse and select from our verified tech experts</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Schedule Session</h3>
              <p className="text-gray-600">Pick a time that works for both of you</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Secure Payment</h3>
              <p className="text-gray-600">Pay securely and get instant confirmation</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Meet & Learn</h3>
              <p className="text-gray-600">Connect via Google Meet and get personalized guidance</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experts Section */}
      <section id="experts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Tech Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with industry professionals from top companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Experts
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Trust & Safety Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechConsult?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Experts</h3>
              <p className="text-gray-600">All experts are thoroughly vetted and verified professionals from top tech companies.</p>
            </div>
            <div className="text-center p-6">
              <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your payments are protected with enterprise-grade security and instant refunds.</p>
            </div>
            <div className="text-center p-6">
              <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
              <p className="text-gray-600">Easy scheduling, automatic Google Meet links, and session recordings available.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to accelerate your tech career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've advanced their careers with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Browse Experts
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
              Become an Expert
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">TechConsult</h3>
              <p className="text-gray-400 mb-4">
                Connecting tech professionals with expert guidance for career growth and problem-solving.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Experts</a></li>
                <li><a href="#" className="hover:text-white">Become Expert</a></li>
                <li><a href="#" className="hover:text-white">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechConsult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
