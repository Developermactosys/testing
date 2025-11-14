import { Badge } from "./ui/badge";
import { Building2, Award, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const partners = [
  "Stanford Medicine",
  "MIT Research Lab",
  "Johns Hopkins",
  "Mayo Clinic",
  "Harvard Medical",
  "Oxford University",
  "Cambridge Bio",
  "NIH Institute",
];

const certifications = [
  { name: "FDA Approved", icon: Shield },
  { name: "ISO 9001 Certified", icon: Award },
  { name: "GMP Compliant", icon: Building2 },
  { name: "AI Ethics Certified", icon: Sparkles },
];

export function PartnersSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Building2 className="w-3 h-3 mr-1" />
            Trusted Partnerships
          </Badge>
          <h3 className="text-gray-900 mb-8">
            Collaborating with World-Leading Institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-cyan-500 hover:shadow-lg transition-all">
                  <div className="text-center">{partner}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3 p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
