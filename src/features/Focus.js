import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [text, setText] = useState(null);
  console.log(text);
  return (
    <View style={styles.container}>
      <Text>Focus Fearure</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style = {styles.textInput}
          label="What would you like to focus on?"
          onChangeText={(text) => setText(text)}></TextInput>
        <RoundedButton
          style={styles.button}
          title="+"
          size={spacing.xxxl}
          onPress={() => addSubject(text) }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex: 1
  },
  button: {
    marginLeft: spacing.sm
  }
});
