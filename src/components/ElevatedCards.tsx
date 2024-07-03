import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Emojoi</Text>
        </View>
      </ScrollView>
    </View>
  );
}
