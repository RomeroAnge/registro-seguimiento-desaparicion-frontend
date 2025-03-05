import { AlertTriangle, Clock, CheckCircle } from "lucide-react"

export default function FamiliarHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-purple-900">Bienvenido/a</h1>
        <button className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition-colors">
          + Nuevo Reporte
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-purple-900">Mis Reportes</h2>
          </div>
          <p className="text-3xl font-bold text-purple-900">2</p>
          <p className="mt-2 text-sm text-gray-600">Casos activos en seguimiento</p>
          <button className="mt-4 w-full rounded-lg border border-purple-600 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 transition-colors">
            Ver Reportes
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-purple-900">Actualizaciones</h2>
          </div>
          <p className="text-3xl font-bold text-purple-900">5</p>
          <p className="mt-2 text-sm text-gray-600">Nuevas actualizaciones esta semana</p>
          <button className="mt-4 w-full rounded-lg border border-purple-600 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 transition-colors">
            Ver Actualizaciones
          </button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-purple-900">Recursos</h2>
          </div>
          <p className="text-3xl font-bold text-purple-900">12</p>
          <p className="mt-2 text-sm text-gray-600">Recursos de apoyo disponibles</p>
          <button className="mt-4 w-full rounded-lg border border-purple-600 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 transition-colors">
            Explorar Recursos
          </button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-purple-900">Mis Casos Recientes</h2>
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full text-left">
            <thead className="bg-purple-50 text-sm uppercase text-purple-900">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3">Estado</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              <tr className="bg-white hover:bg-purple-50">
                <td className="px-6 py-4 font-medium">#12345</td>
                <td className="px-6 py-4">Juan Pérez</td>
                <td className="px-6 py-4">15/03/2023</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    En Proceso
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-purple-600 hover:text-purple-900">Ver Detalles</button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-purple-50">
                <td className="px-6 py-4 font-medium">#12346</td>
                <td className="px-6 py-4">María González</td>
                <td className="px-6 py-4">22/04/2023</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Actualizado
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-purple-600 hover:text-purple-900">Ver Detalles</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white shadow-lg">
        <h2 className="mb-2 text-xl font-semibold">Línea de Ayuda 24/7</h2>
        <p className="mb-4">Estamos aquí para apoyarte en todo momento. No dudes en contactarnos.</p>
        <div className="flex gap-4">
          <button className="rounded-lg bg-white px-4 py-2 font-medium text-purple-600 hover:bg-purple-50 transition-colors">
            Llamar Ahora
          </button>
          <button className="rounded-lg border border-white px-4 py-2 font-medium text-white hover:bg-purple-700 transition-colors">
            Chat de Apoyo
          </button>
        </div>
      </div>
    </div>
  )
}

