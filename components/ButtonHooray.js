import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

export default class ButtonHooray extends Component {

    _hooray() {
        alert('Hoorayyyyyy!');
    }

    render() {
        return (
            <TouchableOpacity onPress={this._hooray}>
                <Text style={styles.horrayButton}>WOW WOW!!!!</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    horrayButton: {
        margin: 20,
        backgroundColor: 'red',
        color: 'white',
        fontWeight: "bold",
        padding: 20,
        borderRadius: 20
    }
})