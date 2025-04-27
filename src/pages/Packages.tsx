
import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Package } from "lucide-react";

const Packages = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Передачи и посылки</h1>
          <Separator className="mb-8" />
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Правила приема посылок и передач</h2>
              <p className="text-gray-700 mb-4">
                Осужденным разрешается получать посылки, передачи и бандероли в соответствии с Правилами внутреннего распорядка 
                исправительных учреждений. Прием посылок и передач осуществляется в специально оборудованном помещении колонии.
              </p>

              <Alert className="my-6 border-amber-500 bg-amber-50">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertTitle className="text-amber-700">Важная информация</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Вес одной посылки или передачи не должен превышать 20 кг. Общий вес посылок и передач не должен превышать 
                  установленные нормы, определенные статьей 90 УИК РФ.
                </AlertDescription>
              </Alert>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">График приема посылок и передач</h2>
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Дни приема:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                      <li>Вторник - с 9:00 до 16:00</li>
                      <li>Четверг - с 9:00 до 16:00</li>
                      <li>Суббота - с 9:00 до 14:00</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Перерыв:</h3>
                    <p className="text-gray-700">с 12:00 до 13:00</p>
                    <h3 className="text-lg font-medium mt-4 mb-2">Выходные дни:</h3>
                    <p className="text-gray-700">Понедельник, среда, пятница, воскресенье</p>
                  </div>
                </div>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Разрешенные к передаче предметы</h2>
              <p className="text-gray-700 mb-6">
                В посылках, передачах и бандеролях осужденным могут быть направлены следующие предметы и вещи:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Продукты питания</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li>Консервы (мясные, рыбные, овощные)</li>
                    <li>Сухофрукты, орехи (очищенные)</li>
                    <li>Кондитерские изделия (печенье, конфеты)</li>
                    <li>Чай (в заводской упаковке)</li>
                    <li>Сахар</li>
                    <li>Минеральная вода и соки (в заводской упаковке)</li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Предметы гигиены</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li>Мыло и шампунь (в заводской упаковке)</li>
                    <li>Зубная паста, щетка</li>
                    <li>Бритвенные станки (одноразовые)</li>
                    <li>Полотенце</li>
                    <li>Туалетная бумага</li>
                  </ul>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Одежда и обувь</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li>Нательное белье</li>
                    <li>Носки, гольфы</li>
                    <li>Спортивная одежда (без капюшона)</li>
                    <li>Обувь (тапочки, кроссовки без металлических вставок)</li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Package className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Прочие предметы</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li>Письменные принадлежности</li>
                    <li>Книги, газеты, журналы</li>
                    <li>Фотографии (без металлических элементов)</li>
                    <li>Очки (по разрешению врача)</li>
                    <li>Табачные изделия (в заводской упаковке)</li>
                  </ul>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Запрещенные к передаче предметы</h2>
              <Alert className="my-4 bg-red-50 border-red-500">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                <AlertTitle className="text-red-700">Строго запрещено</AlertTitle>
                <AlertDescription className="text-red-700">
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                    <li>Алкогольные напитки и спиртосодержащие изделия</li>
                    <li>Наркотические вещества и психотропные препараты</li>
                    <li>Оружие и колющие/режущие предметы</li>
                    <li>Мобильные телефоны и электронные устройства</li>
                    <li>Деньги и ценные вещи</li>
                    <li>Документы</li>
                    <li>Продукты, требующие тепловой обработки или скоропортящиеся</li>
                    <li>Одежда неустановленного образца (камуфляж, военная форма)</li>
                  </ul>
                </AlertDescription>
              </Alert>
              <p className="text-gray-700 mt-4">
                Полный перечень запрещенных предметов установлен Правилами внутреннего распорядка исправительных учреждений.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
