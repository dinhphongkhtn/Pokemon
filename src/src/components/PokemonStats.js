import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import typecolors from "../asserts/TypeColors";

export default class PokemonStats extends Component {

    getShortName = (name) => {
        switch (name) {
            case 'hp': return 'Hp';
            case 'attack': return 'Att';
            case 'defense': return 'Def';
            case 'special-attack': return 'Sp.Att';
            case 'special-defense': return 'Sp.Def';
            case 'speed': return 'Speed';
        }
    };
    getBackgroundColor = (type) => {
        var color = typecolors.find(a => a.name === type);
        if (typeof (color) !== 'undefined') {
            //console.log(color);
            return color.color;
        }
    }
    renderItem = ({ item, index }) => {
        console.log(item);
        return (
            <View style={{ flex: 1, flexDirection: 'row',height:20 }}>
                <Text style={{ flex: 0.2,  justifyContent:'center', color:this.getBackgroundColor(this.props.data.types), fontWeight:'bold' }}>{this.getShortName(item.stat.name)}</Text>
                <Text style={{ flex: 0.1,  justifyContent:'center', color:this.getBackgroundColor(this.props.data.types), fontWeight:'bold' }}>{item.base_stat}</Text>
                <View style={{ flex: 0.8,  }}>
                    <View style={[{
                        width: item.base_stat, 
                        backgroundColor: this.getBackgroundColor(this.props.data.types),
                        marginVertical: 2, 
                        flex:1
                    }]}></View>
                </View>
            </View>
        )
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    renderItem={this.renderItem}
                    data={this.props.data.stats}></FlatList>
            </View>
        )
    }
}
