import { StyleSheet } from 'react-native'
import { colores } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingTop: 10,
  },
  input: {
    color: 'white',
    backgroundColor: colores.primario,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colores.primario,
    width: '80%',
    fontSize: 20,
  },
})