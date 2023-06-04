import React from "react";
import {TextInput} from 'react-native';
import { darkgreen } from "./Constraints";

const Field = (props) =>{
    return(
        <TextInput{...props} style={{
            borderRadius: 100, color: darkgreen, paddingHorizontal:10,
            width:'75%', height: 40, backgroundColor: 'rgb(220, 220, 220)', marginVertical:5
        }}placeholderTextColor={darkgreen}>

        </TextInput>
    );
}

export default Field;