"use client"

import { useState } from "react"
import { Home, FileText, AlertCircle, Phone, HelpCircle, Search, Heart, Clock, Bell } from "lucide-react"
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

export function SidebarFamiliar() {
  const [activeItem, setActiveItem] = useState("Inicio")

  // Datos de navegación
  const menuItems = [
    {
      title: "Inicio",
      icon: Home,
      url: "#",
    },
    {
      title: "Reportar Desaparición",
      icon: AlertCircle,
      url: "#",
    },
    {
      title: "Mis Reportes",
      icon: FileText,
      url: "#",
      badge: 2,
    },
    {
      title: "Búsqueda",
      icon: Search,
      url: "#",
    },
    {
      title: "Actualizaciones",
      icon: Bell,
      url: "#",
      badge: 3,
    },
  ]

  const resourcesItems = [
    {
      title: "Líneas de Ayuda",
      icon: Phone,
      url: "#",
    },
    {
      title: "Apoyo Emocional",
      icon: Heart,
      url: "#",
    },
    {
      title: "Historial",
      icon: Clock,
      url: "#",
    },
    {
      title: "Ayuda",
      icon: HelpCircle,
      url: "#",
    },
  ]

  return (
    <SidebarComponent className="border-r border-r-gray-800/10 bg-gradient-to-b from-purple-900 to-purple-800">
      <SidebarHeader className="border-b border-purple-800/20 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 text-white font-bold shadow-lg shadow-purple-500/20">
            <span className="text-lg">E</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Encuentralos</span>
            <span className="text-xs text-purple-200">Portal Familiar</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-purple-100 transition-all duration-200 hover:bg-purple-700/30 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-purple-600 data-[active=true]:to-purple-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-800/50 text-purple-300 group-hover:bg-purple-600/20 group-hover:text-purple-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
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

        <div className="my-4 h-px bg-gradient-to-r from-transparent via-purple-600/20 to-transparent"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Recursos
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourcesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-purple-100 transition-all duration-200 hover:bg-purple-700/30 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-purple-600 data-[active=true]:to-purple-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-800/50 text-purple-300 group-hover:bg-purple-600/20 group-hover:text-purple-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
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
      </SidebarContent>

      <div className="mt-auto p-4">
        <div className="rounded-xl bg-gradient-to-r from-red-500/20 to-red-500/10 p-4">
          <h4 className="font-medium text-white">¿Emergencia?</h4>
          <p className="mt-1 text-sm text-purple-100">Contacta directamente con las autoridades para casos urgentes.</p>
          <button className="mt-3 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white shadow-lg shadow-red-500/20 hover:bg-red-600 transition-colors">
            Línea de Emergencia
          </button>
        </div>
      </div>

      <SidebarRail />
    </SidebarComponent>
  )
}

