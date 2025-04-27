import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ИК-12</h3>
            <p className="text-sm text-gray-300">
              Федеральное казенное учреждение "Исправительная колония №12 УФСИН России"
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">О колонии</Link></li>
              <li><Link to="/rules" className="text-sm text-gray-300 hover:text-white">Правила</Link></li>
              <li><Link to="/administration" className="text-sm text-gray-300 hover:text-white">Администрация</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">Услуги</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Для посетителей</h3>
            <ul className="space-y-2">
              <li><Link to="/visits" className="text-sm text-gray-300 hover:text-white">Свидания</Link></li>
              <li><Link to="/packages" className="text-sm text-gray-300 hover:text-white">Передачи</Link></li>
              <li><Link to="/schedule" className="text-sm text-gray-300 hover:text-white">Расписание</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>Адрес: г. Красноярск, ул. Лесная, 47</p>
              <p>Телефон: +7 (800) 123-45-67</p>
              <p>Email: info@ik12.fsin.gov.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
          <p>© {currentYear} ФКУ ИК-12 УФСИН России. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
