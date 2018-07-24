// Home.js

import React, { Component } from 'react';
import { Alert,ScrollView,View, Text , Button, TouchableOpacity,TouchableWithoutFeedback, TextInput, StyleSheet,Keyboard,FlatList} from 'react-native';

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
      <ScrollView style={{flexGrow:1,backgroundColor:'#FE2E2E'}}>
        <View style={{flex:1}}>
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
        <View style={styles.containerList}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"/>
        </View>
      </ScrollView>
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
  },
  containerList: {
    alignSelf:'center',
    width:'80%',
    height:'100%',
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
})