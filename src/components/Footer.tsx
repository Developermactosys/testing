import { Sparkles, Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  PharmaAI
                </span>
                <span className="text-gray-500 text-xs block -mt-1">Research Platform</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Pioneering the future of pharmaceutical research through artificial intelligence and quantum computing.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 flex items-center justify-center transition-all hover:scale-110 border border-white/10"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              {[
                "AI Drug Discovery",
                "Molecular Modeling",
                "Clinical Trials",
                "Research Database",
                "API Access",
                "Documentation",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-white mb-4">Research</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Publications",
                "Case Studies",
                "White Papers",
                "Webinars",
                "Research Teams",
                "Partnerships",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest research insights and breakthrough discoveries.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>research@pharmaai.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 PharmaAI Research Platform. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                <a key={i} href="#" className="hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
