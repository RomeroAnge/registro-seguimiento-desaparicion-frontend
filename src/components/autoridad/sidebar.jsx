"use client"

import { useState } from "react"
import {
  Home,
  FileText,
  Users,
  Database,
  BarChart2,
  Settings,
  Shield,
  AlertTriangle,
  Search,
  MapPin,
  Clock,
  Calendar,
  CheckSquare,
  Lock,
} from "lucide-react"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar"

export function SidebarAutoridad() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  // Datos de navegación
  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "#",
    },
    {
      title: "Casos Activos",
      icon: AlertTriangle,
      url: "#",
      badge: 28,
    },
    {
      title: "Registrar Caso",
      icon: FileText,
      url: "#",
    },
    {
      title: "Búsqueda Avanzada",
      icon: Search,
      url: "#",
    },
    {
      title: "Mapa de Incidencias",
      icon: MapPin,
      url: "#",
    },
  ]

  const managementItems = [
    {
      title: "Base de Datos",
      icon: Database,
      url: "#",
    },
    {
      title: "Estadísticas",
      icon: BarChart2,
      url: "#",
    },
    {
      title: "Calendario",
      icon: Calendar,
      url: "#",
    },
    {
      title: "Historial",
      icon: Clock,
      url: "#",
    },
    {
      title: "Tareas",
      icon: CheckSquare,
      url: "#",
      badge: 5,
    },
  ]

  const adminItems = [
    {
      title: "Usuarios",
      icon: Users,
      url: "#",
    },
    {
      title: "Configuración",
      icon: Settings,
      url: "#",
    },
    {
      title: "Seguridad",
      icon: Lock,
      url: "#",
    },
  ]

  return (
    <SidebarComponent className="border-r border-r-gray-800/10 bg-gradient-to-b from-[#0A1929] to-[#0F2942]">
      <SidebarHeader className="border-b border-blue-900/20 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold shadow-lg shadow-blue-500/20">
            <Shield className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Encuentralos</span>
            <span className="text-xs text-blue-300">Sistema de Gestión</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Operaciones
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-blue-100 transition-all duration-200 hover:bg-blue-700/20 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-blue-600 data-[active=true]:to-blue-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50 text-blue-300 group-hover:bg-blue-600/20 group-hover:text-blue-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="my-4 h-px bg-gradient-to-r from-transparent via-blue-700/20 to-transparent"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Gestión
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-blue-100 transition-all duration-200 hover:bg-blue-700/20 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-blue-600 data-[active=true]:to-blue-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50 text-blue-300 group-hover:bg-blue-600/20 group-hover:text-blue-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-500 px-1.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="my-4 h-px bg-gradient-to-r from-transparent via-blue-700/20 to-transparent"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Administración
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-blue-100 transition-all duration-200 hover:bg-blue-700/20 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-blue-600 data-[active=true]:to-blue-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50 text-blue-300 group-hover:bg-blue-600/20 group-hover:text-blue-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4">
        <div className="rounded-xl bg-gradient-to-r from-red-500/10 via-blue-500/10 to-blue-500/5 p-4 border border-blue-800/30">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <h4 className="font-medium text-white">Alerta de Sistema</h4>
          </div>
          <p className="mt-1 text-sm text-blue-100">Hay 3 casos de alta prioridad que requieren atención inmediata.</p>
          <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors">
            Ver Casos Prioritarios
          </button>
        </div>
      </div>

      <SidebarRail />
    </SidebarComponent>
  )
}

