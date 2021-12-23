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

const HomeScreen = ({navigation}) => {
  

    return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go To Detail Screen" 
       onPress={()=>navigation.navigate("Details")}
      />
      </View>
     
    );
  };

  export default HomeScreen;