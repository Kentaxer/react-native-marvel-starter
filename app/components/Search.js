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

export default class Search extends Component {

    componentDidMount(){
    }

    onSearchTextChanged = (inputText)=>{
        console.log(inputText);
        this.props.setSearchText(inputText);
    }

    onSearchButtonPress = () =>{
        console.log(this.props.searchText);
        this.props.getCharacters(this.props.searchText);
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Marvel Characters</Text>
                <TextInput onChangeText={this.onSearchTextChanged} style={styles.textInput} placeholder="Search" value={this.props.searchText}></TextInput>
                <Button onPress={this.onSearchButtonPress} title="SEARCH HERO"/>
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