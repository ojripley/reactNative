import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
// export default class App extends Component {

  // render() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Hello, world!</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
