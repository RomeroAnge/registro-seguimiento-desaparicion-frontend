import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

// Layouts
import FamiliarLayout from "./layouts/FamiliarLayout"
import ComunidadLayout from "./layouts/ComunidadLayout"
import AutoridadLayout from "./layouts/AutoridadLayout"

// Páginas para Familiar
import FamiliarHome from "./pages/familiar/Home"

// Páginas para Comunidad
import ComunidadHome from "./pages/comunidad/Home"

// Páginas para Autoridad
import AutoridadHome from "./pages/autoridad/Home"

// Página de selección de rol
import RoleSelection from "./pages/RoleSelection"
import ReportarDesaparecido from "./pages/familiar/ReportarDesaparición"
import PersonForm from "./pages/autoridad/FormPerson"

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de selección de rol */}
        <Route path="/" element={<RoleSelection />} />
        

        {/* Rutas para Familiar */}
        <Route path="/familiar" element={<FamiliarLayout />}>
          <Route index element={<FamiliarHome />} />

          <Route path="reportar" element={<ReportarDesaparecido />}>
          </Route>

          <Route path="*" element={<Navigate to="/familiar" replace />} />
        </Route>

        {/* Rutas para Comunidad */}
        <Route path="/comunidad" element={<ComunidadLayout />}>
          <Route index element={<ComunidadHome />} />
          {/* Aquí puedes agregar más rutas para la comunidad */}
          <Route path="*" element={<Navigate to="/comunidad" replace />} />
        </Route>

        {/* Rutas para Autoridad */}
        <Route path="/autoridad" element={<AutoridadLayout />}>
          <Route index element={<AutoridadHome />} />
          {/* Aquí puedes agregar más rutas para la autoridad */}
          <Route path="edit/:id" element={<PersonForm />}>
          </Route>
          <Route path="*" element={<Navigate to="/autoridad" replace />} />
        </Route>

        {/* Ruta de fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

