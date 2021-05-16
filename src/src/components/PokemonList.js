import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { PokedexLocal } from '../pokedexData/PokedexLocal'
import PokemonDetail from './PokemonDetail';
import PokemonItem from './PokemonItem';
import SearchBar from './SearchBar';
import typecolors from "../asserts/TypeColors";

export default class PokemonList extends Component {

    state = {
        datas: [{}],
        page: 0,
        currentPoke: {},
        isloading: false
    }
    getPokeData = async () => {

        const { page } = this.state;
        this.setState({isloading:true});
        var Poke = new PokedexLocal();
        await Poke.getPokeData(20, page < 0 ? 1118 + page*20 : Math.max(1, page * 20))
            .then((res) => {

                this.setState({ datas: [...res], isloading:false });
            })
            .catch(function (error) {
                console.log('There was an ERROR: ', error);
            });


    }

    changePage = (offset) => {
        
        this.setState({isloading:true , page: this.state.page + offset}, () => {
            this.getPokeData();
            
        });
    }

    componentDidMount = () => {
        this.getPokeData();
    }

    renderItem = ({ item, index }) => {
        // console.log((item.alltypes));
        return (
            <PokemonItem onSelected={item => { this.setState({ currentPoke: item }) }} data={item}></PokemonItem>
        )
    }
    getBackgroundColor = (type) => {
        var color = typecolors.find(a => a.name === type);
        if (typeof (color) !== 'undefined') {
            //console.log(color);
            return color.color;
        }
    }



    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.getBackgroundColor(this.state.currentPoke.types) }]}>
                <SearchBar></SearchBar>
                <View style={[styles.container, { flex: 1.5, zIndex: 1000 }]}>
                    <PokemonDetail data={this.state.currentPoke}></PokemonDetail>
                </View>
                <View style={styles.flatList}>
                    <View style={{ width: '100%', height: 30, flex: 0.05, flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => { this.changePage(-1) }}
                            style={[styles.button, { backgroundColor: this.getBackgroundColor(this.state.currentPoke.types) }]}>
                            <Text >Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.changePage(1) }}
                            style={[styles.button, { backgroundColor: this.getBackgroundColor(this.state.currentPoke.types) }]}>
                            <Text >Next</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        refreshing={this.state.isloading}
                        onRefresh={()=>{}}
                        style={{ marginTop: 20, flex: 2 }}
                        data={this.state.datas}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.name}
                        numColumns={2}

                    ></FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    flatList: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10


    },
    itemcontainer: {

    },
    button: {
        width: 100,
        height: 25,
        marginVertical: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
