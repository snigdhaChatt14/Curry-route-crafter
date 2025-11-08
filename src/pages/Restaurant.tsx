import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MenuItemCard } from '@/components/MenuItemCard';
import { restaurants } from '@/data/restaurants';
import { useCart } from '@/contexts/CartContext';
import { Star, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Restaurant = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Restaurant not found</h1>
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(restaurant.menu.map(item => item.category)))];
  const filteredMenu = selectedCategory === 'All' 
    ? restaurant.menu 
    : restaurant.menu.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Restaurant Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden mb-4">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-sm opacity-90">{restaurant.cuisine.join(', ')}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
            </div>
            <span className="text-muted-foreground">₹{restaurant.minOrder} minimum</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                restaurantId={restaurant.id}
                restaurantName={restaurant.name}
                onAddToCart={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    restaurantId: restaurant.id,
                    restaurantName: restaurant.name,
                    image: item.image
                  })
                }
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
