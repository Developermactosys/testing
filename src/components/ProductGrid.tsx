import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    description: "Broad-spectrum antibiotic for bacterial infections",
    price: 24.99,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    inStock: true,
    prescription: true,
  },
  {
    id: 2,
    name: "Ibuprofen 200mg",
    category: "Pain Relief",
    description: "Fast-acting pain and inflammation relief",
    price: 12.99,
    rating: 4.6,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: false,
    inStock: true,
    prescription: false,
  },
  {
    id: 3,
    name: "Vitamin D3 5000 IU",
    category: "Vitamins",
    description: "Essential vitamin for bone and immune health",
    price: 18.50,
    rating: 4.9,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    inStock: true,
    prescription: false,
  },
  {
    id: 4,
    name: "Lisinopril 10mg",
    category: "Cardiovascular",
    description: "Blood pressure management medication",
    price: 32.99,
    rating: 4.7,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: false,
    inStock: true,
    prescription: true,
  },
  {
    id: 5,
    name: "Metformin 500mg",
    category: "Diabetes",
    description: "First-line treatment for type 2 diabetes",
    price: 28.75,
    rating: 4.5,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    inStock: false,
    prescription: true,
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    description: "Heart and brain health support",
    price: 22.99,
    rating: 4.8,
    reviews: 542,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: false,
    inStock: true,
    prescription: false,
  },
  {
    id: 7,
    name: "Cetirizine 10mg",
    category: "Allergies",
    description: "24-hour allergy relief tablets",
    price: 14.99,
    rating: 4.6,
    reviews: 398,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: false,
    inStock: true,
    prescription: false,
  },
  {
    id: 8,
    name: "Probiotic Complex",
    category: "Digestive Health",
    description: "Advanced gut health formula with 50 billion CFU",
    price: 34.99,
    rating: 4.9,
    reviews: 621,
    image: "https://images.unsplash.com/photo-1675851143055-23ae996bb212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjMwNDc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    aiRecommended: true,
    inStock: true,
    prescription: false,
  },
];

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : activeTab === "ai"
    ? products.filter(p => p.aiRecommended)
    : products.filter(p => p.category.toLowerCase().includes(activeTab));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-gray-900">Featured Products</h2>
          <p className="text-gray-600">Discover our AI-curated selection</p>
        </div>
        
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="ai">AI Recommended</TabsTrigger>
          <TabsTrigger value="pain">Pain Relief</TabsTrigger>
          <TabsTrigger value="vitamins">Vitamins</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
}
