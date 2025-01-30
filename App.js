import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState,useEffect} from 'react';

export default function App() {

  const [count,setCount]= useState(0)
  const [name,setName] = useState('')
  const [txtName,setTxtname] = useState('')

  useEffect(() =>{
    setTimeout(() =>{
      setCount(count=>count+1)
    },1000)
  },[])

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter your name'
      onChangeText={prev => setName(prev)}
      
      ></TextInput>

      <Text
      onPress={() =>{
        setTxtname(name)
      }}
      >
        Click here
      </Text>

      <Text>My name is {txtName}</Text>

      <Text>It is rendering {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
