import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const API_KEY = '71df472aef68a720f01a54a6ab730d30'

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) =>{
    const {data: {main: {temp, temp_min, temp_max}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`);
    this.setState({
      isLoading: false,
      temp: temp,
      tempMin: temp_min,
      tempMax: temp_max,
      location: name,
      condition: weather[0].main,
      descriptionWeather: weather[0].description,
    });
  }

  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error){
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, tempMin, tempMax, location, condition, descriptionWeather} = this.state;
    return(
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} tempMin={Math.round(tempMin)} tempMax={Math.round(tempMax)}  location={location} condition={condition} descriptionWeather={descriptionWeather}/>
    );
  }
}