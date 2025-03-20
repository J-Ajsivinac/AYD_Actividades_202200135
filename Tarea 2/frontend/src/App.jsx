import React, { useState } from 'react';
import './index.css';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  
  // Datos predefinidos del estudiante
  const datosEstudiante = {
    nombre: "Joab Israel Ajsivinac Ajsivinac",
    carnet: "202200135",
    curso: "ANALISIS Y DISEÑO DE SISTEMAS 1"
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6 space-y-8 relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Información del Estudiante</h1>
          <p className="text-gray-400 mt-2">Presiona el botón para mostrar tus datos</p>
        </div>
                
        <button
          onClick={toggleInfo}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {showInfo ? "Ocultar Datos" : "Mostrar Datos"}
        </button>

        {/* Modal/Panel con información - aparece con animación */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            showInfo 
              ? "opacity-100 max-h-96 scale-100" 
              : "opacity-0 max-h-0 scale-95 overflow-hidden"
          }`}
        >
          <div className="p-5 bg-gray-700 rounded-lg shadow-inner mt-4 transform transition-all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Datos del Estudiante</h2>
              <span className="px-2 py-1 bg-blue-600 text-xs text-white rounded-md animate-pulse">
                USAC
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <p className="text-sm text-gray-400">Nombre</p>
                <p className="text-lg text-white">{datosEstudiante.nombre}</p>
              </div>
              
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <p className="text-sm text-gray-400">Carnet</p>
                <p className="text-lg text-white">{datosEstudiante.carnet}</p>
              </div>
              
              <div className="transform transition-all duration-300 hover:translate-x-2">
                <p className="text-sm text-gray-400">Curso</p>
                <p className="text-lg text-white">{datosEstudiante.curso}</p>
              </div>
            </div>
            
            {/* Decoración visual */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800 mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;