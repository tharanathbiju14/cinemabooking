import { Ticket } from "lucide-react";

export const BookingSummary = ({ summary, onBook }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Ticket className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl font-bold">Booking Summary</h2>
        </div>

        {summary.selectedSeats.length > 0 ? (
          <>
            <div className="space-y-3">
              {summary.selectedSeats.map((seat) => (
                <div
                  key={seat.id}
                  className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
                >
                  <div className="space-y-1">
                    <span className="block text-sm text-gray-300">
                      Seat {seat.id}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {seat.tier}
                    </span>
                  </div>
                  <span className="font-semibold">₹{seat.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">Total Amount</span>
                <span className="text-2xl font-bold text-red-500">
                  ₹{summary.totalCost}
                </span>
              </div>

              <button
                onClick={onBook}
                className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold
                  hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2 mb-10"
              >
                <Ticket className="w-5 h-5" />
                Book Tickets
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-gray-400">
            <Ticket className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Select your seats to proceed</p>
          </div>
        )}
      </div>
    </div>
  );
};
