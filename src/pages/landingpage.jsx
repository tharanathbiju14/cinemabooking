import { SeatGrid } from "../components/seatgrid";
import { BookingSummary } from "../components/bookingsummary";
import { Clapperboard } from "lucide-react";
import { useState, useCallback } from "react";

const ROWS = ["A", "B", "C", "D", "E", "F"];
const SEATS_PER_ROW = 10;
const MAX_SEATS = 8;

const generateSeats = () => {
  return ROWS.flatMap((row, rowIndex) => {
    let tier;
    let price;

    if (rowIndex < 2) {
      tier = "Silver";
      price = 100;
    } else if (rowIndex < 4) {
      tier = "Gold";
      price = 150;
    } else {
      tier = "Platinum";
      price = 200;
    }

    return Array.from({ length: SEATS_PER_ROW }, (_, index) => ({
      id: `${row}${index + 1}`,
      row,
      number: index + 1,
      tier,
      price,
      isSelected: false,
      isBooked: false,
    }));
  });
};

function Landingpage() {
  const [seats, setSeats] = useState(generateSeats());
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedSeats = seats.filter((seat) => seat.isSelected);
  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleSeatSelect = useCallback(
    (selectedSeat) => {
      setSeats((prevSeats) => {
        if (selectedSeat.isSelected) {
          return prevSeats.map((seat) =>
            seat.id === selectedSeat.id ? { ...seat, isSelected: false } : seat
          );
        }

        if (selectedSeats.length >= MAX_SEATS) {
          setShowError(true);
          setTimeout(() => setShowError(false), 3000);
          return prevSeats;
        }

        return prevSeats.map((seat) =>
          seat.id === selectedSeat.id ? { ...seat, isSelected: true } : seat
        );
      });
    },
    [selectedSeats.length]
  );

  const handleBook = () => {
    if (selectedSeats.length === 0) return;

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.isSelected
            ? { ...seat, isSelected: false, isBooked: true }
            : seat
        )
      );
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="relative">
        {/* Hero Section */}
        <div
          className="h-64 bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <div className="container mx-auto px-4 h-screen flex mt-10 justify-center">
              <div className="max-w-3xl text-center">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <Clapperboard className="w-10 h-10 text-red-500" />
                  <h1 className="text-4xl font-bold">Cinema Booking</h1>
                </div>
                <p className="text-xl text-gray-300">
                  Select your perfect spot for an unforgettable movie experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 -mt-20">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Seat Selection Section */}
            <div className="flex-grow bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                {/* Pricing Section */}
                <div className="mb-8 flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-400" />
                    <span className="text-sm">Silver - ₹100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-400" />
                    <span className="text-sm">Gold - ₹150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-400" />
                    <span className="text-sm">Platinum - ₹200</span>
                  </div>
                </div>

                {/* Seat Grid */}
                <SeatGrid
                  seats={seats}
                  onSeatSelect={handleSeatSelect}
                  maxSeats={MAX_SEATS}
                />
              </div>
            </div>

            {/* Booking Summary Section */}
            <div className="lg:w-96 w-full sticky top-4 mt-20">
              <BookingSummary
                summary={{ selectedSeats, totalCost }}
                onBook={handleBook}
              />
            </div>
          </div>
        </div>
      </div>

        {/* Pricing Section moved to the bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 py-4 ">
        <div className="container mx-auto text-center text-white">
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-400" />
              <span className="text-sm">Silver - ₹100</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-400" />
              <span className="text-sm">Gold - ₹150</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-400" />
              <span className="text-sm">Platinum - ₹200</span>
            </div>
          </div>
        </div>
      </div>

      {/* Error and Success Notifications */}
      <div className="fixed bottom-4 right-4 space-y-2">
        {showError && (
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in">
            You can only select up to {MAX_SEATS} seats
          </div>
        )}
        {showSuccess && (
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in">
            Booking successful! Thank you for your purchase.
          </div>
        )}
      </div>
    </div>
  );
}

export default Landingpage;
