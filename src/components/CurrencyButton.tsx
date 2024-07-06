import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type CurrencyButtonProps = PropsWithChildren<Currency>;
export default function CurrencyButton(
  props: CurrencyButtonProps,
): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
    marginBottom: 4,
  },
});
