import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'

import allProducts from '../../data/products'
import styles from './Products.style'

const Products = ({ category, setProductSelected }) => {
  const [arrProducts, setArrProducts] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        product => product.category === category
      )
      const productsFiltered = products.filter(product =>
        product.title.includes(keyword)
      )
      // @ts-ignore
      setArrProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product =>
        product.title.includes(keyword)
      )
      // @ts-ignore
      setArrProducts(productsFiltered)
    }
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <
// @ts-ignore
      SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setProductSelected(item)}>
              <Text>{item.
// @ts-ignore
              title}</Text>
            </TouchableOpacity>
          )}
          // @ts-ignore
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Products