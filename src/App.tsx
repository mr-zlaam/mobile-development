import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { addTrack, setupPlayer as isSetupPlayer } from '../musicPlayerServices';
import MusicPlayer from './components/screens/MusicPlayer';
function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setupPlayer = async () => {
    let isSetup: boolean = await isSetupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  };
  useEffect(() => {
    setupPlayer();
  }, []);
  if (!isPlayerReady)
    return (
      <>
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>
      </>
    );
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#28282b'} />
        <MusicPlayer />
      </View>
    </>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
