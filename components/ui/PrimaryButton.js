import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable 
} from 'react-native';
import Colors from '../../constants/color';
const { primary500, primary600 } = Colors

const PrimaryButton = ({ children, onPress }) => {
  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable 
          style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
          onPress={onPress} 
          android_ripple={{ color: primary600 }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton
