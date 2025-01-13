import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Clapperboard } from "lucide-react";

export default function Homepage() {
  const navigate = useNavigate();

  const handleBookTickets = () => {
    navigate("/landingpage");
  };

  useEffect(() => {
    console.log("Hi my name is Tharanadh and I've put a lot of work in this project. Hope you guys will like it.");
  }, []); 
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="text-4xl font-bold flex gap-3">
            <Clapperboard className="w-10 h-10 text-red-500" />
            cinema booking
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Booking is now open!</h1>
          <p className="text-m mb-5">
            ready for a movie? whats holding you ! Grab your tickets
          </p>
          <button
            className="bg-red-500 px-6 py-3 rounded text-white text-lg"
            onClick={handleBookTickets}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
