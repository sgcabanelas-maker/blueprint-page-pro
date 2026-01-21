import { useState } from "react";
import logoImage from "@/assets/Logo_Cintia.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Footer = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-background/80 backdrop-blur-lg border-t border-primary/10 py-6 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright - Left */}
            <div className="text-xs md:text-sm text-muted-foreground md:flex-1 order-2 md:order-1 text-center md:text-left px-2">
              © 2025 Cintia. Todos los derechos reservados.
            </div>
            
            {/* Logo - Center */}
            <div className="md:flex-1 flex justify-center order-1 md:order-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer"
              >
                <img 
                  src={logoImage} 
                  alt="CINTIA" 
                  className="h-8 w-auto"
                />
              </button>
            </div>
            
            {/* Legal links - Right */}
            <div className="flex items-center gap-3 text-xs md:text-sm md:flex-1 justify-center md:justify-end order-3 px-2">
              <button 
                onClick={() => setIsLegalOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Aviso legal
              </button>
              <div className="h-4 w-px bg-muted-foreground/50" />
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Notice Dialog */}
      <Dialog open={isLegalOpen} onOpenChange={setIsLegalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">AVISO LEGAL</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            <div className="space-y-6 text-sm text-foreground">
              <section>
                <h3 className="font-bold text-lg mb-2">1. Datos identificativos:</h3>
                <p className="leading-relaxed">
                  En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que la presente página web es gestionada por:
                </p>
                <p className="mt-2">
                  <strong>Sergio García Cabanelas</strong><br />
                  Barcelona, España<br />
                  Correo de contacto: sergio.cabanelas@cintiaapp.com
                </p>
                <p className="mt-2">
                  El sitio web cintiaapp.com (en adelante, "el Sitio Web") tiene carácter meramente informativo y no ofrece servicios profesionales ni transacciones económicas.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">2. Objeto del Sitio Web</h3>
                <p className="leading-relaxed">
                  El Sitio Web tiene como finalidad presentar el concepto del proyecto CINTIA, una idea en fase inicial destinada a la creación de una aplicación cultural.
                </p>
                <p className="mt-2">
                  La información mostrada no constituye una oferta comercial ni un servicio activo.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">3. Propiedad Intelectual e Industrial</h3>
                <p className="leading-relaxed">
                  Todos los contenidos (textos, imágenes, logotipos, diseño, etc.) del Sitio Web son propiedad de Sergio García Cabanelas o cuentan con autorización para su uso.
                </p>
                <p className="mt-2">
                  Queda prohibida su reproducción, distribución o modificación sin permiso expreso.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">4. Responsabilidad del Usuario:</h3>
                <p className="leading-relaxed">El usuario se compromete a:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Utilizar el Sitio Web de forma adecuada</li>
                  <li>No realizar actividades ilícitas o que puedan dañar su funcionamiento</li>
                  <li>No intentar acceder a áreas restringidas o manipular contenidos</li>
                </ul>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">5. Enlaces a terceros:</h3>
                <p className="leading-relaxed">
                  Es posible que el Sitio Web incluya enlaces a redes sociales u otros sitios externos.
                </p>
                <p className="mt-2">
                  Sergio García Cabanelas no se responsabiliza de los contenidos o políticas de dichos sitios.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">6. Limitación de responsabilidad</h3>
                <p className="leading-relaxed">
                  El Sitio Web se ofrece tal cual, sin garantías sobre disponibilidad o exactitud de la información.
                </p>
                <p className="mt-2">
                  El responsable no será considerado responsable de daños derivados del uso del Sitio Web.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">7. Legislación aplicable</h3>
                <p className="leading-relaxed">
                  Este Aviso Legal se rige por la normativa española.
                </p>
                <p className="mt-2">
                  Cualquier disputa se someterá a los tribunales de Barcelona, salvo normativa imperativa en contrario.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">POLÍTICA DE PRIVACIDAD</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            <div className="space-y-6 text-sm text-foreground">
              <section>
                <h3 className="font-bold text-lg mb-2">1. Responsable del tratamiento</h3>
                <p>
                  <strong>Responsable:</strong> Sergio García Cabanelas<br />
                  <strong>Dirección:</strong> Barcelona, España<br />
                  <strong>Correo:</strong> sergio.cabanelas@cintiaapp.com
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">2. Datos que se recopilan</h3>
                <p className="leading-relaxed">
                  En este Sitio Web únicamente recopilamos los datos que el usuario proporciona voluntariamente a través del formulario de contacto:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Nombre</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Mensaje o consulta</li>
                </ul>
                <p className="mt-2">
                  No se recopilan datos automáticamente ni se utilizan cookies de seguimiento.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">3. Finalidad del tratamiento</h3>
                <p className="leading-relaxed">Los datos personales se utilizan exclusivamente para:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Responder a las consultas enviadas por el usuario</li>
                  <li>Proporcionar información relativa al proyecto CINTIA</li>
                </ul>
                <p className="mt-2">
                  No se utilizan para envíos comerciales masivos ni se toman decisiones automatizadas.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">4. Base legal del tratamiento</h3>
                <p className="leading-relaxed">
                  La base jurídica es el consentimiento del usuario (art. 6.1.a RGPD), otorgado al enviar el formulario de contacto.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">5. Conservación de los datos</h3>
                <p className="leading-relaxed">
                  Los datos se conservarán únicamente durante el tiempo necesario para responder a la consulta.
                </p>
                <p className="mt-2">
                  Una vez finalizada la comunicación, podrán eliminarse de forma segura si no existe relación posterior.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">6. Destinatarios de los datos</h3>
                <p className="leading-relaxed">
                  No se ceden datos personales a terceros, salvo obligación legal.
                </p>
                <p className="mt-2">
                  Los datos se gestionan únicamente a través del correo electrónico del responsable.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">7. Derechos del usuario</h3>
                <p className="leading-relaxed">El usuario puede ejercer sus derechos:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Acceso (saber qué datos tenemos)</li>
                  <li>Rectificación</li>
                  <li>Supresión</li>
                  <li>Limitación</li>
                  <li>Oposición</li>
                  <li>Portabilidad</li>
                </ul>
                <p className="mt-2">
                  Escribiendo a: sergio.cabanelas@cintiaapp.com
                </p>
                <p className="mt-2">
                  El usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera vulnerados sus derechos.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">8. Seguridad de los datos</h3>
                <p className="leading-relaxed">
                  El responsable aplica medidas técnicas razonables para proteger la información enviada a través del formulario.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">9. Menores de edad</h3>
                <p className="leading-relaxed">
                  El Sitio Web no está dirigido a menores de 14 años, y no se recaban datos de menores de forma intencionada.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-lg mb-2">10. Cambios en esta Política</h3>
                <p className="leading-relaxed">
                  El responsable podrá modificar esta Política de Privacidad para adaptarla a cambios legales o funcionales del Sitio Web.
                </p>
                <p className="mt-2">
                  Las modificaciones serán publicadas en esta misma página.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};
