import { PropsWithChildren, useState } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {
  Button,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import DiceFive from '../assets/Five.png';
import DiceFour from '../assets/Four.png';
import DiceOne from '../assets/One.png';
import DiceSix from '../assets/Six.png';
import DiceThree from '../assets/Three.png';
import DiceTwo from '../assets/Two.png';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
//Dice Props Type
interface DiceProps
  extends PropsWithChildren<{ imageUrl: ImageSourcePropType }> {}
export const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <>
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    </>
  );
};
function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);

    return diceImage;
  };
  return (
    <>
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Button title="Roll Dice" onPress={rollDiceOnTap} />
      </View>
    </>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
