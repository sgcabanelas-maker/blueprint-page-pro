import { motion } from "framer-motion";
import { Download, UserPlus, Compass, Share2 } from "lucide-react";
import iconoBrujula from "@/assets/icono_brujula.png";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Descarga la app",
    description:
      "Accede a la app de CINTIA desde casa o directamente desde el museo y regístrate para disfrutar de la visita.",
  },
  {
    number: "2",
    icon: UserPlus,
    title: "Cuéntale sobre ti",
    description:
      "Responde unas breves preguntas para que así CINTIA adapte el recorrido y el contenido a tu curiosidad.",
  },
  {
    number: "3",
    icon: Compass,
    title: "Explora y aprende",
    description:
      "Interactúa con CINTIA durante tu recorrido para descubrir el museo y sus obras a tu gusto y ritmo.",
  },
  {
    number: "4",
    icon: Share2,
    title: "Vive y comparte",
    description:
      "Al terminar, CINTIA guardará tu recorrido para que puedas acceder a tu experiencia y aprendizajes cuando quieras.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
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
              src={iconoBrujula} 
              alt="Icono brujula" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative z-10 px-2">¿Cómo funciona?</h2>
          <p className="text-base md:text-lg text-primary max-w-3xl mx-auto relative z-10 px-2">
            De la curiosidad al descubrimiento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-full max-w-sm md:max-w-none"
            >
              <div className="bg-transparent border border-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-2xl bg-primary/20">
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-5xl font-bold text-primary/20">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white px-2">{step.title}</h3>
                
                {/* Horizontal blue line */}
                <div className="h-[2px] mb-3 md:mb-4" style={{ backgroundColor: '#008dff' }}></div>
                
                <p className="text-sm md:text-base text-white flex-grow leading-relaxed px-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
