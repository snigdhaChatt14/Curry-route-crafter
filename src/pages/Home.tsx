import { useState } from 'react';
import { Header } from '@/components/Header';
import { RestaurantCard } from '@/components/RestaurantCard';
import { CuisineFilter } from '@/components/CuisineFilter';
import { restaurants, cuisineTypes } from '@/data/restaurants';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Home = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine.includes(selectedCuisine);
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Craving something delicious?
          </h1>
          <p className="text-muted-foreground text-lg">
            Order from the best restaurants in India
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Cuisine Filter */}
        <div className="mb-6">
          <CuisineFilter
            cuisines={cuisineTypes}
            selectedCuisine={selectedCuisine}
            onSelectCuisine={setSelectedCuisine}
          />
        </div>

        {/* Restaurants Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {selectedCuisine === 'All' ? 'All Restaurants' : `${selectedCuisine} Restaurants`}
          </h2>
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No restaurants found matching your criteria
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
