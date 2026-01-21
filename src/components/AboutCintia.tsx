import { motion } from "framer-motion";
import phonesImage from "@/assets/phones-cintia.png";
import iconoCintia from "@/assets/icono_cintia.png";

export const AboutCintia = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header section - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoCintia} 
              alt="Icono Cintia" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative z-10 px-2">Cintia</h2>
          <p className="text-lg md:text-xl text-primary max-w-2xl mx-auto relative z-10 px-2">
            Una nueva forma de vivir la cultura
          </p>
        </motion.div>

        {/* Content section with container and phones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative">
            {/* Left side - Text container */}
            <div className="lg:pr-[50%]">
              <div className="bg-primary/20 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-visible">
                <div className="text-center md:text-left space-y-4 md:space-y-6">
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    <span className="font-bold">CINTIA</span> es tu compañera cultural digital que transforma cada visita al museo en una experiencia única y personal.
                  </p>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    Se adapta a tus intereses, a tu ritmo y a tu forma de aprender, ajustando las explicaciones para que el arte conecte contigo de verdad.
                    Puedes escucharla, hablar con ella o preguntarle lo que quieras mientras recorres el espacio.
                  </p>
                  <p className="text-sm md:text-base text-white leading-relaxed">
                    CINTIA te guía, te acompaña y convierte cada visita en una experiencia cercana, significativa y memorable.
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                  <button 
                    onClick={() => {
                      const section = document.getElementById("como-funciona");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 hover:shadow-glow transition-all duration-300 text-sm md:text-base"
                  >
                    Cómo funciona
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Phones visual (coming out of container) */}
            <div className="mt-6 md:mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:z-20">
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src={phonesImage}
                  alt="CINTIA app on phones"
                  className="w-full max-w-[280px] md:max-w-[403px] lg:max-w-[540px] lg:w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
