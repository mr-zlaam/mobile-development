import {} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './src/components/FlatCard';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';

function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
          <ElevatedCards />
          <FancyCards />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
