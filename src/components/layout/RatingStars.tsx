import { Star, StarHalf } from "lucide-react";

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {rating % 1 !== 0 && (
        <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )}
    </div>
  );
};

export default RatingStars;
