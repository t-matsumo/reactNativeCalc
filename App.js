import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Views/CustomButton';
import CalcPlesenter from './Plesenters/CalcPlesenter';

export default class App extends Component {
  state = {
    result: "0",
    operand: "",
    operator: "",
  };

  calcPlesenter = new CalcPlesenter(this);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.numerRow}>
              <CustomButton title="7" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} color="#aff" />
              <CustomButton title="8" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="9" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
            </View>

            <View style={styles.numerRow}>
              <CustomButton title="4" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="5" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="6" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
            </View>

            <View style={styles.numerRow}>
              <CustomButton title="1" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="2" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="3" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
            </View>

            <View style={styles.numerRow}>
              <CustomButton title="." onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="0" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
              <CustomButton title="=" onPress={this.calcPlesenter.onPressButton} style={styles.numerButton} />
            </View>
          </View>

          <View style={styles.rightContainer}>
            <CustomButton title="DEL" onPress={this.calcPlesenter.onPressButton} style={styles.operatorButton} />
            <CustomButton title="÷" onPress={this.calcPlesenter.onPressButton} style={styles.operatorButton} />
            <CustomButton title="×" onPress={this.calcPlesenter.onPressButton} style={styles.operatorButton} />
            <CustomButton title="-" onPress={this.calcPlesenter.onPressButton} style={styles.operatorButton} />
            <CustomButton title="+" onPress={this.calcPlesenter.onPressButton} style={styles.operatorButton} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  result: {
    fontSize: 50,
  },

  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 3,
  },

  numerRow: {
    flex: 1,
    flexDirection: 'row',
  },

  numerButton: {
    flex: 1,
    backgroundColor: '#808080',
  },

  rightContainer: {
    flex: 1,
  },

  operatorButton: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
});
