import { Outlet } from "react-router-dom"
import { HeaderAutoridad } from "../components/autoridad/header"
import { SidebarAutoridad } from "../components/autoridad/sidebar"
import { FooterAutoridad } from "../components/autoridad/footer"
import { SidebarProvider } from "../components/ui/sidebar"

export default function AutoridadLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <HeaderAutoridad />
        <div className="flex flex-1">
          <SidebarAutoridad />
          <main className="flex-1 bg-slate-50">
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </main>
        </div>
        <FooterAutoridad />
      </div>
    </SidebarProvider>
  )
}

