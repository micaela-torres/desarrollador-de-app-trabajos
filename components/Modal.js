import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = ({ modalVisible, onHandleDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View 
// @ts-ignore
          style={styles.modalTitle}>
            <Text>Eliminar este material</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>¿Estas seguro de eliminar este elemento?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="confirmar" onPress={onHandleDelete} />
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#f0a6ca',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#390099',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    color: '#390099',
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 15,
  },
})