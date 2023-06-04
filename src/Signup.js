import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Background from "./Background";
import { darkgreen } from "./Constraints";
import Field from "./Field";
import Btn from "./Btn";

const Signup = () => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 350 }}>
                <Text style={{
                    color: 'white', fontSize: 60, fontWeight: 'bold',
                    marginVertical: 10
                }}>Signup</Text>
                <View style={{
                    backgroundColor: 'white',
                    height: 700,
                    width: 370,
                    borderTopLeftRadius: 150,
                    paddingTop: 100,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 40,
                        color: darkgreen,
                        fontWeight: 'bold'
                    }}>Register to your</Text>
                    <Text style={{
                        color: 'grey',
                        fontSize: 60,
                        fontWeight: 'bold',
                        marginBottom: 20
                    }}>Account</Text>
                    <Field placeholder="FirstName"></Field>
                    <Field placeholder="LastName"></Field>
                    <Field placeholder="Email/Phone" keyboardType={"email-address"} ></Field>
                    <Field placeholder="Password" secureTextEntry={true}></Field>
                    <Field placeholder="Confirm Password" secureTextEntry={true}></Field>
                    <View>
                    </View>

                    <Btn txtColor='white' bgColor={darkgreen} btnLabel="Signup"></Btn>
                    <View style={{ display: 'flex' ,flexDirection: 'row', justifyContent: 'center',
                       width: '70%',
                       
                    }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                         Already have an Account? </Text>
                         <TouchableOpacity>
                            <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                         </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Background>
    );
}

export default Signup;