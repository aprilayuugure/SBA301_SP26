import { createContext, useContext } from "react";
import { useShoes } from "../hooks/useShoes";

const ShoesContext = createContext();

export const ShoesProvider = ({ children }) => {
    const shoesHook = useShoes();
    
    return (
        <ShoesContext.Provider value = {shoesHook}>
            {children}
        </ShoesContext.Provider>
    )
}

export const useShoesContext = () => useContext(ShoesContext);