import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AISearchBar } from "./components/AISearchBar";
import { ResearchSlider } from "./components/ResearchSlider";
import { ProductCarousel } from "./components/ProductCarousel";
import { AIFeatures } from "./components/AIFeatures";
import { TestimonialsSlider } from "./components/TestimonialsSlider";
import { PartnersSection } from "./components/PartnersSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <AISearchBar />
      <ResearchSlider />
      <ProductCarousel />
      <AIFeatures />
      <TestimonialsSlider />
      <PartnersSection />
      <Footer />
    </div>
  );
}
