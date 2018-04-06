import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image,
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        this.props.getCharacters();
    }

    render() {
        let characters = ""
        if(this.props.characters){
            characters = this.props.characters.map((item, index)=>{
                console.log(item);
                return (
                    <View style={styles.movieItem}>
                        <Text 
                        key={index}
                        style={{ width: 150, height: 30 }}>{item.name}</Text>
                        <Image
                            style={{ width: 150, height: 150 }}
                            source={{ uri: item.thumbnail.path + "." + item.thumbnail.extension }} />
                    </View>
                    )
            });
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>
                <ScrollView>
                    <View style={styles.movieContainer}>
                        {characters}
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    movieItem:{
        margin:10,
    },

    movieContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
    },

    header:{
        fontWeight: "bold",
        marginBottom:20,
    }
})