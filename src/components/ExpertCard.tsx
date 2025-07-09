
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Video, GraduationCap } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface ExpertCardProps {
  expert: {
    id: string;
    name: string;
    year: string;
    major: string;
    school: string;
    avatar: string;
    rating: number;
    reviews: number;
    rate: number;
    skills: string[];
    bio: string;
    status: string;
  };
}

const ExpertCard = ({ expert }: ExpertCardProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Card className="h-full hover:shadow-md transition-shadow bg-gray-900 border-gray-800">
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{expert.name}</h3>
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <GraduationCap className="h-3 w-3 mr-1" />
                <span>{expert.year} • {expert.major}</span>
              </div>
              <p className="text-xs text-blue-400 font-medium">{expert.school}</p>
              <div className="flex items-center mt-2">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-white">{expert.rating}</span>
                <span className="mx-1 text-gray-500">•</span>
                <span className="text-sm text-gray-400">{expert.reviews} reviews</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-3">
          <p className="text-sm text-gray-400 mb-3 line-clamp-2">{expert.bio}</p>
          
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {expert.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-gray-800 text-gray-300">
                  {skill}
                </Badge>
              ))}
              {expert.skills.length > 3 && (
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                  +{expert.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-bold text-white">${expert.rate}</span>
              <span className="text-sm text-gray-400">/30min</span>
            </div>
            <span className="text-sm text-green-400 font-medium">{expert.status}</span>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 space-y-2">
          <Button 
            className="w-full bg-white text-black hover:bg-gray-200" 
            onClick={() => setIsBookingOpen(true)}
          >
            <Video className="mr-2 h-4 w-4" />
            Book Chat
          </Button>
          <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-800" size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            Quick Question
          </Button>
        </CardFooter>
      </Card>
      
      <BookingModal
        expert={expert}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default ExpertCard;
