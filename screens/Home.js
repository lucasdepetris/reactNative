// Home.js

import React, { Component } from 'react';
import { Alert,View, Text , Button, TouchableOpacity,TouchableWithoutFeedback, TextInput, StyleSheet,Keyboard} from 'react-native';

export class Home extends Component {
  state = {
    string:''
  }

  _onPressButton = () => {
    Alert.alert(this.state.string)
  }

  _dismissKeyboard = () =>{
    Keyboard.dismiss()
  }

  render() {
    return (
      <View>
        <Text style={{width:'80%',alignSelf:'center',marginTop:20}}>This is the home screen</Text>
        
        <TextInput
          style={{height: 40,width:'80%', marginTop:20, borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
          placeholder='Ingrese un producto..'
          onChangeText={(text) => this.setState({string:text})}
          onSubmitEditing={this._dismissKeyboard}
        />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buscar</Text>
          </View>
        </TouchableOpacity>
        <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"/>

      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    width: '80%',
    marginTop:20,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    alignSelf:'center'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})