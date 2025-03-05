import { BarChart2, Users, AlertTriangle, Clock, CheckCircle, FileText } from "lucide-react"

export default function AutoridadHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>
        <div className="flex gap-3">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
            + Nuevo Caso
          </button>
          <button className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 transition-colors">
            Generar Reporte
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">Casos Activos</h2>
          </div>
          <p className="text-3xl font-bold text-blue-900">28</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-red-600">+5 esta semana</span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">Resueltos</h2>
          </div>
          <p className="text-3xl font-bold text-blue-900">143</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-600">+12 este mes</span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">Pendientes</h2>
          </div>
          <p className="text-3xl font-bold text-blue-900">15</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-amber-600">3 requieren atención</span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-blue-900">Personal</h2>
          </div>
          <p className="text-3xl font-bold text-blue-900">42</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-blue-600">8 en campo</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-blue-900">Estadísticas Mensuales</h2>
              </div>
              <select className="rounded-md border-gray-300 text-sm">
                <option>Últimos 30 días</option>
                <option>Últimos 90 días</option>
                <option>Este año</option>
              </select>
            </div>
            <div className="h-64 rounded-lg bg-blue-50 flex items-center justify-center">
              <p className="text-blue-600">Gráfico de Estadísticas</p>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-blue-900">Tareas Pendientes</h2>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Revisar expediente #12345</p>
                    <p className="text-sm text-gray-600">Vence: 25/06/2023</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Alta</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              Ver Todas las Tareas
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-blue-900">Casos Prioritarios</h2>
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full text-left">
            <thead className="bg-blue-50 text-sm uppercase text-blue-900">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3">Ubicación</th>
                <th className="px-6 py-3">Estado</th>
                <th className="px-6 py-3">Asignado a</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="bg-white hover:bg-blue-50">
                  <td className="px-6 py-4 font-medium">#12345</td>
                  <td className="px-6 py-4">Juan Pérez</td>
                  <td className="px-6 py-4">15/03/2023</td>
                  <td className="px-6 py-4">Centro Comercial Plaza</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">Urgente</span>
                  </td>
                  <td className="px-6 py-4">Oficial Ramírez</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-900">Ver Detalles</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

