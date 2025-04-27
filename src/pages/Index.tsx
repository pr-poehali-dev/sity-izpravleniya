import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  GraduationCap, 
  HeartHandshake 
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <InfoCards />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Направления деятельности</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наша колония осуществляет комплексный подход к исправлению и реабилитации осужденных, 
            включая различные виды трудовой, образовательной и воспитательной деятельности.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Трудовая деятельность</h3>
            <p className="text-muted-foreground mb-4">
              Организация производственного процесса для осужденных с целью приобретения 
              профессиональных навыков и адаптации к трудовой деятельности.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/labor">Подробнее</Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Образование</h3>
            <p className="text-muted-foreground mb-4">
              Предоставление возможности получения общего и профессионального образования 
              для успешной социальной адаптации после освобождения.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/education">Подробнее</Link>
            </Button>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Реабилитация</h3>
            <p className="text-muted-foreground mb-4">
              Проведение психологической, социальной и воспитательной работы, направленной 
              на исправление и подготовку к жизни на свободе.
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/rehabilitation">Подробнее</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </Layout>
  );
};

export default Index;
