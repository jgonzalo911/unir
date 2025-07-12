import { createContext, useContext, useState } from 'react';

const ReturnsContext = createContext();

export function ReturnsProvider({ children }) {
  const [returns, setReturns] = useState([]);

  // Función para agregar una solicitud de devolución
  const addReturnRequest = (devolucion) => {
    setReturns((prev) => [...prev, devolucion]);
  };

  // Opcional: función para limpiar devoluciones (no siempre necesaria)
  const clearReturns = () => {
    setReturns([]);
  };

  return (
    <ReturnsContext.Provider value={{ returns, addReturnRequest, clearReturns }}>
      {children}
    </ReturnsContext.Provider>
  );
}

export function useReturns() {
  return useContext(ReturnsContext);
}
