import React, {useState} from "react";
import {View, Text, StyleSheet, Platform, Vibration} from "react-native";
import {colors} from "../utils/colors";
import {Countdown} from '../../components/Countdown';
import {RoundedButton} from '../../components/RoundedButton';
import {spacing} from '../utils/sizes';
import {ProgressBar} from 'react-native-paper';
import {Timing} from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];



export const Timer = ({focusSubject, clearSubject, onFocusEnd}) => 
{
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false); 
  const [progress, setProgress] = useState(1); 
  const [minutes, setMinutes] = useState(0.1); 

  const onEnd =(reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    setMinutes(0.1);
    reset();
    onFocusEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style = {styles.countdown} >
        <Countdown
          minutes = {minutes}
          isPaused = {!isStarted}
          onProgress={setProgress}
          onEnd={onEnd} >
        </Countdown>
        <View style = {{paddingTop: spacing.lg}}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style = {{paddingTop: spacing.sm}}>
        <ProgressBar 
          progress = {progress}
        />
      </View>
      
      <View style = {styles.buttonWrapper} >
        <Timing onChangeTime={setMinutes}/>
      </View>

      <View style = {styles.buttonWrapper} >
        {!isStarted && (<RoundedButton title="Start" onPress = {() => {setIsStarted(true)}}/>)}
        {isStarted && (<RoundedButton title="Pause" onPress = {() => {setIsStarted(false)}}/>)}
      </View>

      <View style = {styles.buttonClearWrapper}>
        <RoundedButton size = {60} title="-" onPress = {clearSubject}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center'
  },
  countdown: {
    flex: 0.5,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClearWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task: {
    color: colors.text,
    textAlign: 'center'
  },
})