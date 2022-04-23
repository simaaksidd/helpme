import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class App extends Component {
  render() {
    const coords = { lat: 29.7752, lng: -95.3103 };
    return (
      <div className="App">
        <header className="App-header">
          < img src={logo} className="App-logo" alt="logo" />
          <h1 ClassName="App-title">Help Me!</h1>  
      </header>
      <Map google={this.props.google} zoom={10} initialCenter={coords}>
      <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      
      </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyCY0Z6N0L7GGmgnp0CiFVdxeVmmPvykEhg")
})(App)