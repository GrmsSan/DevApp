import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {useState} from 'react';
import {Link, router} from 'expo-router'

export default function HomeScreen(){
    const [email, setEmail ] = useState("")
    const  [pass, setPass] = useState("")


    const onPress = () => {
        router.push("/(tabs)")
    }

     return(
        <SafeAreaView>
            <Text>Login</Text>
            <Text>E-mail</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="digite seu e-mail" keyboardType="email-address"/>
            <Text>senha</Text>
            <TextInput style={styles.input} onChangeText={setPass} value={pass} placeholder="digite seu e-mail" keyboardType="default"/>
            <View>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text>start</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Link href={"/#"}>Cadastar</Link>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    teste: {
        color: '#ffffff',
        backgroundColor: '#090909',
        textAlign: 'center'
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
    }, 
    btn: {
        backgroundColor: '#fffff'
    }
})