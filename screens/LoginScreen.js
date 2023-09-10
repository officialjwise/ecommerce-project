import { View, Text, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, TextInput} from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
   <SafeAreaView style={{flex:1,setStatusBarBackgroundColor:"white",alignItems:"center"}}>
    <View>
        <Image
            style={{ width: 150, height: 100 }}
            source={{
                url: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
            }}
        />
    </View>
    <KeyboardAvoidingView>
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:17,fontWeight:"bold",marginTop:12,color:"#041E42"}}>Log In to your Account</Text>
        </View>

        <View style={{marginTop:70}}>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                gap:5,
                backgroundColor:"#D0D0D0",
                paddingVertical:5,
                borderRadius:5,
                marginTop:30
                
                }}>
                <MaterialIcons name="email" size={24} color="black" />

                <TextInput placeholder='enter your Email'/>


            </View>
        </View>    

    </KeyboardAvoidingView>
   </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})