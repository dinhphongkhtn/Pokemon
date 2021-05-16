import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, FlatList } from 'react-native'
import typecolors from "../asserts/TypeColors";

export default class PokemonType extends Component {

    getIconType = (type) => {
        var color = typecolors.find(a => a.name === type);
        if (typeof (color) !== 'undefined') {
            
            return color;
        }
    }

   

    renderType=({item,index})=>{
        console.log(item);

    

        return(
            <View style={{borderColor:this.getIconType(item.type.name).color, 
            
            flex:1, flexDirection:'row',borderWidth:2,  height:40, borderRadius:8}}>
            <View style={{ flex:0.3, padding:3}}>
                <Image style={[styles.icon]} source={this.getIconType(item.type.name).icon}></Image>
            </View>
                
            <View style={{ flex:0.7, padding:3}}>
                <Text style={{color:this.getIconType(item.type.name).color, fontWeight:'bold', fontSize:15}}>{item.type.name}</Text>
            </View>
        </View>
        );
    }

    render() {
        return (
            <View style={[styles.container]}>

                <FlatList horizontal={true}
                data={this.props.data.alltypes}
                renderItem={this.renderType}
                keyExtractor={item=>item.name}
              
                ></FlatList>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,
       
    },
    container:{
       
        
    }
})
