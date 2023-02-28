import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Component} from "./Component/Modal"
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'


export default function App() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  console.log("date",date)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 123456</Text>
      <StatusBar style="auto" />
      {/* <Component /> */}
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
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
