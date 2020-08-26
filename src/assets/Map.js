import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends Component {

    render() {
        const position = [this.props.match.params.lat, this.props.match.params.lng]
        return (
            <Map center={position} zoom={this.props.match.params.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        This is your Field :)
                    </Popup>
                </Marker>
            </Map>
        )
    }
}