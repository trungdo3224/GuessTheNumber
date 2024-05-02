import { View, StyleSheet, Image, Text } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ userNumber, roundsNeeded, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        You need
        <Text style={styles.highlight}> {roundsNeeded}</Text> rounds to guess
        the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    maring: 36,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
