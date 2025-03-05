import { Menu, Search, User, HelpCircle } from "lucide-react"
import { Button } from "../ui/button"
import { useSidebar } from "../ui/sidebar"
import { Link} from "react-router-dom"

export function HeaderFamiliar() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-b-purple-700/20 bg-gradient-to-r from-purple-800 to-purple-600 px-4 shadow-md">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-white hover:bg-purple-700/30 hover:text-white"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold shadow-inner">
            <span className="text-lg">E</span>
          </div>
          <h1 className="text-xl font-bold text-white">Encuentralos</h1>
        </div>
      </div>

      <div className="relative mx-4 hidden flex-1 max-w-md lg:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar persona desaparecida..."
            className="h-9 w-full rounded-full border-none bg-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-white hover:bg-purple-700/30 hover:text-white">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Ayuda</span>
        </Button>

        <Link to="/familiar/reportar"> 
        <Button
          variant="ghost"
          className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
        >
          <span className="relative z-10">Reportar Desaparición</span>
          <span className="absolute inset-0 -z-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
        </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

