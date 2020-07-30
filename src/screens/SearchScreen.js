import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import WeatherBar from '../components/WeatherBar';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const SearchScreen = () =>{
 const [term, setTerm]= useState('');
 const [status,setStatus]=useState(null);
 const [listOfLocations,setToList]=useState([{key:'0',city:'Berlin',lat:'0',lon:'0'}]);
 statusPerm='null'
 

 async function findCurrentLocationAsync (){
  let statusPerm= await Permissions.askAsync(Permissions.LOCATION);
  if (statusPerm.status !=='granted'){
   setStatus("Permission to access location was denied")
  }
  else   
  {setStatus(null)
  let loc = await Location.getCurrentPositionAsync ({});
  
  lon = JSON.stringify( loc.coords.longitude );
  lat = JSON.stringify( loc.coords.latitude );
  setToList([...listOfLocations,{key:JSON.stringify(listOfLocations.length),city:'london',lat:lat,lon:lon}])
  }
 }; 

  let text = 'Use Current Location :)';
  let lon ='0';
  let lat ='0';
  if (status){
   text= status; 
  }
  return(
      
   <View backgroundColor={'rgb(178,226,255)'}>
    
    <SearchBar term={term} 
    onTermChange={setTerm}
    onTermSubmit={()=>setToList([...listOfLocations,{key:JSON.stringify(listOfLocations.length),city:term,lat:lat,lon:lon}])} 
    />
    
    <TouchableOpacity onPress={findCurrentLocationAsync}> 
    <Text>{text}</Text>
    <Text>{term}</Text>
    </TouchableOpacity>
    <WeatherBar
    listOfLocations={listOfLocations}
    />
   </View>
  );
 }

export default SearchScreen;