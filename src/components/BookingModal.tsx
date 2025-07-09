
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CreditCard, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BookingModalProps {
  expert: {
    id: string;
    name: string;
    title: string;
    hourlyRate: number;
    avatar: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ expert, isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("60");
  const [description, setDescription] = useState("");

  const totalCost = expert.hourlyRate * (parseInt(duration) / 60);

  const handleBooking = () => {
    console.log("Booking session with:", {
      expertId: expert.id,
      date: selectedDate,
      time: selectedTime,
      duration,
      description,
      totalCost
    });
    // Here you would integrate with your payment system
    alert("Booking functionality would integrate with Stripe payments!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">Book Session with {expert.name}</div>
              <div className="text-sm text-gray-600 font-normal">{expert.title}</div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Session Details */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Video className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Google Meet Session</span>
            </div>
            <p className="text-sm text-gray-600">
              You'll receive a Google Meet link via email 15 minutes before your scheduled session.
            </p>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Select Date</span>
            </Label>
            <Input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Select Time</span>
            </Label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Choose a time slot</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>

          {/* Duration Selection */}
          <div className="space-y-2">
            <Label>Session Duration</Label>
            <div className="flex space-x-2">
              {[30, 60, 90].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDuration(mins.toString())}
                  className={`px-4 py-2 rounded-md border ${
                    duration === mins.toString()
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">What would you like to discuss?</Label>
            <Textarea
              id="description"
              placeholder="Briefly describe what you'd like help with..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Cost Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Session ({duration} minutes)</span>
              <span className="font-medium">${totalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Platform fee</span>
              <span className="font-medium">$5.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${(totalCost + 5).toFixed(2)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className="flex-1"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pay & Book Session
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
