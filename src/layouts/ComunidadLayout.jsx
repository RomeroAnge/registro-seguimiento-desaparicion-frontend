import { Outlet } from "react-router-dom"
import { HeaderComunidad } from "../components/comunidad/header"
import { SidebarComunidad } from "../components/comunidad/sidebar"
import { FooterComunidad } from "../components/comunidad/footer"
import { SidebarProvider } from "../components/ui/sidebar"

export default function ComunidadLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <HeaderComunidad />
        <div className="flex flex-1">
          <SidebarComunidad />
          <main className="flex-1 bg-teal-50">
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </main>
        </div>
        <FooterComunidad />
      </div>
    </SidebarProvider>
  )
}

