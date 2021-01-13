import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login/Login.js' 
export default function App() {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={["rgba(73,206,235, .4)", "rgba(6,125,207, 1)"]}
        style={styles.background}
      />
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius:25
  },
});
