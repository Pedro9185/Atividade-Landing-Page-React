import  React  from "react";
import { Route } from "react-router";
import { BrowserRouter, Routes} from "react-router-dom";
import Home from "../Pages/Home";

const AppRoutes: React.FC = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>    
        </BrowserRouter>
    )

}

export default AppRoutes