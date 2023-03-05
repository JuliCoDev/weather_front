import { CityMarkerType } from "./typesMap";
import {
    Marker
  } from "react-simple-maps";


interface PropsCityMarker {
    city: CityMarkerType 
    selectCity : (name: string) => void
    openModal : (value: boolean) => void

}

const CityMarker = (props :PropsCityMarker ) => {
    const {city, selectCity, openModal} = props;
    const {name, coordinates,markerOffset} = city;

    const handleClick = () => {
        selectCity("miami");
        openModal(true)
    }
    return(
        <Marker 
            key={name} 
            coordinates={coordinates}
            cursor="pointer"
            onClick={() => {handleClick()}}
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