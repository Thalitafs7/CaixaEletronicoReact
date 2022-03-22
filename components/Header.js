import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.text}>Lista de Tarefas</Text>

          <TouchableOpacity onPress={() => this.props.onAdd()}>
            <Text style={styles.symbol}>+</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'steelblue',
      alignItems: 'center',
      height: 40
    },
    text:{
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    symbol:{
        fontSize: 30,
        color: 'white',
        paddingHorizontal: 15
    }
  });
  