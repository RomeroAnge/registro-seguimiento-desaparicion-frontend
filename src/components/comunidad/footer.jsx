import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, AlertTriangle } from "lucide-react"

export function FooterComunidad() {
  return (
    <footer className="border-t border-t-teal-800/10 bg-gradient-to-b from-teal-900 to-teal-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-600 to-teal-400 text-white font-bold shadow-lg shadow-teal-500/20">
                <span>E</span>
              </div>
              <h3 className="text-xl font-bold">Encuentralos</h3>
            </div>
            <p className="text-sm text-teal-200 mb-4">
              Juntos podemos hacer la diferencia. Cada compartir, cada mirada atenta puede ayudar a reunir familias.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700/20 text-teal-300 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700/20 text-teal-300 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700/20 text-teal-300 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Explorar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Casos Recientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Buscar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mapa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Participar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Cómo Ayudar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Compartir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Voluntariado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-teal-200 hover:text-teal-300 transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <address className="not-italic space-y-3 text-sm text-teal-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-teal-400" />
                <p>
                  Av. Principal 123
                  <br />
                  Ciudad, País
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href="tel:+123456789" className="hover:text-teal-300 transition-colors">
                  +12 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:info@encuentralos.org" className="hover:text-teal-300 transition-colors">
                  info@encuentralos.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <a href="#" className="text-amber-300 hover:text-amber-200 transition-colors">
                  Reportar Avistamiento
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-teal-800/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-teal-300">
              &copy; {new Date().getFullYear()} Encuentralos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-teal-300">
              <a href="#" className="hover:text-teal-200 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-teal-200 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-teal-200 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

