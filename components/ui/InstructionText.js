import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/color";

const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.instructionText, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
});

export default InstructionText
