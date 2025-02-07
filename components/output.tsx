import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { outputProps, weatherDataObject } from "../type";

export function Output({sys, coord, main, wind, unit} : outputProps) : React.JSX.Element {
    return(
        <View style={style.container}>
            <Image source={require('../assets/asset.png')} style={style.asset}/>
            <Text style={{color: '#fff'}}>Country: {sys.country}, lon : {coord.lon}, lat : {coord.lat}</Text>
            <View style={style.outputDataContainer}>
                <View>
                    <Text>Temp : {main.temp} {unit === 'metric' ? '°C' : '°F'}</Text>
                    <Text>Pressure : {main.pressure} </Text>
                    <Text>Humidity : {main.humidity}% </Text>
                </View>
                <View>
                    <Text>Wind</Text>
                    <Text>Direction : {wind.deg}° </Text>
                    <Text>Speed : {wind.speed}m/s</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 250,
        marginTop: 25,
        backgroundColor: '#5271ff',
        marginHorizontal: '2.5%',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: '2.5%'
    },
    asset: {
        height: 70,
        width: 70,
    },
    outputDataContainer: {
        flex: 1,
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    }
});