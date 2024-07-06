import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
//types
type IconProps = PropsWithChildren<{
  name: string;
}>;
export default function Icon({ name }: IconProps): JSX.Element {
  switch (name) {
    case 'circle':
      return <Icons name="circle-thin" size={38} color={'#f7cd2e'} />;
      break;
    case 'cross':
      return <Icons name="times" size={38} color={'#38cc77'} />;
      break;

    default:
      return <Icons name="pencil" size={38} color={'#ododod'} />;
  }
}

const styles = StyleSheet.create({});
