import { StyleSheet } from 'react-native'
import FontSizes from '../../../../../constants/FontSizes'

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreName: {
    fontSize: FontSizes.big,
    position: 'absolute',
  },
})

export default styles
