import React from "react";
import {View,Text, StyleSheet} from 'react-native';
import Background from './Background'; 
import Btn from "./Btn";
import { darkgreen, green } from "./Constraints";

const Home = (props) =>{
    return(
        <Background>
            <View style={{marginHorizontal: 40, marginVertical: 100}}>
            <Text style={{color: 'white',textAlign: 'center' ,fontSize: 50}}>Assignment</Text>
            <Text style={{color: 'white' ,fontSize: 50, textAlign:'center', marginBottom: 40}}>Design</Text>
            <Btn bgColor={green} txtColor = 'white' btnLabel = "Login" Press={()=>
            props.navigation.navigate("Login")} />
            <Btn bgColor='white' txtColor = {darkgreen} btnLabel = "Signup"
             Press={()=> props.navigation.navigate("Signup")}/>
            </View>
        </Background>     
    );
}
const styles = StyleSheet.create({
})
export default Home;