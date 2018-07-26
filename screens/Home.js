// Home.js

import React, { Component } from 'react';
import { Alert,ScrollView,View, Text , Button, TouchableOpacity,
        TouchableWithoutFeedback, TextInput, StyleSheet,
        Keyboard,FlatList,ActivityIndicator,Image} from 'react-native';
import axios from 'axios';
import GooglePlacesInput from '../components/GooglePlacesInput'

var reqCancelRequest = axios.CancelToken.source();

export class Home extends Component {
  state = {
    string:'',
    loading:false,
    productos:[],
    location:{}
  }

  componentDidMount(){
    console.log('1. componentDidMount')
    reqCancelRequest = axios.CancelToken.source();
  }

  _handleUbicacion = (location) => {
    this.setState({location:location})
  }

  _onPressButton = () => {
    if(this.state.string != '' && this.state.location.lat){
      this.setState({loading:true})
      this._getProductosByString(this.state.string)
    }else{
      console.log('Debes completar los campos')
    }
  }

  _dismissKeyboard = () =>{
    Keyboard.dismiss()
  }

  _getProductosByString = (producto) => {
    
    axios.get(`https://d735s5r2zljbo.cloudfront.net/prod/productos?string=${producto}&lat=${this.state.location.lat}&lng=${this.state.location.lng}&limit=20`, {
      cancelToken: reqCancelRequest.token
    })
    .then(response => {
      console.log(response.data)
      console.log(response.data.productos)
      this.setState({loading:false,productos:response.data.productos})
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
        this.setState({loading:false})
      } else {
        // handle error
        console.log(thrown)
        this.setState({loading:false})
      }
      
    }); 
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')

    reqCancelRequest.cancel('Operation canceled by the user.');
    reqCancelRequest = null
  }

  render() {
    
    if(this.state.loading){
      return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
      <ScrollView keyboardShouldPersistTaps='handled'>
        
        <Text style={{width:'80%',height:40,alignSelf:'center',marginTop:20}}>This is the home screen</Text>
        <GooglePlacesInput onResults={this._handleUbicacion} />
        <TextInput
          style={{width:'80%',height:40, marginTop:20, padding:10,borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
          placeholder='Ingrese un producto..'
          onChangeText={(text) => this.setState({string:text})}
          onEndEditing={this._dismissKeyboard}
        />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Buscar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.containerList}>
          <FlatList
            data={this.state.productos}
            renderItem={({item}) =>
                         <View style={{flex: 1, flexDirection: 'row',marginBottom:10}}>
                          <Image style={{width:'30%',alignSelf: 'center', height: 75,resizeMode:Image.resizeMode.contain}} 
                                 source={{uri:"https://imagenes.preciosclaros.gob.ar/productos/"+item.id+".jpg"}}
                                
                                />
                          <View style={{width:'70%'}}>
                            <Text>{item.nombre}</Text>      
                            <Text>{item.marca}</Text>
                            <Text>{item.id}</Text>
                          </View>
                        </View>
                        }
            keyExtractor={(item) => item.id}
          />
        </View>
        <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"/>
        
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
    height:'auto',
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
})