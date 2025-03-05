import { Users, Eye, MapPin, Calendar } from "lucide-react"

export default function ComunidadHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-teal-900">Portal Comunitario</h1>
        <button className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 transition-colors">
          Reportar Avistamiento
        </button>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-teal-900">Casos Recientes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="flex justify-between">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">Urgente</span>
                  <span className="text-sm text-gray-500">Hace 2 días</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-teal-900">Carlos Rodríguez</h3>
                <p className="mt-1 text-sm text-gray-600">Última vez visto: Centro Comercial Plaza, 15/06/2023</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-teal-600 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
                    Ver Detalles
                  </button>
                  <button className="rounded-lg border border-teal-600 px-3 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors">
                    Compartir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="rounded-lg border border-teal-600 px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors">
            Ver Todos los Casos
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-teal-900">Mapa de Casos</h2>
          </div>
          <div className="h-64 rounded-lg bg-teal-50 flex items-center justify-center">
            <p className="text-teal-600">Mapa Interactivo</p>
          </div>
          <button className="mt-4 w-full rounded-lg bg-teal-600 py-2 text-sm font-medium text-white hover:bg-teal-700 transition-colors">
            Explorar Mapa
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <Calendar className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-teal-900">Próximos Eventos</h2>
          </div>
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-teal-900">25 Junio, 2023</span>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-800">
                    Búsqueda
                  </span>
                </div>
                <h3 className="mt-1 font-medium text-gray-900">Búsqueda Comunitaria - Parque Central</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Únete a la búsqueda organizada en el Parque Central y alrededores.
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-lg border border-teal-600 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors">
            Ver Todos los Eventos
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-teal-900">Voluntariado</h2>
          </div>
          <p className="text-gray-600">
            Únete a nuestro equipo de voluntarios y ayuda en la búsqueda de personas desaparecidas.
          </p>
          <button className="mt-4 w-full rounded-lg bg-amber-500 py-2 text-sm font-medium text-white hover:bg-amber-600 transition-colors">
            Ser Voluntario
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-teal-900">Testimonios</h2>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 italic text-gray-700">
            "Gracias a la comunidad, pudimos encontrar a mi hermano después de 3 semanas. Cada compartir, cada
            avistamiento reportado fue crucial."
            <div className="mt-2 text-right text-sm font-medium text-teal-900">- Ana Martínez</div>
          </div>
          <button className="mt-4 w-full rounded-lg border border-teal-600 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors">
            Leer Más Testimonios
          </button>
        </div>
      </div>
    </div>
  )
}

