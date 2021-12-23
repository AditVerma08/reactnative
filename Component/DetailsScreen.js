import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

const DetailsScreen = ({navigation}) => {
  

    return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
      <Text>Details Screen</Text>
      <View style={{padding:10,margin:2,display:'flex',}}>
      <Button title="Go To Detail Screen...again" 
       onPress={()=>navigation.push("Details")}
      /></View>
      <View style={{padding:10,margin:2,display:'flex',}}>
      <Button title="Go to home" 
       onPress={()=>navigation.navigate("Home")}
      /></View>
      <View style={{padding:10,margin:2,display:'flex',}}>
      <Button title="Go back" 
       onPress={()=>navigation.goBack()}
      /></View>
      <View style={{padding:10,margin:2,display:'flex',}}>
      <Button title="Go to the first screen" 
       onPress={()=>navigation.popToTop()}
      /></View>
      </View>
     
    );
  };

  export default DetailsScreen;