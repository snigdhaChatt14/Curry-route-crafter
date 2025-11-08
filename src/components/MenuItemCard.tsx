import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MenuItem } from '@/data/restaurants';
import { Badge } from './ui/badge';

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
  onAddToCart: () => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-3 p-3">
        <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <Badge
            variant={item.isVeg ? "default" : "destructive"}
            className="absolute top-1 left-1 text-xs"
          >
            {item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
          </Badge>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1">{item.name}</h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary">₹{item.price}</span>
            <Button
              size="sm"
              onClick={onAddToCart}
              className="h-8"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
