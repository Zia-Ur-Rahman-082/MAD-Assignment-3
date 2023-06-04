import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Btn({bgColor, btnLabel, txtColor, Press}) {
    return (
        <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor, borderRadius: 100,
            alignItems: 'center',
            width: 290,
            marginVertical: 10,
            paddingVertical: 5,
        }}>
            <Text style={{ color: txtColor, fontSize: 22, fontWeight: "bold" }}>{btnLabel}</Text>

        </TouchableOpacity>
    )
}