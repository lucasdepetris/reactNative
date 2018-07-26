import React, { Component } from 'react';
import { View, Image,Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
 
export default class GooglePlacesInput extends Component {

constructor(props) {
        super(props);
      }

render(){  
        return (
            <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                //console.log(data);
                console.log(details.geometry.location);
                this.props.onResults(details.geometry.location)
            }}
            getDefaultValue={() => {
                return ''; // text input default value
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyCt8ZWpFeRniRAWxm_zb2XWCaNYcpiGri0',
                language: 'en', // language of the results
                types: 'geocode' // default: 'geocode'
            }}
            styles={{
                description: {
                fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                color: '#1faadb'
                }
            }}

            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
            }}
        
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        
            />
        );
    }
}