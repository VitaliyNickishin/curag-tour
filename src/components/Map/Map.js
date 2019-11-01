import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {MdLocationOn} from 'react-icons/md'
import './Map.sass'

const CurrentPlace = ({ text }) => 
 <div style={{ color: 'red', width: '30px' }}>
  <MdLocationOn style={{ color: 'red', fontSize: '20px' }}/>
  {text}
 </div>;


export default class Map extends Component {
 static defaultProps = {
  center: {
    lat: 50.0057971,
    lng: 36.2492591
  },
  zoom: 15
};
 render() {
  return (
   <div style={{ height: '420px', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key:  /* YOUR KEY HERE */}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CurrentPlace
            lat={50.006}
            lng={36.25}
            text="Кураж тур"
          />
        </GoogleMapReact>
      </div>
  )
 }
}
