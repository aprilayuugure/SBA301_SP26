import { createContext, useContext } from "react";
import { useRestaurant } from "../hooks/useRestaurant";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const restaurantHook = useRestaurant();
    
    return (
        <RestaurantContext.Provider value = {restaurantHook}>
            {children}
        </RestaurantContext.Provider>
    )
}

export const useRestaurantContext = () => useContext(RestaurantContext);