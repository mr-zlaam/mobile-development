import {} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './src/components/FlatCard';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';
import ActionCard from './src/components/ActionCard';

function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
