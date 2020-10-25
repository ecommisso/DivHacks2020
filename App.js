import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

var list = [
  ['Hope For The Future Ministries',40.72775,-73.980396,'closed','closed','06:00 PM - 09:00 PM','closed','closed','02:00 PM - 07:00 PM','closed'],
  ['Upper Manhattan Mental H.C. Inc.',40.825529,-73.947162,'09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 03:00PM','closed','closed'],
  ['The Salvation Army Manhattan Citadel',40.804523,-73.937418,'9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','closed','closed'],
  ['Act of Faith Ministries',40.707645,-73.94509,'closed','closed','closed','12:00 PM - 01:00 PM','closed','closed','closed'],
  ['Department of Probation Manhattan Office',40.809538,-73.945385,'09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','closed','closed']
  ]
  
const listItems2 = list.map((point, i) =>
<Marker key={i} name = {point[0]}
position = {{lat: point[1], lng: point[2]}}/>,
 );

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

render() {
  return (
    <CurrentLocation
      centerAroundCurrentLocation
      google={this.props.google}
    >
      {listItems2}
      <Marker onClick={this.onMarkerClick} name={'current location'} icon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </CurrentLocation>
  );
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBynjeArv3iiomY79XT5D7m9fdvd9Q23Cg'
})(MapContainer);





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