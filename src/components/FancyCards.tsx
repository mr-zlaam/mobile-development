import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://live.staticflickr.com/65535/53281434521_eeef635514_z.jpg',
            }}
            height={100}
            width={100}
          />
        </View>
      </View>
    </View>
  );
}
