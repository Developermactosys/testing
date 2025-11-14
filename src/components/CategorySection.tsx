import { Card, CardContent } from "./ui/card";
import { Pill, Heart, Shield, Activity, Eye, Bone, Brain, Droplet } from "lucide-react";

const categories = [
  { name: "Pain Relief", icon: Pill, count: 124, color: "from-red-500 to-orange-500" },
  { name: "Heart Health", icon: Heart, count: 98, color: "from-pink-500 to-red-500" },
  { name: "Immune Support", icon: Shield, count: 156, color: "from-blue-500 to-cyan-500" },
  { name: "Vitamins", icon: Activity, count: 203, color: "from-green-500 to-emerald-500" },
  { name: "Eye Care", icon: Eye, count: 67, color: "from-purple-500 to-pink-500" },
  { name: "Bone & Joint", icon: Bone, count: 89, color: "from-amber-500 to-yellow-500" },
  { name: "Mental Health", icon: Brain, count: 76, color: "from-indigo-500 to-purple-500" },
  { name: "Diabetes", icon: Droplet, count: 94, color: "from-teal-500 to-cyan-500" },
];

export function CategorySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-gray-900 mb-3">Browse by Category</h2>
        <p className="text-gray-600 text-xl">Find the right medication for your needs</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} products</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
