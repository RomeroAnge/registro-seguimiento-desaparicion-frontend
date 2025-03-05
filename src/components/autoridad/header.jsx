import { Menu, Bell, Search, User, Shield, FileText, BarChart2 } from "lucide-react"
import { Button } from "../ui/button"
import { useSidebar } from "../ui/sidebar"

export function HeaderAutoridad() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-b-blue-700/20 bg-gradient-to-r from-blue-900 to-blue-800 px-4 shadow-md">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-white hover:bg-blue-700/30 hover:text-white"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold shadow-inner">
            <Shield className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white">Encuentralos</h1>
            <span className="text-[10px] text-blue-200">SISTEMA OFICIAL</span>
          </div>
        </div>
      </div>

      <div className="relative mx-4 hidden flex-1 max-w-md lg:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar casos, expedientes, personas..."
            className="h-9 w-full rounded-full border-none bg-white/10 pl-10 pr-4 text-sm text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700/30 hover:text-white relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            12
          </span>
        </Button>

        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700/30 hover:text-white">
          <FileText className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700/30 hover:text-white">
          <BarChart2 className="h-5 w-5" />
        </Button>

        <div className="hidden md:flex items-center gap-2 pl-2 border-l border-blue-700/30">
          <div className="h-8 w-8 rounded-full bg-blue-700/30 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">Oficial García</span>
            <span className="text-xs text-blue-200">Administrador</span>
          </div>
        </div>
      </div>
    </header>
  )
}

