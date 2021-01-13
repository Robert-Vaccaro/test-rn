import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import styles from './Style-Login.js'

class Login extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('Just a test!\nemail: ' + email + '\n password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('./../AT-Company-Logo.png')}
            />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               secureTextEntry = {true}
               textContentType = "password"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Login

