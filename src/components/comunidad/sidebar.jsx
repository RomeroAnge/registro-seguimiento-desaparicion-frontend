"use client"

import { useState } from "react"
import { Home, Search, MapPin, Bell, Share2, Users, Info, HelpCircle, Eye, Calendar } from "lucide-react"
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

export function SidebarComunidad() {
  const [activeItem, setActiveItem] = useState("Inicio")

  // Datos de navegación
  const menuItems = [
    {
      title: "Inicio",
      icon: Home,
      url: "#",
    },
    {
      title: "Casos Recientes",
      icon: Bell,
      url: "#",
      badge: 8,
    },
    {
      title: "Buscar",
      icon: Search,
      url: "#",
    },
    {
      title: "Mapa",
      icon: MapPin,
      url: "#",
    },
    {
      title: "Eventos",
      icon: Calendar,
      url: "#",
    },
  ]

  const helpItems = [
    {
      title: "Cómo Ayudar",
      icon: Info,
      url: "#",
    },
    {
      title: "Compartir",
      icon: Share2,
      url: "#",
    },
    {
      title: "Voluntariado",
      icon: Users,
      url: "#",
    },
    {
      title: "Testimonios",
      icon: Eye,
      url: "#",
    },
    {
      title: "Ayuda",
      icon: HelpCircle,
      url: "#",
    },
  ]

  return (
    <SidebarComponent className="border-r border-r-gray-800/10 bg-gradient-to-b from-teal-900 to-teal-800">
      <SidebarHeader className="border-b border-teal-800/20 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-400 text-white font-bold shadow-lg shadow-teal-500/20">
            <span className="text-lg">E</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">Encuentralos</span>
            <span className="text-xs text-teal-200">Portal Comunitario</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Explorar
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-teal-100 transition-all duration-200 hover:bg-teal-700/30 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-teal-600 data-[active=true]:to-teal-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-800/50 text-teal-300 group-hover:bg-teal-600/20 group-hover:text-teal-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-medium text-white">
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

        <div className="my-4 h-px bg-gradient-to-r from-transparent via-teal-600/20 to-transparent"></div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-300 px-3 uppercase text-xs font-semibold tracking-wider">
            Participar
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {helpItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem === item.title}
                    className="group my-1 rounded-xl text-teal-100 transition-all duration-200 hover:bg-teal-700/30 hover:text-white data-[active=true]:bg-gradient-to-r data-[active=true]:from-teal-600 data-[active=true]:to-teal-500 data-[active=true]:text-white data-[active=true]:shadow-md"
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-800/50 text-teal-300 group-hover:bg-teal-600/20 group-hover:text-teal-200 group-data-[active=true]:bg-white/10 group-data-[active=true]:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-medium text-white">
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
        <div className="rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-500/10 p-4">
          <h4 className="font-medium text-white">¿Has visto a alguien?</h4>
          <p className="mt-1 text-sm text-teal-100">
            Tu información puede ser crucial para encontrar a una persona desaparecida.
          </p>
          <button className="mt-3 w-full rounded-lg bg-amber-500 py-2 text-sm font-medium text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-colors">
            Reportar Avistamiento
          </button>
        </div>
      </div>

      <SidebarRail />
    </SidebarComponent>
  )
}

