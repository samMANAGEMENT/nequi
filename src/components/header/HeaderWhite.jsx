import React, { useState } from "react";

function HeaderWhite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="http://cdn.prod.website-files.com/6317a229ebf7723658463b4b/663a6b0d43303ddf38035997_logo-nequi.svg"
            alt="Nequi Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Botón hamburguesa */}
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none md:hidden"
          >
            {/* Icono de hamburguesa */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                // Ícono de cerrar
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Ícono hamburguesa
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-4">
          {/* Aquí puedes agregar links si quieres */}
        </nav>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {/* Agrega aquí los ítems del menú */}
            <a href="#" className="text-gray-700 hover:text-pink-500">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-pink-500">Servicios</a>
            <a href="#" className="text-gray-700 hover:text-pink-500">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default HeaderWhite;
