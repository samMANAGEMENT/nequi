import { useState } from 'react';
import { CheckCircle, DollarSign, Clipboard, Edit3 } from 'lucide-react';

const steps = [
  { icon: <Clipboard />, label: 'Selecciona tu servicio' },
  { icon: <Edit3 />, label: '' },
  { icon: <DollarSign />, label: '' },
  { icon: <CheckCircle />, label: '' },
];

export default function PagosRecargas() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    }
  };

  const handleCancel = () => {
    setStep(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-4 pt-10">
      <h1 className="text-xl font-light text-gray-700">
        Portal de <span className="text-red-500 font-semibold">PAGOS Y RECARGAS</span>
      </h1>

      <div className="flex items-center justify-center space-x-4 mt-6">
        {steps.map((s, index) => (
          <div
            key={index}
            className={`rounded-full w-12 h-12 flex items-center justify-center shadow-md ${
              index === step ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-600'
            }`}
          >
            {s.icon}
          </div>
        ))}
      </div>

      <p className="text-cyan-600 text-sm mt-2">
        {steps[step].label || ''}
      </p>

      <div className="text-gray-600 text-center mt-10 px-6">
        <p>Realiza el pago de la factura de tus servicios Claro, compra paquetes y haz recargas de</p>
        <p>manera fácil y desde donde quieras.</p>
        <p className="mt-2">
          También puedes inscribir tu tarjeta de crédito para realizar el pago de tus facturas de manera automática.
        </p>
      </div>

      <div className="mt-10">
        <select className="border border-gray-400 rounded-md px-4 py-2">
          <option>Selecciona la opción de tu interés</option>
          <option>Tarjeta de crédito y débito</option>
        </select>
      </div>

      <div className="mt-12 flex space-x-4">
        <button
          onClick={handleCancel}
          className="bg-gray-600 text-white px-6 py-2 rounded"
        >
          Cancelar
        </button>
        <button
          onClick={handleNext}
          className="bg-red-600 text-white px-6 py-2 rounded"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
