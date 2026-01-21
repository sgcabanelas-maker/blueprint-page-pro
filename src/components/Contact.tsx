import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import iconoMundo from "@/assets/icono_mundo.png";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_d40ce8i";
const EMAILJS_TEMPLATE_CONTACT = "template_c2oehjc"; // Template for message to sergio.cabanelas@cintiaapp.com
const EMAILJS_TEMPLATE_CONFIRMATION = "template_v9zkxg4"; // Template for confirmation to user
const EMAILJS_PUBLIC_KEY = "zt47ZCTERV0m4Y0CJ";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to sergio.cabanelas@cintiaapp.com
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONTACT,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sergio.cabanelas@cintiaapp.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      // Send confirmation email to the user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONFIRMATION,
        {
          to_name: formData.name,
          to_email: formData.email,
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Mensaje enviado correctamente. ¡Revisa tu email para la confirmación!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 relative"
        >
          {/* Background icon */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <img 
              src={iconoMundo} 
              alt="Icono mundo" 
              className="w-48 h-48 md:w-[250px] md:h-[250px] object-contain opacity-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 relative z-10 px-2">Forma parte del cambio</h2>
          <p className="text-base md:text-lg text-primary max-w-3xl mx-auto relative z-10 px-2">
            Juntos podemos transformar la educación cultural
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-transparent border-primary focus:border-primary text-white placeholder:text-white/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent border-primary focus:border-primary text-white placeholder:text-white/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Mensaje</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-transparent border-primary focus:border-primary text-white placeholder:text-white/60 resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary/20 rounded-3xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="hidden md:block">
                  <h3 className="font-semibold mb-2 text-white">Email</h3>
                  <a
                    href="mailto:sergio.cabanelas@cintiaapp.com"
                    className="text-white hover:underline"
                  >
                    sergio.cabanelas@cintiaapp.com
                  </a>
                </div>
                <a
                  href="mailto:sergio.cabanelas@cintiaapp.com"
                  className="md:hidden text-white hover:underline text-center"
                >
                  sergio.cabanelas@cintiaapp.com
                </a>
              </div>
            </div>

            <div className="bg-primary/20 rounded-3xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-primary/10">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="hidden md:block">
                  <h3 className="font-semibold mb-2 text-white">Teléfono</h3>
                  <a href="tel:+34659369635" className="text-white hover:underline">
                    (+34) 659 369 635
                  </a>
                </div>
                <a href="tel:+34659369635" className="md:hidden text-white hover:underline text-center">
                  (+34) 659 369 635
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
