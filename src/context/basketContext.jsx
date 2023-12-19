import React, { Children, createContext } from 'react'
export const BasketContext=createContext()
function BasketContext({children}) {
  return (
    <BasketContext.Provider >
{children}

    </BasketContext.Provider>
  )
}

export default BasketContext