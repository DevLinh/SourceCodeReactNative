import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'

import Product from './/Product'

export default class TestScrollView extends Component {

    render() {
        return(
            <ScrollView>
                <View style={{flex: 1}}>
                    <Product name="Chuối"/>
                    <Product name="Cam"/>
                    <Product name="Lê"/>
                    <Product name="Dưa hấu"/>
                </View>
            </ScrollView>
        )
    }
}