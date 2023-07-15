import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props: any) => {
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        setMapReady(true);
    }, []);

    const mapStyles = {
        width: '40%',
        height: '400px'
    };

    return (
        <div>
            {mapReady && (
                <Map
                    google={props.google}
                    //   zoom={12}
                    initialCenter={{ lat: props.latitude, lng: props.longitude }}
                    style={mapStyles}
                />
            )}
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD50JfVJYXccIItX3JfzJFAoegdFtxN58I',
    libraries: ['places']
})(MapContainer);

