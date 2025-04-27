import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-navy-light py-16 md:py-24">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565960525650-1511bf56ea81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Федеральное казенное учреждение<br />
            "Исправительная колония №12 УФСИН России"
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Учреждение, обеспечивающее исполнение наказаний в виде лишения свободы и реабилитацию осужденных для их успешного возвращения в общество.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/about">О колонии</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
