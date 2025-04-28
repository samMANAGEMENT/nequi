import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1D0028] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Sección de logos y apps */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo Nequi */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <img
              src="https://uploads-ssl.webflow.com/6317a229ebf7723658463b4b/64e50b03c9fda96db04be382_logo-nequi-blanco.svg"
              alt="Logo Nequi"
              className="h-8 w-auto"
            />
            <img
              src="https://uploads-ssl.webflow.com/6317a229ebf7723658463b4b/64e50f4c6011eb184c8d7d99_logo-grupo-bancolombia.svg"
              alt="Logo Grupo Bancolombia"
              className="h-8 w-auto"
            />
          </div>

          {/* Botones de descarga */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-md mx-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 w-auto"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 w-auto"
            />
            <img
              src="https://uploads-ssl.webflow.com/6317a229ebf7723658463b4b/64e50ed702047ba456edd25c_store-huawei.svg"
              alt="AppGallery"
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-500 my-6" />

        {/* Links principales */}
        <div className="grid grid-cols-1 gap-6 text-center md:text-left">
          <a href="#" className="flex justify-between items-center text-lg font-semibold hover:text-pink-400">
            Información legal <span>➔</span>
          </a>
          <a href="#" className="flex justify-between items-center text-lg font-semibold hover:text-pink-400">
            Para personas <span>➔</span>
          </a>
          <a href="#" className="flex justify-between items-center text-lg font-semibold hover:text-pink-400">
            Para tu negocio <span>➔</span>
          </a>
          <a href="#" className="flex justify-between items-center text-lg font-semibold hover:text-pink-400">
            Ayuda <span>➔</span>
          </a>
          <a href="#" className="flex justify-between items-center text-lg font-semibold hover:text-pink-400">
            Conócenos <span>➔</span>
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-500 my-6" />

        {/* Redes sociales */}
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="hover:text-pink-400">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-500 my-6" />

        {/* Legal pequeño (puedes moverlo o adaptarlo) */}
        <div className="text-center text-xs text-gray-400">
          SUPERINTENDENCIA FINANCIERA DE COLOMBIA - VIGILADO
        </div>
      </div>
    </footer>
  );
}

export default Footer;
