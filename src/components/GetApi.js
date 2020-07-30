import React, {useState} from 'react';
import {View, Text} from 'react-native';
import openWeather from '../api/openWeather';

const GetApi = async()=>{
    const [tem, setTemper] =useState[('')]
    {/*const ci= Object.values(city)
    let c=ci[0]
    console.log(c)*/}
    const response = await openWeather.get(`/weather?q=London&APPID=e0e5bd503498e2eb3a40b0e5331d2acc`)
    
    setTemper(response.data.main.temp)
    console.log(tem)
    return(
    <View>
     <Text>{tem}</Text>
    </View>
    )
}

export default GetApi;