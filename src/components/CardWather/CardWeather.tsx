import { WeatherResponseFromApi } from "../../services/typesSrvices"
import moment from 'moment';

type PropsCardWeather = {
    title : string,
    info : WeatherResponseFromApi,    
}

function CardWeather(props : PropsCardWeather){
    const {temp, temp_min, temp_max, humidity} = props.info;
    const date = moment(props.info?.created_at, 'YYYY-MM-DD').toDate();
    return(
        <div>
            <div className="flex items-center m-auto">
            {props.title &&
                <h2>{props.title}</h2>
            }
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            <span className="text-lg font-medium">Humedad: {humidity} %</span>
            </div>
            
            <table className="w-full table-fixed">
            <tbody className="bg-gray-100">
                <tr className="border-b border-gray-200">
                    <td className="w-1/2 p-4 font-bold">Temperatura</td>
                    <td className="w-1/2 p-4">{temp}°C</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="w-1/2 p-4 font-bold">Mínima</td>
                    <td className="w-1/2 p-4">{temp_min}°C</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="w-1/2 p-4 font-bold">Máxima</td>
                    <td className="w-1/2 p-4">{temp_max}°C</td>
                </tr>
                {props.info?.created_at &&
                    <tr className="border-b border-gray-200">
                        <td className="w-1/2 p-4 font-bold">Fecha</td>
                        <td className="w-1/2 p-4">{date.toLocaleDateString()}</td>
                    </tr>
                }

            </tbody>
            </table>
        </div>
    )
}

export default CardWeather