import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

var list = [
  ['Hope For The Future Ministries',40.72775,-73.980396,'closed','closed','06:00 PM - 09:00 PM','closed','closed','02:00 PM - 07:00 PM','closed'],
  ['Upper Manhattan Mental H.C. Inc.',40.825529,-73.947162,'09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 07:00PM','09:00AM - 03:00PM','closed','closed'],
  ['The Salvation Army Manhattan Citadel',40.804523,-73.937418,'9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','9:00 AM - 02:00 PM','closed','closed'],
  ['The Salvation Army Manhattan Citadel',40.804523,-73.937418,'10:00 AM - 01:00 PM','10:00 AM - 01:00 PM','10:00 AM - 01:00 PM','10:00 AM - 01:00 PM','10:00 AM - 01:00 PM','closed','closed'],
  ['Act of Faith Ministries',40.707645,-73.94509,'closed','closed','closed','12:00 PM - 01:00 PM','closed','closed','closed'],
  ['Department of Probation Manhattan Office',40.809538,-73.945385,'09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','closed','closed'],
  ['More Grace Redemptive Center Inc',40.819606,-73.903033,'09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','09:00 AM - 05:00 PM','closed','closed'],
  ['Faith Apostolic Gospel Temple',40.885463,-73.854777,'closed','closed','closed','closed','09:00 AM - 05:00 PM','10:00 AM - 12:00 PM/ro-7/1-9am-2pm','closed'],
  ['St. Lukes Senior Community Program',40.885013,-73.858979,'closed','closed','09:00 AM - 05:00 PM','09:00 AM - 11:00 AM','closed','closed','closed'],
  ['Grace Reformed Church of Flatbush',40.661714,-73.9572,'closed','closed','closed','closed','closed','11:00 AM - 01:00 PM','closed']
]
  
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

  listItems2 = list.map((point, i) =>
  <Marker onClick={this.onMarkerClick} key={i} name={point[0]}
  position={{lat: point[1], lng: point[2]}} />
   );

  onMarkerClick = (props, marker, e) => {
    console.log(marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

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
    <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={12}>
        <Marker
          name="Hope For The Future Ministries"
          onClick={this.onMarkerClick}
          position={{ lat: 40.72775, lng: -73.980396 }}
        />

        <Marker
          name="Upper Manhattan Mental H.C. Inc."
          onClick={this.onMarkerClick}
          position={{ lat: 40.825529, lng: -73.947162 }}
        />

        <Marker
          name="The Salvation Army Manhattan Citadel"
          onClick={this.onMarkerClick}
          position={{ lat: 40.804523, lng: -73.937418 }}
        />

         <Marker
          name="Act of Faith Ministries"
          onClick={this.onMarkerClick}
          position={{ lat: 40.707645, lng: -73.94509 }}
        />

        <Marker
          name="Department of Probation Manhattan Office"
          onClick={this.onMarkerClick}
          position={{ lat: 40.8095385, lng: -73.945385 }}
        />

        <Marker
          name="More Grace Redemptive Center Inc"
          onClick={this.onMarkerClick}
          position={{ lat: 40.819606, lng: -73.903033 }}
        />

        <Marker
          name="Faith Apostolic Gospel Temple"
          onClick={this.onMarkerClick}
          position={{ lat: 40.885463, lng: -73.854777 }}
        />    

        <Marker
          name="St. Lukes Senior Community Program"
          onClick={this.onMarkerClick}
          position={{ lat: 40.885013, lng: -73.858979 }}
        />    

        <Marker
          name="Grace Reformed Church of Flatbus"
          onClick={this.onMarkerClick}
          position={{ lat: 40.661714, lng: -73.9572 }}
        />    

        <Marker onClick={this.onMarkerClick} name={'current location'} position = {{lat : 40.85, lng: -73.9}} icon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    /*<CurrentLocation
      centerAroundCurrentLocation
      google={this.props.google}
    >
      <Marker onClick={this.onMarkerClick} name={'current location'} icon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"/>
      {this.listItems2}
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
    */
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