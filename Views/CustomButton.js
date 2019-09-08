
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CustomButton extends Component {
    render() {
        return (
        <TouchableOpacity style={{...(this.props.style), ...{justifyContent:'center',alignItems:'center'}}} onPress={() => {this.props.onPress(this.props.title)}}>
            <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color:"#fff",
    },
});
