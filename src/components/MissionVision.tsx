import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, ChevronRight } from "lucide-react";
import { useState } from "react";
import iconoMapa from "@/assets/icono_mapa.png";

export const MissionVision = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex((prevIndex) => {
      // If clicking the same card that's open, close it. Otherwise, open the clicked card (closing any previously open one)
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section id="mision" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoMapa} 
              alt="Icono mapa" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative z-10 px-2">Misión y Visión</h2>
          <p className="text-base md:text-lg text-primary max-w-3xl mx-auto relative z-10 px-2">
            Presente y futuro de CINTIA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start justify-items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => toggleCard(0)}
            className="bg-primary/20 rounded-3xl p-6 md:p-8 lg:p-12 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 cursor-pointer hover:scale-[1.02] w-full max-w-md md:max-w-none"
          >
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-white">MISIÓN</h3>
            <p className="text-xl md:text-2xl lg:text-3xl text-center mb-3 md:mb-4 italic text-primary font-semibold px-2 leading-relaxed">
              "Acercar la cultura<br />a cada persona"
            </p>
            <div className="flex justify-center mb-6 md:mb-8">
              <ChevronRight 
                className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                  openIndex === 0 ? 'rotate-90' : ''
                }`}
              />
            </div>
            
            {/* Body text - shown only when open */}
            <div className="overflow-hidden">
              <AnimatePresence>
                {openIndex === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-sm md:text-base text-center text-white leading-relaxed pt-2 px-2">
                      CINTIA existe para hacer que la visita al museo sea más clara, accesible y personalizada. Acompañamos a cada visitante según su ritmo, sus intereses y su forma de aprender, para que conectar con el arte sea algo natural, cercano y significativo.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => toggleCard(1)}
            className="bg-primary/20 rounded-3xl p-6 md:p-8 lg:p-12 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10 cursor-pointer hover:scale-[1.02] w-full max-w-md md:max-w-none"
          >
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-2xl bg-primary/20 mx-auto">
              <Eye className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-white">VISIÓN</h3>
            <p className="text-xl md:text-2xl lg:text-3xl text-center mb-3 md:mb-4 italic text-primary font-semibold px-2 leading-relaxed">
              <span className="md:hidden">
                "Democratizar el<br />acceso mundial a<br />la cultura"
              </span>
              <span className="hidden md:inline">
                "Democratizar el acceso<br />mundial a la cultura"
              </span>
            </p>
            <div className="flex justify-center mb-6 md:mb-8">
              <ChevronRight 
                className={`w-5 h-5 text-primary transition-transform duration-200 shrink-0 ${
                  openIndex === 1 ? 'rotate-90' : ''
                }`}
              />
            </div>
            
            {/* Body text - shown only when open */}
            <div className="overflow-hidden">
              <AnimatePresence>
                {openIndex === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-sm md:text-base text-center text-white leading-relaxed pt-2 px-2">
                      Aspiramos a transformar la experiencia cultural con tecnología responsable e inteligente. Imaginamos museos y demás entidades culturales más humanas e inclusivas, capaces de ajustarse a la diversidad de sus visitantes y de ofrecer experiencias que realmente emocionen y conecten con cada persona.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
