import { Outlet } from "react-router-dom"
import { HeaderFamiliar } from "../components/familiar/header"
import { SidebarFamiliar } from "../components/familiar/sidebar"
import { FooterFamiliar } from "../components/familiar/footer"
import { SidebarProvider } from "../components/ui/sidebar"

export default function FamiliarLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <HeaderFamiliar />
        <div className="flex flex-1">
          <SidebarFamiliar />
          <main className="flex-1 bg-purple-50">
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </main>
        </div>
        <FooterFamiliar />
      </div>
    </SidebarProvider>
  )
}

