
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CreditCard, Video } from "lucide-react";

interface BookingModalProps {
  expert: {
    id: string;
    name: string;
    year: string;
    major: string;
    rate: number;
    avatar: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ expert, isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [topic, setTopic] = useState("");

  const totalCost = expert.rate * (parseInt(duration) / 30);

  const handleBooking = () => {
    console.log("Booking session with:", {
      expertId: expert.id,
      date: selectedDate,
      time: selectedTime,
      duration,
      topic,
      totalCost
    });
    alert("Booking confirmed! You'll get a Google Meet link soon.");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <img
              src={expert.avatar}
              alt={expert.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-semibold text-white">Chat with {expert.name}</div>
              <div className="text-sm text-gray-400 font-normal">
                {expert.year} • {expert.major}
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-blue-950 p-3 rounded-lg border border-blue-800">
            <div className="flex items-center space-x-2 mb-1">
              <Video className="h-4 w-4 text-blue-400" />
              <span className="font-medium text-sm text-white">Google Meet Call</span>
            </div>
            <p className="text-xs text-gray-400">
              You'll get the meeting link 15 minutes before your session
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="date" className="text-sm text-white">Pick a Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-sm text-white">Pick a Time</Label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white"
              >
                <option value="">Choose time</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <Label className="text-sm text-white">How long?</Label>
            <div className="flex space-x-2 mt-1">
              {[30, 60].map((mins) => (
                <Button
                  key={mins}
                  variant={duration === mins.toString() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDuration(mins.toString())}
                  className={duration === mins.toString() ? 
                    "flex-1 bg-white text-black hover:bg-gray-200" : 
                    "flex-1 text-white border-gray-600 hover:bg-gray-800"
                  }
                >
                  {mins} min
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="topic" className="text-sm text-white">What do you need help with?</Label>
            <Textarea
              id="topic"
              placeholder="e.g., Python homework, career advice, coding interview prep..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={2}
              className="mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center text-sm mb-1">
              <span className="text-gray-300">Session ({duration} min)</span>
              <span className="font-medium text-white">${totalCost}</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-300">Platform fee</span>
              <span className="font-medium text-white">$2</span>
            </div>
            <hr className="my-2 border-gray-600" />
            <div className="flex justify-between items-center font-semibold">
              <span className="text-white">Total</span>
              <span className="text-white">${totalCost + 2}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose} className="flex-1 text-white border-gray-600 hover:bg-gray-800">
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className="flex-1 bg-white text-black hover:bg-gray-200"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pay & Book
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
