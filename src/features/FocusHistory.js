import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';


export const FocusHistory = ({history}) => {
  if (!history || !history.length) return  <Text style={styles.title}> We haven't focus anything </Text>;
  
  const renderItem = ({item}) => {
    return (
      <Text style={styles.item}>- {item}</Text>
    )
  }

  return (
    <View style = {styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      color: colors.text,
      fontSize: fontSizes.md,
      padding: spacing.md
    },
    item: {
      color: colors.text,
      fontSize: fontSizes.md,
      paddingTop: spacing.md
    },
    title: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: fontSizes.md,
      textAlign: 'center'
    },
  }
)