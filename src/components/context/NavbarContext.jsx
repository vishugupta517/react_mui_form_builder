/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <NavbarContext.Provider value={{ showButtons, setShowButtons }}>
      {children}
    </NavbarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => useContext(NavbarContext);
