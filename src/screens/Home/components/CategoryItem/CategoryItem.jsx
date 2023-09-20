// @ts-ignore
import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
// @ts-ignore
import React, { useEffect } from 'react'

import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
  // @ts-ignore
  const { height, width } = useWindowDimensions()
  return (
    <Pressable
      onPress={() => navigation.navigate('Products', { category })}
      // @ts-ignore
      style={styles.container}
    >
      <View style={styles.
// @ts-ignore
      contentContainer}>
        <Text style={styles.
// @ts-ignore
        text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem