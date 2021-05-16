import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import typecolors from "../asserts/TypeColors";

export default class PokemonItem extends Component {

    
    getBackgroundColor = (type) => {
        var color = typecolors.find(a => a.name === type);
        if (typeof (color) !== 'undefined') {
            //console.log(color);
            return color.color;
        }
    }


    render() {

        return (
            <TouchableOpacity 
            onPress={()=>{this.props.onSelected(this.props.data)}}
            style={[styles.item, { backgroundColor: this.getBackgroundColor(this.props.data.types) }]}>
                <View style={{flex:1.5}}>
                    <Text style={styles.name} >{this.props.data.name}</Text>
                    <Text style={styles.id}>#{this.props.data.id}</Text>
                </View>
                <View style={{flex:1}}>
                    <Image style={styles.pokeImg} source={{ uri: this.props.data.front_default }}></Image>
                </View>
              
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    pokeImg: {
        width: 80,
        height: 80,
        borderRadius: 8,
        
    },

    item: {
        flex: 1,
     
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 3,
       flexDirection:'row',
       padding:5,
    //    borderWidth:5,
    //    borderColor:'white',
    //    borderStyle:'dotted'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    id: {
        fontStyle: 'italic',
        fontSize: 11,
        color: 'white'
    }
})
