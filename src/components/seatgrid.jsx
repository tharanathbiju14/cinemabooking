
export const SeatGrid = ({ seats, onSeatSelect }) => {
  const getTierColor = (tier, isSelected, isBooked) => {
    if (isBooked) return 'bg-gray-700 cursor-not-allowed';
    if (isSelected) return 'bg-red-500 ring-2 ring-red-300';
    
    switch (tier) {
      case 'Silver':
        return 'bg-gray-400 hover:bg-gray-300';
      case 'Gold':
        return 'bg-yellow-400 hover:bg-yellow-300';
      case 'Platinum':
        return 'bg-purple-400 hover:bg-purple-300';
      default:
        return 'bg-gray-400';
    }
  };

  const handleSeatClick = (seat) => {
    if (!seat.isBooked) {
      onSeatSelect(seat);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      
      <div className="mb-12 flex flex-col items-center">
        <div className="w-2/3 h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-2" />
        <div className="w-full h-8 bg-gradient-to-b from-gray-700 to-transparent rounded-t-3xl" />
        <p className="text-gray-400 text-sm mt-2">SCREEN</p>
      </div>
      
      <div className="grid grid-cols-10 gap-3">
        {seats.map((seat) => (
          <button
            key={seat.id}
            onClick={() => handleSeatClick(seat)}
            disabled={seat.isBooked}
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium
              transition-all duration-200 transform hover:scale-105
              ${getTierColor(seat.tier, seat.isSelected, seat.isBooked)}
              ${seat.isBooked ? 'opacity-50' : 'hover:opacity-90'}
              ${seat.isSelected ? 'text-white' : 'text-gray-900'}
            `}
            title={`${seat.id} - ₹${seat.price} (${seat.tier})`}
          >
            {seat.number}
          </button>
        ))}
      </div>
    </div>
  );
};