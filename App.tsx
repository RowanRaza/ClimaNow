import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { fetchWeatherData } from "./api";
import { weatherDataObject } from "./type";

export default function App() : React.JSX.Element {
  
  const [city, setCity] = useState('Madagascar');
  const [units, setUnits] = useState<'metric' | 'imperial'>('metric');
  const [weatherData, setWeatherData] = useState<weatherDataObject|null>(null);
  
  const getWeather = async () => {
    try{
      const data = await fetchWeatherData(city, units)
      setWeatherData(data);
      console.log(data);
    }catch (error) {
      console.log(error)
    }
  }
  
  return(
    <SafeAreaView>
      <Button title="test" onPress={getWeather}/>
      <Text>{weatherData?.main.humidity}</Text>
    </SafeAreaView>
  )
}