import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       width: '90%'
    },
    input: {
       backgroundColor:'white',
       margin: 15,
       height: 50,
       borderRadius:10,
       paddingLeft: 10,
       width: '100%',
       borderColor: 'transparent',
       borderWidth: 1,
       fontSize:16,
       shadowRadius:2,
       shadowOpacity:.3,
       shadowColor:'black',
       shadowOffset:{
           width:2,
           height:2
       }
    },
    submitButton: {
     borderRadius:10,
     backgroundColor:"rgba(73,206,235, 1)",
       padding: 10,
       margin: 15,
       height: 40,
       shadowRadius:2,
       shadowOpacity:.3,
       shadowColor:'black',
       shadowOffset:{
           width:2,
           height:2
       }
       
    },
    submitButtonText:{
       color: 'black',
       
    },
    tinyLogo: {
     width: 150,
     height: 150,
     borderRadius:25,
     margin:25,
     
   },
 })

 export default styles