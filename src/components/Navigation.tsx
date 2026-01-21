import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/Logo_Cintia.png";

// Solid LinkedIn icon component
const LinkedinSolid = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const navItems = [
  { label: "El reto", href: "#el-reto" },
  { label: "Cintia", href: "#cintia" },
  { label: "¿Cómo funciona?", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Misión y Visión", href: "#mision" },
  { label: "FAQ", href: "#faq" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string, menuWasOpen: boolean = false) => {
    // Close mobile menu if it was open
    if (menuWasOpen) {
      setIsOpen(false);
    }
    
    // Wait a brief moment for the menu to close before scrolling (especially important on mobile)
    const delay = menuWasOpen ? 200 : 50; // Longer delay if menu was open
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const isMobile = window.innerWidth < 768;
        const headerHeight = isMobile ? 70 : 20; // Account for fixed header on mobile
        const iconOffset = isMobile ? 25 : 38; // Extra space to show background icon
        
        // Get current scroll position
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get element position relative to document
        const elementTop = element.getBoundingClientRect().top + currentScroll;
        const offsetPosition = elementTop - headerHeight - iconOffset;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative values
          behavior: "smooth"
        });
      }
    }, delay);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center cursor-pointer"
          >
            <img 
              src={logoImage} 
              alt="CINTIA" 
              className="h-8 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && (
                  <div className="h-4 w-px bg-primary/30 mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://www.instagram.com/cintia.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/cintiaapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <LinkedinSolid className="w-5 h-5" />
            </a>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("#contacto", false)}
            >
              Conecta
            </Button>
          </div>

          {/* Mobile Social Icons & Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a 
              href="https://www.instagram.com/cintia.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/cintiaapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <LinkedinSolid className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href, true)}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    onClick={() => scrollToSection("#contacto", true)}
                  >
                    Conecta
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
