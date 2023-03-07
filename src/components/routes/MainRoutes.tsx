import {Route, BrowserRouter, Routes } from "react-router-dom";
import ALL_VIEWS from "./PublicRoutes";

export default function MainRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                {ALL_VIEWS.map(item => {
                    const {path , element } = item;
                    return(
                        <Route key={path} path={path} element={element} />
                    )   
                })
                }
            </Routes>
        </BrowserRouter>
    )
}