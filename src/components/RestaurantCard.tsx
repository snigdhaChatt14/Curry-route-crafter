import { Star, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Restaurant } from '@/data/restaurants';
import { useNavigate } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-background px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{restaurant.rating}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{restaurant.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {restaurant.cuisine.join(', ')}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <span className="text-muted-foreground">₹{restaurant.minOrder} min</span>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2">{restaurant.location}</p>
      </div>
    </Card>
  );
};
