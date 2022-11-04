import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus'
import {Timer} from "./src/features/Timer"
import {FocusHistory} from './src/features/FocusHistory';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [curSubject, setCurSubject] = useState(null);
  const [history, setHistory] = useState([]);
  console.log(!curSubject);
  return (
    <SafeAreaView style={styles.container}>
      {
        // addSubject is prop
        !curSubject ? (
          <>
            <Focus addSubject = {setCurSubject}/> 
            <FocusHistory history={history} />
          </>
        ) : (<View style={{ flex: 1 }}>
            <Timer 
              focusSubject = {curSubject}
              clearSubject = {() => {setCurSubject(null)}}
              onFocusEnd = {(subject) => {setHistory([...history, subject])}}
            />
          </View>)
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight:100,
    backgroundColor: colors.background
  },
});
