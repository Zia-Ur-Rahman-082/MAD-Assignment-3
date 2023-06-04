import React from "react";
import { View, Text , TouchableOpacity} from 'react-native';
import Background from "./Background";
import { darkgreen } from "./Constraints";
import Field from "./Field";
import Btn from "./Btn";


const Login = () => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 350 }}>
                <Text style={{
                    color: 'white', fontSize: 60, fontWeight: 'bold',
                    marginVertical: 10
                }}>Login</Text>
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
                    }}>Login to your </Text>
                    <Text style={{
                        color: 'grey',
                        fontSize: 60,
                        fontWeight: 'bold',
                        marginBottom: 20
                    }}>Account</Text>
                    <Field placeholder="Email/Phone" keyboardType = {"email-address"} ></Field>
                    <Field placeholder="Password" secureTextEntry={true}></Field>
                    <View style={{alignItems:'flex-end', width:'70%', paddingRight: 16,
                marginBottom: 100 }}>
                        <Text style={{color:darkgreen, fontWeight:'bold', fontSize: 16}}>
                            Forgot Password</Text>
                    </View>
                    <Btn txtColor='white' bgColor={darkgreen} btnLabel="Login"></Btn>
                    <View style={{ display: 'flex' ,flexDirection: 'row', justifyContent: 'center',
                       width: '70%',
                       
                    }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                         Don't have an Account? </Text>
                         <TouchableOpacity>
                            <Text style={{ color: darkgreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
                         </TouchableOpacity>

                    </View>

                </View>
            </View>
        </Background>
    );
}

export default Login;