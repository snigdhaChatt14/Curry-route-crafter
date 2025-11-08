import { Button } from './ui/button';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

interface CuisineFilterProps {
  cuisines: string[];
  selectedCuisine: string;
  onSelectCuisine: (cuisine: string) => void;
}

export const CuisineFilter = ({ cuisines, selectedCuisine, onSelectCuisine }: CuisineFilterProps) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 py-2">
        {cuisines.map((cuisine) => (
          <Button
            key={cuisine}
            variant={selectedCuisine === cuisine ? 'default' : 'outline'}
            size="sm"
            onClick={() => onSelectCuisine(cuisine)}
            className="rounded-full px-4"
          >
            {cuisine}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
