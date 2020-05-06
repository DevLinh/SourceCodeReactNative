import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'
import ButtonHooray from './ButtonHooray'
const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);  

class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Hello World!</Text>
                <Image style={styles.imageStyle} source={require('../assets/img/smile.jpg')}/>
                <ButtonHooray />
            </View>
        );
    }
}
export default HelloWorld;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    },
    imageStyle: {
        width: screenWidth/2,
        height: screenHeight/2,
        borderRadius: 20
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    }
})

