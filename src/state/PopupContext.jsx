import { createContext, useContext, useState } from 'react';

// Crear el contexto
const PopupContext = createContext();

// Función que proporciona el contexto
export function usePopupContext() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ popupOpen, setPopupOpen }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupContext