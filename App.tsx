import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';

function App(): JSX.Element {
  const theme = useColorScheme();
  const [darkMode, setDarkMode] = useState(theme);
  const modeToggler = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <View style={darkMode === 'dark' ? styles.blackBg : styles.whiteBg}>
        <Text style={darkMode === 'dark' ? styles.whiteText : styles.blackText}>
          Hello world how are you doing?
        </Text>
        <Button
          title={darkMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          onPress={modeToggler}
        />
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
  },
  whiteText: {
    color: '#ffffff',
  },
  whiteBg: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  blackText: {
    color: '#000000',
  },
});
