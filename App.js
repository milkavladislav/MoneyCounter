import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './components/Loading';
import Weather from './components/Weather';

export default function App() {
  const apiKey = '3cd9085a56b9163c9df2fbb5f2c15071';

  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    setWeather(data);
    setIsLoading(false);
    console.log(data)
  }

  useEffect(() => {
    (async () => {
      let response = await Location.requestForegroundPermissionsAsync();
      if (response.status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      getWeather(latitude, longitude);
    })();
  }, []);


  return (
    isLoading ? <Loading/> : <Weather weather={weather}/>   
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'flex-end',
     paddingHorizontal: 30,
     paddingVertical: 100,
     backgroundColor: 'lightblue',
  },
  text: {
      fontSize: 30,
      color: '#2c2c2c'
  }
});

