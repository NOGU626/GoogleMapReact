import React from 'react';
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const containerStyle = {
    height: "100vh",
    width: "100%",
};

const center = {
    lat: 35.69575,
    lng: 139.77521,
};

const mainStyles = [
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
            {visibility: 'off'},
        ],
    },
    {
        featureType: 'administrative',
        elementType: 'all',
        stylers: [
            {visibility: 'inherit'},
        ],
    },
];

const TopPage = () => {
    return (
        <div>
            <h1>test</h1>
            <LoadScript googleMapsApiKey="AIzaSyB71bB8X2mPrn8-OSv0PBbLMJeQgnwP87k">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                    options={{
                        styles: mainStyles,
                    }}
                ></GoogleMap>
            </LoadScript>
        </div>
    );
}

export default TopPage;
