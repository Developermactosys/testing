import { useState } from "react";
import { Search, Sparkles, TrendingUp, Zap, Brain, Atom } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const suggestions = [
  { text: "Cancer immunotherapy compounds", icon: Brain },
  { text: "Cardiovascular drug interactions", icon: Zap },
  { text: "Neuroprotective molecules", icon: Atom },
  { text: "AI-optimized antibiotics", icon: Sparkles },
  { text: "Metabolic pathway modulators", icon: TrendingUp },
];

const trendingSearches = [
  "mRNA therapeutics",
  "CRISPR gene editing",
  "Quantum drug design",
  "AI protein folding",
];

export function AISearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="relative -mt-24 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* Main Search Card */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for compounds, diseases, molecular structures, or research papers..."
                  className="pl-24 pr-40 h-16 text-lg bg-white/50 backdrop-blur-sm border-2 border-white/30 focus:border-cyan-500 focus:bg-white rounded-2xl text-gray-900 placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <Button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-12 px-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 border-0 text-white shadow-lg"
                  size="lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  AI Search
                </Button>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <motion.div 
                  className="bg-white rounded-2xl shadow-2xl p-6 space-y-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Trending */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-900">Trending in Research</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer hover:bg-cyan-100 hover:text-cyan-700 transition-colors px-4 py-2"
                        >
                          {search}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* AI Suggestions */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-900">AI-Powered Suggestions</span>
                    </div>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => {
                        const Icon = suggestion.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 p-3 rounded-xl cursor-pointer transition-all group"
                          >
                            <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg group-hover:from-cyan-200 group-hover:to-blue-200 transition-colors">
                              <Icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="group-hover:text-blue-600 transition-colors">
                              {suggestion.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-white/80">Quick filters:</span>
                {[
                  { label: "Oncology", color: "from-red-500 to-orange-500" },
                  { label: "Neurology", color: "from-purple-500 to-pink-500" },
                  { label: "Cardiology", color: "from-blue-500 to-cyan-500" },
                  { label: "Immunology", color: "from-green-500 to-emerald-500" },
                  { label: "AI-Designed", color: "from-cyan-500 to-blue-500" },
                ].map((filter, i) => (
                  <Badge 
                    key={i}
                    className={`cursor-pointer bg-gradient-to-r ${filter.color} border-0 text-white hover:shadow-lg hover:scale-105 transition-all px-4 py-1.5`}
                  >
                    {filter.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { value: "10M+", label: "Compounds", icon: Atom },
              { value: "50K+", label: "Research Papers", icon: Brain },
              { value: "99.8%", label: "Accuracy", icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all"
                >
                  <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">{stat.value}</div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
