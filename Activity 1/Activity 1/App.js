import React from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    style={{
      justifyContent: 'center',
        alignItems: 'center',
      }}>
    <View>
    style={{
      justifyContent: 'center',
        alignItems: 'center',
      }}>
    <Text><center> Kenny Cabubas</text>
    <Text>IT 302 </Text>
    <Image
    source={{
      uri:   'https://th.bing.com/th/id/OIP.1rrqXmuysl9UWXhBegzx-AHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
    }}
    style={{width: 200, height: 200}}
    />
  </View>
  <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }}
  defaultValue="You can type me"
  />
  </ScrollView>
  );
};

export default App;