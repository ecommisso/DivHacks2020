import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 40.7128,
            lng: -74.0060
          }
        }
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBynjeArv3iiomY79XT5D7m9fdvd9Q23Cg'
})(MapContainer);




/*
chuqi's code that works by itself. trying to work to embed into backend


function initMap(){
  // map options
  var options = {
      zoom: 10,
      center: {lat: 40.7128, lng: -74.0060}
  }

  // new map
  var map = new google.maps.Map(document.getElementById('map'), options);
  
  // array of markers
  var markers = [
      {
          coordinates:{lat: 40.8105, lng: -73.9621},
          content:'<h1>Morningside Heights</h1>'
      },
      {
          coordinates:{lat: 40.7081, lng: -73.9571},
          content:'<h1>Williamsburg</h1>'
      }
  ];

  // loop thru markers
  for(var i = 0; i < markers.length; i++){
      addMarker(markers[i]);
  }

  // add marker function
  function addMarker(props){
      var marker = new google.maps.Marker({
          position:props.coordinates,
          map:map,

      });

      // check content
      if (props.content){
          var infoWindow = new google.maps.InfoWindow({
          content:props.content
          });

          marker.addListener('click', function(){
          infoWindow.open(map, marker);
          });
      }
  }
}
*/




/*
import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">(this.state.apiResponse)</p>
      </div>
    );
  }
}


export default App;
*/