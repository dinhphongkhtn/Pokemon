import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { PokedexLocal } from '../pokedexData/PokedexLocal';
import typecolors from "../asserts/TypeColors";
import PokemonStats from './PokemonStats';
import PokemonType from './PokemonType';

export default class PokemonDetail extends Component {


    getBackgroundColor = (type) => {
        var color = typecolors.find(a => a.name === type);
        if (typeof (color) !== 'undefined') {
            //console.log(color);
            return color.color;
        }
    }

    render() {

        let pokeColor = this.getBackgroundColor(this.props.data.types);
        return (
            <View style={[styles.container, {
                backgroundColor:'white',
                marginHorizontal:5
            }]}>
                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent:'center', borderBottomWidth:1,borderColor:pokeColor }}>
                    <Text style={[styles.name, { flex: 1, color: pokeColor }]} >{this.props.data.name}</Text>
                    <View style={{  flex: 0.2, justifyContent:'center',
                        borderColor:pokeColor,
                        alignItems:'center',
                        borderWidth:1,
                        borderRadius:8
                     }}>

                        <Text style={{fontSize: 16, color:  pokeColor, fontWeight:'bold',}}>#{this.props.data.id}</Text>
                       
                    </View>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row', margin:5 }}>
                    <View style={{ width: '100%' }}>
                        <PokemonType data={this.props.data}></PokemonType>
                        <PokemonStats data={this.props.data}></PokemonStats>
                    </View>

                    <View style={styles.pokeImgContainer}>
                        <Image source={{ uri: this.props.data.official_artwork }} style={styles.pokeImg}></Image>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

        borderRadius: 8,

        flex: 0.8,
        padding: 5
    },
    pokeImgContainer: {


        borderColor: 'white',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',

        position: 'absolute',
        bottom: -70,
        right: 0

    },
    pokeImg: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        alignSelf: 'flex-end'
    },
    name: {
        fontSize: 30,
        color: 'white',
       fontWeight:'bold'
    }
})
