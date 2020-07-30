import React from 'react';
import {View, StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import GetApi from './GetApi';


const WeatherBar = ({listOfLocations})=>{
    const result= Object.values(listOfLocations)
  
    return(
    <FlatList
    vertical
    data={result}
    renderItem={({item})=>{
        
        return(
     <View>
         
        <Text>{item.city}</Text>
        <Text>{item.lat}</Text>
        <Text>{item.lon}</Text>
       
             <Text>qwerty</Text>
    </View>
        )

    }}
    />
    )
};

const styles= StyleSheet.create({
    background:{
        backgroundColor: 'rgb(255,255,255)',
        height:50,
        marginTop:20,
        marginHorizontal:20,
        flexDirection:"row",
        borderRadius:10
    },
    searchInput:{
        flex:1,
        fontSize:20,
        marginLeft:10
    },
    searchIcon:{
        fontSize:34,
        padding:8,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'rgb(50,170,220)'
    }
});
export default WeatherBar;