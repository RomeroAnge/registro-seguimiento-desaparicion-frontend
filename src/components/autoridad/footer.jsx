import { Shield, Mail, Phone, Lock, FileText, AlertTriangle } from "lucide-react"

export function FooterAutoridad() {
  return (
    <footer className="border-t border-t-blue-900/20 bg-gradient-to-b from-[#0A1929] to-[#051526] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold shadow-lg shadow-blue-500/20">
                <Shield className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">Encuentralos</h3>
                <span className="text-xs text-blue-300">SISTEMA OFICIAL</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              Sistema oficial para la gestión, seguimiento y resolución de casos de personas desaparecidas.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Dashboard
              </a>
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Casos Activos
              </a>
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Registrar Caso
              </a>
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Estadísticas
              </a>
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Base de Datos
              </a>
              <a href="#" className="group flex items-center gap-2 text-blue-200 hover:text-blue-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Configuración
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Soporte</h3>
            <address className="not-italic space-y-3 text-sm text-blue-200">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+123456789" className="hover:text-blue-300 transition-colors">
                  Línea Directa: +12 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:soporte@encuentralos.org" className="hover:text-blue-300 transition-colors">
                  soporte@encuentralos.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-blue-400" />
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Manual del Sistema
                </a>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <a href="#" className="text-red-300 hover:text-red-200 transition-colors">
                  Reportar Incidencia
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-blue-400" />
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Políticas de Seguridad
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-900/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-blue-300">
              &copy; {new Date().getFullYear()} Encuentralos - Sistema Oficial. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-blue-300">
              <a href="#" className="hover:text-blue-200 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Seguridad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

