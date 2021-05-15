import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return(
        <LinearGradient
        colors={['#56CCF2', '#2F80ED']}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>Получение погоды...</Text>
             <ActivityIndicator size={"large"} color={"white"}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: "white",
        fontSize: 30
    }
})