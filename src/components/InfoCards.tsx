import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, Clock, FileText } from "lucide-react";

const InfoCards = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Расписание посещений</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Информация о днях и часах приема посетителей для свиданий с осужденными.
            </CardDescription>
            <p className="text-sm">Пн-Пт: 09:00 - 16:00</p>
            <p className="text-sm">Сб: 10:00 - 14:00</p>
            <p className="text-sm">Вс: Выходной</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Передачи и посылки</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Правила и порядок отправки передач и посылок для осужденных.
            </CardDescription>
            <p className="text-sm">Прием передач: Пн-Пт с 09:00 до 16:00</p>
            <p className="text-sm">Вес: не более 20 кг в месяц</p>
            <p className="text-sm">Требуется предварительная проверка содержимого</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Необходимые документы</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Перечень документов, необходимых для посещения осужденных.
            </CardDescription>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Паспорт или другой документ, удостоверяющий личность</li>
              <li>Заявление на посещение (заполняется на месте)</li>
              <li>Документы, подтверждающие родство (при необходимости)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoCards;
