import { View, Text, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';

export default function ActionCard() {
  const openWebsite = (webLink: string) => {
    return Linking.openURL(webLink);
  };
  return (
    <View>
      <Text style={styles.headText}>Blog Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openWebsite(
                'https://live.staticflickr.com/65535/53281434521_eeef635514_z.jpg',
              );
            }}
          >
            <Text style={styles.btnText}>Open Site</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
