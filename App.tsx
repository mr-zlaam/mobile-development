import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
// Form validation
import * as yup from 'yup';
const passwordScheam = yup.object().shape({
  passwordLength: yup
    .number()
    .required('This field is required!!')
    .min(4, 'Password must be 4 character long!!')
    .max(16, 'Password must contain less than 16 character'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const passwordGeneratedString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '1234567890';
    const specialCharacter = '!@$%^&*_-';
    if (upperCase) {
      characterList += upperCaseLetter;
    }
    if (lowerCase) {
      characterList += lowerCaseLetter;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialCharacter;
    }
    const passwordResult = createPassword(
      characterList,
      passwordLength,
    ) as string;
    setPassword(passwordResult);
    setIsPassGenerated(true);
    return;
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex: number = Math.floor(Math.random() * characters.length);
      return (result += characters.charAt(charIndex));
    }
  };
  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(true);
    setSymbols(false);
  };
  return (
    <View>
      <Text>App hello world How are you doing there</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
