import { Button } from "./ui/button";
import { Search, Sparkles, Zap, Brain, ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">Powered by Advanced AI & Machine Learning</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-white">Revolutionizing</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Drug Discovery
                </span>
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Accelerate pharmaceutical research with AI-powered molecular analysis, 
                predictive modeling, and breakthrough compound discovery.
              </motion.p>
            </div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "10M+", label: "Compounds Analyzed" },
                { value: "99.2%", label: "Accuracy Rate" },
                { value: "50X", label: "Faster Research" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-white border-0 px-8 group"
              >
                <Search className="w-5 h-5 mr-2" />
                Start AI Research
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Brain, text: "Neural Networks" },
                { icon: Zap, text: "Real-time Analysis" },
                { icon: Sparkles, text: "Quantum Computing" },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg border border-white/10">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right - 3D Card with Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            
            {/* Main Card */}
            <div className="relative group">
              {/* Glassmorphism Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl p-2">
                <div className="relative rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1578496480240-32d3e0c04525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMTExNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="DNA Research"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-cyan-400 text-xl">2.5K+</div>
                      <p className="text-xs text-gray-300">Active Studies</p>
                    </div>
                    <div>
                      <div className="text-purple-400 text-xl">150+</div>
                      <p className="text-xs text-gray-300">Research Teams</p>
                    </div>
                    <div>
                      <div className="text-blue-400 text-xl">24/7</div>
                      <p className="text-xs text-gray-300">AI Support</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-2xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
