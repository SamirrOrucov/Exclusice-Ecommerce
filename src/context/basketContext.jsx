import React, { createContext } from "react";
import useLocalHook from "../hook";

export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalHook("basket", []);
  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    console.log(basket[index]);
    basket[index].count++;
    setBasket(basket);
  }
  return (
    <BasketContext.Provider value={{ addBasket, basket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
