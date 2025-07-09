
import ExpertCard from "./ExpertCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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

const HelpersSection = () => {
  return (
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
  );
};

export default HelpersSection;
