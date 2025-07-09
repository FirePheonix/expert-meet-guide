
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertCard from "@/components/ExpertCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Calendar, Video, Star } from "lucide-react";

// College student helpers data
const helpers = [
  {
    id: "1",
    name: "Sarah Kim",
    year: "Senior",
    major: "Computer Science",
    school: "Stanford University",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b6d2a03e?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 43,
    rate: 25,
    skills: ["Python", "React", "Interview Prep", "Career Advice"],
    bio: "CS senior who loves helping juniors with coding and landing internships. Got offers from Google & Meta!",
    status: "Available today"
  },
  {
    id: "2",
    name: "Marcus Chen",
    year: "Graduate",
    major: "Data Science",
    school: "UC Berkeley",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 28,
    rate: 30,
    skills: ["Machine Learning", "Statistics", "Python", "SQL"],
    bio: "Data science grad student. Here to help with stats, ML projects, and research questions.",
    status: "Available tomorrow"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    year: "Senior",
    major: "UX Design",
    school: "NYU",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviews: 51,
    rate: 20,
    skills: ["Figma", "User Research", "Portfolio", "Design Systems"],
    bio: "Design senior passionate about helping others create amazing user experiences and portfolios.",
    status: "Available today"
  },
  {
    id: "4",
    name: "Alex Thompson",
    year: "Senior",
    major: "Software Engineering",
    school: "MIT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviews: 35,
    rate: 35,
    skills: ["JavaScript", "Node.js", "System Design", "Leetcode"],
    bio: "Software engineering senior who aced technical interviews. Let me help you crack coding challenges!",
    status: "Available this week"
  },
  {
    id: "5",
    name: "Priya Patel",
    year: "Graduate",
    major: "Business Analytics",
    school: "Wharton",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    rating: 5.0,
    reviews: 22,
    rate: 40,
    skills: ["Excel", "Business Strategy", "Consulting", "Case Studies"],
    bio: "MBA student helping undergrads with business concepts, case competitions, and consulting prep.",
    status: "Available next week"
  },
  {
    id: "6",
    name: "David Park",
    year: "Senior",
    major: "Cybersecurity",
    school: "Georgia Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviews: 19,
    rate: 28,
    skills: ["Network Security", "Ethical Hacking", "Linux", "Cryptography"],
    bio: "Cybersecurity senior helping students understand security concepts and ethical hacking basics.",
    status: "Available today"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              How It Works
            </h2>
            <p className="text-gray-600">
              Get help from fellow students in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Pick a Helper</h3>
              <p className="text-sm text-gray-600">Browse seniors who can help with your topic</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Book a Time</h3>
              <p className="text-sm text-gray-600">Schedule when works for both of you</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Get Help</h3>
              <p className="text-sm text-gray-600">Video chat and get the help you need</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Helpers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Meet Your Helpers
            </h2>
            <p className="text-gray-600">
              Friendly seniors ready to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpers.map((helper) => (
              <ExpertCard key={helper.id} expert={helper} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              See All Helpers
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Why StudyBuddy?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real Students</h3>
              <p className="text-sm text-gray-600">All helpers are verified college students and recent grads</p>
            </div>
            <div className="text-center p-4">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Affordable Help</h3>
              <p className="text-sm text-gray-600">Student-friendly prices starting at just $20 per session</p>
            </div>
            <div className="text-center p-4">
              <Video className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Easy Sessions</h3>
              <p className="text-sm text-gray-600">Simple booking with automatic Google Meet links</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to get unstuck?
          </h2>
          <p className="text-blue-100 mb-6">
            Join hundreds of students getting help from their peers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary">
              Find a Helper
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Become a Helper
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">StudyBuddy</h3>
              <p className="text-sm text-gray-400">
                Connecting college students with peer mentors for academic success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Platform</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Find Helpers</a></li>
                <li><a href="#" className="hover:text-white">Become Helper</a></li>
                <li><a href="#" className="hover:text-white">How it Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2024 StudyBuddy. Made by students, for students.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
