import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
//types
type IconProps = PropsWithChildren<{
  name: string;
}>;
export default function Icon({ name }: IconProps): JSX.Element {
  switch (name) {
    case 'circle':
      return <Text style={{ fontSize: 40 }}>O</Text>;
      break;
    case 'cross':
      return <Text style={{ fontSize: 40 }}>X</Text>;
      break;

    default:
      return <Text></Text>;
  }
}

const styles = StyleSheet.create({});
