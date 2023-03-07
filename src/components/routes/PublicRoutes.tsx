import History from "../../pages/History";
import MapChart from "../Map/Map";
import { DataRoute } from "./typeRoute";

const VIEW_HISTORY : DataRoute= {
    path: '/history',
    element: <History/>
}

const VIEW_HOME : DataRoute= {
    path: '/',
    element: <MapChart/>
}



const VIEWS_PUBLIC = [VIEW_HISTORY,VIEW_HOME];

export default VIEWS_PUBLIC;