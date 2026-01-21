import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-museum.jpg";

export const Hero = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 20; // Approximate header height
      const iconOffset = window.innerWidth >= 768 ? 38 : 25; // Extra space to show background icon
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - iconOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToNext = () => {
    scrollToSection("el-reto");
  };

  const scrollToCintia = () => {
    scrollToSection("cintia");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:py-24 md:px-6">
      <div className="container mx-auto w-full max-w-7xl">
        {/* Container with rounded corners for the main visual */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          {/* Background image without gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />

          {/* Content overlay */}
          <div className="relative z-10 min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center text-center px-4 py-12 md:px-6 md:py-24">
            {/* Main content - centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white px-2">
                <span className="block md:inline">Cultura</span>{" "}
                <span className="font-handwriting text-primary block md:inline">a medida</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-white max-w-2xl mx-auto px-2 leading-relaxed">
                Una nueva forma de vivir la cultura
              </p>
              <div className="flex justify-center px-2">
                <Button variant="hero" size="lg" className="text-base md:text-lg" onClick={scrollToCintia}>
                  Descubre CINTIA
                </Button>
              </div>
            </motion.div>

            {/* Scroll indicator - positioned at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <motion.button
                onClick={scrollToNext}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-white hover:text-primary transition-colors"
              >
                <ChevronDown className="w-12 h-12" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
