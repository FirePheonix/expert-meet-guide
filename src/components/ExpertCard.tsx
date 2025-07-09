
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, MessageCircle, Video } from "lucide-react";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface ExpertCardProps {
  expert: {
    id: string;
    name: string;
    title: string;
    company: string;
    avatar: string;
    rating: number;
    reviews: number;
    hourlyRate: number;
    specializations: string[];
    experience: string;
    bio: string;
    availability: string;
  };
}

const ExpertCard = ({ expert }: ExpertCardProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-4">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {expert.name}
              </h3>
              <p className="text-sm text-gray-600 truncate">{expert.title}</p>
              <p className="text-sm text-blue-600 font-medium">{expert.company}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {expert.rating}
                  </span>
                </div>
                <span className="mx-1 text-gray-300">•</span>
                <span className="text-sm text-gray-600">
                  {expert.reviews} reviews
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 line-clamp-3">{expert.bio}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Specializations</h4>
              <div className="flex flex-wrap gap-1">
                {expert.specializations.slice(0, 3).map((spec, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {spec}
                  </Badge>
                ))}
                {expert.specializations.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{expert.specializations.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  ${expert.hourlyRate}
                </span>
                <span className="text-sm text-gray-600">/hour</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                {expert.availability}
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="w-full space-y-2">
            <Button 
              className="w-full" 
              onClick={() => setIsBookingOpen(true)}
            >
              <Video className="mr-2 h-4 w-4" />
              Book Session
            </Button>
            <Button variant="outline" className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
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
