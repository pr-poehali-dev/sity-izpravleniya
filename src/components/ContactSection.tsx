import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Контактная информация</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с администрацией колонии для получения дополнительной информации или консультации по интересующим вопросам.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-muted-foreground">г. Красноярск, ул. Лесная, 47</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-muted-foreground">+7 (800) 123-45-67 (приемная)</p>
                    <p className="text-muted-foreground">+7 (800) 765-43-21 (дежурная часть)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Электронная почта</h3>
                    <p className="text-muted-foreground">info@ik12.fsin.gov.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 09:00 - 18:00</p>
                    <p className="text-muted-foreground">Обед: 13:00 - 14:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходные</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Связаться с нами</Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="h-80 md:h-auto rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185055.31791781985!2d92.7241678516601!3d56.00599057354876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7afc9aaaaaaab%3A0x7b7a72bd10ec4a45!2z0JrRgNCw0YHQvdC-0Y_RgNGB0Lo!5e0!3m2!1sru!2sru!4v1651061815889!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
