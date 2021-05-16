import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native'
import PokemonList from './src/components/PokemonList'


export default class App extends Component {

  

  render() {
    return (
      // <Image style={styles.img} source={{uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'}}></Image>
      <PokemonList/>
    )
  }
}

const styles = StyleSheet.create({
  img:{
    width:180,
    height:180,
    resizeMode:'contain'
  }
})