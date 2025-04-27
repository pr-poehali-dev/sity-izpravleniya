
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-penal-DEFAULT border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-white" />
            <div>
              <span className="text-white font-bold text-lg block leading-tight">ФКУ ИК-1</span>
              <span className="text-gray-300 text-xs block">ФСИН России</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/about">О колонии</NavLink>
            <NavLink to="/packages">Передачи</NavLink>
            <NavLink to="/download">Скачать сайт</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-penal-light"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-penal-DEFAULT pb-4 px-4">
          <Separator className="bg-gray-700 my-2" />
          <div className="flex flex-col space-y-2">
            <MobileNavLink to="/" onClick={toggleMenu}>Главная</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>О колонии</MobileNavLink>
            <MobileNavLink to="/packages" onClick={toggleMenu}>Передачи</MobileNavLink>
            <MobileNavLink to="/download" onClick={toggleMenu}>Скачать сайт</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link
    to={to}
    className="px-3 py-2 text-gray-200 hover:bg-penal-light rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, onClick, children }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="px-3 py-3 text-gray-200 hover:bg-penal-light rounded-md text-base font-medium block w-full"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
