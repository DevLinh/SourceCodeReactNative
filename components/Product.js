import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  increase() {
      this.setState({
          quantity: this.state.quantity + 1
      })
  }

  decrease() {
    if (this.state.quantity > 0) {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text>Số lượng: {this.state.quantity}</Text>
        <TouchableOpacity onPress={() => this.increase()}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.decrease()}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderStyle: 'solid',
    borderWidth: 2
  },
  name: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },
  button: {
    padding: 5,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: 'green',
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center"
  }
})
