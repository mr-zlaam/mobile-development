import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { setupPlayer as isSetupPlayer, addTrack } from '../musicPlayerServices';
import ControlCenter from './components/ControlCenter';
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
      <View>
        <Text selectable>Open app.tsx and build your first app</Text>
        <ControlCenter />
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
