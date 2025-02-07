import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { fetchWeatherData } from "./api";
import { weatherDataObject } from "./type";
import { Input } from "./components/input";
import { Output } from "./components/output";
import { Links } from "./components/links";
export default function App() : React.JSX.Element {
  
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [weatherData, setWeatherData] = useState<weatherDataObject|null>(null);
  const [inputValue, setInputValue] = useState('');
  
  const getWeather = async () => {
    try{
      const data = await fetchWeatherData(inputValue.trim(), units)
      setWeatherData(data);
      console.log(data);
    }catch (error) {
      console.log(error)
      setWeatherData(null)
    }
  }

  const toggleUnits = () => {
    setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
  };
  
  return(
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#eee'}/>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <Input 
          unit={units} 
          onToggle={toggleUnits}
          onValidation={getWeather}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        {
        weatherData ? 
        <Output 
          main={weatherData.main}
          sys={weatherData.sys}
          wind={weatherData.wind}
          coord={weatherData.coord}
          unit={units}
        /> : 
        <View style={style.container2}>
          <Text>Nothing to show ...</Text>
          <Text>If nothing appears after pressing the 'Check' button, please check your connection and make sure you have entered the correct information.</Text>
        </View>
        }
      </ScrollView>
      <Links/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  container2: {
    height: 250,
    marginTop: 25,
    marginHorizontal: '15%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})