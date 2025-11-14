import { Button } from "./ui/button";
import { Search, ShoppingCart, User, Sparkles, Menu } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                PharmaAI
              </span>
              <span className="text-gray-400 text-xs block -mt-1">Research Platform</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Research", href: "#" },
              { name: "Products", href: "#" },
              { name: "AI Tools", href: "#" },
              { name: "Publications", href: "#" },
              { name: "About", href: "#" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-300 hover:text-cyan-400 hover:bg-white/5"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-300 hover:text-cyan-400 hover:bg-white/5"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-gray-300 hover:text-cyan-400 hover:bg-white/5"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                3
              </span>
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 border-0 text-white shadow-lg">
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden text-gray-300 hover:text-cyan-400 hover:bg-white/5"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
