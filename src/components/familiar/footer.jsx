import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"

export function FooterFamiliar() {
  return (
    <footer className="border-t border-t-purple-800/10 bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-purple-400 text-white font-bold shadow-lg shadow-purple-500/20">
                <span>E</span>
              </div>
              <h3 className="text-xl font-bold">Encuentralos</h3>
            </div>
            <p className="text-sm text-purple-200 mb-4">
              Trabajamos incansablemente para ayudar a las familias a encontrar a sus seres queridos desaparecidos.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700/20 text-purple-300 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700/20 text-purple-300 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700/20 text-purple-300 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Reportar Desaparición
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mis Reportes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Búsqueda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Líneas de Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Apoyo Emocional
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-purple-200 hover:text-purple-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Guía para Familiares
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <address className="not-italic space-y-3 text-sm text-purple-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-purple-400" />
                <p>
                  Av. Principal 123
                  <br />
                  Ciudad, País
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <a href="tel:+123456789" className="hover:text-purple-300 transition-colors">
                  +12 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:ayuda@encuentralos.org" className="hover:text-purple-300 transition-colors">
                  ayuda@encuentralos.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-purple-400" />
                <span>Línea de Apoyo 24/7</span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-purple-800/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-purple-300">
              &copy; {new Date().getFullYear()} Encuentralos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-purple-300">
              <a href="#" className="hover:text-purple-200 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

