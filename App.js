import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import axios from 'axios';

const API_KEY = '71df472aef68a720f01a54a6ab730d30'
export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) =>{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
  }

  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch(error){
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading} = this.state;
    return(
      isLoading ? <Loading /> : null
    );
  }
}