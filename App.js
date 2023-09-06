import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import Modal from './components/Modal'

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => setTextValue(text)

  const addItem = () => {
    if (textValue === '') {
      return
    }
    //@ts-ignore
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ])
    setTextValue('')
  }

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text 
// @ts-ignore
      style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  )

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemsList
    // @ts-ignore
    arr.splice(itemSelected, 1)
    // @ts-ignore
    setItemsList(arr)
    setModalVisible(false)
  }

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de materiales</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nuevo material"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="+ ADD" color={'#000'} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#f0a6ca" ,
  },

  title: {
    color: "#390099",
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 50,
  },

  inputContainer: {
    width: 350,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#efc3e6',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
  },

  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 15,
  },

  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#b8bedd',
    shadowColor: '#b8bedd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#390099',
    fontWeight: '600',
    fontVariant: 'no-common-ligatures',
  },
})