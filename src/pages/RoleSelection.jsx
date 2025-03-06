import { Link } from "react-router-dom"
import { Users, Shield, Heart } from "lucide-react"
import Boton from "../components/inteligencia/Boton"

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Encuentralos</h1>
          <p className="text-lg text-gray-600">Sistema de gestión para personas desaparecidas</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/familiar" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-purple-600">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-purple-900">Familiar</h2>
              <p className="text-gray-600 mb-6">Reporta y da seguimiento a casos de personas desaparecidas.</p>
              <button className="w-full rounded-lg bg-purple-600 py-3 text-white font-medium hover:bg-purple-700 transition-colors">
                Ingresar como Familiar
              </button>
            </div>
          </Link>

          <Link to="/comunidad" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-teal-600">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-teal-900">Comunidad</h2>
              <p className="text-gray-600 mb-6">
                Ayuda a difundir y colaborar en la búsqueda de personas desaparecidas.
              </p>
              <button className="w-full rounded-lg bg-teal-600 py-3 text-white font-medium hover:bg-teal-700 transition-colors">
                Ingresar como Comunidad
              </button>
            </div>
          </Link>

          <Link to="/autoridad" className="block">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-blue-900">Autoridad</h2>
              <p className="text-gray-600 mb-6">Gestiona y da seguimiento oficial a casos de personas desaparecidas.</p>
              <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                Ingresar como Autoridad
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Encuentralos. Todos los derechos reservados.</p>
        </div>
        <div className="justify-end flex mt-4">
          <Boton/>
        </div>
      </div>
    </div>
  )
}

