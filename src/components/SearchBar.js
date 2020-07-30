import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) =>{ 
    return (
     <View style={styles.background}>
        <Feather name='search' style={styles.searchIcon}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Search City'
            style={styles.searchInput}
            value={term.newTerm}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
     </View>
    );
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

export default SearchBar;