import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground w-full">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-bold text-xl text-white">ИК-12</Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-secondary-foreground/10")}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-secondary-foreground/10">
                Информация
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem 
                    href="/about"
                    title="О колонии"
                  >
                    История и общая информация об исправительном учреждении
                  </ListItem>
                  <ListItem 
                    href="/rules"
                    title="Правила"
                  >
                    Правила внутреннего распорядка и режим содержания
                  </ListItem>
                  <ListItem 
                    href="/administration"
                    title="Администрация"
                  >
                    Руководство исправительного учреждения
                  </ListItem>
                  <ListItem 
                    href="/services"
                    title="Услуги"
                  >
                    Медицинская помощь, психологическая поддержка и другие услуги
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-secondary-foreground/10">
                Для посетителей
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem 
                    href="/visits"
                    title="Свидания"
                  >
                    Порядок организации и проведения свиданий
                  </ListItem>
                  <ListItem 
                    href="/packages"
                    title="Передачи"
                  >
                    Правила передачи посылок и разрешенные предметы
                  </ListItem>
                  <ListItem 
                    href="/schedule"
                    title="Расписание"
                  >
                    График работы для посетителей
                  </ListItem>
                  <ListItem 
                    href="/contacts"
                    title="Контакты"
                  >
                    Адрес, телефоны и другая контактная информация
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/rehabilitation" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-secondary-foreground/10")}>
                Реабилитация
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-secondary-foreground/10")}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
