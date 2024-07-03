import {} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import FlatCard from './src/components/FlatCard';

function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App;
