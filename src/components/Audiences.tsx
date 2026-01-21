import { motion } from "framer-motion";
import { Sparkles, Palette, Users, Building2 } from "lucide-react";
import iconoPerfil from "@/assets/icono_perfil.png";

const audiences = [
  {
    icon: Sparkles,
    title: "Visitantes curiosos",
    description:
      "Si disfrutas de los museos pero a veces te sientes saturado, CINTIA te guía con contenido adaptado en vivo a tu curiosidad y tiempo.",
  },
  {
    icon: Palette,
    title: "Amantes del arte",
    description:
      "Si ya conoces el arte, CINTIA profundiza contigo: te descubre conexiones, detalles y perspectivas que hacen cada obra más fascinante.",
  },
  {
    icon: Users,
    title: "Familias y grupos",
    description:
      "Cada miembro puede vivir la visita a su manera o en grupo. CINTIA adapta la experiencia para niños, jóvenes y adultos, fomentando el aprendizaje.",
  },
  {
    icon: Building2,
    title: "Entidades culturales",
    description:
      "Ofrece a tu público una experiencia innovadora más viva, interactiva y memorable, mientras aprendes cómo conectan con la cultura.",
  },
];

export const Audiences = () => {
  return (
    <section id="para-quien" className="py-16 md:py-24 px-4 md:px-6">
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
              src={iconoPerfil} 
              alt="Icono perfil" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative z-10 px-2">Para quién</h2>
          <p className="text-base md:text-lg text-primary max-w-3xl mx-auto relative z-10 px-2">
            Pensada para todos los que aman descubrir
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-transparent border border-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 h-full flex flex-col w-full max-w-sm md:max-w-none"
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-2xl bg-primary/20">
                <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white px-2">{audience.title}</h3>
              
              {/* Horizontal blue line */}
              <div className="h-[2px] mb-3 md:mb-4" style={{ backgroundColor: '#008dff' }}></div>
              
              <p className="text-sm md:text-base text-white leading-relaxed flex-grow px-2">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
