import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <View style = {styles.timingWrapper}>
      <RoundedButton style = {styles.timingButton} size ={75} title="10" onPress={() => onChangeTime(10)}/>
      <RoundedButton style = {styles.timingButton} size ={75} title="15" onPress={() => onChangeTime(15)}/>
      <RoundedButton style = {styles.timingButton} size ={75} title="20" onPress={() => onChangeTime(20)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  timingWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingButton: {
    marginHorizontal: 20
  }
})