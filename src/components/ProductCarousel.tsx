import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ShoppingCart, Star, Sparkles, Microscope } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const featuredProducts = [
  {
    id: 1,
    name: "NanoCarrier X-200",
    category: "Drug Delivery Systems",
    description: "Revolutionary nanoparticle-based drug delivery platform with 95% bioavailability",
    price: 1499.99,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    tag: "Breakthrough Technology",
  },
  {
    id: 2,
    name: "ImmunoBoost Pro",
    category: "Immunotherapy",
    description: "Next-gen immune system modulator with AI-optimized molecular structure",
    price: 899.99,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    tag: "AI Optimized",
  },
  {
    id: 3,
    name: "NeuroGen Plus",
    category: "Neuroprotection",
    description: "Advanced cognitive enhancement formula developed through neural network analysis",
    price: 749.99,
    rating: 4.9,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    tag: "Neural Enhanced",
  },
  {
    id: 4,
    name: "CardioShield Advanced",
    category: "Cardiovascular Health",
    description: "Quantum-computed cardiovascular support with precision targeting",
    price: 1199.99,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    tag: "Quantum Tech",
  },
  {
    id: 5,
    name: "MetaboCell Optimizer",
    category: "Metabolic Health",
    description: "AI-designed metabolic pathway optimizer for enhanced cellular function",
    price: 849.99,
    rating: 4.8,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    tag: "Smart Formula",
  },
];

export function ProductCarousel() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 border-0">
            <Microscope className="w-3 h-3 mr-1" />
            Featured Innovation
          </Badge>
          <h2 className="text-gray-900 mb-4">
            Next-Generation Products
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Discover our AI-powered pharmaceutical innovations designed for maximum efficacy
          </p>
        </div>

        <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent className="-ml-6">
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-2 border-transparent hover:border-cyan-500 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    
                    {product.aiRecommended && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 gap-1 border-0 shadow-lg">
                          <Sparkles className="w-3 h-3" />
                          AI Powered
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600/90 backdrop-blur-sm border-0">
                        {product.tag}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                          {product.reviews} reviews
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl text-gray-900">${product.price}</span>
                        <span className="text-gray-500 text-sm ml-1">/unit</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2" />
          <CarouselNext className="border-2" />
        </Carousel>
      </div>
    </div>
  );
}
