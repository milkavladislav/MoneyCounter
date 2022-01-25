import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#7F7FD5', '#91EAE4']
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#2980B9', '#6DD5FA']
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#0052D4', '#9CECFB']
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#ec2F4B', '#009FFF']
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#78ffd6', '#a8ff78']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#556270', '#4ECDC4']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#191654', '#43C6AC']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#005AA7', '#FFFDE4']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#f2fcfe', '#1c92d2']
    },
}


export default function Weather({weather: {main: { temp, feels_like, humidity }, weather, name}}){
    const condition = weather[0].main;
    

    return (
        <LinearGradient
        colors={weatherOption[condition].gradient}
        style={styles.container}>
            <StatusBar backgroundColor={'#4c669f'} barStyle='light-content'/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOption[condition].iconName} size={90} color="white" />
            <Text style={styles.temp}>
                {Math.round(temp) + '°'}
            </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>
            {name}
            </Text>
            <Text style={styles.subtitle}>{condition}</Text>
            <Text style={styles.subtitle}>Feels like: {Math.round(feels_like) + '°'}</Text>
            <Text style={styles.subtitle}>Humidity:  {Math.round(humidity) + '%'}</Text>
            </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    weather: propTypes.object.isRequired,
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    halfContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    temp: {
        fontSize: 40,
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '600'
    },
    textContainer: {
        paddingHorizontal: 20,
    }
  });