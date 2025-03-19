import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const TransactionsScreens=()=>{
  return(
    <View style={styles.transactionpage}>
         <Text> Transactions Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  transactionpage:{
    background: 'grey',
    color: 'white',
    justifyContent: 'center',
  }
})
