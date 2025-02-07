import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { inputProps } from "../type";



export function Input({onToggle, unit, inputValue, onValidation, setInputValue} : inputProps) : React.JSX.Element {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.toggler} onPress={onToggle}>
                <Text style={unit === "metric" ? style.unitSelected : style.unit}>°C</Text>
                <Text style={unit === "imperial" ? style.unitSelected : style.unit}>°F</Text>
            </TouchableOpacity>
            <TextInput
                maxLength={50}
                style={style.textInput}
                placeholder="Enter city name here ..."
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <Button 
                title="Check" 
                color={'#00a651'} 
                onPress={onValidation}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 25,
        backgroundColor: '#fff',
        marginHorizontal: '2.5%',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: '2.5%'
    },
    toggler: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        width: '40%',
        height: '20%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    unitSelected: {
        borderBottomWidth: 4,
        borderBottomColor: "#5271ff",
        width: '25%'
    },
    unit: {
        width: '25%'
    },
    textInput: {
        backgroundColor: '#eee',
        width: '75%',
        borderRadius: 5,
        marginVertical: 50,
        paddingLeft: 12
    }
});