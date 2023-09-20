import { FlatList, View, SafeAreaView } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/data.Categories'
import styles from './Home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Categories'} action={undefined} />
      <View style={styles.listContainer}>
        <FlatList
          data={dataCategories}
          keyExtractor={category => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item.title} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home