import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Research Officer",
    company: "Global Pharma Solutions",
    content: "The AI-powered drug discovery platform has revolutionized our research process. We've reduced our compound screening time by 70% and increased success rates dramatically.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Prof. James Chen",
    role: "Head of Molecular Biology",
    company: "Stanford Medical Center",
    content: "Incredible breakthrough in computational chemistry. The quantum computing integration allows us to model molecular interactions that were previously impossible to predict.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Director of Clinical Trials",
    company: "BioTech Innovations",
    content: "The precision and speed of the AI analysis have transformed our clinical trial design. Patient outcomes have improved significantly with personalized treatment protocols.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Dr. Robert Williams",
    role: "Pharmaceutical Scientist",
    company: "NextGen Therapeutics",
    content: "This platform represents the future of pharmaceutical research. The neural network's ability to predict drug efficacy is remarkably accurate.",
    rating: 5,
    avatar: "RW",
  },
  {
    name: "Dr. Lisa Anderson",
    role: "VP of Research & Development",
    company: "MedTech Dynamics",
    content: "Outstanding innovation! The AI-driven insights have helped us identify novel therapeutic targets we would have never discovered through traditional methods.",
    rating: 5,
    avatar: "LA",
  },
];

export function TestimonialsSlider() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/20 border-blue-500/50 text-blue-300">
            <Star className="w-3 h-3 mr-1 fill-blue-300" />
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-white mb-4">
            What Researchers Say
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Hear from leading scientists and researchers who are transforming pharmaceutical discovery
          </p>
        </div>

        <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6 space-y-6">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start">
                      <Quote className="w-10 h-10 text-cyan-400/30" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <Avatar className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600">
                        <AvatarFallback className="text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-xs text-cyan-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </div>
  );
}
