import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Сиди дома',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Возьми зонтик',
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1CB5E0'],
        title: 'На улице дождь',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На улице снежок!',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Пыльно',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'На улице смог :(',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'На улице снежок!',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Ни черта не видно в тумане',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер :)',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облака',
    },
}

export default function Weather({temp, tempMin, tempMax, humidity, location, condition, descriptionWeather, wind}){
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Text style={styles.location}>{location}</Text>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <View style={styles.horizontal}>
                    <Text style={styles.temp}>{temp}°</Text>
                    <View style={styles.border}></View>
                    <View >
                        <MaterialCommunityIcons name={"coolant-temperature"} size={30} color="white"/>
                        <MaterialCommunityIcons name={"weather-windy"} size={30} color="white"/>
                        <MaterialCommunityIcons name={"umbrella-outline"} size={30} color="white"/>
                    </View>
                    <View >
                        <Text style={styles.weather}>{tempMin}°/{tempMax}°</Text>
                        <Text style={styles.weather}>{wind}м/с</Text>
                        <Text style={styles.weather}>{humidity}%</Text>
                    </View>
                </View>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{descriptionWeather}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    descriptionWeather: PropTypes.string.isRequired,
    wind: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 70,
        color: 'white',
        paddingHorizontal: 5,
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    location: {
        fontSize: 20,
        color: 'white',
    },
    weather: {
        fontSize: 20,
        color: 'white',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        borderStyle: 'dotted',
        borderColor: 'white',
        height: 99,
        borderLeftWidth:1,
        paddingHorizontal: 5,
    },
})