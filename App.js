import { Details, Home, Products } from './src/screens'


import { useFonts } from 'expo-font'
import React from 'react'
import { useState } from 'react'

export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productSelected, setProductSelected] = useState()


  return productSelected ? (
    <Details product={productSelected} />
  ) : categorySelected ? (
    <Products
      category={categorySelected}
      setProductSelected={setProductSelected}
    />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}