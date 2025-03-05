import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Contexto para el sidebar
const SidebarContext = createContext(null);

// Hook para usar el contexto del sidebar
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar debe ser usado dentro de un SidebarProvider");
  }
  return context;
}

// Proveedor del sidebar
export function SidebarProvider({ children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Función para alternar el sidebar
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile(prev => !prev) : setOpen(prev => !prev);
  }, [isMobile]);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider 
      value={{ 
        state, 
        open, 
        setOpen, 
        isMobile, 
        openMobile, 
        setOpenMobile, 
        toggleSidebar 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Componente Sidebar
export function Sidebar({ children, className = "", ...props }) {
  const { state, openMobile, setOpenMobile } = useSidebar();
  
  return (
    <div 
      className={`h-full bg-gray-900 text-white transition-all duration-300 ${state === "expanded" ? "w-64" : "w-20"} ${className}`}
      data-state={state}
      {...props}
    >
      {children}
    </div>
  );
}

// Componente para el contenido del sidebar
export function SidebarContent({ children, className = "", ...props }) {
  return (
    <div className={`overflow-y-auto h-full ${className}`} {...props}>
      {children}
    </div>
  );
}

// Componente para grupos en el sidebar
export function SidebarGroup({ children, className = "", ...props }) {
  return (
    <div className={`py-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Etiqueta para grupos en el sidebar
export function SidebarGroupLabel({ children, className = "", ...props }) {
  return (
    <h3 className={`px-4 text-xs uppercase font-semibold text-gray-400 ${className}`} {...props}>
      {children}
    </h3>
  );
}

// Contenido de grupos en el sidebar
export function SidebarGroupContent({ children, className = "", ...props }) {
  return (
    <div className={`mt-1 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Componente para el encabezado del sidebar
export function SidebarHeader({ children, className = "", ...props }) {
  return (
    <div className={`p-4 border-b border-gray-800 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Componente para el menú del sidebar
export function SidebarMenu({ children, className = "", ...props }) {
  return (
    <ul className={`space-y-1 ${className}`} {...props}>
      {children}
    </ul>
  );
}

// Componente para elementos del menú
export function SidebarMenuItem({ children, className = "", ...props }) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

// Botón para elementos del menú
export function SidebarMenuButton({ 
  children, 
  isActive = false, 
  className = "", 
  asChild = false,
  ...props 
}) {
  const { state } = useSidebar();
  const Component = asChild ? React.cloneElement(children, { ...props, className: `${className} block` }) : 'button';
  
  if (asChild) {
    return React.cloneElement(children, { 
      ...props, 
      className: `${className} block w-full text-left px-4 py-2 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`,
      'data-active': isActive
    });
  }
  
  return (
    <Component 
      className={`w-full text-left px-4 py-2 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'} ${className}`}
      data-active={isActive}
      {...props}
    >
      {children}
    </Component>
  );
}

// Componente para el rail del sidebar
export function SidebarRail({ className = "", ...props }) {
  const { toggleSidebar } = useSidebar();
  
  return (
    <button
      onClick={toggleSidebar}
      className={`absolute top-1/2 -right-3 h-6 w-6 transform -translate-y-1/2 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer ${className}`}
      {...props}
    >
      <span className="sr-only">Toggle Sidebar</span>
      <div className="h-1 w-1 rounded-full bg-gray-400"></div>
    </button>
  );
}

// Componente para el separador del sidebar
export function SidebarSeparator({ className = "", ...props }) {
  return (
    <div className={`h-px bg-gray-800 my-2 ${className}`} {...props}></div>
  );
}

// Componente para el trigger del sidebar
export function SidebarTrigger({ className = "", onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  
  return (
    <button
      className={`p-2 rounded-md hover:bg-gray-100 ${className}`}
      onClick={(e) => {
        onClick?.(e);
        toggleSidebar();
      }}
      {...props}
    >
      <span className="sr-only">Toggle Sidebar</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );
}
