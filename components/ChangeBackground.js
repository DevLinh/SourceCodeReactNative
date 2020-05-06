import React, { Component } from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';


const listBackground = [
    {
        image: require('../assets/img/back1.jpg')
    },
    {
        image: require('../assets/img/back2.jpg')
    },
    {
        image: require('../assets/img/back3.jpg')
    }
]


export default class ChangeBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pointer: 0
        }
    }

    changeBackground() {
        let pointer = this.state.pointer;
        pointer = pointer + 1;
        if (pointer == listBackground.length) {
            pointer = 0;
        }

        this.setState({
            pointer: pointer
        })
    }


    render() {
        return(
            <ImageBackground source={listBackground[this.state.pointer].image}  style={styles.background}>
                <TouchableOpacity onPress = {() => this.changeBackground()}>
                    <Text style={styles.button}>Click Me</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    button: {
        backgroundColor: 'red',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})