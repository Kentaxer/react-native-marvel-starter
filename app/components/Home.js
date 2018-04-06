import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image,
    TextInput,
} from 'react-native';

export default class Home extends Component {

    componentDidMount(){
        console.log("HOME MOUNT");
        console.log(this.props.searchText);       
        this.props.getCharacters(this.props.searchText);
    }

    render() {
        let characters = ""
        if(this.props.characters){
            characters = this.props.characters.map((item, index)=>{
                //console.log(item);
                return (
                    <View style={styles.movieItem}>
                        <Text 
                        key={"TEXT"+index}
                        style={{ width: 150, height: 30 }}>{item.name}</Text>
                        <Image
                            key={"IMAGE"+index}
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
                    <View style={styles.movieContainer_1}>
                        <View style={styles.movieContainer}>
                            {characters}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },

    movieItem:{
        margin:10,
    },

    movieContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: 'center',
    },

    movieContainer_1:{
        justifyContent: 'center',
    },

    textInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        textAlign: "center",
        borderRadius: 5,
      },

    header:{
        fontWeight: "bold",
        marginBottom:20,
    }
})