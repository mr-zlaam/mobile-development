import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return setRandomBackground(color as string);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity style={styles.bgChangeBtn} onPress={generateColor}>
          <Text style={styles.bgBtnText}>Change Bg</Text>
        </TouchableOpacity>
        <Text selectable>{randomBackground}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgChangeBtn: {
    backgroundColor: '#28282b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 140,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  bgBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
