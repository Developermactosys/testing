import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Users, TrendingUp, Award } from "lucide-react";
import { Badge } from "./ui/badge";

const researchProjects = [
  {
    title: "AI-Driven Cancer Drug Discovery",
    category: "Oncology",
    description: "Leveraging machine learning to identify novel compounds for targeted cancer therapy with 85% success rate in preclinical trials.",
    image: "https://images.unsplash.com/photo-1578496480240-32d3e0c04525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMTExNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Nov 2025",
    team: "45 Researchers",
    impact: "High Impact",
    status: "Active",
  },
  {
    title: "Quantum Computing for Molecular Modeling",
    category: "Computational Chemistry",
    description: "Revolutionary approach using quantum algorithms to simulate complex molecular interactions 1000x faster than traditional methods.",
    image: "https://images.unsplash.com/photo-1612886652368-3dfdfa8c4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzYzMTA0NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Oct 2025",
    team: "32 Scientists",
    impact: "Breakthrough",
    status: "Phase 2",
  },
  {
    title: "Neural Networks for Drug Repurposing",
    category: "AI Research",
    description: "Identifying new therapeutic uses for existing drugs through deep learning analysis of molecular structures and disease pathways.",
    image: "https://images.unsplash.com/photo-1707944745900-ae9f750f2c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYzMTExNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Sep 2025",
    team: "28 Experts",
    impact: "High Impact",
    status: "Active",
  },
  {
    title: "Precision Medicine Platform",
    category: "Personalized Healthcare",
    description: "Advanced genomics and AI to create personalized treatment plans based on individual genetic profiles and biomarkers.",
    image: "https://images.unsplash.com/photo-1631651367550-a9bc35f6d200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHNjaWVudGlzdCUyMGxhYnxlbnwxfHx8fDE3NjMxMTE0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Aug 2025",
    team: "52 Professionals",
    impact: "Revolutionary",
    status: "Phase 3",
  },
];

export function ResearchSlider() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 border-0">
            <Award className="w-3 h-3 mr-1" />
            Groundbreaking Research
          </Badge>
          <h2 className="text-white mb-4">
            Active Research Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Exploring the frontiers of pharmaceutical science with cutting-edge AI and computational methods
          </p>
        </div>

        <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
          <CarouselContent className="-ml-4">
            {researchProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm border-0">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-3 border-cyan-500/50 text-cyan-400">
                        {project.category}
                      </Badge>
                      <h3 className="text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-2 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">{project.impact}</span>
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
