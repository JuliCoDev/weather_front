import { CityMarkerType } from "./typesMap";
import {
    Marker
  } from "react-simple-maps";


const CityMarker: React.FC<{ city: CityMarkerType }> = ({ city }) => {
    const {name, coordinates,markerOffset} = city;

    return(
        <Marker 
            key={name} 
            coordinates={coordinates}
            cursor="pointer"
        >
            <circle 
            r={10} 
            fill="#F00" 
            stroke="#fff" 
            strokeWidth={2} 
            />
            <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
            {name}
            </text>
        </Marker>
    )
    
}

export default CityMarker