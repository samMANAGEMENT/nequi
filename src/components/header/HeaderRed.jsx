import React from "react";

function HeaderRed() {
  return (
    <>
          {/* Segunda franja roja */}
          <div className="bg-[#B52217] px-4 sm:px-8 h-[60px] flex items-center justify-between">
        {/* Izquierda: Menú y logo */}
        <div className="flex items-center space-x-4">
          {/* Icono menú */}
          <div className="text-white text-3xl font-light cursor-pointer">
            &#9776;
          </div>

          {/* Logo */}
          <div className="text-whiteleading-none flex items-center">
            <img src="/assets/logo-claro-blanco.png" alt="" className="w-auto h-auto" />
          </div>
        </div>

        {/* Derecha: lupa y botón */}
        <div className="flex items-center space-x-4">
          {/* Icono lupa */}
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 17.65A7.5 7.5 0 1117.65 16.65z" />
          </svg>

          {/* Botón Mi Claro */}
          <button className="bg-[#a72e20] hover:bg-[#902617] text-white font-bold py-1.5 px-5 rounded-full">
            Mi Claro
          </button>
        </div>
      </div>
      </>
  );
}

export default HeaderRed;
