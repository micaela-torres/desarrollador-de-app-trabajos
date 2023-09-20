import { StyleSheet } from 'react-native'
import { colores } from '../../constants/colors'

// @ts-ignore
export default styles = StyleSheet.create({
  container: {
    backgroundColor: colores.primario,
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'CroissantOne',
    alignSelf: 'center',
  },
})