import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Links() : React.JSX.Element {
    const openUrl = () => {
        Linking.openURL('https://www.linkedin.com/in/rowan-razanajatovo-2a7645309');
    }
    return(
        <View style={style.container}>
            <TouchableOpacity onPress={openUrl}>
                <Text style={style.link}>Contact us</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '50%',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginHorizontal: '25%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: '#5271ff',
        textDecorationLine: 'underline'
    }
})