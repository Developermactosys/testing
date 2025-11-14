import { Card, CardContent } from "./ui/card";
import { Brain, Zap, Target, Shield, TrendingUp, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Brain,
    title: "Neural Search",
    description: "Advanced AI algorithms understand medical terminology and suggest the most relevant medications for your symptoms.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "Get personalized product recommendations based on your health profile and medical history.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Lightning-fast search powered by machine learning delivers results in milliseconds.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "AI-powered drug interaction checker ensures safe medication combinations.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics",
    description: "Track medication trends and get insights into the latest pharmaceutical innovations.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Learn from millions of verified reviews and patient experiences powered by AI.",
    gradient: "from-pink-500 to-rose-500",
  },
];

export function AIFeatures() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-sm">AI-Powered Platform</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Revolutionizing Pharmaceutical Discovery
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Our cutting-edge AI technology transforms how healthcare professionals and patients discover and access medications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-300 transition-all hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-gray-900 mb-1">50K+</div>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="text-center">
            <div className="text-gray-900 mb-1">99.8%</div>
            <p className="text-gray-600">Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-gray-900 mb-1">2M+</div>
            <p className="text-gray-600">Users</p>
          </div>
          <div className="text-center">
            <div className="text-gray-900 mb-1">{"<100ms"}</div>
            <p className="text-gray-600">Search Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
