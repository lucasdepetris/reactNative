import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { Alert, AppRegistry, Button ,TouchableOpacity,ScrollView } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        
        
          <View style={styles.contTextos}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.loginScreenButton}
              onPress={this._onPressButton}
              title="Press Me"
            />
            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity idoolo lucas capo genio idolo idolo idolo idolo</Text>
              </View>
          </TouchableOpacity>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
  },
  contTextos:{
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer: {
    width:'100%',
    backgroundColor:'#eee',
    alignItems:'center'
   },
  button: {
    width:'100%',
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
