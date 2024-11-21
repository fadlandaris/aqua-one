import React from 'react'
import { createContext } from 'react'
import { productsData } from '../constants/constants'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {

  const value = {
    productsData
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider