import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'

export default class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.title}> POKEDEX </Text>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width:'97%',
        height:50,
        backgroundColor:'white',
        borderRadius:6,
       margin:5
       
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        alignContent:'center',
        width:'90%',
        paddingLeft:10
    },
    button:{
        width:30,
        height:30,
        backgroundColor:'gray',
        
    }
})
