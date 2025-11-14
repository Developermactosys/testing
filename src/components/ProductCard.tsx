import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  aiRecommended?: boolean;
  inStock: boolean;
  prescription?: boolean;
}

export function ProductCard({
  name,
  category,
  description,
  price,
  rating,
  reviews,
  image,
  aiRecommended,
  inStock,
  prescription,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {aiRecommended && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 gap-1">
              <Sparkles className="w-3 h-3" />
              AI Pick
            </Badge>
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white px-4 py-2 bg-red-600 rounded-lg">Out of Stock</span>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            {prescription && (
              <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">
                Rx Required
              </Badge>
            )}
          </div>
          <h3 className="text-gray-900 line-clamp-1">{name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-gray-900">${price.toFixed(2)}</span>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500"
            disabled={!inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
