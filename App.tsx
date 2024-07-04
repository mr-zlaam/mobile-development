import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
// Form validation
import * as yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
const passwordSchema = yup.object().shape({
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
      console.warn(passwordLength);
      const charIndex: number = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
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
    <ScrollView keyboardShouldPersistTaps="always">
      <SafeAreaView>
        <View>
          <Text className="text-black font-bold text-center my-3 text-xl">
            Password Generator
          </Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values);
              passwordGeneratedString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View>
                  <View className="flex-1 flex-row items-center  w-full gap-2">
                    <Text className="text-black px-2">Password Length:</Text>

                    <TextInput
                      className="border-[1px] w-[240px] rounded border-black/50 focus:border-black px-4 h-[40px]"
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex.8"
                      keyboardType="numeric"
                    />
                  </View>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text className="text-center text-red-500">
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <View className="flex-1  flex-row items-center  w-full my-0  mt-4 mb-2  ">
                  <Text className="font-semibold text-black px-2 my-3 mx-2">
                    Include LowerCase
                  </Text>
                  <BouncyCheckBox
                    className="absolute right-0"
                    isChecked={lowerCase}
                    onPress={() => {
                      setLowerCase(!lowerCase);
                    }}
                    fillColor="#29ab87"
                  />
                </View>
                <View className="flex-1  flex-row items-center  w-full mb-2  ">
                  <Text className="font-semibold text-black px-2 my-3 mx-2">
                    Include UpperCase
                  </Text>
                  <BouncyCheckBox
                    className="absolute right-0"
                    isChecked={upperCase}
                    onPress={() => {
                      setUpperCase(!upperCase);
                    }}
                    fillColor="#29ab87"
                  />
                </View>
                <View className="flex-1  flex-row items-center  w-full mb-2  ">
                  <Text className="font-semibold text-black px-2 my-3 mx-2 ">
                    Include Numbers
                  </Text>
                  <BouncyCheckBox
                    className="absolute right-0"
                    isChecked={numbers}
                    onPress={() => {
                      setNumbers(!numbers);
                    }}
                    fillColor="#29ab87"
                  />
                </View>
                <View className="flex-1  flex-row items-center  w-full mb-2  ">
                  <Text className="font-semibold text-black px-2 my-3 mx-2">
                    Include Symbols
                  </Text>
                  <BouncyCheckBox
                    className="absolute right-0"
                    isChecked={symbols}
                    onPress={() => {
                      setSymbols(!symbols);
                    }}
                    fillColor="#29ab87"
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                    className="px-4 py-2 bg-blue-500 w-[70px] h-[70px] justify-center rounded-full my-4 mx-auto items-center"
                  >
                    <Text className="text-white">Reset</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmit();
                    }}
                    disabled={!isValid}
                    className="px-4 py-2 bg-blue-500 w-[170px] rounded-md mx-auto items-center"
                  >
                    <Text className="text-white">GeneratePassword</Text>
                  </TouchableOpacity>
                  <Text
                    selectable={true}
                    className=" font-bold text-lg my-5 text-center"
                  >
                    {isPassGenerated && password}
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
