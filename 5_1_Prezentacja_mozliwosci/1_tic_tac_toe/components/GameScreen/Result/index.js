import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { USER_FIGURE, AI_FIGURE, DRAW } from '../Game/constants';

export default class Result extends Component {
  _getResultMessage() {
    const { result } = this.props;

    switch (result) {
      case USER_FIGURE:
        return 'Wygrałeś :)))))))';
      case AI_FIGURE:
        return 'Komputer wygrał :(';
      case DRAW:
        return 'Remis – który to już raz?';
    }
  }
  render() {
    const { onRestartGameBtnClick } = this.props;

    return (
      <View>
        <Text style={styles.result}>{this._getResultMessage()}</Text>
        <TouchableOpacity onPress={onRestartGameBtnClick}>
          <Text style={styles.instructions}>Zagraj jeszcze raz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    fontSize: 24,
    margin: 18,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});
