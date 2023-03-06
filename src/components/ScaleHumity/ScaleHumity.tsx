import { useState } from "react";

export default function ScaleHumity(){
    const [startColor, setStartColor] = useState('#ff0000');
    const [endColor, setEndColor] = useState('#0000ff');

    const gradientStyle = {
        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        height : "15px"
    };

    return(
        <div style={gradientStyle}></div>
    )
}