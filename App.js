import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React,{useState,useEffect,useRef, use, useMemo} from 'react';

export default function App() {

  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(0)

  const calcValue = useMemo(()=>calculate(number),[number])

  function calculate(num){
    console.log("Calculation")
    return Math.pow(num,2)
  }

  return (
    <View style={styles.container}>

      <TextInput
      placeholder='Enter number'
      onChangeText={prev=>setNumber(prev)}
      />

      <Text>Number : {calcValue}</Text>

      <Text>Count : {count}</Text>

      <Button
      title='+1'
      onPress={() =>{
        setCount(count+1)
      }}
      />

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
