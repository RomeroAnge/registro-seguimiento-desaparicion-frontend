import React from "react"
import Logo from "../assets/CARCANCHO.png"
import { Link } from "react-router-dom";
const  Navbar = () =>{
return (
    <div>
        <nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-12 w-full" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Abrir menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to = "/formulario">Reportar Caso</Link>
        </li>
        <li>
          <Link to = "/lista">Lista Casos</Link>
        </li>
        <li>
          <Link to = "/ia">IA</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
);
}
export default Navbar;