
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Download, FileZip, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DownloadPage = () => {
  // Функция для эмуляции скачивания архива
  const handleDownload = () => {
    // В реальном проекте здесь был бы запрос на скачивание архива
    alert("Скачивание начнется автоматически через несколько секунд");
    
    // В реальном проекте здесь был бы код для скачивания файла
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/download/correctional-facility-website.zip"; // Путь к архиву
      link.download = "correctional-facility-website.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container py-10 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Скачать исходный код сайта</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileZip className="h-5 w-5" />
                Полный архив проекта
              </CardTitle>
              <CardDescription>
                Архив содержит полный исходный код сайта со всеми зависимостями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Все исходные файлы React компонентов</li>
                <li>Настройки Tailwind CSS и Vite</li>
                <li>Файлы конфигурации проекта</li>
                <li>Все необходимые ресурсы и изображения</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button onClick={handleDownload} className="w-full">
                <Download className="mr-2 h-4 w-4" /> Скачать архив (ZIP)
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Инструкция по установке
              </CardTitle>
              <CardDescription>
                Как развернуть проект на вашем компьютере
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">1. Распакуйте архив</h3>
                <p className="text-sm text-muted-foreground">
                  Распакуйте скачанный ZIP-файл в удобное место на вашем компьютере
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">2. Установите зависимости</h3>
                <div className="bg-penal-dark p-2 rounded text-xs text-white font-mono">
                  npm install
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">3. Запустите проект</h3>
                <div className="bg-penal-dark p-2 rounded text-xs text-white font-mono">
                  npm run dev
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Для запуска требуется Node.js версии 16 или выше
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <Separator className="my-8" />
        
        <div className="bg-muted p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Дополнительная информация</h2>
          <p className="text-muted-foreground mb-4">
            Данный сайт разработан с использованием следующих технологий:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <p className="font-medium">React 18</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <p className="font-medium">TypeScript</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <p className="font-medium">Tailwind CSS</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm text-center">
              <p className="font-medium">Vite</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;
